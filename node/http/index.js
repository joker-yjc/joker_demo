/*
 * @Date: 2020-05-23 10:27:18
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-23 10:38:43
 * @Desciption:
 */
const http = require('http')

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      contentType: 'text/plain',
    })
    res.end('hello world!')
  })
  .listen(3000, function () {
    console.log('server running at http://localhost:3000')
  })
