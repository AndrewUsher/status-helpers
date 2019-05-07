import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const isProd = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'StatusHelpers'
    }
  ],
  plugins: [babel(), isProd && terser()]
}
