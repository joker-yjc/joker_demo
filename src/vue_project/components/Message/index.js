/*
 * @Date: 2020-05-12 15:40:04
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-21 13:01:25
 * @description:
 */
import Message from './index.vue'
import Vue from 'vue'
// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
const Instance = Vue.extend(Message)

export function message(data) {
  /* eslint-disable */
  const sa = new Instance({ data })
  sa.$mount()
  document.body.appendChild(sa.$el)
}

;['error', 'success', 'warn', 'info'].forEach((el) => {
  message[el] = function (content) {
    const opt = {
      content,
      type: 'error',
    }
    message(opt)
  }
})
