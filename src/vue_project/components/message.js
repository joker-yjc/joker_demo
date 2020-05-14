/*
 * @Date: 2020-05-12 15:40:04
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-13 09:25:41
 * @FilePath: /nearby-oa-public/Users/jokeryao/codes/webpack-zip/src/vue_project/components/message.js
 */
import Message from './Message.vue'
import Vue from 'vue'
// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
const instance = Vue.extend(Message)

export function message(data) {
  const sa = new instance({ data })
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
