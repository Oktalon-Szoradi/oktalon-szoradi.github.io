<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import VideoHandler from '@/components/VideoHandler.vue'
// import AbbreviationMobile from '@/components/AbbreviationMobile.vue'
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
        Some text here bla bla
      </p>
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
      <VideoHandler src="/videos/Strawberry Commercial Vers. 1.5.webm" />
      <b>2024-04-17</b>
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
