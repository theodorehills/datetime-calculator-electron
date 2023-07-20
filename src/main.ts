// import from Vue.js
import { createApp } from "vue"

// import Element Plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

// import app component
import App from "@/App.vue"

createApp(App).use(ElementPlus).mount("#app")
