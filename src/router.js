import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/layout.vue";
// import Layout

Vue.use(Router);

export default new Router({
  // mode: "history",
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./views/Login')
    },
    {
      path: "/loyout",
      redirect: "/olds",
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
          // name: "collect",
          redirect: "/collect/age",
          component: () =>
            import("./views/content/collect"),
          children: [{
            path: "/collect/age",
            name: "age",
            component: () =>
              import("./views/objects/age")
          },
          {
            path: "/collect/apply",
            name: "apply",
            component: () =>
              import("./views/objects/apply")
          },
          {
            path: "/collect/color",
            name: "color",
            component: () =>
              import("./views/objects/color")
          },
          {
            path: "/collect/decorate",
            name: "decorate",
            component: () =>
              import("./views/objects/decorate")
          },
          {
            path: "/collect/kiln",
            name: "kiln",
            component: () =>
              import("./views/objects/kiln")
          },
          {
            path: "/collect/kind",
            name: "kind",
            component: () =>
              import("./views/objects/kind")
          },
          {
            path: "/collect/remom",
            name: "remom",
            component: () =>
              import("./views/objects/remom")
          },
          ]
        },
        {
          path: "/olds",
          // name: "olds",
          redirect: "/olds/rest",
          component: () =>
            import("./views/content/olds"),
          children: [
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
