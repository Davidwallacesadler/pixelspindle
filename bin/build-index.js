import fs from 'fs'
import path from 'path'

const IN_DIR = path.resolve(__dirname, '../src')
const OUT_FILE = path.resolve(__dirname, '../dist/index.js')

console.log(`Building ${OUT_FILE}...`)

const indexFile = fs.readdirSync(IN_DIR).find(file => file === `index.js`)
console.log(indexFile)
const text = fs.readFileSync(path.join(IN_DIR, indexFile))
fs.writeFileSync(OUT_FILE, text)
