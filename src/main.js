import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { MotionPlugin } from '@vueuse/motion'
import { gsap } from  "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import VueScrollmagic from 'vue-scrollmagic'

const app = createApp(App)

app.use(MotionPlugin)
app.use(gsap)
gsap.registerPlugin(ScrollTrigger);
// app.use(VueScrollmagic)

app.mount('#app')