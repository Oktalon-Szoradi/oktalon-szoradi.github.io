<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
// import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const PHOTO_NAMES = [
  'Becken',
  'BeckenLinks',
  'BeckenRechts',
  'Ente',
  'Enten',
  'FontaeneBaeume',
  'FontaeneBaeumeDunkel',
  'FontaeneBaeumeLinsenreflexion',
  'FontaeneBaeumeLang',
  'FontaeneGras',
  'FontaenePlatscherBlume',
  'FontaenePlatscherEnte',
  'FontaenePlatscherLang',
  'FontaenePlatscherLangEnte',
  'FontaenePlatscherZiegel',
  'FontaenenEingang',
  'FontaenenUebersicht',
  'Papagenobrunnen',
  'PapagenobrunnenLang',
  'PapagenobrunnenMuschelschaleChaos',
  'PapagenobrunnenMuschelschaleFluss',
  'PapagenobrunnenMuschelschaleKurve',
  'SteinFlussKurz',
  'SteinFlussLang',
  'WasserEingefrohren',
  'WasserEingefrohrenKlar',
  'WasserEingefrohrenKuehl',
  'WasserEingefrohrenNiedrig',
  'WasserEingefrohrenWiese',
  'WasserNebel'
]

function replaceGermanChars(s: string): string {
  return s.replace(/ae/gi, 'ä').replace(/oe/gi, 'ö').replace(/ue/gi, 'ü')
}

function breakIntoWords(s: string): string {
  const words = replaceGermanChars(s).split(/(?=[A-Z])/)
  return words.join(' ')
}

const IMAGES = PHOTO_NAMES.map((n) => ({
  name: breakIntoWords(n),
  src: `/images/htl4/water/Szor-${n}.50.webp`,
  alt: breakIntoWords(n)
}))
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-4' }" />
    <GlassCard title="Kurpark Oberlaa" :noCenter="true">
      <h1 class="year-marker">
        HTL 4th Grade (Cumulative: 12) | School year 2022/2023
      </h1>
      <b>Teacher's grade: 1.2 </b>
      <p>
        I actually took a total of 108 photos! But here are the best 30 (edited,
        not raw) With a borrowed <b>Nikon D300S</b>, I was at this park for
        around 4 hours.
      </p>
      <b>By the way:</b> The names of the photos are in German.
    </GlassCard>
    <ImageGallery
      :src="IMAGES"
      :squareImages="true"
      :perRow="6"
      :legacyImages="true"
      downloadExt="jpg"
    />
  </main>
</template>
