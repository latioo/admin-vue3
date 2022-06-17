<template>
  <div>
    <div class="fixed-stuff"></div>
    <a-layout-header
      style="background: #fff; padding: 0"
      :style="{
        position: 'fixed',
        transition: 'width .2s',
        zIndex: 1,
        width: `calc(100% - ${realMenuWidth})`,
      }"
    >
      <MenuUnfoldOutlined
        v-if="menuCollapsed"
        class="trigger"
        @click="toggle"
      />
      <MenuFoldOutlined v-else class="trigger" @click="toggle" />
      <a-dropdown>
        <div class="avatar-box" @click.prevent>
          <a-avatar style="background-color: #1890ff" size="small">
            <template #icon><UserOutlined /></template>
          </a-avatar>
          <div class="username">admin</div>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <EditOutlined />
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <LogoutOutlined />
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-layout-header>
  </div>
</template>

<script setup>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons-vue'
import { useStoreRefs, useStore } from '../store/layout'
const { menuCollapsed, realMenuWidth } = useStoreRefs()
const toggle = useStore().toggleMenuCollapsed
</script>

<style lang="scss" scoped>
.fixed-stuff {
  height: 48px;
}

:deep(.ant-layout-header) {
  height: 48px;
  line-height: 48px;
  top: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  justify-content: space-between;
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

.avatar-box {
  padding-right: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.username {
  font-size: 16px;
  padding-left: 6px;
}
</style>
