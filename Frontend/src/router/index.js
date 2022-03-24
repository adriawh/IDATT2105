import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/calculatorView",
    name: "CalculatorView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CalculatorView.vue"),
  },
  {
    path: "/calculatorFeedback",
    name: "CalculatorFeedback",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CalculatorFeedback.vue"),
  },

  {
    path: "/ProfilePage",
    name: "ProfilePage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfilePage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
