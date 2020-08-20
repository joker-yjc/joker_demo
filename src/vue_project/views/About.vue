<template>
  <div>
    webpack-zip/about
    使用extends继承组件的tempalte
  </div>
</template>
<script>
export default {
  data() {
    return {
      a:12
    }
  },
  methods: {
    getMethod() {
      console.log('这是来自父级的方法')
    }
  },
  mounted(){
    console.log('about')
  }
}
</script>