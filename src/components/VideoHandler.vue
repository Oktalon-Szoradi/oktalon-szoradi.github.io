<template>
  <LoadingCircle v-if="!isLoaded" />
  <video
    v-show="isLoaded"
    class="video"
    :controls="true"
    @canplay="handleLoad"
    @error="handleLoad"
    v-bind="$attrs"
  >
    <source :src="src" type="video/mp4" />
    Your browser does not support the HTML5 video tag.
    <PushButton color="purple" :href="src" :download="src">
      Download the video instead?
    </PushButton>
  </video>
</template>

<script setup lang="ts">
import LoadingCircle from './LoadingCircle.vue'
import PushButton from './PushButton.vue'
import { ref } from 'vue'

defineProps<{
  src: string
}>()

const isLoaded = ref(false)

function handleLoad() {
  isLoaded.value = true
}
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

div,
video {
  width: 100%;
  text-align: center;
}
</style>
