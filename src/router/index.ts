import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from  '../components/Home.vue'
import User from  '../components/User.vue'
import Roles from  '../components/roles.vue'
import Budget from  '../components/Budget.vue'
import Login from  '../components/login.vue'
import Welcome from  '../components/Welcome.vue'
Vue.use(VueRouter)

const routes = [
  {path:"/", redirect:'/login'},
  {path:"/login",component:Login},
  {path:'/home',component:Home,
  children:[
    {path:'/user',component:User},
    {path:'/welcome',component:Welcome},
    {path:'/roles',component:Roles},
    {path:'/budget',component:Budget},
  ]},
  
]

const router = new VueRouter({
  routes
})

export default router
