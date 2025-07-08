<template>
  <div class="card">
    <div class="flex">
      <div class="icon">
        <ImageHandler :src="src" />
      </div>
      <h1 v-if="title" id="glasscard-title">
        {{ title }}
      </h1>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageHandler from '@/components/ImageHandler.vue'

defineProps<{
  title: string
  src: string
  alt?: string
}>()
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as vars;
@use '@/assets/mixins.scss' as mixins;

.icon {
  margin-right: 1em;

  > * {
    width: 64px;
  }
}

.content {
  margin-top: 1em;
}

#glasscard-title {
  /* margin: -0.55em 0 0; */
  margin: -0.2em 0 0;
  /* font-style: italic; */
  text-align: start;
  text-shadow: none;
  color: hsl(0deg 0% 100% / 25%);
  font-size: 4em;
  font-weight: lighter;
}

.card {
  margin: 2em 0 0;
  border-radius: 4px;
  box-shadow:
    inset 0 0 0 1px hsl(0deg 0% 100% / 50%),
    0 0 0 1px hsl(0deg 0% 0% / 75%),
    0 0 8px black;
  background:
    vars.$reflection-soft,
    radial-gradient(
      ellipse 100% 33% at bottom,
      hsl(0deg 0% 100% / 10%),
      transparent
    ),
    radial-gradient(
      ellipse at bottom left,
      transparent 75%,
      hsl(0deg 0% 100% / 15%)
    ),
    radial-gradient(
      ellipse at bottom right,
      transparent 75%,
      hsl(0deg 0% 100% / 15%)
    ),
    linear-gradient(
      to bottom,
      hsl(0deg 0% 0% / 50%),
      hsl(0deg 0% 0% / 70%),
      hsl(0deg 0% 0% / 60%)
    );
  padding: 1em;
  text-shadow: 0 2px 2px hsl(0deg 0% 0% / 25%);
  color: hsl(0deg 0% 100% / 90%);
}

.no-hyphen {
  hyphenate-character: '';
}

@media (width <= 576px) {
  .flex {
    flex-direction: column;
    text-align: center;
  }

  .icon {
    margin: 0;
  }

  #glasscard-title {
    text-align: center;
    font-size: 3em;
    hyphens: manual;
  }

  .card {
    margin: 2em 1em 0;
  }
}
</style>
