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
h2,
h3 {
  scroll-margin-top: calc(64px + 24px);
  margin: 1em 0 0.5em;
  color: hsl(0deg 0% 100% / 75%);

  &::after {
    display: block;
    margin-top: 0.1em;
    box-shadow: 0 0 2px hsl(0deg 0% 0% / 75%);
    background: linear-gradient(
      to right,
      hsl(0deg 0% 100% / 50%),
      hsl(0deg 0% 100% / 5%)
    );
    width: 100%;
    height: 1px;
    content: '';
  }
}
</style>
