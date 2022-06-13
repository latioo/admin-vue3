<template>
  <router-view>
    <a-tabs
      :activeKey="activeTab"
      type="editable-card"
      class="tabs"
      hide-add
      @tabClick="router.push"
      @edit="onEdit"
      v-show="tabs.length"
    >
      <a-tab-pane
        v-for="pane in tabs"
        :key="pane.path"
        :tab="pane.name"
        :closable="pane.closable"
      >
      </a-tab-pane> </a-tabs
  ></router-view>
</template>
<script setup>
import { watch, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { findIndex, propEq } from 'ramda'
import { useStoreRefs, useStore } from '../store/layout'
const { tabs, activeTab } = useStoreRefs()
const { addTab, delTab } = useStore()

const router = useRouter()

/*
组件直接加载时, beforeResolve 正常工作
  举例: 直接进入主页, 本组件随layout一起加载
组件动态加载组件时, beforeResolve 不能获取第一个路由
  举例: 从 login 跳到主页, layout 在跳转后才加载

如果这样操作: 主页->登录页->主页  
观察控制台, 会发现 
主页到登录页 有 console {path: '/login', name: '用户登录'}
登录页到主页 却没有 console

感觉不太合理, 主页到登录页有无输出倒没什么, 登录页到主页为啥不输出呢?
按理说, 无论什么时候加载组件, 都应该触发路由变化
*/
addTab({ path: '/', name: '主页' })
const beforeResolve = router.beforeResolve((route) => {
  const { path, name } = route
  addTab({ path, name })
  console.log({ path, name })
})
onUnmounted(beforeResolve)

const onEdit = (targetKey, action) => {
  if (action === 'remove') {
    const index = findIndex(propEq('path', targetKey), tabs.value)
    if (index < 0) return
    if (targetKey == activeTab.value && tabs.value.length > 1) {
      // 关闭选中的tab后, 依次尝试选中右/左侧的tab
      if (index < tabs.value.length - 1) router.push(tabs.value[index + 1].path)
      if (index == tabs.value.length - 1)
        router.push(tabs.value[index - 1].path)
    }
    delTab(targetKey)
    // 关掉最后一个tab, 这里可以选择去主页, 或者啥也不做
    if (tabs.value.length <= 0) router.push('/')
  }
}
</script>
<style lang="scss" scoped>
.tabs {
  background-color: #fff;
  padding-top: 6px;
}
:deep(.ant-tabs-nav-list) {
  padding-left: 16px;
}
</style>
