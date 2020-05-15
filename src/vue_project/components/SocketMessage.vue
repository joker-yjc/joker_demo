<template>
  <div>
    <!-- websocket中间件 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      ws: null,
      connectNum:0
    }
  },
  props:{
    socketUrl:{
      default:"ws://localhost:3000",
      require:true
    }
  },
  methods: {
    socketInit() {
      if ('WebSocket' in window) {
        // 打开一个 web socket
        this.ws = new WebSocket(this.socketUrl)
        this.ws.onopen = function () {
          this.connectNum=0
          console.log('连接成功') 
        }
        this.ws.onmessage = (evt) => {
          var received_msg = evt.data
          console.log('数据已接收...', evt)
          this.$emit('message',received_msg)
        }
        // 链接出错的时候回自动发起三次重连
        this.ws.onerror = (evt) => {
          console.error('连接出错', evt)
          this.closeSocket()
          this.createConnect()
        }
        this.ws.onclose = ()=> {
          // 关闭了websocket
          console.info('连接已关闭...')
        }
      } else {
        // 浏览器不支持 WebSocket
        alert('您的浏览器不支持 WebSocket!')
      }
    },
    sendMessage(msg) {
      if (msg) {
        console.log(msg)
        this.ws && this.ws.send(msg)
      }
    },
    closeSocket(){
      this.ws&&this.ws.close()
      this.ws=null
    },
    createConnect(){
        this.connectNum++
        if(this.connectNum<=3){
          console.log(`第${this.connectNum}次重连中`)
          this.socketInit()
        }else{
          console.warn('重连超过三次请稍后再试')
        }
    }
  },
  mounted(){
    this.socketInit()
    this.$once('hook:beforeDestroy',()=>{
      this.closeSocket()
    })
  },
  
}
</script>
