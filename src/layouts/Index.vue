<template>
  <el-container class="layout-container">
    <AsideBar />
    <el-container>
      <el-header>header</el-header>
      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AsideBar from "./AsideBar.vue";
</script>

<style lang="scss" scoped>
.layout-container {
  min-height: 100vh;
}
</style>
