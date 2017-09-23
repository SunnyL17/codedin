// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import Router from 'vue-router'

Vue.config.productionTip = false

let config ={
    apiKey: "AIzaSyDg8yfERg5JR7lqrBUG5T5RW35dTNMB-io",
    authDomain: "vue1-51412.firebaseapp.com",
    databaseURL: "https://vue1-51412.firebaseio.com",
    projectId: "vue1-51412",
    storageBucket: "vue1-51412.appspot.com",
    messagingSenderId: "520496306287"
    
    
};


Vue.use(Vuex)
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
