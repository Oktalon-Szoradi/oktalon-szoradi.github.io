<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
import AbbreviationMobile from '@/components/AbbreviationMobile.vue'
import VideoHandler from '@/components/VideoHandler.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const IMAGES = [
  {
    name: 'Home',
    src: '/images/htl5/pwa/AudioArchive_Mockup-Home.webp',
    alt: 'The Home page of a mockup for the AudioArchive PWA web technologies project'
  },
  {
    name: 'Shelf',
    src: '/images/htl5/pwa/AudioArchive_Mockup-Shelf.webp',
    alt: 'The Shelf page of a mockup for the AudioArchive PWA web technologies project'
  }
]
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-5' }" />
    <GlassCard title="Web Tech - PWA" :noCenter="true">
      <h1 class="year-marker">
        HTL 5th Grade (Cumulative: 13) | School year 2023/2024
      </h1>
      <p>
        In web technologies, as part of learning fullstack development, we were
        tasked with creating a
        <AbbreviationMobile title="Progressive Web App">PWA</AbbreviationMobile>
        .
      </p>
      <p>
        Check out the GitHub repository, especially the Releases for more
        development insight. The
        <a href="https://render.com/" target="_blank">Render</a> instance shows
        you a glimpse of it. "Nonfunctional" because there is no server/backend,
        thus no audio is actually saved. If there was, then the "Notice:
        Currently, all saved audio is public!" would actually be true.
      </p>
      <div class="text-center">
        <PushButton
          color="green"
          href="https://github.com/Oktalon-Szoradi/AudioArchivePWA"
        >
          GitHub Repository
        </PushButton>
        <PushButton color="purple" href="https://audioarchivepwa.onrender.com/">
          v0.2.4 on Render (nonfunctional)
        </PushButton>
      </div>
      <p>
        So, first we had to quickly make some icon/logo and mockup. Some wanted
        to perfect their logo, but our teacher told them that they shouldn't
        take so long doing it, since the main course here was about the PWA, not
        the appetizer that is the logo.
      </p>
      <p>Here's my moodboard:</p>
      <ImageGallery
        :src="[
          {
            name: 'Moodboard',
            src: '/images/htl5/pwa/AudioArchive_MoodBoard.webp',
            alt: 'The moodboard for the AudioArchive PWA web technologies project'
          }
        ]"
        :perRow="2"
        :noDownload="true"
      />
      <p>The description is in German. It reads:</p>
      <i>
        An audio manager, with which you can record something with the
        microphone, and save that with a title, description, and rating; You may
        also play the recordings (eventually with a visualization too) and
        download them in a variety of formats (mp3, wav, ogg, flac).
      </i>
      <p>
        I wasn't able to achieve the downloading in different formats part. Oh
        well.
      </p>
      <p>
        Additionally, though I don't think it was required, I made a mockup in
        Affinity Designer:
      </p>
      <ImageGallery :src="IMAGES" :perRow="6" :noDownload="true" />
      <h2>v0.1.0 showcase:</h2>
      <p>Here's a video of me showcasing v0.1.0</p>
      <p>Don't mind the Discord ping sound at the end of the video</p>
      <VideoHandler src="/videos/AudioArchivev0.1.0_2024-02-22_20-36-52.mp4" />
    </GlassCard>
  </main>
</template>

<style scoped lang="scss">
p {
  text-align: justify;
}

.description {
  margin-bottom: 4px;
}
</style>
