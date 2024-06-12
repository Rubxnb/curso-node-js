const fs = require('node:fs')

const stats = fs.statSync('archivo.txt')

console.log('¿Es un fichero?', stats.isFile())
console.log('¿Es un directorio?', stats.isDirectory())
console.log('¿Es un enlace simbólico?', stats.isSymbolicLink())
console.log('Tamaño (Bytes):', stats.size)
