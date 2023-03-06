import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/home', redirect: '/' },
        { path: '/doc', component: Doc }
    ]
});