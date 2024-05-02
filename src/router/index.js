import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import one from '../views/one.vue'
import color from '../views/color.vue'
import superpower from '../views/superpower.vue'
import food from '../views/food.vue'
import receipt from '../views/receipt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/one',
      name: 'one',
      component: one,
    },
    {
      path: '/color',
      name: 'color',
      component: color,
    },
    {
      path: '/super',
      name: 'super',
      component: superpower,
    },
    {
      path: '/food',
      name: 'food',
      component: food,
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: receipt,
    }
  ]
})

export default router
