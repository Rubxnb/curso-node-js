import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')

]).then(([firstText, secondText]) => {
  console.log('Primer texto:', firstText)
  console.log('Segundo texto:', secondText)
})
