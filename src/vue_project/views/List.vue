<template>
  <div>
    <input type="text" v-model="msg"/>
    <button @click="(e) => sendMessage()">发送信息</button>
    <hr>
    <iframe id="sendBox" src="http://localhost:3000/photos" style="width:100%;height:400px"></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '',
      msgList: [],
    }
  },
  methods: {
    sendMessage(str = this.msg) {
     let box= document.querySelector('#sendBox')
      if (str) {
        console.log(str,box)
        box.contentWindow.postMessage(str,'http://localhost:3000')
      }
    },
  },
}
</script>
