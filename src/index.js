import Vue from 'vue'
import app from './vue_project/app.vue'
console.log(process.env.NODE_ENV,'test')

/* eslint-disable  */
new Vue({
  el: '#app',
  render: (h) => h(app),
})
