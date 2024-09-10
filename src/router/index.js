import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/code',
      name: 'code',
      component: () => import('../views/CodeView.vue')
    },
    {
      path: '/drawings',
      name: 'drawings',
      component: () => import('../views/DrawingsView.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('../views/PhotosView.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/code-examples/CalculatorView',
      name: '/code-examples/CalculatorView',
      component: () => import('../views/code-examples/CalculatorView.vue')
    },
  ]
})

export default router
