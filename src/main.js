import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

import "primevue/resources/themes/nova-vue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toast", Toast);

app.mount("#app");
