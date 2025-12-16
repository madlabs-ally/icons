import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: 'dist/index.js',
      sourcemap: true
    },
    {
      format: 'cjs',
      file: 'dist/index.cjs',
      sourcemap: true
    },
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ sourceMap: !production }),
      compilerOptions: {
        dev: !production
      }
    }),

    resolve({
      browser: true,
      dedupe: ['svelte'],
      exportConditions: ['svelte']
    }),
    commonjs(),
    typescript({
      outputToFilesystem: true
    }),

    production && terser(),
  ],
};
