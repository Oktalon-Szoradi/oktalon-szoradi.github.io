<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
import VideoHandler from '@/components/VideoHandler.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const IMAGES = [
  {
    name: '2023-12-16: Original Sketch',
    src: '/images/htl5/blender/IMG-20231216-WA0036.webp',
    alt: 'Photo of my original sketch on a sticky note'
  },
  {
    name: '2023-12-20: Revised Sketch',
    src: '/images/htl5/blender/20231220_170559.webp',
    alt: 'Photo of my revised sketch'
  }
]
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-5' }" />
    <GlassCard title="3D (Blender)" :noCenter="true">
      <h1 class="year-marker">
        HTL 5th Grade (Cumulative: 13) | School year 2023/2024
      </h1>
      <VideoHandler src="/videos/TetrisAnimatedRendered(ish).webm" />
      <h1>Blender Project – 5th grade</h1>
      <b>Teacher's grade: 3 or 2? i forgor </b>
      <p class="description">
        This is a Blender animation controlled by a MIDI of a Tetris theme
        rendition I made in Soundtrap.
      </p>
      <div class="text-center">
        <PushButton
          color="green"
          href="https://github.com/Oktalon-Szoradi/blender-project-2024"
        >
          GitHub Repository
        </PushButton>
        <PushButton
          color="red"
          href="https://www.youtube.com/watch?v=Bt0lv-PRgGM"
        >
          Watch on YouTube
        </PushButton>
      </div>
      <p>
        I was ambitious(?) and wanted to try out
        <a href="https://github.com/jamesa08/MIDIAnimator" target="_blank"
          >MIDIAnimator</a
        >
        (at the time: v1.0.0-beta.3.4), however, I was still quite inexperienced
        with Blender. I spent too much time trying to make just a
        drum&emsp;&gt;.&lt;
      </p>
      <p>
        Initially, I wanted to make an ANIMUSIC-like animation inspired by Aqua
        Harp but have it play Super Mario 64's water level theme (e.g. Dire Dire
        Docks). I even recreated the theme in SoundTrap, I also had an idea for
        an alternate version of the theme where the harp plays the same notes as
        the bass; this theme would be used for the concept art or director's
        commentary video.
      </p>
      <p>Below you can see I even drew it out:</p>
      <ImageGallery :src="IMAGES" :perRow="4" :noDownload="true" />
      <p>
        Was planning to have flying instruments too.<br />
        That math formula on the right side of the revised sketch is something
        ChatGPT came up with so idk if it's right lol
      </p>
      <p>
        Due to my inexperience with Blender, I was kinda "running out of time".
        But probably also procrastination? Anyways, I gave up and abandoned the
        idea of animating Dire Dire Docks, decided to go for Tetris instead. I
        made a rendition of the theme, inspiration from the Gameboy version as
        well as EA's (the one with the galaxy/space theme), a while back. So, I
        thought the main melody being square-wave-like, should be represented by
        lasers; I modelled it after the laser in ANIMUSIC's Stick Figures. The
        drum shell and cymbal (hi-hat) textures I just took from
        <a href="https://www.youtube.com/watch?v=4ICyhln9NCw" target="_blank"
          >Radiant Ensemble</a
        >
        (idk how to make textures lol). That final lesson (2024-04-17), I then
        showed our teacher what I had so far, and he was going to give me a 4.
        Then, I was able to manage to get MIDIAnimator to animate the cymbal,
        and when I showed him, I guess he was kinda impressed and interested.
      </p>
      <p>
        I was personally so interested in this, I decided to get the drums
        working in my free time on that evening. I also decided to "render" it
        (just a viewport render; material preview shading) and upload it to
        YouTube. Since I took stuff from Radiant Ensemble, this is also
        available under a copyleft license.
      </p>
      <p>
        And hey, this is my very first Blender animation!
      </p>
      <!-- <pre>
Test video. Title, description, and visibility may change at any time.

This is a Blender animation generated from a MIDI of a Tetris rendition I made
in Soundtrap.
MIDI animation made using MIDIAnimator v1.0.0-beta.3.4
https://github.com/jamesa08/MIDIAnimator

This is my first Blender animation.

Part of a school project; graded when I had only added animations to the hi-hat.
Time was getting tight.
I decided to also do the drums purely out of my own interest. So here is the
viewport render (material preview shading).
Currently not planning on finishing this, as finals are approaching. If I were
to finish this, then I would change the stage, lighting, and finish the other
instruments. That one unused blue-laser instrument is meant to play the
square-wave-synths of the theme (there should actually be 4-5 lasers).

Laser instrument is an attempted recreation of the laser instruments found in
ANIMUSIC's Stick Figures. Hi-hat model and texture and drum texture were taken
from Radiant Ensemble (https://www.youtube.com/watch?v=4ICyhln9NCw).

This project is open-source under a GPLv3 license:
https://github.com/Oktalon-Szoradi/blender-project-2024

I originally planned to animate Super Mario 64's water level theme, but switched
over to Tetris due to time constraints.

Blender is Free and Open-Source Software.
https://www.blender.org/</pre> -->
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
