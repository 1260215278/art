import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/layout.vue";
// import Layout

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./views/Login')
    },


    {
      path: "/loyout",
      component: () =>
        import("./views/layout"),
      children: [
        {
          path: "/about",
          name: "about",
          component: () =>
            import("./views/About")
        },
        {
          path: "/home",
          name: "homeS",
          component: () =>
            import("./views/Home")
        }
      ]
    }
  ]
});
