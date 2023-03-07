import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Intro from "./views/Intro.vue";
import Install from "./views/Install.vue";
import Usage from "./views/Usage.vue";
import ButtonDemo from "./views/ButtonDemo.vue";
import SwitchDemo from "./views/SwitchDemo.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/home", redirect: "/" },
    {
      path: "/doc",
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: Intro },
        { path: "install", component: Install },
        { path: "usage", component: Usage },
      ],
    },
    {
      path: "/components",
      children: [
        { path: "", redirect: "/components/button" },
        { path: "button", component: ButtonDemo },
        { path: "switch", component: SwitchDemo },
      ],
    },
  ],
});
