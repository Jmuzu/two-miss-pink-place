import { createRouter, createWebHashHistory } from "vue-router";

import ProductResultsView from "@/views/ProdcutResultsView.vue";
import ProductView from "@/views/ProductView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductResultsView,
  },
  {
    path: "/:id",
    name: "ProductListing",
    component: ProductView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
