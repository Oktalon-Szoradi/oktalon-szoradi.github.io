<template>
  <GlassCard class="root" :clear="true">
    <ImageHandler :src="icon_src ?? ''" :alt="icon_alt" />
    <h1>
      {{ title }}
    </h1>
    <slot />
  </GlassCard>
</template>

<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import ImageHandler from '@/components/ImageHandler.vue'

defineProps({
  title: { type: String },
  icon_src: { type: String },
  icon_alt: { type: String }
})
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

.root {
  margin-top: 0;
  box-shadow:
    inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
    0 0 0 1px hsl(0deg 0% 0% / 50%);
}

:deep(img) {
  border-radius: 4px;
  box-shadow:
    0 0 0 1px hsl(0deg 0% 0% / 75%),
    0 0 0 2px hsl(0deg 0% 100% / 25%);
  width: 100%;
}

h1 {
  margin: 0.25em 0;
  color: hsl(0deg 0% 100% / 75%);
  font-weight: lighter;
}
</style>
