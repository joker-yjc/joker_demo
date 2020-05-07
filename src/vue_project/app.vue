<!--
 * @Description: 
 * @Author: Yao
 * @Date: 2020-04-10 17:27:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 17:17:47
 -->
<template>
  <div style="text-align: center;">
    <YjcInput v-model="value" />
    <img src="@/images/joker.jpg" style="height: 100px;" alt="" srcset="" />
  </div>
</template>
<script>
import YjcInput from './components/YjcInput'
import '@/ajax/requst.js'
export default {
  data() {
    return {
      value: '12',
    }
  },
  watch: {
    value() {
      console.log(this.value)
    },
  },
  components: {
    YjcInput,
  },
  methods: {
    handleInput(value) {
      console.log(value)
    },
  },
}
</script>
<style lang="scss">
body {
  color: red;
}
</style>
