<!--
 * @Description: 
 * @Author: Yao
 * @Date: 2020-04-10 17:27:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 18:05:35
 -->
<template>
  <div style="text-align: center;">
    <YjcInput
      v-model="value"
      @change="handleChange"
      placeholder="请输入placeholder"
    />
    <img src="@/images/joker.jpg" style="height: 100px;" alt="" srcset="" />
  </div>
</template>
<script>
import YjcInput from './components/YjcInput'
import '@/ajax/requst.js'
export default {
  data() {
    return {
      value: '',
    }
  },
  watch: {},
  components: {
    YjcInput,
  },
  methods: {
    handleChange(value) {
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
