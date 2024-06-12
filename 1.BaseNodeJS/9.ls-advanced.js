const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')

// vamos a psar la carpeta de la que queremos hacer el listado, se encuentra en la pos2, por defecto usamos .
const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files

  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.error(picocolors.red(`❌ No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch (error) {
      console.error(picocolors.red(`❌ No se han podido obtener la información del archivo ${folder}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? '📁' : '📋'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${picocolors.blue(file.padEnd(20))} ${picocolors.green(fileSize.padStart(10))} ${picocolors.yellow(fileModified)}`
  })
  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
