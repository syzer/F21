const http = require('http')
const Koa = require('koa')
const app = new Koa()
const server = http.createServer(app.callback())
const io = require('socket.io')(server)
const axios = require('axios')
const { tap } = require('ramda')

const waitTimeForDemo = 3
const discountsServerUrl = 'http://127.0.0.1:5000/products?limit=3'

const delay = seconds => data =>
  new Promise(resolve => setTimeout(() => resolve(data), seconds * 1000))

const users = {}

io.on('connection', socket => {
  console.log('client connected', socket.id)

  socket.on('getPersonalizedDiscounts', userData => {
    console.log('userData', userData)
    // TODO do not trust user auth data
    users[userData.uuid] = { coordinates: userData.coordinates }

    return axios
      .get(discountsServerUrl + '&id=' + userData.uuid || socket.id) // ask for personalized discounts for this user id
      .then(({ data }) => data)
      .then(delay(waitTimeForDemo)) // wait for some time.. because people need to explain what is happening on demo
      .then(tap(e => socket.emit('personalizedDiscounts', e)))
      .then(console.warn)
  })
})
server.listen(4000)
