import { defineConfig } from 'tsup';
import { solidPlugin } from 'esbuild-plugin-solid';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    esbuildPlugins: [solidPlugin()],
});
