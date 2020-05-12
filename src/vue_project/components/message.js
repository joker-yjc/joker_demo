/*
 * @Date: 2020-05-12 15:40:04
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-12 16:53:23
 * @FilePath: /nearby-oa-public/Users/jokeryao/codes/webpack-zip/src/vue_project/components/message.js
 */
import Message from './Message.vue'
import Vue from 'vue'
// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
let instance = Vue.extend(Message)

export function message(data){
  let sa= new instance({data})
  sa.$mount()
  document.body.appendChild(sa.$el)
}

message.error = function (content) {
  let opt={
    content,
    type:"error"
  }
  message(opt)
}