import Vue from 'vue'
import app from './vue_project/app.vue'
import router from './vue_project/router'
import start from './vue_project/micro'
/* eslint-disable  */

new Vue({
  router,
  render: (h) => h(app),
}).$mount('#app')

start()
