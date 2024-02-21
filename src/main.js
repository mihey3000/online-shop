import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router'
import store from './store'
import { createWebHistory } from 'vue-router'
import 'material-design-icons-iconfont'

const router = createRouter(createWebHistory())
export const eventBus = createApp(App)

createApp(App).use(router).use(store).mount('#app')