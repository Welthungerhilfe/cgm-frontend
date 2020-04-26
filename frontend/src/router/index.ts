import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
  mode: 'history',
  routes
});

// TODO: Route guard
// Global route guard
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuthentication)) {
//     // this route requires auth, check if logged in
//     if (Vue.getLoggedIn()) {
//       // only proceed if authenticated.
//       next();
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
