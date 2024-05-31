const http = require('node:http')
const picocolors = require('picocolors')
const { findAvailablePort } = require('./11.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('HOlA MUNDO')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port ${picocolors.blue('http://localhost:')}${picocolors.blue(server.address().port)}`)
  })
})
