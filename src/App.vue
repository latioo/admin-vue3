<template>
  <Layout v-if="!route.meta.noLayout" />
  <router-view v-if="route.meta.noLayout"></router-view>
</template>

<script setup>
import Layout from './layouts/Index.vue'
import { useRouter } from 'vue-router'
import { useStore } from './store/layout'
import { useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const { addTab } = useStore()

router.beforeResolve((route) => {
  const { path, name } = route
  addTab({ path, name })
  // console.log({ path, name })
})
</script>
