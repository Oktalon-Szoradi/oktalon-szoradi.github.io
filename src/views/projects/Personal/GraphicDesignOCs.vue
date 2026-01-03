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
    name: 'Desktop Backgrounds',
    id: 'DesktopBackgrounds'
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
      alt: 'Glossy pill-shaped elements in a rainbow of colors',
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
      alt: 'Colorful Aero-like background, with a glossy sphere and some buttons in some states; Also posted to Reddit',
      links: [
        'https://www.reddit.com/r/FrutigerAero/comments/14i7i8m/random_frutiger_aero_design_i_made/'
      ],
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
      alt: '3D-ish glossy-ish concept for (OS) UI elements',
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
      alt: "A graphic inspired by the Windows Media Center and Metro UIs. The background isn't done manually, it's a blurred version of the one in Windows Media Center",
      date: '2023-11-12'
    },
    {
      name: 'Aero GRUB Bootloader',
      src: '/images/GraphicDesign/OC/AeroGrubBootloader.webp',
      alt: 'Mockup of a theme for GRUB. I did actually end up making this; I may publicize it in the future',
      date: '2024-04-13'
    },
    {
      name: 'Aero GRUB Startprogramm',
      src: '/images/GraphicDesign/OC/AeroGrubStartprogramm.webp',
      alt: 'Ditto, but a satirical German version',
      date: '2024-04-13'
    },
    {
      name: 'Aero Résumé',
      src: '/images/GraphicDesign/OC/AeroResume.webp',
      alt: "Concept for an Aero Résumé. I never finished this. I ended up just using a LaTeX template; it's also more than 1 page long",
      date: '2025-10-30'
    },
    {
      name: 'Thesi',
      src: '/images/GraphicDesign/OC/Thesi.webp',
      alt: 'Mockup for the first screen of a school project',
      date: '2024-01-17'
    },
    {
      name: 'Dashboard',
      src: '/images/GraphicDesign/OC/Dashboard.webp',
      alt: 'Concept for a dashboard, an info screen showing the time, date, other times, and weather (icons not made by me); could be constantly shown on a TV, for instance',
      date: '2025-06-21'
    },
    {
      name: 'Forced Shutdown',
      src: '/images/GraphicDesign/OC/ForcedShutdown.webp',
      alt: 'Concept/Redesign for the "System Shutdown" dialog in Windows',
      date: '2023-01-28'
    },
    {
      name: 'Silly',
      src: '/images/GraphicDesign/OC/Silly.webp',
      alt: "Glossy cyan header bar. I don't quite remember where I got the inspiration. Text is very silly",
      date: '2024-06-06'
    },
    {
      name: 'Pacer Test Info Screen Start',
      src: '/images/GraphicDesign/OC/PacerTestInfoScreen_Start.webp',
      alt: 'Concept for an info/stats screen for the FitnessGram PACER Test—Stopwatch icon from Windows Vista/7—Beginning',
      date: '2023-03-10'
    },
    {
      name: 'Pacer Test Info Screen Middle 1',
      src: '/images/GraphicDesign/OC/PacerTestInfoScreen_Middle1.webp',
      alt: 'Concept for an info/stats screen for the FitnessGram PACER Test—Stopwatch icon from Windows Vista/7—Lap 74',
      date: '2023-03-10'
    },
    {
      name: 'Pacer Test Info Screen Middle 2',
      src: '/images/GraphicDesign/OC/PacerTestInfoScreen_Middle2.webp',
      alt: 'Concept for an info/stats screen for the FitnessGram PACER Test—Stopwatch icon from Windows Vista/7—Lap 214',
      date: '2023-03-10'
    },
    {
      name: 'Pacer Test Info Screen End',
      src: '/images/GraphicDesign/OC/PacerTestInfoScreen_End.webp',
      alt: 'Concept for an info/stats screen for the FitnessGram PACER Test—Stopwatch icon from Windows Vista/7—End Of Test',
      date: '2023-03-10'
    },
    {
      name: 'Skeuomorphism Website',
      src: '/images/GraphicDesign/OC/SkeuomorphismWebsite.webp',
      alt: 'Concept for a glossy blue game website (navbar)',
      date: '2024-03-04'
    },
    {
      name: 'Something',
      src: '/images/GraphicDesign/OC/Something.webp',
      alt: 'Concept for a metallic gray website',
      date: '2024-12-28'
    },
    {
      name: 'Lasers Green',
      src: '/images/GraphicDesign/OC/LasersGreen.webp',
      alt: 'Concept for a laser aesthetic website: Green. Inspired by a dream I had. Could also use red or blue',
      date: '2023-10-08'
    },
    {
      name: 'Untitled',
      src: '/images/GraphicDesign/OC/untitled.webp',
      alt: 'Concept for an Aero-ish website. Background image is from Windows Spotlight: "Dreamy sunset sea sky at beach, Maldives, Noonu Atoll Sun Siyam Iru Fushi"',
      links: ['https://windows10spotlight.com/images/32654'],
      date: '2024-12-05'
    }
  ],
  DECORATIVE: [
    {
      name: 'Frutiger Aero Sphere Circle',
      src: '/images/GraphicDesign/OC/FrutigerAeroSphereCircle.webp',
      alt: 'Glossy green sphere. I was trying to follow this Reddit tutorial on r/FrutigerAero:',
      links: [
        'https://www.reddit.com/r/FrutigerAero/comments/zmgrux/advanced_aero_sphere_tutorial/'
      ],
      date: '2022-12-22'
    },
    {
      name: 'idk (actually)',
      src: '/images/GraphicDesign/OC/idk_(actually).webp',
      alt: 'Glossy green "idk" text; a glossy green gradient, inner glow, curvy gloss/reflection, thick dark border, thick outer light border, and a subtle green glow',
      date: '2024-06-09'
    },
    {
      name: 'Text Effects Demo',
      src: '/images/GraphicDesign/OC/TextEffectsDemo.webp',
      alt: 'Similar to the green "idk", but this uses only the effects you can apply to stuff in Affinity Designer 2',
      date: '2024-06-18'
    },
    {
      name: 'Idk Maybe Frutiger Aero',
      src: '/images/GraphicDesign/OC/idkMaybeFrutigerAero.webp',
      alt: 'Tried to make a background in a <Frutiger Aero>-like style, but put too many elements',
      links: [
        'https://www.reddit.com/r/FrutigerAero/comments/zva820/i_tried_making_a_frutiger_aero_background_i_think/'
      ],
      date: '2022-12-24'
    },
    {
      name: "I Have No Idea But It's Gay",
      src: '/images/GraphicDesign/OC/IHaveNoIdeaButItsGay.webp',
      alt: 'Diamond-like pattern using the colors of the gay MLM pride flag',
      date: '2024-01-27'
    },
    {
      name: 'Wavy Lines',
      src: '/images/GraphicDesign/OC/WavyLines.webp',
      alt: 'Background with wavy lines made by taking straight lines and using the mesh warp tool',
      date: '2025-06-02'
    }
  ],
  DESKTOP_BACKGROUNDS: [
    {
      name: 'Aurora 1 Dark',
      src: '/images/GraphicDesign/DesktopBackgrounds/Aurora1_Dark.png',
      alt: 'Dark desktop background with aurora-like curves and subtle bokeh',
      date: '2024-01-27'
    },
    {
      name: 'Aurora 1 Dark (alt.)',
      src: '/images/GraphicDesign/DesktopBackgrounds/Aurora1_Dark-alt.png',
      alt: 'Dark desktop background with brighter aurora-like curves and subtler bokeh',
      date: '2024-01-27'
    },
    {
      name: 'Aurora 1 Light',
      src: '/images/GraphicDesign/DesktopBackgrounds/Aurora1_Light.png',
      alt: 'Light desktop background with aurora-like curbes and subtle bokeh',
      date: '2024-01-27'
    },
    {
      name: 'Aurora 2 Dark',
      src: '/images/GraphicDesign/DesktopBackgrounds/Aurora2_Dark.png',
      alt: 'Dark desktop background with wavy pipe-like curves and bubbles/bokeh',
      date: '2024-01-27'
    },
    {
      name: 'Aurora 2 Light',
      src: '/images/GraphicDesign/DesktopBackgrounds/Aurora2_Light.png',
      alt: 'Light desktop background with wavy pipe-like curves and bubbles/bokeh',
      date: '2024-01-27'
    },
    {
      name: 'Aurora 3 Dark',
      src: '/images/GraphicDesign/DesktopBackgrounds/Aurora3_Dark.png',
      alt: 'Dark desktop background with fluidy highlights and subtle bokeh',
      date: '2024-01-27'
    },
    {
      name: 'Aurora 3 Dark (alt.)',
      src: '/images/GraphicDesign/DesktopBackgrounds/Aurora3_Dark-alt.png',
      alt: 'Dark desktop background with stronger fluidy highlights and subtle bokeh',
      date: '2024-01-27'
    },
    {
      name: 'Aurora 3 Light',
      src: '/images/GraphicDesign/DesktopBackgrounds/Aurora3_Light.png',
      alt: 'Light desktop background with fluidy highlights and subtle bokeh',
      date: '2024-01-27'
    },
    {
      name: 'My Desktop Background 2',
      src: '/images/GraphicDesign/DesktopBackgrounds/MyDesktopBackground2.png',
      alt: 'Dark desktop background with tetrominoes layed out as a rainbow',
      date: '2022-10-15'
    },
    {
      name: 'My Background',
      src: '/images/GraphicDesign/DesktopBackgrounds/MyBackground.png',
      alt: 'Dark desktop background with tetrominoes layed out as a rainbow, zoomed out a bit and stronger colors at the top and bottom',
      date: '2022-08-20'
    },
    {
      name: 'My Desktop Background',
      src: '/images/GraphicDesign/DesktopBackgrounds/MyDesktopBackground.png',
      alt: 'Dark desktop background with tetrominoes layed out as a rainbow and a 40px thick rainbow bar at the bottom to color the Windows 10 taskbar',
      date: '2021-10-15'
    },
    {
      name: 'My Windows 11 Desktop Background',
      src: '/images/GraphicDesign/DesktopBackgrounds/MyWin11DesktopBackground.png',
      alt: 'Dark desktop background with tetrominoes layed out as a rainbow and a 48px thick rainbow bar at the bottom to color the Windows 11 taskbar',
      date: '2021-12-17'
    },
    {
      name: 'My Windows 11 Desktop Background 2',
      src: '/images/GraphicDesign/DesktopBackgrounds/MyWin11DesktopBackground2.png',
      alt: 'Dark desktop background with tetrominoes layed out as a rainbow, stronger colors at the top and bottom, and a 48px thick rainbow bar at the bottom to color the Windows 11 taskbar',
      date: '2022-04-02'
    },
    {
      name: 'My 16:10 Desktop Background',
      src: '/images/GraphicDesign/DesktopBackgrounds/My16by10DesktopBackground.png',
      alt: 'Dark desktop background with tetrominoes layed out as a rainbow and a 40px thick rainbow bar at the bottom to color the Windows 10 taskbar, made to fit a screen resolution of 1680×1050 or ratio of 16:10',
      date: '2022-08-20'
    }
  ],
  MISC: [
    {
      name: 'Ad (bad)',
      src: '/images/GraphicDesign/OC/ad_(bad).webp',
      alt: 'Advertisement for a Copilot+ Tablet in the style of early 2010s TV ads; prices and text made up. "(bad)" because the BUY NOW! button kinda looks a bit ugly imo',
      links: [
        'https://i02.hsncdn.com/is/image/HomeShoppingNetwork/orig/-~23508613w.jpg'
      ],
      date: '2024-12-01'
    },
    {
      name: 'ChatGPT Will Remember That',
      src: '/images/GraphicDesign/OC/ChatGPT_will_remember_that.webp',
      alt: `ChatGPT's "Memory updated" thing is kind of like the "X will remember that" in Minecraft: Story Mode`,
      date: '2024-09-21'
    },
    {
      name: 'HTLWW Jahresbericht',
      src: '/images/GraphicDesign/OC/HTLWW_Jahresbericht.webp',
      alt: "Concept for a poster advertising how you can participate in the making of the yearbook (Jahresbericht) for HTL Wien West. I made this after seeing how… ugly the one they actually used was. I just did this in my free time, didn't actually show anyone-",
      date: '2023-05-01'
    },
    {
      name: 'Phone Frame',
      src: '/images/GraphicDesign/OC/PhoneFrame.webp',
      alt: 'Unbranded phone showing a green screen. Frame loosely based off a modern iPhone',
      date: '2024-12-01'
    },
    {
      name: 'Profile Picture Border',
      src: '/images/GraphicDesign/OC/ProfilePictureBorder.webp',
      alt: 'My 3 stacked €0.50 coins profile picture in a Windows Vista/7 (Aero) border/frame used for user account pictures',
      date: '2024-05-14'
    },
    {
      name: 'Thermo Hygro',
      src: '/images/GraphicDesign/OC/ThermoHygro.webp',
      alt: 'Graph showing when the face on a specific thermo-/hygrometer smiles/frowns according to the manual. Background graphics for ice cubes, sun, deser, and rain from irasutoya.com',
      links: [
        'https://www.tfa-dostmann.de/en/product/digital-thermo-hygrometer-with-comfort-level-30-5053/',
        'https://www.irasutoya.com/'
      ],
      date: '2023-07-30'
    }
    // {
    //   name: 'Vienna Lines Quick Connections Plan',
    //   src: '/images/GraphicDesign/OC/ViennaLines_QuickConnectionsPlan.webp',
    //   alt: '',
    //   date: '2025-12-03'
    // }
  ]
}
</script>

