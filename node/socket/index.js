var ws = require('nodejs-websocket')
var server = ws
  .createServer(function (socket) {
    // 事件名称为text(读取字符串时，就叫做text)，读取客户端传来的字符串
    var count = 0
    setInterval(function(){
      console.log('服务端广播')
      socket.send('服务端广播')
    },60000)
    socket.on('text', function (str) {
      // 在控制台输出前端传来的消息
      console.log(str)
      count++;
      //向前端回复消息
      socket.sendText(`<p>服务器端收到客户端端发来的消息了！${count}</p><p>${str}</p>`)
    })
    socket.on('close', function (code, reason) {
      console.log('Connection closed')
    })
  })
  .listen(3000,function(){
    console.log('socket开启成功')
  })
