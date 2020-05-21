<template>
  <div>
    <!-- <socket-message @message="handleMessage" ref="socket" /> -->
    <br />
    <hr />
    <richTextEditor v-model="msg" />
    <button @click="(e) => sendMessage()">发送信息</button>
    <div>
      <ul>
        <li v-for="(item, index) in msgList" :key="index" v-html="item"></li>
      </ul>
    </div>
  </div>
</template>
<script>
// import socketMessage from '../components/SocketMessage.vue'
import richTextEditor from '../components/RichTextEditor.vue'
export default {
  data() {
    return {
      msg: '',
      msgList: [],
    }
  },
  components: { richTextEditor },
  methods: {
    handleMessage(str) {
      this.msgList.push(str)
    },
    sendMessage(str = this.msg) {
      if (str) {
        console.log(str)
        // this.$refs.socket&&this.$refs.socket.sendMessage(str)
        // this.msg=''
      }
    },
  },
}
</script>
