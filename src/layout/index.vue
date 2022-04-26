<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <el-aside>aside</el-aside>
    <el-container>
      <el-header>header</el-header>
      <el-main>
        <el-scrollbar>main</el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { ref } from "vue";
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";
</script>

<style scoped>
</style>
