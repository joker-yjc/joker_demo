<!--
 * @Description: 
 * @Author: Yao
 * @Date: 2020-04-10 17:27:18
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-11 11:37:17
 -->
<template>
  <div style="text-align: center;height:100%">
    <button @click="handleToggle">toggle</button>
    <!-- <YjcInput
      v-model="value"
      @change="handleChange"
      placeholder="请输入placeholder"
    />
    <img src="@/images/joker.jpg" style="height: 100px;" alt="" srcset="" /> -->
    <iframe :src="iSrc" frameborder="0" style="height:100%;width:100%"></iframe>
  </div>
</template>
<script>
import YjcInput from './components/YjcInput'
import '@/ajax/requst.js'
export default {
  data() {
    return {
      value: '',
      iSrc:"http://0.0.0.0:8086/statistics/index.html"
    }
  },
  watch: {},
  components: {
    YjcInput,
  },
  methods: {
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
