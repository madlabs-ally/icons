import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: [
    {
      format: 'es',
      file: 'dist/melospot-icons-svelte.esm.js',
      sourcemap: true
    },
    {
      format: 'cjs',
      file: 'dist/melospot-icons-svelte.cjs.js',
      sourcemap: true
    },
  ],
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production
      }
    }),

    postcss(), // <-- this handles .css imports

    resolve({
      browser: true,
      dedupe: ['svelte'],
      exportConditions: ['svelte'] // <-- recommended for Svelte
    }),

    commonjs(),

    production && terser(),
  ],
};
