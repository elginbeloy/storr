import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/search/:query",
    name: "search",
    component: () => import("@/views/Search.vue")
  },
  {
    path: "/product/:id",
    name: "product",
    component: Product
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
