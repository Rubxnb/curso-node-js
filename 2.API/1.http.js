const http = require('node:http')
const picocolors = require('picocolors')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  // el statusCode por defecto es 200
  if (req.url === '/') {
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/contacto') {
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('404 ERROR')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port ${picocolors.blue('http://localhost:')}${picocolors.blue(server.address().port)}`)
})
