<template>
  <a-divider orientation="left">组件 state 重新加载状态会重置</a-divider>
  <a-input v-model:value="compState" placeholder="输入一些东西看看" />
  <span> {{ compState }}</span>
  <a-divider orientation="left">store state 重新加载状态仍保留</a-divider>
  <a-input v-model:value="testInput" placeholder="输入一些东西看看" />
  {{ testInput }}
</template>
<script setup>
import { ref } from 'vue'
import { useStore, useStoreRefs } from './testForm.store'
const store = useStore()

// 组件 state
const compState = ref('')

//
const { testInput } = useStoreRefs()
</script>
