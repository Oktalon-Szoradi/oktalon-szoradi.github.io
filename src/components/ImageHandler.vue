<template>
  <LoadingCircle :class="spaceRight ? 'spaceright' : ''" v-if="!isLoaded" />
  <img
    v-show="isLoaded"
    :src="src"
    :alt="alt"
    @load="handleLoad"
    @error="handleLoad"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import LoadingCircle from './LoadingCircle.vue'
import { ref } from 'vue'

defineProps<{
  src: string
  alt?: string
  spaceRight?: boolean
}>()

const isLoaded = ref(false)

function handleLoad() {
  isLoaded.value = true
}
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

div {
  display: inline;
}

.spaceright {
  margin-right: 2em;
}
</style>
