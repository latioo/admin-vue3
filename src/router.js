import { createRouter, createWebHashHistory } from 'vue-router'
import Page1 from './views/Page1.vue'
import Home from './views/Home.vue'
import TestForm from './views/_dev/TestForm.vue'
import DevTable from './views/_dev/DevTable.vue'
import DragBord from './views/_dev/DragBord.vue'
import DragBord2 from './views/_dev/DragBord2.vue'
import Login from './views/user/Login.vue'
import { UserOutlined, VideoCameraOutlined, FormOutlined, TableOutlined } from '@ant-design/icons-vue'

const menus = [
  { path: '/', name: '主页', icon: UserOutlined, component: Home },
  { path: '/page1', name: 'page1', icon: VideoCameraOutlined, component: Page1 },
  { path: '/login', name: '用户登录', icon: UserOutlined, component: Login, meta: { noLayout: true } },
]
const devMenus = [
  { path: '/store-form', name: 'store 表单处理', icon: FormOutlined, component: TestForm },
  { path: '/dev-table', name: '查询表格', icon: TableOutlined, component: DevTable },
  // -- 可配置看板
  { path: '/drag-bord', name: '看板1', icon: TableOutlined, component: DragBord },
  { path: '/drag-bord2', name: '看板-chart', icon: TableOutlined, component: DragBord2 },
]

export const routes = [...menus, ...devMenus]
export const router = createRouter({
  history: createWebHashHistory(), // createWebHashHistory createWebHistory
  routes,
})
