<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const IMAGES = [
  {
    name: 'Ad (bad)',
    src: '/images/GraphicDesign/OC/ad_(bad).webp',
    alt: ''
  },
  {
    name: 'Aero GRUB Bootloader',
    src: '/images/GraphicDesign/OC/AeroGrubBootloader.webp',
    alt: ''
  },
  {
    name: 'Aero GRUB Startprogramm',
    src: '/images/GraphicDesign/OC/AeroGrubStartprogramm.webp',
    alt: ''
  },
  {
    name: 'Aero Résumé',
    src: '/images/GraphicDesign/OC/AeroResume.webp',
    alt: ''
  },
  {
    name: 'Buttons Again',
    src: '/images/GraphicDesign/OC/ButtonsAgain.webp',
    alt: ''
  },
  {
    name: 'ChatGPT Will Remember That',
    src: '/images/GraphicDesign/OC/ChatGPT_will_remember_that.webp',
    alt: ''
  },
  {
    name: 'Checkboxes',
    src: '/images/GraphicDesign/OC/Checkboxes.webp',
    alt: ''
  },
  {
    name: 'Dashboard',
    src: '/images/GraphicDesign/OC/Dashboard.webp',
    alt: ''
  },
  {
    name: 'Forced Shutdown',
    src: '/images/GraphicDesign/OC/ForcedShutdown.webp',
    alt: ''
  },
  {
    name: 'Frutiger Aero Sphere Circle',
    src: '/images/GraphicDesign/OC/FrutigerAeroSphereCircle.webp',
    alt: ''
  },
  {
    name: 'Glossy Pills',
    src: '/images/GraphicDesign/OC/GlossyPills.webp',
    alt: ''
  },
  {
    name: 'HTLWW Jahresbericht',
    src: '/images/GraphicDesign/OC/HTLWW_Jahresbericht.webp',
    alt: ''
  },
  {
    name: 'Idk 2024 12 22',
    src: '/images/GraphicDesign/OC/idk_20241222.webp',
    alt: ''
  },
  {
    name: 'Idk (actually)',
    src: '/images/GraphicDesign/OC/idk_(actually).webp',
    alt: ''
  },
  {
    name: 'Idk Maybe Frutiger Aero',
    src: '/images/GraphicDesign/OC/idkMaybeFrutigerAero.webp',
    alt: ''
  },
  {
    name: 'Idk',
    src: '/images/GraphicDesign/OC/idk.webp',
    alt: ''
  },
  {
    name: "I Have No Idea But It's Gay",
    src: '/images/GraphicDesign/OC/IHaveNoIdeaButItsGay.webp',
    alt: ''
  },
  {
    name: 'Lasers Green',
    src: '/images/GraphicDesign/OC/LasersGreen.webp',
    alt: ''
  },
  {
    name: 'Media Center Thingy',
    src: '/images/GraphicDesign/OC/MediaCenterThingy.webp',
    alt: ''
  },
  {
    name: 'Pacer Test Info Screen Start',
    src: '/images/GraphicDesign/OC/PacerTestInfoScreen_Start.webp',
    alt: ''
  },
  {
    name: 'Pacer Test Info Screen Middle 1',
    src: '/images/GraphicDesign/OC/PacerTestInfoScreen_Middle1.webp',
    alt: ''
  },
  {
    name: 'Pacer Test Info Screen Middle 2',
    src: '/images/GraphicDesign/OC/PacerTestInfoScreen_Middle2.webp',
    alt: ''
  },
  {
    name: 'Pacer Test Info Screen End',
    src: '/images/GraphicDesign/OC/PacerTestInfoScreen_End.webp',
    alt: ''
  },
  {
    name: 'Phone Frame',
    src: '/images/GraphicDesign/OC/PhoneFrame.webp',
    alt: ''
  },
  {
    name: 'Profile Picture Border',
    src: '/images/GraphicDesign/OC/ProfilePictureBorder.webp',
    alt: ''
  },
  {
    name: 'Random Design 2024 05 18',
    src: '/images/GraphicDesign/OC/RandomDesign_20240518.webp',
    alt: ''
  },
  {
    name: 'Random Frutiger Buttons',
    src: '/images/GraphicDesign/OC/RandomFrutigerButtons.webp',
    alt: ''
  },
  {
    name: 'Random Idea',
    src: '/images/GraphicDesign/OC/RandomIdea.png',
    alt: ''
  },
  {
    name: 'Reflection Types',
    src: '/images/GraphicDesign/OC/Reflection-Types.webp',
    alt: ''
  },
  {
    name: 'Silly',
    src: '/images/GraphicDesign/OC/Silly.webp',
    alt: ''
  },
  {
    name: 'Skeuomorphism Website',
    src: '/images/GraphicDesign/OC/SkeuomorphismWebsite.webp',
    alt: ''
  },
  {
    name: 'Something',
    src: '/images/GraphicDesign/OC/Something.webp',
    alt: ''
  },
  {
    name: 'Text Effects Demo',
    src: '/images/GraphicDesign/OC/TextEffectsDemo.webp',
    alt: ''
  },
  {
    name: 'Thermo Hygro',
    src: '/images/GraphicDesign/OC/ThermoHygro.webp',
    alt: ''
  },
  {
    name: 'Thesi',
    src: '/images/GraphicDesign/OC/Thesi.webp',
    alt: ''
  },
  {
    name: 'UI Elements Dark',
    src: '/images/GraphicDesign/OC/UIElementsDark.png',
    alt: ''
  },
  {
    name: 'Untitled',
    src: '/images/GraphicDesign/OC/untitled.webp',
    alt: ''
  },
  {
    name: 'Vienna Lines Quick Connections Plan',
    src: '/images/GraphicDesign/OC/ViennaLines_QuickConnectionsPlan.webp',
    alt: ''
  },
  {
    name: 'Wavy Lines',
    src: '/images/GraphicDesign/OC/WavyLines.webp',
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
    <GlassCard title="Original Creations - Graphic Design">
      <p>text</p>
    </GlassCard>
    <ImageGallery
      :src="IMAGES"
      :perRow="6"
      :noDownload="false"
      :squareImages="false"
    />
    <ImageGallery
      :src="[
        {
          name: 'My Media Player Classic Theme',
          src: '/images/GraphicDesign/OC/MyMediaPlayerClassicTheme.png',
          alt: ''
        }
      ]"
      :perRow="1"
      :noDownload="false"
      :squareImages="false"
    />
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
