<template>
  <a-layout style="min-height: 100vh" has-sider>
    <AsideBar />
    <a-layout>
      <HeaderX />
      <TabsNav />
      <a-layout-content>
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
    <Setting />
  </a-layout>
</template>

<script setup>
import AsideBar from './AsideBar.vue'
import HeaderX from './HeaderX.vue'
import TabsNav from './TabsNav.vue'
import Setting from './Setting.vue'
</script>
