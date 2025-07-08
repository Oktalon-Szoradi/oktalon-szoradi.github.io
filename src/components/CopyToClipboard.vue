<template>
  <Clipboard.Root :default-value="string">
    <!-- <Clipboard.Label></Clipboard.Label> -->
    <Clipboard.Control>
      <Clipboard.Input
        :class="width"
        :style="width === 'auto' ? `width: ${string.length}ch` : ''"
      />
      <Clipboard.Trigger>
        <Clipboard.Indicator>
          <span class="bottom"></span>
          <span class="side"></span>
          <span class="face">
            <img class="icon" src="/icons/klipper.svg" />
          </span>
          <template #copied>
            <span class="bottom"></span>
            <span class="side"></span>
            <span class="face">
              <img class="icon" src="/icons/dialog-ok-apply.svg" />
            </span>
          </template>
        </Clipboard.Indicator>
      </Clipboard.Trigger>
    </Clipboard.Control>
  </Clipboard.Root>
</template>

<script setup lang="ts">
import { Clipboard } from '@ark-ui/vue/clipboard'

defineProps<{
  string: string
  width?: string
}>()

const preload = new Image()
preload.src = '/icons/dialog-ok-apply.svg'
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

$corner-roundness: 8px;
$height: 4.5px;

[data-part='root'] {
  margin-top: 8px;
}

[data-part='control'] {
  display: flex;
  /* align-items: end; */
  justify-content: center;
}

[data-part='input'] {
  transform: translateY(#{$height});
  /* margin-right: 1px; */
  border: none;
  border-radius: #{$corner-roundness + 1px} 0 0 #{$corner-roundness + 1px};
  box-shadow:
    inset 0 0 0 1px hsl(0deg 0% 0% / 75%),
    inset 0 0 0 2px hsl(0deg 0% 100% / 25%),
    inset 1px 1px 8px hsl(0deg 0% 0% / 50%),
    0 1px hsl(0deg 0% 100% / 25%);
  background: linear-gradient(to bottom, transparent, hsl(0deg 0% 15% / 50%));
  padding: 0.25em 0.75em;
  height: 25.4px;
  text-shadow: 0 2px 2px hsl(0deg 0% 0% / 25%);
  color: hsl(0deg 0% 100% / 90%);
  font-family: 'Fira Code', monospace;
  font-size: 1rem;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 8px 4px hsl(211deg 64% 68%),
      inset 0 0 0 1px hsl(0deg 0% 0% / 75%),
      inset 0 0 0 2px hsl(0deg 0% 100% / 50%),
      inset 1px 1px 8px hsl(0deg 0% 0% / 50%),
      0 1px hsl(0deg 0% 100% / 25%);
    background: linear-gradient(
      to bottom,
      hsl(0deg 0% 100% / 10%),
      hsl(0deg 0% 25% / 50%)
    );
  }
}

.short {
  width: 5em;
}

.wide {
  width: 14em;
}

.wwwwide {
  width: 100%;
}

.icon {
  margin-bottom: -4px;
  width: 24px;
}

.bottom,
.side,
.face {
  padding: 4px 0.75em;
  /* padding: 0.25em 0.75em; */
}

.bottom,
.side {
  box-sizing: border-box;
  position: absolute;
  top: -4px;
  left: -1px;
  transform: translateY(#{$height});
  transition-duration: vars.$transdur-mouseleave;
  border: none;
  border-radius: 0 #{$corner-roundness + 1px} #{$corner-roundness + 1px} 0;
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
  border-radius: 0 #{$corner-roundness} #{$corner-roundness} 0;
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
  text-shadow: 0 2px 2px hsl(0deg 0% 0% / 25%);
  color: hsl(0deg 0% 100% / 90%);
  font-size: 1rem;
}

button {
  display: inline-block;
  position: relative;
  transition-duration: 250ms;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
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

  /* &:not(:disabled):focus, */
  &:not(:disabled):active {
    .bottom {
      transition-duration: vars.$transdur-press;
      opacity: 0;
      box-shadow: none;
    }

    .face {
      transform: translateY(#{$height});
      transition-duration: vars.$transdur-press;
      box-shadow:
        inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
        0 0 0 1px hsl(0deg 0% 0% / 75%),
        inset 0 0 12px hsl(0deg 0% 0% / 75%);
      color: hsl(0deg 0% 100% / 50%);
      filter: brightness(0.75);

      span {
        opacity: 0.5;
        color: hsl(0deg 0% 100% / 90%);
      }
    }
  }
}

/* Can't really fix this, unfortunately (oops);
 * so just disable this rule here
 */
/* stylelint-disable no-descending-specificity */
[data-copied] {
  .bottom {
    transition-duration: vars.$transdur-press;
    opacity: 0.5;
    box-shadow: none;
  }

  .face {
    transform: translateY(#{$height});
    transition-duration: vars.$transdur-press;
    box-shadow:
      inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
      0 0 0 1px hsl(0deg 0% 0% / 75%),
      inset 0 0 12px hsl(0deg 0% 0% / 75%);
    color: hsl(0deg 0% 100% / 50%);
  }

  button:not(:disabled):hover {
    .bottom {
      transition-duration: vars.$transdur-mouseenter;
      opacity: 1;
      box-shadow: none;
    }

    .face {
      transition-duration: vars.$transdur-mouseenter;
      filter: brightness(1.5);
    }
  }
}
/* stylelint-enable no-descending-specificity */
</style>
