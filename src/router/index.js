import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart")
  },
  {
    path: "/order",
    name: "Order",
    component: () => import(/* webpackChunkName: "order" */ "../views/Order")
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import(/* webpackChunkName: "mine" */ "../views/Mine")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
