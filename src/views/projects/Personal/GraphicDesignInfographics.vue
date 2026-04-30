<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import NavigationSideBySide from '@/components/NavigationSideBySide.vue'
import type { ScrollToObjects } from '@/assets/types'

const NAVIGATION: ScrollToObjects[] = [
  {
    name: 'TETR.IO',
    id: 'TETR.IO'
  }
]

const IMAGES = {
  TETRIO: [
    {
      name: 'Regular Fatigue Messages',
      src: '/typst/TETR.IO/TETR.IO_zenithFatigue.png',
      alt: 'A table showing the fatigue messages in normal TETR.IO Quick Play gameplay: When they come into effect, the message, and the penalty codes.'
    },
    {
      name: 'THE TYRANT Fatigue Messages',
      src: '/typst/TETR.IO/TETR.IO_zenithFatigueRevEx.png',
      alt: 'A table showing the fatigue messages in TETR.IO Quick Play gameplay while using the THE TYRANT (reverse Expert Mode) mod: When they come into effect, the message, and the penalty codes.'
    },
    {
      name: 'BLEEDING HEARTS Fatigue Messages',
      src: '/typst/TETR.IO/TETR.IO_zenithFatigueRevDuo.png',
      alt: 'A table showing the fatigue messages in TETR.IO Quick Play gameplay while using the BLEEDING HEARTS (reverse Duo) mod: When they come into effect, the message, and the penalty codes.'
    }
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
      <GlassCard title="Infographics - Graphic Design">
        <p>Here are some infographics I've made!</p>
      </GlassCard>
      <GlassCard id="TETR.IO">
        <p class="date-marker"><code>2026-04-26</code></p>
        <h2>TETR.IO Quick Play fatigue messages</h2>
        <p>
          Tables for the fatigue messages you'll encounter while playing Quick
          Play in <a href="https://tetr.io/" target="_blank">TETR.IO</a>. These
          appear after you've been playing for a while; to make sure you aren't
          playing <i>forever</i>&emsp;:p
        </p>
        <p>
          The first is the usual one. The second is if you are playing THE
          TYRANT (reverse Expert Mode). The third is if you are playing BLEEDING
          HEARTS (reverse Duo).
        </p>
        <p>
          Made in <a href="https://typst.app/" target="_blank">Typst</a>.
          Penalty codes are just from
          <a href="https://tetr.io/js/tetrio.js" target="_blank"
            >TETR.IO's code</a
          >: <code>zenithFatigue</code>, <code>zenithFatigueRevEx</code>, and
          <code>zenithFatigueRevDuo</code>
        </p>
        <ImageGallery :src="IMAGES.TETRIO" :perRow="6" :squareImages="false" />
        <p>
          <b>Did you know:</b> You can fix any broken relationship by clearing
          two Mini O-Spin Doubles consecutively!
        </p>
        <p>
          So, actually, in BLEEDING HEARTS, after the GOODBYE. (You can no
          longer revive) fatigue, it actually just makes it so that you need to
          perform two Mini O-Spin Doubles consecutively, which is technically
          possible.
        </p>
        <p>
          Build holes for the O piece so that it spawns into them. Have one in
          hold and wait for an O in your next queue.
        </p>
        <p>
          Do 2 Mini O-Spin Doubles, and you'll revive your partner! You'll
          probably get KO'd afterwards, though, so unless your partner can
          quickly do the same for you, it'll probably still be Game Over.
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=EmrAAIKUOSw" target="_blank">
            <b>Doing 2 O-Spin Doubles in QP2 TETRIO</b><br />
            https://www.youtube.com/watch?v=EmrAAIKUOSw
          </a>
          <br />
          by
          <a
            href="https://www.youtube.com/channel/UCJ6hDC1SOnECqcUeq7Em7KA"
            target="_blank"
            >bacchess (@bacchess)</a
          >
        </p>
      </GlassCard>
    </NavigationSideBySide>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/extra_fancy-headings';
</style>
