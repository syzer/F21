const http = require('http')
const Koa = require('koa')
const app = new Koa()
const server = http.createServer(app.callback())
const io = require('socket.io')(server)
io.on('connection', () => {
  /* … */
  console.log('client connected')
})
server.listen(4000)
