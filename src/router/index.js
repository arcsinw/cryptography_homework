import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Crypto from "../views/Crypto.vue"
import RSACrypto from "../views/rsa/RSACrypto.vue"

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/crypto",
    name: "Crypto",
    component: Crypto
  },
  {
    path: '/rsa',
    name: 'RSACrypto',
    component: RSACrypto
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
