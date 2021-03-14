import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Airbrush from "../views/Airbrush.vue";
import Tattoos from "../views/Tattoos.vue";
import Murals from "../views/Murals.vue";
import Canvas from "../views/Canvas.vue";
import Checkout from "../views/Checkout.vue";
import Shop from "../views/Shop.vue";
import Success from "../views/Success.vue";
import Cancel from "../views/Cancel.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/airbrush",
    name: "Airbrush",
    component: Airbrush
  },
  {
    path: "/tattoos",
    name: "Tattoos",
    component: Tattoos
  },
  {
    path: "/murals",
    name: "Murals",
    component: Murals
  },
  {
    path: "/canvas",
    name: "Canvas",
    component: Canvas
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop
  },
  {
    path: "/success",
    name: "Success",
    component: Success
  },
  {
    path: "/cancel",
    name: "Cancel",
    component: Cancel
  },
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
