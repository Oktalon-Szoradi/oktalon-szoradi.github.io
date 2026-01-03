<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const IMAGES = [
  {
    name: 'Acer Quick Access Original',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AcerQuickAccess.webp',
    alt: '',
    date: '2023-01-19'
  },
  {
    name: 'Acer Quick Access After',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AcerQuickAccess_After.webp',
    alt: '',
    date: '2023-01-19'
  },
  {
    name: 'Acer Quick Access After Hover',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AcerQuickAccess_After-Hover.webp',
    alt: '',
    date: '2023-01-19'
  },
  {
    name: 'Acer Quick Access After Pressed',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AcerQuickAccess_After-Pressed.webp',
    alt: '',
    date: '2023-01-19'
  },
  {
    name: 'Aero Classic',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AeroClassic.webp',
    alt: '',
    date: '2025-07-05'
  },
  {
    name: 'Aero Icon Theme Preview Splash',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AeroIconThemePreviewSplash.png',
    alt: '',
    date: '2024-07-13'
  },
  {
    name: 'Aero Metro Volume Media',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AeroMetroVolumeMedia.webp',
    alt: '',
    date: '2024-12-01'
  },
  {
    name: 'Apple Vision OS Style Dialog',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AppleVisionOSStyleDialog.png',
    alt: '',
    date: '2024-03-04'
  },
  {
    name: 'Aqua',
    src: '/images/GraphicDesign/BetweenOCandRecreation/Aqua.webp',
    alt: '',
    date: '2024-12-01'
  },
  {
    name: 'Avast German',
    src: '/images/GraphicDesign/BetweenOCandRecreation/AvastGerman.webp',
    alt: '',
    date: '2023-01-14'
  },
  {
    name: 'Glossy HTTP Error',
    src: '/images/GraphicDesign/BetweenOCandRecreation/GlossyHTTPerror.webp',
    alt: '',
    date: '2023-07-03'
  },
  {
    name: 'Lazy',
    src: '/images/GraphicDesign/BetweenOCandRecreation/lazy.webp',
    alt: '',
    date: '2023-01-28'
  },
  {
    name: 'Metro Maybe',
    src: '/images/GraphicDesign/BetweenOCandRecreation/MetroMaybe.png',
    alt: '',
    date: '2025-06-09'
  },
  {
    name: 'Windows Aero Error Idk',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsAeroErrorIdk.webp',
    alt: '',
    date: '2024-12-01'
  },
  {
    name: 'Windows Aqua',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsAqua.png',
    alt: '',
    date: '2023-07-19'
  },
  {
    name: 'Windows Embedded POS Ready 2009',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsEmbeddedPOSReady2009.png',
    alt: '',
    date: '2023-01-22'
  },
  {
    name: 'Windows XP HD',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsXP_HD.webp',
    alt: '',
    links: [
      'https://github.com/marchmountain/-Windows-XP-High-Resolution-Icon-Pack'
    ],
    date: '2022-09-27'
  },
  {
    name: 'Windows XP',
    src: '/images/GraphicDesign/BetweenOCandRecreation/WindowsXP.webp',
    alt: '',
    links: [
      'https://github.com/marchmountain/-Windows-XP-High-Resolution-Icon-Pack'
    ],
    date: '2024-04-14'
  },
  {
    name: 'Win OSX',
    src: '/images/GraphicDesign/BetweenOCandRecreation/winOSX.webp',
    alt: '',
    date: '2025-02-04'
  },
  {
    name: 'Yet Another Run Dialog',
    src: '/images/GraphicDesign/BetweenOCandRecreation/YetAnotherRunDialog.webp',
    alt: '',
    date: '2024-03-05'
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
