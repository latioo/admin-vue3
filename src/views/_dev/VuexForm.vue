<template>
  <a-divider orientation="left">组件 state</a-divider>
  <a-input
    v-model:value="compState"
    placeholder="输入一些东西看看, 重新加载状态会重置"
  />
  <span> {{ compState }}</span>
  <a-divider orientation="left">vuex state 直接修改 </a-divider>
  <a-input
    v-model:value="vuexFormInput"
    placeholder="输入一些东西看看, 重新加载状态仍保留"
  />
  {{ vuexFormInput }}
  <a-divider orientation="left">vuex state commit修改 </a-divider>
  <a-input
    v-model:value="testP"
    placeholder="输入一些东西看看, 重新加载状态仍保留"
  />
  {{ testP }}
</template>
<script setup>
import { ref } from 'vue'
import { useVuex } from '@/util/vuex.js'
const { commit, stateRefs, stateProxy } = useVuex('vuexTest')
// 组件 state
const compState = ref('')

// vuex state
const { vuexFormInput } = stateRefs

// vuex state 包装
let { vuexFormInput: testP } = stateProxy

console.log({ vuexFormInput, compState, testP })
</script>
