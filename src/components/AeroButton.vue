<template>
  <a
    v-if="href"
    :href="href"
    :target="stayHere ? '_self' : '_blank'"
    :disabled="disabled"
    :class="`
      ${defaultButton ? 'default' : ''}
      ${color ? color : ''}
    `"
  >
    <span>
      <slot></slot>
    </span>
    <IconExternalLink v-if="!stayHere" :fillColor="color ? 'white' : 'black'" />
  </a>
  <button
    v-else
    :disabled="disabled"
    :class="`
      ${defaultButton ? 'default' : ''}
      ${color ? color : ''}
    `"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import IconExternalLink from './icons/IconExternalLink.vue'

defineProps({
  defaultButton: { type: Boolean },
  color: { type: String },
  disabled: { type: Boolean },
  href: { type: String },
  stayHere: { type: Boolean }
})
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

$button-inner-shadow: inset 0 -1px 4px hsl(0deg 0% 0% / 25%);
$button-inner-sheen-weak: inset 0 1.5px 3px 1px hsl(0deg 0% 100% / 50%);
$button-inner-sheen: inset 0 1.5px 1px 1px hsl(0deg 0% 100%);

@mixin button-colored($hue) {
  /* $color: hsl($hue, 100%, 50%);
  $luminance: (0.299 * color.red($color) + 0.587 * color.green($color) + 0.114 * color.blue($color)) / 255;
  $text-shadow-color: if($luminance < 0.5, 0%, 100%);
  $text-color: if($luminance < 0.5, 100%, 0%); */

  $text-shadow-color: 0%;
  $text-color: 100%;

  box-shadow:
    0 2px 0 hsl($hue, 75%, 25%),
    $button-inner-sheen-weak,
    $button-inner-shadow,
    vars.$outer-shadow;
  background:
    vars.$reflection-moderate,
    linear-gradient(
      to bottom,
      hsl($hue, 75%, 85%),
      hsl($hue, 75%, 35%),
      hsl($hue, 75%, 50%)
    );
  text-shadow: 0 1px 3px hsl(0deg, 0%, $text-shadow-color, 75%);
  color: hsl(0deg, 0%, $text-color, 85%);
  font-size: 100%;

  /* Hover Color */
  &::before {
    background:
      vars.$reflection-major,
      linear-gradient(
        to bottom,
        hsl($hue, 100%, 85%),
        hsl($hue, 100%, 40%),
        hsl($hue, 100%, 65%)
      );
  }

  /* Active Color */
  &::after {
    background:
      vars.$reflection-moderate,
      linear-gradient(
        to bottom,
        hsl($hue, 90%, 75%),
        hsl($hue, 90%, 25%),
        hsl($hue, 90%, 40%)
      );
  }

  /* Disabled Style */
  &:disabled {
    box-shadow:
      0 2px 0 hsl($hue, 100%, 33%, 25%),
      inset 0 1.5px 2px 1px hsl(0deg 0% 100% / 15%),
      inset 0 -1px 4px hsl(0deg 0% 0% / 5%),
      0 2px 4px hsl(0deg 0% 50% / 10%);
    background:
      linear-gradient(
        to bottom,
        hsl(0deg 0% 100% / 5%),
        hsl(0deg 0% 100% / 10%) 50%,
        transparent 50%
      ),
      linear-gradient(
        to bottom,
        hsl($hue, 100%, 50%, 25%),
        hsl($hue, 100%, 40%, 25%)
      );
    text-shadow: 0 1px 3px hsl(0deg, 0%, $text-shadow-color, 17.5%);
    color: hsl(0deg, 0%, $text-color, if($text-color == 0%, 17.5%, 60%));
  }

  &:not(:disabled) {
    /* Active */
    &::after,
    &:active {
      box-shadow:
        inset 0 2px 8px hsl($hue, 100%, 17.5%, 75%),
        0 1px 2px hsl(0deg 0% 100% / 50%);
      text-shadow: none;
      color: hsl(0deg, 0%, $text-color, 50%);
    }

    /* Hover */
    &:not(:active)::before,
    &:hover:not(:active) {
      box-shadow:
        0 2px 0 hsl($hue, 75%, 40%),
        $button-inner-sheen-weak,
        $button-inner-shadow,
        0 2px 8px 4px hsl($hue, 80%, 80%, 100%);
      text-shadow: 0 1px 4px hsl(0deg, 0%, $text-shadow-color, 90%);
      color: hsl(0deg, 0%, $text-color, 100%);
    }
  }

  /* Default Pulse */
  &.default:not(:disabled, :hover, :active) {
    box-shadow:
      0 2px 0 hsl($hue, 50%, 40%),
      inset 0 0 4px 2px hsl($hue, 100%, 60%, 85%),
      $button-inner-sheen-weak,
      $button-inner-shadow,
      vars.$outer-shadow;
    background:
      vars.$reflection-weak,
      linear-gradient(
        to bottom,
        hsl($hue, 80%, 95%),
        hsl($hue, 80%, 45%),
        hsl($hue, 80%, 60%)
      );

    &::before {
      box-shadow:
        0 2px 0 hsl($hue, 100%, 40%),
        inset 0 0 8px 4px hsl($hue, 100%, 60%, 85%),
        $button-inner-sheen-weak,
        $button-inner-shadow,
        0 2px 8px 4px hsl($hue, 80%, 50%, 75%);
      background:
        vars.$reflection-weak,
        linear-gradient(
          to bottom,
          hsl($hue, 75%, 85%),
          hsl($hue, 75%, 35%),
          hsl($hue, 75%, 50%)
        );
    }

    /* animation: pulse-anim 1s linear infinite alternate; */
  }
}

/* ---------------------------------------------------------------------------------------------------- */

a,
button {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  transition-property: box-shadow, color, opacity, text-shadow, transform;
  z-index: 0;
  margin: 1em;
  border: none;
  border-radius: 8px;
  box-shadow:
    0 2px 0 hsl(0deg 0% 50%),
    $button-inner-sheen,
    $button-inner-shadow,
    vars.$outer-shadow;
  background:
    vars.$reflection-strong,
    linear-gradient(to bottom, hsl(0deg 0% 95%), hsl(0deg 0% 80%));
  cursor: pointer;
  padding: 8px 24px;
  text-decoration: none;
  text-shadow: 0 1px 0 white;
  line-height: 1em;
  white-space: nowrap;
  color: hsl(0deg 0% 13%);
  font-size: 100%;
  user-select: none;

  /* Hover Color */
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    transition-duration: 0.1s;
    opacity: 0;
    z-index: -1;
    margin: 0;
    border-radius: 8px;
    background:
      vars.$reflection-strong,
      linear-gradient(to bottom, hsl(200deg 90% 95%), hsl(200deg 80% 80%));
    padding: 0;
    width: 100%;
    height: 100%;
    content: '';
  }

  /* Active Color */
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    margin: 0;
    border-radius: 8px;
    background:
      vars.$reflection-major,
      linear-gradient(to bottom, hsl(200deg 80% 95%), hsl(200deg 60% 60%));
    padding: 0;
    width: 100%;
    height: 100%;
    content: '';
  }

  &:not(:hover)::before {
    transition-duration: 1s;
    opacity: 0;
  }

  /* Disabled Style */
  &:disabled {
    box-shadow:
      0 2px 0 hsl(0deg 0% 80% / 25%),
      inset 0 1.5px 1px 1px hsl(0deg 0% 100% / 25%),
      inset 0 -1px 4px hsl(0deg 0% 0% / 5%),
      0 2px 4px hsl(0deg 0% 50% / 10%);
    background:
      vars.$reflection-weak,
      linear-gradient(to bottom, hsl(0deg 0% 95% / 50%), hsl(0deg 0% 94% / 50%));
    cursor: not-allowed;
    color: hsl(0deg 0% 26% / 33%);
    backdrop-filter: blur(8px);
  }

  &:not(:disabled) {
    /* Active */
    &::after,
    &:active {
      transform: translateY(2px);
      transition-duration: 0.1s;
      box-shadow:
        inset 0 2px 8px hsl(200deg 100% 17.5% / 75%),
        0 1px 2px hsl(0deg 0% 100% / 50%);
      text-shadow: none;
      color: hsl(0deg 0% 13% / 50%);
    }

    /* Hover */
    &:not(:active)::before,
    &:hover:not(:active) {
      box-shadow:
        0 2px 0 hsl(200deg 50% 50%),
        $button-inner-sheen,
        $button-inner-shadow,
        0 2px 8px 4px hsl(200deg 80% 80% / 100%);
      text-shadow: 0 1px 1px white;
    }

    &:hover:not(:active)::before {
      opacity: 1;
    }

    &:active::after {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Default Pulse */
  &.default:not(:disabled, :hover, :active) {
    box-shadow:
      0 2px 0 hsl(190deg 50% 40%),
      inset 0 0 2px 1px hsl(190deg 100% 60% / 85%),
      $button-inner-sheen,
      $button-inner-shadow,
      vars.$outer-shadow;
    background:
      vars.$reflection-strong,
      linear-gradient(to bottom, hsl(200deg 50% 95%), hsl(200deg 40% 80%));

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      transition-duration: 0.1s;
      opacity: 0;
      margin: 0;
      border-radius: 8px;
      box-shadow:
        0 2px 0 hsl(190deg 100% 40%),
        inset 0 0 4px 2px hsl(190deg 100% 60% / 85%),
        $button-inner-sheen,
        $button-inner-shadow,
        0 2px 8px 4px hsl(190deg 80% 50% / 75%);
      background:
        vars.$reflection-strong,
        linear-gradient(to bottom, hsl(200deg 90% 95%), hsl(200deg 80% 80%));
      padding: 0;
      width: 100%;
      height: 100%;
      animation: fade 1s linear infinite alternate;
      content: '';
    }

    /* animation: pulse-anim 1s linear infinite alternate; */
  }
}

a span {
  text-decoration: underline;
}

.red {
  @include button-colored(vars.$red);
}

.orange {
  @include button-colored(vars.$orange);
}

.yellow {
  @include button-colored(vars.$yellow);
}

.green {
  @include button-colored(vars.$green);
}

.blue {
  @include button-colored(vars.$blue);
}

.purple {
  @include button-colored(vars.$purple);
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
