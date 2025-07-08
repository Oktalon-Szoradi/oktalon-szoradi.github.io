<template>
  <LoadingCircle v-if="!isLoaded" />
  <div class="icon" :style="`width: ${size}px;`">
    <a class="link" v-if="href" :href="href" target="_blank">
      <img
        v-show="isLoaded"
        :src="src"
        :alt="alt"
        @load="handleLoad"
        @error="handleLoad"
        v-bind="$attrs"
        @click="handleClick"
        :style="`width: ${size}px;`"
        :class="
          src.includes('GitHub_Personal') || src.includes('GitHub_School')
            ? 'resize'
            : ''
        "
      />
      <IconExternalLink
        v-if="href && isLoaded"
        class="external-link-icon"
        fillColor="#98A1E5"
        :size="24"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import IconExternalLink from './icons/IconExternalLink.vue'
import LoadingCircle from './LoadingCircle.vue'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    href?: string
    toClipboard?: string
    size?: number
  }>(),
  {
    size: 64
  }
)

const isLoaded = ref(false)

function handleLoad() {
  isLoaded.value = true
}

function handleClick() {
  if (props.toClipboard) {
    writeToClipboard(props.toClipboard)
  }
}

async function writeToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    console.info(`Copied "${text}" to the clipboard.`)
  } catch (e) {
    console.error('Failed to copy text:', e)
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

div {
  display: inline-block;
}

.link::after {
  /* display: none; */
  content: none;
}

.icon {
  transition-duration: vars.$transdur-mouseleave;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    transition-duration: vars.$transdur-mouseenter;
    filter: brightness(1.5);
  }

  &:active {
    transition-duration: vars.$transdur-press;
    filter: brightness(0.75);
  }
}

.external-link-icon {
  margin-bottom: 46px;
  margin-left: -18px;
}

.resize {
  margin: -32px;
  width: 128px !important;
}
</style>