<template>
  <div class="container">
    <NavigationSideBySide
      :scrollToHeadings="NAVIGATION"
      :navigationButtons_queryIndex="1"
      :navigationButtons_queryParams="{ scrollTo: 'GraphicDesign' }"
      :onlyOneLevel="true"
      width="personal"
    >
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
        <ImageGallery
          :src="IMAGES.INTERFACES"
          :perRow="7"
          :squareImages="true"
        />
      </GlassCard>
      <GlassCard>
        <h2 id="Decorative">Decorative</h2>
        <ImageGallery
          :src="IMAGES.DECORATIVE"
          :perRow="7"
          :squareImages="true"
        />
        <h2 id="DesktopBackgrounds">Desktop Backgrounds</h2>
        <ImageGallery
          :src="IMAGES.DESKTOP_BACKGROUNDS"
          :perRow="7"
          :squareImages="true"
        />
      </GlassCard>
      <GlassCard>
        <h2 id="Misc">Miscellaneous</h2>
        <ImageGallery
          :src="IMAGES.MISC"
          :perRow="7"
          :noDownload="false"
          :squareImages="true"
        />
        <!-- <ImageGallery
        :src="[
          {
            name: 'My Media Player Classic Theme',
            src: '/images/GraphicDesign/OC/MyMediaPlayerClassicTheme.png',
            alt: '',
date: '202'
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
