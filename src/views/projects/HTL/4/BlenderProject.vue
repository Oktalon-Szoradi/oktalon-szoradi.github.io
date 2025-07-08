<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const PHOTO_NAMES_19 = [
  'SuzanneCloseupDonut',
  'SuzanneCloseupPlanet',
  'SuzanneDonutKiwi',
  'SuzannePlanets'
]

const PHOTO_NAMES_20 = ['Overview1', 'Overview2', 'SuzanneDonutChocolate']

function breakIntoWords(s: string): string {
  const words = s.split(/(?=[A-Z])/)
  return words.join(' ')
}

function getCorrectPath(index: number): string {
  const BASE_PATH = '/images/htl4/blender'
  if (index < PHOTO_NAMES_19.length) {
    return `${BASE_PATH}/Render_20230619-${PHOTO_NAMES_19[index]}.webp`
  } else {
    return `${BASE_PATH}/Render_20230620-${
      PHOTO_NAMES_20[index - PHOTO_NAMES_19.length]
    }.webp`
  }
}

const IMAGES = [...PHOTO_NAMES_19, ...PHOTO_NAMES_20].map((n, i) => ({
  name: breakIntoWords(n),
  src: getCorrectPath(i),
  alt: breakIntoWords(n)
}))
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-4' }" />
    <GlassCard title="3D (Blender)" :noCenter="true">
      <h1 class="year-marker">
        HTL 4th Grade (Cumulative: 12) | School year 2022/2023
      </h1>
      <b>Teacher's grade: 1-2 </b>
      <p>
        Ah, the 3D modeling software. The theme was space, but at the time I
        only had a donut, so I improvised:
      </p>
      <p>
        Suzanne is taking over the universe, I guess and it seems she's turning
        planets into donuts.
      </p>
      <div class="text-center">
        <PushButton
          color="purple"
          href="https://github.com/Oktalon-Szoradi/oktalon-szoradi.github.io/raw/refs/heads/legacy/other/BlenderProject.zip"
        >
          Download<code>&emsp;BlenderProject.zip</code>
        </PushButton>
      </div>
    </GlassCard>
    <ImageGallery :src="IMAGES" :perRow="7" :legacyImages="true" />
  </main>
</template>
