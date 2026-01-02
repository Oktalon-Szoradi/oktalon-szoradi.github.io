<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import VideoHandler from '@/components/VideoHandler.vue'
import PushButton from '@/components/PushButton.vue'
import AbbreviationMobile from '@/components/AbbreviationMobile.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'Misc' }" />
    <GlassCard title="ANIMUSIC-like thing">
      <VideoHandler src="/videos/ttfaf.webm" />
      <div class="text-center">
        <PushButton
          color="green"
          href="https://github.com/Oktalon-Szoradi/blender-project-2024/tree/ttfaf"
        >
          GitHub Repository
        </PushButton>
        <PushButton
          color="red"
          href="https://www.youtube.com/watch?v=t8d_C-TnjH4"
        >
          Watch on YouTube
        </PushButton>
      </div>
      <p>
        I wasn't actually satisfied with the drum I made for that
        <a href="/#/projects/school/htl5_3d">Tetris animation (HTL-5)</a>, so I
        tried making another one. I think it's quite an improvement and proves
        that I can probably get quite good at Blender if I just do stuff with/in
        it for a while, kind of like how you get good at Tetris by playing it
        more and more.
      </p>
      <p>
        The drums' impact animation isn't just a movement, but also a slight
        rotation. I think it looks a little better when I don't have the flying
        drumsticks implemented yet.
      </p>
      <p>
        This is made with
        <a href="https://github.com/jamesa08/MIDIAnimator" target="_blank"
          >MIDIAnimator</a
        >
        in
        <a href="https://www.blender.org/" target="_blank">Blender</a> (rendered
        with EEVEE). The drum shell material and drum head texture were taken
        from
        <a href="https://www.youtube.com/watch?v=4ICyhln9NCw" target="_blank"
          >Radiant Ensemble</a
        >
      </p>
      <p>
        The song is <i>Through the Fire and Flames</i>. And the
        <AbbreviationMobile title="Musical Instrument Digital Interface">
          MIDI
        </AbbreviationMobile>
        I used:
      </p>
      <a
        href="https://www.hamienet.com/33557_Dragonforce--Through-Fire-and-Flames.mid"
        target="_blank"
      >
        <code
          >https://www.hamienet.com/33557_Dragonforce--Through-Fire-and-Flames.mid</code
        >
      </a>
      <p>which I found from</p>
      <p>
        <a href="https://www.youtube.com/watch?v=KNPpuag4TdQ" target="_blank">
          <b
            >Dragonforce-Through the Fires and the Flames Synthesia cover + Midi
            1440p</b
          ><br />
          https://www.youtube.com/watch?v=KNPpuag4TdQ
        </a>
        <br />
        by
        <a
          href="https://www.youtube.com/channel/UCYL3DHypldU9XhMpI0m1ngw"
          target="_blank"
          >xXQuarternoteXx (@MinecraftDude226)</a
        >
      </p>
      <p>which I found from</p>
      <p>
        <a href="https://www.youtube.com/watch?v=EEmSwymakYY" target="_blank">
          <b>【MIDI】 DragonForce - Through The Fire And Flames</b><br />
          https://www.youtube.com/watch?v=EEmSwymakYY
        </a>
        <br />
        by
        <a
          href="https://www.youtube.com/channel/UCmOU2wURNuaNn-Gb1IIRp-A"
          target="_blank"
          >Estouls Aruta (@EstoulsAruta)</a
        >
      </p>
      <p>
        Whenever I come back to this, I wanna try implementing flying
        drumsticks. Maybe the new MIDIAnimator will be out (stable) by then.
      </p>
    </GlassCard>
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
