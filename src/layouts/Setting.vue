<template>
  <a-drawer
    :visible="showDrawer"
    :style="{ display: isFirstLoad ? 'none' : 'unset' }"
    placement="right"
    :width="drawerWidth"
    @close="toggleDrawer"
  >
    <a-button
      type="primary"
      @click="toggleDrawer"
      class="setting-btn"
      :style="{
        right: drawerWidth,
      }"
    >
      <template v-if="showDrawer" #icon><CloseOutlined /></template>
      <template v-else #icon><SettingOutlined /></template>
    </a-button>
    <div></div>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script setup>
import { ref } from 'vue'
import { SettingOutlined, CloseOutlined } from '@ant-design/icons-vue'

const showDrawer = ref(true)
// drawer 组件没有 v-if, v-show 两个属性可设置, 至少文档没有, 只有当第一次设置为true才加载, 后续设置只控制样式
const isFirstLoad = ref(true)
setTimeout(() => {
  showDrawer.value = false
  isFirstLoad.value = false
  // console.log('Drawer 只加载一次')
}, 0)
const toggleDrawer = () => {
  showDrawer.value = !showDrawer.value
}

const drawerWidth = '300px'
</script>
<style lang="scss" scoped>
.setting-btn {
  position: fixed;
  right: 0;
  bottom: 120px;
  transition: 0.3s;
}
</style>
