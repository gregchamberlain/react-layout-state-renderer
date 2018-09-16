import commonjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

export default [
  {
    input: 'lib/index.js',
    output: {
      file: 'lib/react-layout-state-renderer.umd.js',
      format: 'umd',
      name: 'react-layout-state-renderer',
      sourcemap: true,
      exports: 'named',
    },
  },
];
