import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./components/Home.vue";
import ErrorPage from "./components/ErrorPage.vue";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

import "primevue/resources/themes/nova-vue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/error",
      component: ErrorPage,
    },
  ],
});
const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(ToastService);

app.component("Home", Home);
app.component("Error", ErrorPage);

app.mount("#app");
