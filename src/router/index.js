import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/TheHome";
import TheTest from "@/views/TheTest";
import TheDynamic from "@/views/TheDynamic";
import TheSecond from "@/views/TheSecond";
import TheFirst from "@/views/TheFirst";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/the-test",
    name: "TheTest",
    component: TheTest,
  },
  {
    path: "/first",
    name: "TheFirst",
    component: TheFirst,
  },
  {
    path: "/second",
    name: "TheSecond",
    component: TheSecond,
  },
  {
    path: "/the-test/:id",
    name: "TestMe",
    component: TheDynamic,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
