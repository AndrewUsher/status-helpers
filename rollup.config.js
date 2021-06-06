import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const isProd = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs'
    },
    {
      dir: 'dist/esm',
      format: 'esm'
    },
    {
      file: 'dist/umd/bundle.umd.js',
      format: 'umd',
      name: 'StatusHelpers'
    }
  ],
  plugins: [babel(), isProd && terser()]
}
