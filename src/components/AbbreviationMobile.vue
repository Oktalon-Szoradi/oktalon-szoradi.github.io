<template>
  <Popover.Root
    :positioning="{
      gutter: 0
    }"
  >
    <Popover.Trigger>
      <abbr :title="title">
        <slot />
      </abbr>
    </Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        <!-- <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow> -->
        <Popover.Title>{{ title }}</Popover.Title>
        <!-- <Popover.Description>Description</Popover.Description> -->
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
</template>

<script setup lang="ts">
import { Popover } from '@ark-ui/vue/popover'

defineProps<{
  title: string
}>()
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

@keyframes fade-from-above {
  from {
    transform: translateY(-8px);
    opacity: 0;
  }

  to {
    transform: none;
    opacity: 1;
  }
}

button {
  border: none;
  background: none;
  cursor: text;
  padding: 0;
  text-shadow: 0 2px 2px hsl(0deg 0% 0% / 25%);
  color: hsl(0deg 0% 100% / 90%);
  font-size: 1rem;
  user-select: text;
}

[data-part='content'] {
  border-radius: 4px;
  box-shadow:
    inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
    0 0 0 1px hsl(0deg 0% 0% / 75%),
    0 4px 16px black;
  background:
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
      hsl(0deg 0% 100% / 2.5%),
      hsl(0deg 0% 100% / 5%) 49%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      hsl(0deg 0% 0% / 20%),
      hsl(0deg 0% 0% / 40%),
      hsl(0deg 0% 0% / 30%)
    );
  padding: 0.5em 1em;
  animation: 500ms ease fade-from-above;
  color: hsl(0deg 0% 100% / 80%);
  font-size: 0.8rem;
  font-weight: bold;
  backdrop-filter: blur(1em);
}

.close {
  animation: 500ms ease reverse fade-from-above;
}
</style>
