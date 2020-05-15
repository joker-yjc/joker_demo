/*
 * @Date: 2020-05-15 10:50:59
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-15 11:11:10
 * @FilePath: /webpack-zip/src/vue_project/mixs/socket.js
 */ 
export default {
  data() {
    return {
      ws: null,
      msgList: [],
    }
  },
  methods: {
    startSocket() {
      if ('WebSocket' in window) {
        // 打开一个 web socket
        this.ws = new WebSocket(this.socketUrl)
        this.ws.onopen = function () {
          console.log('连接成功') 
        }
        this.ws.onmessage = (evt) => {
          var received_msg = evt.data
          console.log('数据已接收...', evt)
          this.msgList.push(received_msg)
        }
        this.ws.onclose = function () {
          // 关闭 websocket
          alert('连接已关闭...')
        }
        this.ws.onerror = (evt) => {
          console.error('连接出错', evt)
          this.ws.close()
        }
      } else {
        // 浏览器不支持 WebSocket
        alert('您的浏览器不支持 WebSocket!')
      }
    },
    sendMessage(msg = this.msg) {
      if (this.msg) {
        this.ws && this.ws.send(msg)
      }
    },
  },
}