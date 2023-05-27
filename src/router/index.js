import HomeViewVue from '@/views/HomeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import SlidesViewVue from '@/views/SlidesView.vue'
import LoginView from '@/views/LoginView.vue'
import SplashViewVue from '@/views/SplashView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'spalashScreen',
      component: SplashViewVue
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/slides',
      name: 'threeSlides',
      component: SlidesViewVue
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeViewVue
    }
  ]
})

export default router
