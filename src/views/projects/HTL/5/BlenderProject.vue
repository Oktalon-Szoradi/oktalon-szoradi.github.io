<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-5' }" />
    <GlassCard title="3D (Blender)" :noCenter="true">
      <h1 class="year-marker">
        HTL 5th Grade (Cumulative: 13) | School year 2023/2024
      </h1>
      <!-- <b>Teacher's grade: i forgor </b> -->
      <p>A description will come here at some point</p>
      <p>Description from YouTube:</p>
      <pre>
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
https://www.blender.org/</pre
      >
      <div class="text-center">
        <PushButton
          color="purple"
          href="https://www.youtube.com/watch?v=Bt0lv-PRgGM"
        >
          Yummy Button
        </PushButton>
      </div>
    </GlassCard>
  </main>
</template>
