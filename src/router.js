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
            import("./views/content/About")
        },
        {
          path: "/home",
          name: "homeS",
          component: () =>
            import("./views/content/Home")
        },
        {
          path: "/activity",
          name: "activity",
          component: () =>
            import("./views/content/activity")
        },
        {
          path: "/collect",
          name: "collect",
          component: () =>
            import("./views/content/collect")
        },
        {
          path: "/olds",
          // name: "olds",
          component: () =>
            import("./views/content/olds"),
            children:[
              {
                path: "/olds/auction",
                name: "auction",
                component: () =>
                  import("./views/old/auction")
              },
              {
                path: "/olds/culture",
                name: "culture",
                component: () =>
                  import("./views/old/culture")
              },
              {
                path: "/olds/detail",
                name: "detail",
                component: () =>
                  import("./views/old/detail")
              },
              {
                path: "/olds/macroscopic",
                name: "macroscopic",
                component: () =>
                  import("./views/old/macroscopic")
              },
              {
                path: "/olds/purpose",
                name: "purpose",
                component: () =>
                  import("./views/old/purpose")
              },
              {
                path: "/olds/rest",
                name: "rest",
                component: () =>
                  import("./views/old/rest")
              },
            ]
        },
        // 这里将会有有下一个子类
      ]
    }
  ]
});
