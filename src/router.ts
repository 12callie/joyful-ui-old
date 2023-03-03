import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home },
        { path: '/doc', component: Doc }
    ]
});