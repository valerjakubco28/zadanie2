import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Insert from "../views/Insert.vue";
import Vypis_udajov from "../views/Vypis_udajov.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/insert',
      name: 'about',

      component: Insert
    },
    {
      path: '/vypis_udajov',
      name: 'Vypis udajov',
      component: Vypis_udajov
    }
  ]
})

export default router
