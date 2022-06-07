import { createApp } from 'vue'
import App from './App.vue'
// import "@/styles/index.scss"
import { router } from './router'
import store from './store'
import * as icons from '@ant-design/icons-vue'
// import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(router)
app.use(store)

Object.keys(icons).forEach(m => {
    app.component(m, icons[m])
})

app.mount('#app')
