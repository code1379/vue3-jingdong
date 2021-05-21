import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home";

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
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "mine" */ "../views/Login"),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin;
      if (isLogin) {
        next({ name: from.name });
      } else {
        next();
      }
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import(/* webpackChunkName: "mine" */ "../views/Register"),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin;
      if (isLogin) {
        next({ name: from.name });
      } else {
        next();
      }
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  // TODO 1.因为我们一直是没有登陆的，当访问到 login页面，一直会走这个逻辑
  // if (!isLogin) { // 同样的这里可以修改为 if !isLogin || to.name === "Login"
  //   next({ name: "Login" });
  // } else {
  //   next();
  // }
  // TODO 2. 也会造成死循环
  // * 如果登陆了，跳转。没登录跳转到 Login 页面
  // * 但是一直是没登录状态，又会判断一次 是否登陆。 ! 无限循环

  // if (isLogin) {
  //   next();
  // } else {
  //   next({ name: "Login" });
  // }

  // TODO 3. 添加或条件打破循环
  // * 如果登陆了 或者访问的页面时 Login 页面，我们就执行跳转
  const visitPageName = to.name;
  const isLoginOrRegister =
    visitPageName === "Login" || visitPageName === "Register";
  if (isLogin || isLoginOrRegister) {
    next();
  } else {
    // * 如果没登录 就跳转到 Login 页面
    next({ name: "Login" });
  }
});

export default router;
