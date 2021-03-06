import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  plugins: [typescript()],
  external: ['react'],
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
    {
      file: 'dist/index.es.min.js',
      format: 'es',
      plugins: [terser()],
    },
  ],
};
