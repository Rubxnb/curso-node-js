// os nos da info de nuestro Sistema Operativo
const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('----------------------------------')

console.log('Nombre:', os.platform())
console.log('Versión:', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPUs:', os.cpus())
console.log('Memoria libre:', os.freemem() / 1024 / 1024)
console.log('Memoria total:', os.totalmem() / 1024 / 1024)
console.log('Tiempo encendido:', os.uptime() / 60 / 60 / 24)
