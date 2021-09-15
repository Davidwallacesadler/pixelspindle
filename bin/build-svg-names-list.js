import fs from 'fs'
import path from 'path'

const IN_DIR = path.resolve(__dirname, '../icons')
const OUT_FILE = path.resolve(__dirname, '../dist/names.txt')

console.log(`Generating name list of SVGs in ${IN_DIR}...`)
let text = ``
fs.readdirSync(IN_DIR).forEach(file => {
  text += `${file}, `
})

fs.writeFileSync(OUT_FILE, text)
