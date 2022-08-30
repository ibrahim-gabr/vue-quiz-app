import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/main.css'
import 'flowbite';
import Quiz from "@/components/Quiz.vue";
import Start from "@/components/Start.vue";

const routes = [
    { path: '/', component: Start , name: 'start'},
    { path: '/quiz', component: Quiz , name: 'quiz'},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2);
app.mount('#app')
