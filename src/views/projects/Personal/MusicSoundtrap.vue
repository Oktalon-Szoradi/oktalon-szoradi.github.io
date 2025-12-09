<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'Music' }" />
    <GlassCard title="Music: Soundtrap">
      <p>
        Coming soon…
      </p>
    </GlassCard>
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
