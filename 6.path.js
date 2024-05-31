const path = require('node:path')

// sep nos dice que separador de carpetas y archivos usa nuestro sistema operativo
console.log(path.sep)

// unir rutas con path.join. Esto nos crea la ruta en nuestro SO con su respectivo separador
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// nos da el nombre del fichero
const base = path.basename('/desktop/ruben/folder/fichero.txt')
console.log(base)
// sin la extensión
const filename = path.basename('/desktop/ruben/folder/fichero.txt', '.txt')
console.log(filename)

// obtener la extensión
const extension = path.extname('image.jpg')
console.log(extension)

