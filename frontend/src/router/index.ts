import HomeElement from "@/views/HomeElement.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeElement,
    },
  ],
});

export default router;
