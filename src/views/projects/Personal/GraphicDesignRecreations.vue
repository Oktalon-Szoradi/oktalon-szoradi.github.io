<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import NavigationSideBySide from '@/components/NavigationSideBySide.vue'
import type { ScrollToObjects } from '@/assets/types'

const NAVIGATION: ScrollToObjects[] = [
  {
    name: 'Window frames in Aero and Aqua',
    id: 'WindowFrames'
  },
  {
    name: 'Windows 7 default desktop background "Harmony"',
    id: 'Harmony'
  },
  {
    name: 'Other Windows stuff',
    id: 'OtherWindowsStuff'
  },
  {
    name: 'Miscellaneous',
    id: 'Misc'
  }
]

const IMAGES = {
  WIN7_HARMONY: [
    {
      name: '[WIP] Harmony',
      src: '/images/GraphicDesign/Recreations/WIP_Windows7_Background.png',
      alt: 'Screenshot of Affinity Designer showing a work-in-progress recreation of the default Windows 7 "Harmony" desktop background'
    },
    {
      name: '[WIP] Harmony Grass',
      src: '/images/GraphicDesign/Recreations/WIP_Windows7_Background_Grass.png',
      alt: 'Screenshot of Affinity Designer showing a work-in-progress recreation of the default Windows 7 "Harmony" desktop background, zoomed into the grass section'
    },
    {
      name: '[WIP] Harmony Butterfly',
      src: '/images/GraphicDesign/Recreations/WIP_Windows7_Background_Butterfly.png',
      alt: 'Screenshot of Affinity Designer showing a work-in-progress recreation of the default Windows 7 "Harmony" desktop background, zoomed into the butterfly'
    }
  ],
  WINDOW_FRAMES: [
    {
      name: 'Windows Vista Aero',
      src: '/images/GraphicDesign/Recreations/SkeuomorphicRecreations_WindowsAero.webp',
      alt: 'Recreation of the `winver` window in Windows Vista, sans the text and branding'
    },
    {
      name: 'macOS X Aqua',
      src: '/images/GraphicDesign/Recreations/SkeuomorphicRecreations_macOSAqua.webp',
      alt: 'Recreation of the "About This Mac" window in macOS X, sans the text and branding'
    }
  ],
  OTHER_WINDOWS: [
    {
      name: 'Purble Pairs Card',
      src: '/images/GraphicDesign/Recreations/SkeuomorphicCard.webp',
      alt: 'Recreation of the card backdrop used in the game Purble Pairs, apart of the game Purble Place included in Windows Vista and Windows 7',
      date: '2022-03-06'
    },
    {
      name: 'Misc. Aero Stuff',
      src: '/images/GraphicDesign/Recreations/WindowsAeroElements.webp',
      alt: 'Canvas/playground/sandbox where I experimented with a variety of Aero elements',
      date: '2024-05-14'
    },
    {
      name: 'Windows 10 Color Palette in Windows 7 Style',
      src: '/images/GraphicDesign/Recreations/10colorPaletteIn7style.webp',
      alt: 'The Windows 10 color palette found in "Window Color and Appearance" (ThemeCPL) in the Aero style seen in Windows 7',
      date: '2024-07-04'
    }
  ],
  MISC: [
    // {
    //   name: 'Silly Cat',
    //   src: '/images/GraphicDesign/Recreations/SillyCat.webp',
    //   alt: 'Recreation of a cartoony silly white cat drawing originally by mauzymice',
    //   date: '2023-11-15'
    // },
    {
      name: 'Acer Webpage Error',
      src: '/images/GraphicDesign/Recreations/SkeuomorphicErrorRecreation.webp',
      alt: 'Recreation of the error page seen when trying to visit www.acer-apac.com/acer_web',
      links: ['https://www.acer-apac.com/acer_web'],
      date: '2022-12-21'
    },
    {
      name: 'Wii U - Hulu',
      src: '/images/GraphicDesign/Recreations/WiiU_Hulu.webp',
      alt: 'Wii U loading screen, loading Hulu, with the icon modified to be more glossy and reflective',
      date: '2024-04-07'
    }
  ]
}
</script>

