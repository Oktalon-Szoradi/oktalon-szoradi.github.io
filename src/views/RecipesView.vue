<script setup lang="ts">
import NavigationButton from '@/components/NavigationButton.vue'
import GlassCard from '@/components/GlassCard.vue'
// import AbbreviationMobile from '@/components/AbbreviationMobile.vue'
// import AccordionSingle from '@/components/AccordionSingle.vue'
</script>

<template>
  <main class="container">
    <NavigationButton to="/">
      <code>&lt;-</code>&ensp;Back to Home
    </NavigationButton>
    <GlassCard title="Recipes">
      <p>Coming soon!</p>
    </GlassCard>
    <NavigationButton to="/">
      <code>&lt;-</code>&ensp;Back to Home
    </NavigationButton>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/extra_fancy-headings';
</style>
