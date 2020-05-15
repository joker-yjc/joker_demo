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
import { message } from '../components/Message'

export default {
  data() {
    return {
      value: '',
    }
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
