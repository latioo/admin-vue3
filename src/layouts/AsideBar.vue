<template>
  <div>
    <div
      class="fixed-stuff"
      :style="{
        width: menuCollapsed ? collapsedWidth : width,
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
      :collapsedWidth="collapsedWidth"
      :width="width"
      :collapsed="menuCollapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo">logo</div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item
          v-for="item in router.options.routes"
          :index="item.path"
          :key="item.path"
          @click="this.$router.push(item.path)"
        >
          <component :is="item.icon"></component>
          <span>{{ item.name }}</span>
        </a-menu-item>
        <a-menu-item key="1" @click="this.$router.push('/')">
          <UserOutlined />
          <span>home</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <UploadOutlined />
          </template>
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
import { ref, watch } from 'vue'
import { UserOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { router } from '../router'
import { useRoute } from 'vue-router'
import { useStoreRefs } from '../store/layout'
const [width, collapsedWidth] = ['208px', '48px']

//
const { menuCollapsed } = useStoreRefs()
const selectedKeys = ref([])
const route = useRoute()
watch(route, () => {
  const { path, name } = route
  selectedKeys.value = [path]
})

//
const toMuchMenusFortest = Array(11)
  .fill(null)
  .map((_, i) => 'test' + i)
console.log({ router, options: router.options.routes })
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
