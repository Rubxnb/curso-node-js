const { readFile } = require('node:fs/promises')

//? si queremos usar async await en CJS debemos usar *FUNCIONES AUTOINVOCADAS*

// IIFE - Inmediatly Invoked Function Expression
;(
  async () => {
    console.log('Leyendo el primer archivo ...')
    const firstText = await readFile('./archivo.txt', 'utf-8')
    console.log(firstText)
      
    console.log('========= Hacer cosas mientras lee el archivo =========')
    
    console.log('Leyendo el segundo archivo ...')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log(secondText)
  }
)()