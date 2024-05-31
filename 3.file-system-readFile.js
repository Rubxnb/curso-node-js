const fs = require('node:fs')

//! Esta es la forma síncrona de leer archivos
/*
console.log('Leyendo el primer archivo ...')
//esto te devuelve un buffer de memoria con todos los bytes del archivo, con utf-8, le decimos que nos de el texto
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)
console.log('========= Hacer cosas mientras lee el archivo =========')

console.log('Leyendo el segundo archivo ...')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(text2) */

//! Esta es la forma asíncrona de leer archivos
//? al ser asíncrono, necesita algo para asegurarnos de que una vez lee el archivo, va a ejecutar el código
//? para ello se usan los callbacks, que son funciones que se ejecutan cuando la tarea ha terminado
//? esto tb nos informa si ha habido un error

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { //? <--- este es el callback
  console.log(text)
})

console.log('========= Hacer cosas mientras lee el archivo =========')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text)
})

//! USANDO PROMISIFY podemos pasar de usar callbacks a promesas
//! esto solo se usa en módulos nativos que no tienen promesas nativas
/* console.log()
console.log('========= USANDO PROMISIFY =========')
console.log()
const { promisify } = require('node:util')
const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo ...')
readFilePromise('./archivo.txt', 'utf-8')
  .then(text => {
    console.log(text)
  })
  
console.log('========= Hacer cosas mientras lee el archivo =========')

console.log('Leyendo el segundo archivo ...')
readFilePromise('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log(text)
  }) */