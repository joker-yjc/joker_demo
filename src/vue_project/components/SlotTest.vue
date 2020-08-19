<template>
<div>
  <slot :str='str' :num='2'></slot>
</div>
</template>
<script>
export default {
  data() {
    return {
      str:"这是一个来自子组件的字符串",
      num:1
    }
  }
}
</script>