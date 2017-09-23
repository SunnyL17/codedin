import Vue from 'vue'

import Router from 'vue-router'
import Firebase from 'firebase'
import Landing from '@/components/Landing'
import Preview from '@/components/Preview'
import Users from '@/components/Users'
import Login from '@/components/Login'
import Project from '@/components/Project'
import Signup from '@/components/Signup'
import store from '@/vuex/store'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/landing',
        name:'Landing',
        component:Landing
      },
      {
        path:'/preview',
        name:'Preview',
        component:Preview
      },
      {
          path:'/login',
          name:'Login',
          component:Login
          
      },
      {
          path:'/',
          name:'Signup',
          component:Signup
          
      },
      {
          path:'/project',
          name:'Project',
          component:Project
          
      },
      {
          path:'/users',
          name:'Users',
          component:Users
      }
  ]
})
