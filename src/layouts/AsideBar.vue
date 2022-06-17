<template>
  <div>
    <div
      class="fixed-stuff"
      :style="{
        width: realMenuWidth,
        overflow: 'hidden',
      }"
    ></div>
    <a-layout-sider
      class="layout-sider-cus"
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }"
      :collapsedWidth="collapsedMenuWidth"
      :width="expandMenuWidth"
      :collapsed="menuCollapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo">logo</div>
      <a-menu
        :selectedKeys="selectedKeys"
        :selectable="false"
        theme="dark"
        mode="inline"
      >
        <a-menu-item
          v-for="item in routes"
          :index="item.path"
          :key="item.path"
          @click="this.$router.push(item.path)"
        >
          <component :is="item.icon" />
          <span>{{ item.name }}</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon> </template>
          <template #title>Navigation Three</template>
          <a-menu-item
            v-for="item in toMuchMenusFortest"
            :index="item"
            :key="item"
            @click="this.$router.push('Option' + item)"
          >
            {{ 'Option ' + item }}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script setup>
import { onUnmounted } from 'vue'
import { routes } from '../router'
import { useRouter } from 'vue-router'
import { useStoreRefs } from '../store/layout'

//
const {
  menuCollapsed,
  selectedKeys,
  expandMenuWidth,
  collapsedMenuWidth,
  realMenuWidth,
} = useStoreRefs()
const router = useRouter()

selectedKeys.value = ['/']
const beforeResolve = router.beforeResolve((route) => {
  // console.log({ route })
  const { path } = route
  selectedKeys.value = [path]
})
onUnmounted(beforeResolve)
//
const toMuchMenusFortest = Array(11)
  .fill(null)
  .map((_, i) => 'test' + i)
</script>

<style lang="scss" scoped>
.layout-sider-cus {
  overflow: hidden;
}

.fixed-stuff {
  transition: width 0.2s;
}

.logo {
  padding: 16px;
  color: #fff;
}

:deep(.ant-layout-sider-children) {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

// ant-menu ant-menu-root ant-menu-inline ant-menu-dark
:deep(.ant-menu-dark) {
  overflow: hidden auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 100%, 0.2);
    border-radius: 3px;
    box-shadow: inset 0 0 5px rgb(0 21 41 / 5%);
    -webkit-box-shadow: inset 0 0 5px hsl(0deg 0% 100% / 5%);
  }
  &::-webkit-scrollbar-track {
    background: hsla(0, 0%, 100%, 0.15);
    border-radius: 3px;
    border-radius: 3px;
    box-shadow: inset 0 0 5px rgb(0 21 41 / 5%);
    -webkit-box-shadow: inset 0 0 5px rgb(37 37 37 / 5%);
  }
}
</style>
