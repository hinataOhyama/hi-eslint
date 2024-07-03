import { essentials } from './configs/index.js'

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  ...essentials,
]