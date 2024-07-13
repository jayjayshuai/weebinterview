import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: function (){
        return import('@/views/AboutView.vue')
      },
    },
    {
      path:'/about',
      name:'about',
      component:()=>import('@/views/grid/Test.vue')
    }
  ]
})

export default router
