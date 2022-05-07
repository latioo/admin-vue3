<template>
  <el-aside class="aside">
    <span class="logo">logo</span>
    <div class="menu">
      <el-menu default-active="/" class="el-menu-vertical" :collapse="isExpand" :router="true">
        <el-menu-item index="/">
          <el-icon>
            <HomeFilled />
          </el-icon>
          <template #title>
            Home
          </template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator</span>
          </template>
          <el-menu-item index="/page1">
            Page1
          </el-menu-item>
          <el-menu-item index="/page2">
            Page2
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-for="item in toMuchMenusFortest" :index="item" :key="item">
          {{ "test" + item }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="expand" @click="setExpand">
      <el-icon>
        <Expand v-if="isExpand" />
        <Fold v-if="!isExpand" />
      </el-icon>
    </div>
  </el-aside>
</template>

<script setup>
import { ref } from 'vue'
import { Menu as IconMenu, Location, HomeFilled, Expand, Fold } from '@element-plus/icons-vue'

const isExpand = ref(false)
const setExpand = () => { isExpand.value = !isExpand.value }

const toMuchMenusFortest = Array(11).fill(null).map((_, i) => i + '')
</script>

<style lang="scss" scoped>
.aside {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: unset; // 由菜单控制
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .12);
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 5px rgb(0 21 41 / 5%);
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, .06);
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 5px rgb(0 21 41 / 5%);
  }

  // ::-webkit-scrollbar-thumb {
  //   background: hsla(0, 0%, 100%, .2);
  //   border-radius: 3px;
  //   -webkit-box-shadow: inset 0 0 5px hsl(0deg 0% 100% / 5%);
  // }

  // ::-webkit-scrollbar-track {
  //   background: hsla(0, 0%, 100%, .15);
  //   border-radius: 3px;
  //   -webkit-box-shadow: inset 0 0 5px rgb(37 37 37 / 5%);
  // }

  .logo {
    padding: 16px;
  }

  .menu {
    overflow: hidden auto;
    border: unset;
    flex: 1;

    .el-menu-vertical:not(.el-menu--collapse) {
      width: 200px;
    }
  }

  .expand {
    border-top: 1px solid #f0f0f0;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;

    :hover {
      color: var(--el-color-primary);
    }
  }
}
</style>