<template>
  <a-layout style="min-height: 100vh" has-sider>
    <AsideBar />
    <a-layout>
      <HeaderX />
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <Setting />
  </a-layout>
</template>

<script setup>
import AsideBar from './AsideBar.vue'
import HeaderX from './HeaderX.vue'
import Setting from './Setting.vue'
</script>
