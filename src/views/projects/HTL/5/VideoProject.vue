<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import VideoHandler from '@/components/VideoHandler.vue'
import AbbreviationMobile from '@/components/AbbreviationMobile.vue'
import PushButton from '@/components/PushButton.vue'
// import AccordionSingle from '@/components/AccordionSingle.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-5' }" />
    <GlassCard title="Video" :noCenter="true">
      <h1 class="year-marker">
        HTL 5th Grade (Cumulative: 13) | School year 2023/2024
      </h1>
      <p>
        So, as is in Media Technology in 4th and 5th grade, we're split into
        groups to go through photography (only 4th grade), audio technology,
        video technology, and 3D (using Blender).
      </p>
      <p>
        This time, the audio and video group sorta work together. This here is
        when I got to the video group; and had to pick a friend who was in the
        audio group. We both decide on a video we want to recreate (audio people
        remake the
        <AbbreviationMobile title="Sound Effects">SFX</AbbreviationMobile>
        and
        <AbbreviationMobile title="Background Music">BGM</AbbreviationMobile>,
        video people remake the video shots).
      </p>
      <p>We decided on the following YouTube video:</p>
      <p>
        <a href="https://www.youtube.com/watch?v=Cr0a1mDKyCY" target="_blank">
          <b>PRETTY COOL GREEK YOGURT PRODUCT VIDEO</b><br />
          https://www.youtube.com/watch?v=Cr0a1mDKyCY
        </a>
        <br />
        by
        <a
          href="https://www.youtube.com/channel/UCK-t6B_HmKt10-l6JwA4_bA"
          target="_blank"
          >Duke Cha (@?)</a
        >
      </p>
      <p>
        I'm not sure what happened to their YouTube channel, it has been
        deleted. I still have the original video archived, but won't be
        uploading it because I don't know its license.
      </p>
      <p>
        The original video used Tillamook Oregon strawberry yogurt. The closest
        in design I could get here was from Zott; which is kinda funny because
        it sounds like the name of our audio teacher.
      </p>
      <p>
        So, yeah, I bought strawberries and that yogurt each time we were gonna
        record some shots. The small plate is mine from home, as well as the
        table cloth. For the background, I used pink paper. I also bought that
        small glass bottle of milk and some plain yogurt for that one shot.
      </p>
      <p>
        Why am I saying "we"? Well, I had a friend help me, and since in the end
        I had to focus on 3D (Blender), I made a deal with him that I do his
        <AbbreviationMobile title="Progressive Web App">PWA</AbbreviationMobile>
        project for him, and he does my video project. So, he actually put this
        video together in Adobe Premiere Pro. Like, he did the whole
        composition; the editing, transitions, effects, etc.
      </p>
      <p>
        Who's "he"? Anar! Check out his YouTube channel:
        <PushButton
          color="red"
          href="https://www.youtube.com/channel/UC4RDOY84KjqANxeQVzkbvZQ"
          >AnarxP (@AnarxP)</PushButton
        ><br />
        Big shoutouts and thanks to him&emsp;:3
      </p>
      <VideoHandler src="/videos/Strawberry Commercial Vers. 1.5.webm" />
      <b>2024-04-17</b>
      <p>
        The audio here is still the original (from the original video). I dunno
        what music is being played here, though I haven't checked. I'm not sure
        if it's royalty-free.
      </p>
    </GlassCard>
  </main>
</template>

<style scoped lang="scss">
.accordion {
  :deep([data-part='item-trigger']) {
    padding: 0 0.75em;
  }

  .left-right-padding {
    padding: 0 1.25em;
  }
}
</style>
