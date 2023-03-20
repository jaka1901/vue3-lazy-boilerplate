import { createRouter, createWebHistory } from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";

const RouterLayout = createRouterLayout((layout) => {
  return import("@/layouts/" + layout + ".vue");
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: RouterLayout,
      children: routes,
    },
  ],
});

export default router;
