import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/icons/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  splitting: false,
  minify: false,
  external: ['react', 'vue', '@vue/runtime-core']
})