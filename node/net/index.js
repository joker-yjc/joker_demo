/*
 * @Date: 2020-05-23 10:41:30
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-23 10:53:41
 * @Desciption:
 */
const net = require('net')
const server = net.createServer()
server.on('error', (err) => {
  console.error(err)
  throw err
})
server.on('connection', function (client) {
  client.write('Hi!\n')
  client.write('Bye!\n')
  client.end()
  client.on('data', function (data) {
    console.log(data)
  })
})
server.listen(3000, function () {
  console.log('serve is running')
})
