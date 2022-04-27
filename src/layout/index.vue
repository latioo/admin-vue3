<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <el-aside>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </el-aside>
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

<script>
</script>

<style scoped>
</style>
