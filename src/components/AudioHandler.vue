<template>
  <div class="root">
    <LoadingCircle v-if="!isLoaded" />
    <audio v-show="false" :src="src" @canplay="handleLoad"></audio>
    <AVWaveform
      v-show="isLoaded"
      :src="src"
      :canv-width="canvWidth"
      noplayed-line-color="hsl(150deg 63% 75%)"
      played-line-color="hsl(167deg 69% 48%)"
      playtime-slider-color="hsl(263deg 64% 72%)"
      playtime-font-family="'Fira Code', monospace"
      playtime-font-color="hsl(0deg 0% 100% / 90%)"
    />
  </div>
</template>

<script setup lang="ts">
import LoadingCircle from './LoadingCircle.vue'
import { AVWaveform } from 'vue-audio-visual'
// import { ref, onMounted, nextTick } from 'vue'
import { ref } from 'vue'

defineProps<{
  src: string
}>()

const isLoaded = ref(false)
const canvWidth = ref(300)

function handleLoad() {
  isLoaded.value = true
}

// function resizeWaveform() {
//   const container = document.querySelector('.container') as HTMLElement | null
//   const containerWidth = container?.offsetWidth ?? 532
//   canvWidth.value = containerWidth - 32
//   // setTimeout(() => {
//   //   const canvas = document.querySelector('.canvas') as HTMLElement | null
//   //   canvas.width = canvWidth.value
//   // }, 1000);
// }

// onMounted(() => {
//   resizeWaveform()
//   nextTick(() => {
//     resizeWaveform()
//     window.addEventListener('resize', resizeWaveform)
//   })
// })
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

.root {
  display: flex;
  flex-direction: column;
  align-items: center;

  :deep(audio) {
    width: 100%;
  }
}
</style>
