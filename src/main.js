import "./assets/scss/main.scss";
import ShoelaceModelDirective from '@shoelace-style/vue-sl-model'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.5.2/cdn/");

const app = createApp(App);
app.use(ShoelaceModelDirective)

app.use(createPinia());
app.use(router);

app.mount("#app");
