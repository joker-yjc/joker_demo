<template>
  <div style="text-align: center;height:100%;padding:15px">
    <button @click="showMessage">show message</button>
    <!-- <button @click="handleToggle">toggle</button> -->
    <!-- <YjcInput
      v-model="value"
      @change="handleChange"
      placeholder="请输入placeholder"
    />
    <img src="@/images/joker.jpg" style="height: 100px;" alt="" srcset="" /> -->
    <!-- <Message type="warn">
      消息通知
    </Message> -->
  </div>
</template>
<script>
import YjcInput from './components/YjcInput'
// import Message from './components/Message.vue'
import '@/ajax/requst.js'
import {message} from './components/message.js'
export default {
  data() {
    return {
      value: '',
      
    }
  },
  watch: {},
  components: {
    YjcInput,
    // Message
  },
  methods: {
    showMessage(){
      console.log(this.$el) 
      message.error('123')
    },
    handleToggle(){
      console.log(this.iSrc)
      this.iSrc==="http://0.0.0.0:8086/statistics/index.html"?
      this.iSrc='http://0.0.0.0:8086/statistics/index.html#/commissionWithdrawal':this.iSrc='http://0.0.0.0:8086/statistics/index.html'
    },
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>
<style lang="scss">
html,body {
  height: 100%;
  padding: 0;
  margin:0
}
</style>
