<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'GraphicDesign' }" />
    <GlassCard title="Graphic Design: Original Creations">
      <p>
        Coming soon…
      </p>
    </GlassCard>
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
