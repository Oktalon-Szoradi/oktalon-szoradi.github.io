<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import PushButton from '@/components/PushButton.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'Misc' }" />
    <GlassCard title="EU English Linux Locale">
      <div class="text-center">
        <PushButton
          color="green"
          href="https://github.com/Talon125/eu-linux-locale"
        >
          GitHub Repository
        </PushButton>
      </div>
      <p>Description coming soon…</p>
    </GlassCard>
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
