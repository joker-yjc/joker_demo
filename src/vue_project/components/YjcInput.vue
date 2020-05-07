<!--
 * @Description: 
 * @Author: Yao
 * @Date: 2020-05-07 16:53:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 18:07:45
 -->
<template>
  <div style="margin: 10px 0;">
    <input
      :value="value"
      @input="handleInput"
      :placeholder="$attrs.placeholder"
      @change="handleChange"
    />
    <span>1</span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    handleChange(value) {
      this.$emit('change', value)
    },
  },
}
</script>