<template>
  <div class="container">
    <!-- <NavigationButtons
      :queryIndex="1"
      :queryParams="{ scrollTo: 'GraphicDesign' }"
    /> -->
    <NavigationSideBySide
      :scrollToHeadings="NAVIGATION"
      :navigationButtons_queryIndex="1"
      :navigationButtons_queryParams="{ scrollTo: 'GraphicDesign' }"
      :onlyOneLevel="true"
      width="personal"
    >
      <GlassCard title="Recreations" :noCenter="true">
        <p class="category-marker">Graphic Design</p>
        <p>
          Here are things I've made that aim to be an accurate recreation of
          something.
        </p>
      </GlassCard>
      <GlassCard id="WindowFrames">
        <p class="date-marker">started on <code>2023-07-24</code></p>
        <h2>Window frames in Aero and Aqua</h2>
        <p>
          I'm most proud of these. I've faithfully recreated the Windows Vista
          <code>winver</code> window, though without the banner and text. I've
          figured out how the close button is designed (to get it accurate, one
          of the things to do is layer multiple gradients).
        </p>
        <p>
          I've also done the same for the early version of macOS X, when Aqua
          still had pinstripes.
        </p>
        <ImageGallery
          :src="IMAGES.WINDOW_FRAMES"
          :perRow="4"
          :squareImages="false"
        />
      </GlassCard>
      <GlassCard id="Harmony">
        <p class="date-marker">started on <code>2023-11-22</code></p>
        <h2>Windows 7 default desktop background "Harmony"</h2>
        <p>
          The artist of the original is Chuck Anderson, who still has the
          original file made in Photoshop. Of course, not really sharable, as
          that could cause legal troubles. It would be cool if we could have it,
          though.
        </p>
        <p>
          <a
            href="https://windowswallpaper.miraheze.org/wiki/Harmony#cite_ref-7"
            target="_blank"
            ><code
              >https://windowswallpaper.miraheze.org/wiki/Harmony#cite_ref-7</code
            ></a
          >
        </p>
        <!-- <p>
        <a
          href="https://x.com/NoPattern/status/1357451559655907331"
          target="_blank"
          ><code>https://x.com/NoPattern/status/1357451559655907331</code></a
        >
      </p>
      <p>
        <a
          href="https://x.com/NoPattern/status/1366760967670034437"
          target="_blank"
          ><code>https://x.com/NoPattern/status/1366760967670034437</code></a
        >
      </p> -->
        <p>
          So, I decided to try recreating it myself! It's a lot of work, though;
          trying to make it accurate and put in all the little details.
        </p>
        <p>
          Each singular blade of grass I did manually, one by one. Also added a
          hint of green blur amidst the grass.
        </p>
        <p>
          The butterfly I also tried to trace and make look right manually. I
          was thinking it might be the MSN butterfly, which would be cool, but
          it isn't; it's a bit different.
        </p>
        <p>
          I haven't touched this in a while. I don't know yet when I'll come
          back to this and continue it.
        </p>
        <ImageGallery
          :src="IMAGES.WIN7_HARMONY"
          :perRow="4"
          :squareImages="false"
        />
      </GlassCard>
      <GlassCard>
        <h2 id="OtherWindowsStuff">Other Windows stuff</h2>
        <ImageGallery
          :src="IMAGES.OTHER_WINDOWS"
          :perRow="4"
          :squareImages="false"
        />
      </GlassCard>
      <GlassCard>
        <h2 id="Misc">Mis&shy;cel&shy;la&shy;ne&shy;ous</h2>
        <ImageGallery :src="IMAGES.MISC" :perRow="4" :squareImages="false" />
      </GlassCard>
    </NavigationSideBySide>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/extra_fancy-headings';
</style>
