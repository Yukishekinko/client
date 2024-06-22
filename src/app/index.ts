import App from "./App.vue";
import { createApp } from "vue";
import router from "./providers/router";
import './styles/globals.css'
import Vue3Marquee from "vue3-marquee";
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App).use(router).use(Vue3Marquee, { name: "Vue3Marquee" }).use(pinia);
export default app;