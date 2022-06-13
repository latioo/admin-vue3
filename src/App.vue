<template>
  <Layout v-if="!route.meta.noLayout" />
  <router-view v-if="route.meta.noLayout"></router-view>
</template>

<script setup>
import Layout from './layouts/Index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// console.log({ route })
</script>
