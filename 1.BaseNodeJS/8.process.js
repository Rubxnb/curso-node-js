// process tiene información y control del proceso actual de ejecución
// tiene propiedades y métodos que nos permite interactuar con dicho proceso

// argumentos de entrada
// ? console.log(process.argv)

// controlar el proceso y su salida
// ? process.exit(0)
// con 0, todo ok.
// con 0. error

// controlar eventos del proceso
/* process.on('exit', () => {
  // limpiar los recursos
}) */

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)
