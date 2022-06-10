import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import * as icons from '@ant-design/icons-vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())

Object.keys(icons).forEach(m => {
    app.component(m, icons[m])
})

app.mount('#app')