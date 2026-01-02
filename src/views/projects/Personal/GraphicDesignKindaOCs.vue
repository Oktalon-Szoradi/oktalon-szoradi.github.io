<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const IMAGES = [
  {
    name: 'Acer Quick Access Original',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AcerQuickAccess.webp',
    alt: ''
  },
  {
    name: 'Acer Quick Access After',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AcerQuickAccess_After.webp',
    alt: ''
  },
  {
    name: 'Acer Quick Access After Hover',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AcerQuickAccess_After-Hover.webp',
    alt: ''
  },
  {
    name: 'Acer Quick Access After Pressed',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AcerQuickAccess_After-Pressed.webp',
    alt: ''
  },
  {
    name: 'Aero Classic',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AeroClassic.webp',
    alt: ''
  },
  {
    name: 'Aero Icon Theme Preview Splash',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AeroIconThemePreviewSplash.png',
    alt: ''
  },
  {
    name: 'Aero Metro Volume Media',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AeroMetroVolumeMedia.webp',
    alt: ''
  },
  {
    name: 'Apple Vision OS Style Dialog',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AppleVisionOSStyleDialog.png',
    alt: ''
  },
  {
    name: 'Aqua',
    src: '/images/GraphicDesign/BetweenOCandRecreation/Aqua.webp',
    alt: ''
  },
  {
    name: 'Avast German',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AvastGerman.webp',
    alt: ''
  },
  {
    name: 'Glossy HTTP Error',
    src: '/images/GraphicDesign/BetweenOCandRecreation/GlossyHTTPerror.webp',
    alt: ''
  },
  {
    name: 'Lazy',
    src: '/images/GraphicDesign/BetweenOCandRecreation/lazy.webp',
    alt: ''
  },
  {
    name: 'Metro Maybe',
    src: '/images/GraphicDesign/BetweenOCandRecreation/MetroMaybe.png',
    alt: ''
  },
  {
    name: 'Windows Aero Error Idk',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsAeroErrorIdk.webp',
    alt: ''
  },
  {
    name: 'Windows Aqua',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsAqua.png',
    alt: ''
  },
  {
    name: 'Windows Embedded POS Ready 2009',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsEmbeddedPOSReady2009.png',
    alt: ''
  },
  {
    name: 'Windows XP HD',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsXP_HD.webp',
    alt: ''
  },
  {
    name: 'Windows XP',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsXP.webp',
    alt: ''
  },
  {
    name: 'Win OSX',
    src: '/images/GraphicDesign/BetweenOCandRecreation/winOSX.webp',
    alt: ''
  },
  {
    name: 'Yet Another Run Dialog',
    src: '/images/GraphicDesign/BetweenOCandRecreation/YetAnotherRunDialog.webp',
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
    <GlassCard title="Remixes - Graphic Design">
      <p>Coming soon…</p>
    </GlassCard>
    <ImageGallery :src="IMAGES" :perRow="6" :squareImages="false" />
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
