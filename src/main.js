import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import "@/styles/index.scss"

createApp(App).mount('#app').use(ElementPlus, {
    locale: zhCn,
})
