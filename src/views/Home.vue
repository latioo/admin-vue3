<template>
  <div class="layout-content-default">
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="fade">
      <p v-if="!show">world</p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>
