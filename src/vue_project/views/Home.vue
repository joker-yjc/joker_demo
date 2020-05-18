<template>
  <div>
    <button @click="showMessage">show message</button>
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
