# Vendored wgpu 29.0.4 (patched)

This is a copy of crates.io `wgpu = 29.0.4` with ONE fix applied to the
staging belt for the WebGPU (wasm) backend.

Why it exists:
- Symptom: on WebGPU in Chrome, the app panics with
  `Failed to execute 'getMappedRange' on 'GPUBuffer': getMappedRange failed`
  (wgpu-29.0.4/src/backend/webgpu.rs:1291), followed by a winit
  `RefCell already borrowed` panic.
- Root cause: `StagingBelt::recall()` (src/util/belt.rs) re-maps closed
  buffers with `map_async`, and the completion callback sent the chunk back
  to the free list **unconditionally** (`|_| { let _ = sender.send(chunk); }`).
  On the web backend `device.poll(Wait)` does not actually block, so a buffer
  that is still in GPU use can have its re-map rejected; the chunk then
  returns to the pool in the unmapped state and the next `get_mapped_range()`
  dereferences an unmapped GPUBuffer → OperationError → the app panics.
  The winit panic is a secondary cascade from the panic hook re-entering the
  event loop.
- Fix: only send the chunk back when `map_async` succeeds. On failure the
  chunk is dropped; the next `allocate()` creates a fresh
  `mapped_at_creation: true` buffer, which is spec-safe.

How it is wired:
- `[patch.crates-io] wgpu = { path = "vendor/wgpu/29.0.4" }` in the root
  Cargo.toml redirects the workspace (app + iced_wgpu) to this copy.

To regenerate from upstream:
```bash
# drop this dir, copy the exact version from your cargo registry:
cp -r ~/.cargo/registry/src/*/wgpu-29.0.4 vendor/wgpu/29.0.4
# then re-apply the belt.rs fix (see git diff of vendor/wgpu/29.0.4)
```

Do not upgrade wgpu to 30.x without also re-pinning iced: iced (the rev in
Cargo.toml) is built against wgpu 29 and there is no iced rev on wgpu 30 yet.