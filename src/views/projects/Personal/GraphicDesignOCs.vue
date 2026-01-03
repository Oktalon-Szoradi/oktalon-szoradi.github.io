<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import NavigationSideBySide from '@/components/NavigationSideBySide.vue'
import type { ScrollToObjects } from '@/assets/types'

const NAVIGATION: ScrollToObjects[] = [
  {
    name: '<UI Elements>-like',
    id: 'Elements'
  },
  {
    name: 'Interfaces-like',
    id: 'Interfaces'
  },
  {
    name: 'Decorative',
    id: 'Decorative'
  },
  {
    name: 'Miscellaneous',
    id: 'Misc'
  }
]

const IMAGES = {
  UI: [
    {
      name: 'Buttons again',
      src: '/images/GraphicDesign/OC/ButtonsAgain.webp',
      alt: 'Button design concept with various states',
      date: '2023-04-16'
    },
    {
      name: 'Some shiny gray thing',
      src: '/images/GraphicDesign/OC/idk_20241222.webp',
      alt: 'idk, some shiny gray thing; it looks cool tho',
      date: '2024-12-22'
    },
    {
      name: 'Checkboxes',
      src: '/images/GraphicDesign/OC/Checkboxes.webp',
      alt: "Glossy 3D checkboxes; unchecked and checked states; the checkmark could've been more optically centered…",
      date: '2024-12-23'
    },
    {
      name: 'Glossy Pills',
      src: '/images/GraphicDesign/OC/GlossyPills.webp',
      alt: 'Glossy Pills',
      date: '2025-08-19'
    },
    {
      name: 'Samsung OneUI-like concept',
      src: '/images/GraphicDesign/OC/idk.webp',
      alt: "An informational pop-up with 2 options, along with a bottom navigation bar; imitating Samsung's OneUI, but with a dark 3D style. Additionally a Windows-like window",
      date: '2023-11-02'
    },
    {
      name: 'Random Design 2024-05-18',
      src: '/images/GraphicDesign/OC/RandomDesign_20240518.webp',
      alt: 'Tried to remake Apple Spotlight; additionally a glossy fast-forward icon'
    },
    {
      name: 'Random Frutiger Aero Buttons',
      src: '/images/GraphicDesign/OC/RandomFrutigerButtons.webp',
      alt: 'A colorful Aero-like background, with a glossy sphere and some buttons in some states; Also posted to Reddit: https://www.reddit.com/r/FrutigerAero/comments/14i7i8m/random_frutiger_aero_design_i_made/',
      date: '2023-06-25'
    },
    {
      name: 'Reflection Types',
      src: '/images/GraphicDesign/OC/Reflection-Types.webp',
      alt: 'Showing 5 different kinds of gloss / light-reflections',
      date: '2024-03-28'
    },
    {
      name: 'UI Elements Dark',
      src: '/images/GraphicDesign/OC/UIElementsDark.png',
      alt: 'A 3D-ish glossy-ish concept for (OS) UI elements',
      date: '2024-04-12'
    },
    {
      name: 'Random Idea',
      src: '/images/GraphicDesign/OC/RandomIdea.png',
      alt: "Concept for controlling the modulation/vibrato of one [music] note (you'd find e.g. in a DAW)",
      date: '2024-07-02'
    }
  ],
  INTERFACES: [
    {
      name: 'Media Center Thingy',
      src: '/images/GraphicDesign/OC/MediaCenterThingy.webp',
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
      name: 'Thesi',
      src: '/images/GraphicDesign/OC/Thesi.webp',
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
      name: 'Silly',
      src: '/images/GraphicDesign/OC/Silly.webp',
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
      name: 'Lasers Green',
      src: '/images/GraphicDesign/OC/LasersGreen.webp',
      alt: ''
    },
    {
      name: 'Untitled',
      src: '/images/GraphicDesign/OC/untitled.webp',
      alt: ''
    }
  ],
  DECORATIVE: [
    {
      name: 'Frutiger Aero Sphere Circle',
      src: '/images/GraphicDesign/OC/FrutigerAeroSphereCircle.webp',
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
      name: "I Have No Idea But It's Gay",
      src: '/images/GraphicDesign/OC/IHaveNoIdeaButItsGay.webp',
      alt: ''
    },
    {
      name: 'Text Effects Demo',
      src: '/images/GraphicDesign/OC/TextEffectsDemo.webp',
      alt: ''
    },
    {
      name: 'Wavy Lines',
      src: '/images/GraphicDesign/OC/WavyLines.webp',
      alt: ''
    }
  ],
  MISC: [
    {
      name: 'Ad (bad)',
      src: '/images/GraphicDesign/OC/ad_(bad).webp',
      alt: ''
    },
    {
      name: 'ChatGPT Will Remember That',
      src: '/images/GraphicDesign/OC/ChatGPT_will_remember_that.webp',
      alt: ''
    },
    {
      name: 'HTLWW Jahresbericht',
      src: '/images/GraphicDesign/OC/HTLWW_Jahresbericht.webp',
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
      name: 'Thermo Hygro',
      src: '/images/GraphicDesign/OC/ThermoHygro.webp',
      alt: ''
    }
    // {
    //   name: 'Vienna Lines Quick Connections Plan',
    //   src: '/images/GraphicDesign/OC/ViennaLines_QuickConnectionsPlan.webp',
    //   alt: ''
    // }
  ]
}
</script>

<template>
  <div class="container">
    <NavigationSideBySide :scrollToHeadings="NAVIGATION"
      :navigationButtons_queryIndex="1"
      :navigationButtons_queryParams="{ scrollTo: 'GraphicDesign' }"
      :onlyOneLevel="true" width="personal">
      <GlassCard title="Original Creations" :noCenter="true">
        <p class="category-marker">Graphic Design</p>
        <p>Here are things I've made that are mostly completely original.</p>
      </GlassCard>
      <GlassCard>
        <h2 id="Elements">&lt;UI Elements&gt;-like</h2>
        <ImageGallery :src="IMAGES.UI" :perRow="7" :squareImages="true" />
      </GlassCard>
      <GlassCard>
        <h2 id="Interfaces">Interfaces-like</h2>
        <ImageGallery :src="IMAGES.INTERFACES" :perRow="7"
          :squareImages="true" />
      </GlassCard>
      <GlassCard>
        <h2 id="Decorative">Decorative</h2>
        <ImageGallery :src="IMAGES.DECORATIVE" :perRow="7"
          :squareImages="true" />
      </GlassCard>
      <GlassCard>
        <h2 id="Misc">Miscellaneous</h2>
        <ImageGallery :src="IMAGES.MISC" :perRow="7" :noDownload="false"
          :squareImages="true" />
        <!-- <ImageGallery
        :src="[
          {
            name: 'My Media Player Classic Theme',
            src: '/images/GraphicDesign/OC/MyMediaPlayerClassicTheme.png',
            alt: ''
          }
        ]"
        :perRow="2"
        :noDownload="false"
        :squareImages="false"
      /> -->
      </GlassCard>
    </NavigationSideBySide>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/extra_fancy-headings';
</style>
