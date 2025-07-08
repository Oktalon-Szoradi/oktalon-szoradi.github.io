<template>
  <div class="root">
    <RouterLink
      v-for="(path, i) of previousPaths"
      :key="i"
      :class="[
        previousPaths.length > 1 && i !== 0 && i !== previousPaths.length - 1
          ? 'middle'
          : '',
        previousPaths.length > 1 && i === 0 ? 'start' : '',
        previousPaths.length > 1 && i === previousPaths.length - 1 ? 'end' : '',
        previousPaths.length === 2 ? 'margin-adjust' : ''
      ]"
      :to="
        queryParams && i === queryIndex
          ? `${path}${buildQueryParameterString()}`
          : path
      "
      target="_self"
    >
      <span class="bottom"></span>
      <span class="side"></span>
      <span class="face">
        <code>&lt;-</code>&ensp;Back to {{ previousPathsNames[i] }}
      </span>
    </RouterLink>
    <!-- <span class="extraneous-text"><slot /></span> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface QueryParams {
  [key: string]: string | number | boolean
}

const props = defineProps<{
  queryIndex?: number
  // queryParams?: Array<object>
  // queryParams?: object
  queryParams?: QueryParams
}>()

const router = useRouter()

const currentRouteParts = router.currentRoute.value.path.substring(1).split('/')

const previousPaths: string[] = []
const previousPathsNames: string[] = []

function populatePreviousPaths() {
  let path = ''
  for (let i = 0; i < currentRouteParts.length - 1; i += 1) {
    const part = currentRouteParts[i]
    path += `/${part}`
    previousPaths.push(path)
  }
}
populatePreviousPaths()

function populatePreviousPathNames() {
  for (const path of previousPaths) {
    const resolved = router.resolve({ path })
    previousPathsNames.push(String(resolved.name))
  }
}
populatePreviousPathNames()

function buildQueryParameterString(): string {
  if (!props.queryParams) return ''

  let queries = ''
  for (const prop in props.queryParams) {
    queries += `&${prop}=${String(props.queryParams[prop])}`
  }
  queries = `?${queries.substring(1)}`

  return queries
}
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

$corner-roundness: 8px;

.extraneous-text {
  margin-left: 1em;
}

.bottom,
.side,
.face {
  padding: 0.5em 1em;
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
  margin-top: 1em;
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

/* stylelint-disable no-descending-specificity */
.start {
  margin-right: 1px;

  .bottom,
  .side {
    border-radius: #{$corner-roundness + 1px} 0 0 #{$corner-roundness + 1px};
  }

  .face {
    border-radius: #{$corner-roundness} 0 0 #{$corner-roundness};
  }
}

.middle {
  .bottom,
  .side,
  .face {
    border-radius: 0;
  }
}

.end {
  margin-left: 1px;

  .bottom,
  .side {
    border-radius: 0 #{$corner-roundness + 1px} #{$corner-roundness + 1px} 0;
  }

  .face {
    border-radius: 0 #{$corner-roundness} #{$corner-roundness} 0;
  }
}

.margin-adjust {
  margin-right: 1.1px;
  margin-left: 0;
}
/* stylelint-enable no-descending-specificity */

@media (width <= 576px) {
  .root {
    margin-left: 1em;
  }
}
</style>
