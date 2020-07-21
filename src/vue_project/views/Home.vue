<template>
  <div>
    <button @click="showMessage">show message</button><br>
    <input type='file' ref='filePicker' @change="fileChange"/>
    <img :src="src"/><br>
    <img :src="cSrc"/><br>
    <div>
      webpack-zip/home
    </div>
  </div>
</template>
<script>
import { message } from '../components/Message'
import lrz from 'lrz'
export default {
  data() {
    return {
      value: '',
      src:"",
      cSrc:""
    }
  },
  methods: {
    fileChange(e){
      this.src=window.URL.createObjectURL(e.target.files[0])
      lrz(e.target.files[0]).then(res=>{
        console.log(res)
        this.cSrc =window.URL.createObjectURL(res.file)
      })
    },
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
