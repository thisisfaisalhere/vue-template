import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "@/App.vue";
import { routes } from "@/router/routes";
import "ant-design-vue/dist/antd.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
