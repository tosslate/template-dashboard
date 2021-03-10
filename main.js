import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import antd from 'ant-design-vue'
import App from './src/app.vue'
import routes from './src/routes/all'
import 'ant-design-vue/dist/antd.less'
import './src/styles/tailwind.css'
import './src/styles/override.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(antd)
app.use(router)
app.mount('#app')

document.getElementById('app-spin').classList.add('hidden')
