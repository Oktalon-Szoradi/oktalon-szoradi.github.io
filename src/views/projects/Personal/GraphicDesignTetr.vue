<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const IMAGES = [
  {
    name: 'Btn Playnow (new)',
    src: '/images/GraphicDesign/Tetr/btn_playnow_(new).png',
    alt: ''
  },
  {
    name: 'Mini T Spin Double Transparent',
    src: '/images/GraphicDesign/Tetr/Mini_T-Spin_Double_Transparent.webp',
    alt: ''
  },
  {
    name: 'Mini T Spin Double',
    src: '/images/GraphicDesign/Tetr/Mini_T-Spin_Double.webp',
    alt: ''
  },
  {
    name: 'My Tetris Design',
    src: '/images/GraphicDesign/Tetr/MyTetrisDesign.webp',
    alt: ''
  },
  {
    name: 'Tetr 1',
    src: '/images/GraphicDesign/Tetr/Tetr_1.webp',
    alt: ''
  },
  {
    name: 'Tetr 2',
    src: '/images/GraphicDesign/Tetr/Tetr_2.webp',
    alt: ''
  },
  {
    name: 'Tetr 3',
    src: '/images/GraphicDesign/Tetr/Tetr_3.webp',
    alt: ''
  },
  {
    name: 'Tetr Color Clear',
    src: '/images/GraphicDesign/Tetr/Tetr_ColorClear.webp',
    alt: ''
  },
  {
    name: 'Tetr Garbage Concept',
    src: '/images/GraphicDesign/Tetr/TetrGarbageConcept.webp',
    alt: ''
  },
  {
    name: 'Tetr GO',
    src: '/images/GraphicDesign/Tetr/Tetr_GO.webp',
    alt: ''
  },
  {
    name: 'Tetrio Battle Online Style 2',
    src: '/images/GraphicDesign/Tetr/TetrioBattleOnlineStyle2.webp',
    alt: ''
  },
  {
    name: 'Tetrio Battle Online Style',
    src: '/images/GraphicDesign/Tetr/TetrioBattleOnlineStyle.webp',
    alt: ''
  },
  {
    name: 'TETR IO Road Sign',
    src: '/images/GraphicDesign/Tetr/TETR.IO_RoadSign.webp',
    alt: ''
  },
  {
    name: 'Tetris Atari Arcade Widescreen',
    src: '/images/GraphicDesign/Tetr/TetrisAtariArcadeWidescreen.png',
    alt: ''
  },
  {
    name: 'Tetris Online Designs',
    src: '/images/GraphicDesign/Tetr/TetrisOnlineDesigns.webp',
    alt: ''
  },
  {
    name: 'Tetr O Spin',
    src: '/images/GraphicDesign/Tetr/Tetr_O-Spin.webp',
    alt: ''
  },
  {
    name: 'Tetr Perfect Clear',
    src: '/images/GraphicDesign/Tetr/Tetr_PerfectClear.webp',
    alt: ''
  },
  {
    name: 'Tetr T Spin Mini Double Triple',
    src: '/images/GraphicDesign/Tetr/Tetr_T-Spin_Mini_DoubleTriple.webp',
    alt: ''
  },
  {
    name: 'TF3',
    src: '/images/GraphicDesign/Tetr/TF3.png',
    alt: ''
  },
  {
    name: 'Titled Tetr',
    src: '/images/GraphicDesign/Tetr/titledTetr.webp',
    alt: ''
  },
  {
    name: 'TOP WideScreen WIP 4x',
    src: '/images/GraphicDesign/Tetr/TOP-WideScreen-WIP.4x.png',
    alt: ''
  },
  {
    name: 'TOP WideScreen WIP',
    src: '/images/GraphicDesign/Tetr/TOP-WideScreen-WIP.png',
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
    <GlassCard title="Tetris - Graphic Design">
      <p>Coming soon…</p>
    </GlassCard>
    <ImageGallery :src="IMAGES" :perRow="6" :squareImages="false" />
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
