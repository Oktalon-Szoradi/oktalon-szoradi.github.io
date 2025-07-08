<template>
  <RouterLink
    v-if="to"
    :to="to"
    target="_self"
    :class="`
      router-link
      ${disabled ? 'disabled' : ''}
    `"
  >
    <span class="bottom"></span>
    <span class="side"></span>
    <span class="face">
      <span class="flex">
        <div class="icon">
          <ImageHandler :src="icon_src ?? ''" :alt="icon_alt" />
        </div>
        <div>
          <h1 v-if="title" id="glasscard-title">
            {{ title }}
          </h1>
          <slot></slot>
        </div>
      </span>
    </span>
  </RouterLink>
  <a
    v-if="href"
    :href="href"
    target="_self"
    :class="`
      ${disabled ? 'disabled' : ''}
    `"
  >
    <span class="bottom"></span>
    <span class="side"></span>
    <span class="face">
      <span class="flex">
        <div class="icon">
          <ImageHandler :src="icon_src ?? ''" :alt="icon_alt" />
        </div>
        <div>
          <h1 v-if="title" id="glasscard-title">
            {{ title }}
            <IconExternalLink fillColor="white" v-if="!stayHere" />
          </h1>
          <slot></slot>
        </div>
      </span>
    </span>
  </a>
  <button v-if="!to && !href" :disabled="disabled">
    <span class="bottom"></span>
    <span class="side"></span>
    <span class="face">
      <span class="flex">
        <div class="icon">
          <ImageHandler :src="icon_src ?? ''" :alt="icon_alt" />
        </div>
        <div>
          <h1 v-if="title" id="glasscard-title">
            {{ title }}
          </h1>
          <slot></slot>
        </div>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import IconExternalLink from './icons/IconExternalLink.vue'
import ImageHandler from '@/components/ImageHandler.vue'
// import LoadingCircle from '@/components/LoadingCircle.vue'

defineProps({
  title: { type: String },
  icon_src: { type: String },
  icon_alt: { type: String },
  disabled: { type: Boolean },
  href: { type: String },
  to: { type: String },
  stayHere: { type: Boolean }
})
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

$corner-roundness: 8px;

#glasscard-title {
  margin: -0.4em 0 0;
  text-shadow: none;
  color: hsl(0deg 0% 100% / 25%);
  font-size: 4em;
  font-weight: lighter;
  /* font-style: italic; */
}

.icon {
  display: flex;
  align-items: center;
  margin-right: 2em;

  > * {
    width: 64px;
  }
}

.bottom,
.side,
.face {
  padding: 0.5em 2em;
}

.bottom,
.side {
  box-sizing: border-box;
  position: absolute;
  top: -4px;
  left: -1px;
  transform: translateY(4px);
  transition-duration: vars.$transdur-mouseleave;
  border: none;
  border-radius: #{$corner-roundness + 1px};
  box-shadow: 0 1px hsl(0deg 0% 100% / 25%);
  background: linear-gradient(to bottom, transparent, hsl(0deg 0% 15% / 50%));
  width: calc(100% + 2px);
  height: calc(100% + 4px);
}

.bottom {
  opacity: 0;
  background: linear-gradient(to bottom, transparent, hsl(0deg 0% 100% / 50%));
}

.face {
  box-sizing: border-box;
  display: block;
  position: relative;
  transition-duration: vars.$transdur-mouseleave;
  border-radius: $corner-roundness;
  box-shadow:
    inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
    0 0 0 1px hsl(0deg 0% 0% / 75%);
  background:
    vars.$reflection-soft, vars.$reflection-weak,
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
      hsl(0deg 0% 0% / 10%),
      hsl(0deg 0% 0% / 30%),
      hsl(0deg 0% 0% / 20%)
    );
  width: 100%;
  height: 100%;
  text-align: start;
  text-shadow: 0 2px 2px hsl(0deg 0% 0% / 25%);
  color: hsl(0deg 0% 100% / 90%);
  font-size: 1rem;
}

/* a .face {
  text-decoration: underline;
} */

a,
button {
  display: inline-block;
  position: relative;
  transition-duration: 250ms;
  margin: 0.5em 0.5em 0;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  font-family: inherit;
  will-change: transform;

  &::after {
    content: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    .face {
      color: hsl(0deg 0% 100% / 50%);
    }
  }

  &:not(:disabled):hover {
    .bottom {
      transition-duration: vars.$transdur-mouseenter;
      opacity: 1;
      box-shadow: 0 0 8px 4px hsl(0deg 0% 100% / 50%);
    }

    .face {
      transition-duration: vars.$transdur-mouseenter;
      filter: brightness(1.5);
    }
  }

  &:not(:disabled):focus,
  &:not(:disabled):active {
    .bottom {
      transition-duration: vars.$transdur-press;
      opacity: 0;
      box-shadow: none;
    }

    .face {
      transform: translateY(3px);
      transition-duration: vars.$transdur-press;
      box-shadow:
        inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
        0 0 0 1px hsl(0deg 0% 0% / 75%),
        inset 0 0 12px hsl(0deg 0% 0% / 75%);
      color: hsl(0deg 0% 100% / 50%);
      filter: brightness(0.75);

      span {
        opacity: 0.8;
        /* color: hsl(0deg 0% 100% / 90%); */
        /* filter: brightness(0.75); */
      }
    }
  }
}

@media (width <= 576px) {
  .flex {
    flex-direction: column;
  }

  .icon {
    justify-content: center;
    margin: 0 0 1em;
  }

  .face {
    text-align: center;
  }
}
</style>
