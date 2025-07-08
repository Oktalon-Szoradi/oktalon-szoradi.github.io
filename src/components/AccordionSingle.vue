<template>
  <Accordion.Root collapsible :defaultValue="open ? [title] : ['']">
    <Accordion.Item :value="title">
      <Accordion.ItemTrigger>
        {{ title }}
        <Accordion.ItemIndicator> ʌ </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <slot />
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>

<script setup lang="ts">
import { Accordion } from '@ark-ui/vue/accordion'

defineProps<{
  title: string
  open?: boolean
}>()
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

/* [data-part='item-trigger'] {
  background: linear-gradient(to bottom, hsl(0deg 0% 100% / 25%), transparent);
  padding: 0.25em;
} */
</style>
