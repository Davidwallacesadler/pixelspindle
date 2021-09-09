/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import icons from '../src/icons'

// Note: __dirname = node.js env var
const OUT_DIR = path.resolve(__dirname, '../dist/icons')

console.log(`Building SVGs in ${OUT_DIR}...`)

Object.keys(icons).forEach((name) => {
  const svg = icons[name].toSvg()

  fs.writeFileSync(path.join(OUT_DIR, `${name}.svg`), svg)
})
