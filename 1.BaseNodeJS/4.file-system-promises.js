const fs = require('node:fs/promises')

// nos ahorramos de usar callbacks y podemos tratar
// esta asincronía como promesa
console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log(text)
  })

console.log('========= Hacer cosas mientras lee el archivo =========')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log(text)
  })
