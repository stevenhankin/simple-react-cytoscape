import typescript from '@rollup/plugin-typescript';

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
  ],
};
