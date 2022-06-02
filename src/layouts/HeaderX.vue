<template>
  <div>
    <div class="fixed-stuff"></div>
    <a-layout-header
      style="background: #fff; padding: 0"
      :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
    >
      <MenuUnfoldOutlined
        v-if="collapsed"
        class="trigger"
        @click="collapsed = !collapsed"
      />
      <MenuFoldOutlined
        v-else
        class="trigger"
        @click="collapsed = !collapsed"
      />
    </a-layout-header>
  </div>
</template>

<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
const collapsed = ref(false)
</script>

<style lang="scss" scoped>
.fixed-stuff {
  height: 48px;
}

:deep(.ant-layout-header) {
  height: 48px;
  top: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}

.trigger {
  font-size: 18px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
