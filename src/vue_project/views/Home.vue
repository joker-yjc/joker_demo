<template>
  <div>
    <button @click="showMessage">show message</button>
    <YjcInput
      v-model="value"
      @change="handleChange"
      placeholder="请输入placeholder"
    />
    <img
      :src="require('@/images/joker.jpg')"
      style="height: 100px;"
      alt
      srcset
    />
    webpack-zip/home
  </div>
</template>
<script>
import YjcInput from '../components/YjcInput'
import { message } from '../components/message.js'

export default {
  data() {
    return {
      value: '',
    }
  },
  components: {
    YjcInput,
  },
  methods: {
    showMessage() {
      console.log(this.$el)
      message.error('123')
    },
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>
