<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const IMAGES = [
  {
    name: 'Windows 10 Color Palette in Aero style',
    src: '/images/GraphicDesign/Recreations/10colorPaletteIn7style.webp',
    alt: ''
  },
  // {
  //   name: 'Silly Cat',
  //   src: '/images/GraphicDesign/Recreations/SillyCat.webp',
  //   alt: ''
  // },
  {
    name: 'Skeuomorphic Card',
    src: '/images/GraphicDesign/Recreations/SkeuomorphicCard.webp',
    alt: ''
  },
  {
    name: 'Skeuomorphic Error Recreation',
    src: '/images/GraphicDesign/Recreations/SkeuomorphicErrorRecreation.webp',
    alt: ''
  },
  {
    name: 'Skeuomorphic Recreations macOS Aqua',
    src: '/images/GraphicDesign/Recreations/SkeuomorphicRecreations_macOSAqua.webp',
    alt: ''
  },
  {
    name: 'Skeuomorphic Recreations Windows Aero',
    src: '/images/GraphicDesign/Recreations/SkeuomorphicRecreations_WindowsAero.webp',
    alt: ''
  },
  {
    name: 'Wii U Hulu',
    src: '/images/GraphicDesign/Recreations/WiiU_Hulu.webp',
    alt: ''
  },
  {
    name: 'Windows Aero Elements',
    src: '/images/GraphicDesign/Recreations/WindowsAeroElements.webp',
    alt: ''
  },
  {
    name: 'WIP Windows 7 Background',
    src: '/images/GraphicDesign/Recreations/WIP_Windows7_Background.png',
    alt: ''
  },
  {
    name: 'WIP Windows 7 Background Grass',
    src: '/images/GraphicDesign/Recreations/WIP_Windows7_Background_Grass.png',
    alt: ''
  },
  {
    name: 'WIP Windows 7 Background Butterfly',
    src: '/images/GraphicDesign/Recreations/WIP_Windows7_Background_Butterfly.png',
    alt: ''
  }
]
</script>

<template>
  <main class="container">
    <NavigationButtons
      :queryIndex="1"
      :queryParams="{ scrollTo: 'GraphicDesign' }"
    />
    <GlassCard title="Recreations - Graphic Design">
      <p>
        Here are things I've made that aim to be an accurate recreation of
        something.
      </p>
    </GlassCard>
    <ImageGallery :src="IMAGES" :perRow="6" :squareImages="false" />
    <GlassCard>
      <h1>Coming soon…</h1>
    </GlassCard>
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
