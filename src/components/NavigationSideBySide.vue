<template>
  <div class="container flex">
    <aside class="sticky flex" :class="width">
      <div class="main-aside">
        <div class="navigation-buttons">
          <NavigationButtons
            :queryIndex="navigationButtons_queryIndex"
            :queryParams="navigationButtons_queryParams"
          />
        </div>
        <GlassCard class="navigation-card">
          <h1>Navigation</h1>
          <div
            class="navigation-point"
            v-for="(heading, i) of scrollToHeadings"
            :key="i"
          >
            <a
              :href="`/#${$route.path}?scrollTo=${heading.id}`"
              :class="`
                ${i === 0 ? 'no-top-margin' : ''}
                ${onlyOneLevel ? 'only-one-level' : ''}
              `"
              @click="scrollToTarget()"
              ><b
                ><span v-if="heading.date"
                  ><code>{{ heading.date }}</code
                  >:</span
                >
                {{ heading.name }}</b
              ></a
            >
            <ul v-if="heading.children" class="nav-list">
              <li v-for="(subheading, j) of heading.children" :key="j">
                <a
                  :href="`/#${$route.path}?scrollTo=${subheading.id}`"
                  @click="scrollToTarget()"
                >
                  {{ subheading.name }}
                </a>
              </li>
            </ul>
          </div>
        </GlassCard>
      </div>
      <div class="separator"></div>
    </aside>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import GlassCard from '@/components/GlassCard.vue'
import NavigationButtons from '@/components/NavigationButtons.vue'
import type { QueryParams, ScrollToObjects } from '@/assets/types'

defineProps<{
  scrollToHeadings: ScrollToObjects[]
  navigationButtons_queryIndex: number
  navigationButtons_queryParams?: QueryParams
  width?: string
  onlyOneLevel?: boolean
}>()

const route = useRoute()

function scrollToTarget(timeout: number = 0) {
  const scrollToId = route.query.scrollTo as string | undefined
  if (scrollToId) {
    setTimeout(() => {
      const element = document.getElementById(scrollToId)
      if (element) {
        const navbar = document.querySelector('header') as HTMLElement | null
        const navbarHeight = navbar?.offsetHeight ?? 0
        const y =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, timeout)
  }
}

onMounted(() => {
  scrollToTarget(100)
})

watch(
  () => route.fullPath,
  () => {
    scrollToTarget()
  }
)
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as vars;

.flex {
  gap: 1em;

  aside {
    flex-basis: 33.333em;

    .main-aside {
      flex: 1;
    }
  }

  .personal {
    flex-basis: 41.41em;
  }

  .school {
    flex-basis: 39.59em;
  }

  main {
    width: 100%;
  }
}

.flex-many {
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;

  > * {
    width: calc(50% - 2.5em);
  }
}

.sticky {
  position: sticky;
  top: calc(64px + 24px);
  align-self: start;
}

.separator {
  background: linear-gradient(
    to bottom,
    transparent,
    hsl(0deg 0% 100% / 50%),
    hsl(0deg 0% 100% / 50%),
    transparent
  );
  width: 1px;
  white-space: nowrap;

  &::before,
  &::after {
    display: inline-block;
    position: relative;
    top: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      hsl(0deg 0% 0% / 25%),
      hsl(0deg 0% 0% / 25%),
      transparent
    );
    width: 1px;
    height: 100%;
    content: '';
  }

  &::before {
    left: -1px;
  }
}

.navigation-buttons {
  :deep(a),
  :deep(button) {
    margin-top: 4px;
  }
}

.navigation-card {
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  h1 {
    margin: -0.67em 0 0;
    text-align: center;
    text-shadow: none;
    color: hsl(0deg 0% 100% / 25%);
    font-size: 2.5em;
    font-weight: lighter;

    &::after {
      display: none;
    }
  }

  .navigation-point {
    margin-top: 0.5em;

    a {
      text-decoration: none;
      text-decoration-color: hsl(0deg 0% 100% / 45%);
      color: hsl(0deg 0% 100% / 90%);

      &:hover {
        text-decoration: underline;
      }

      code {
        font-size: inherit;
        font-weight: 500;
      }
    }

    .only-one-level {
      * {
        letter-spacing: normal;
        color: hsl(0deg 0% 100% / 90%);
        font-weight: 400;
      }
    }

    .nav-list {
      margin: 0;
      padding-left: 1em;
      list-style: none;

      li {
        margin: 0.25em 0;
      }
    }
  }
}

main {
  :deep(.first-card),
  :deep(.main-card) {
    margin: 1em 0;
  }
}

@media (width < vars.$breakpoint-lg) {
  .flex {
    flex-direction: column;
    gap: 0;

    aside {
      display: block;
      flex-basis: auto;
      width: 100%;

      a {
        margin-left: 0;
      }
    }

    .personal,
    .school {
      flex-basis: auto;
    }
  }

  .flex-many {
    > * {
      display: block;
      margin: 0;
      width: auto;
    }
  }

  .navigation-buttons {
    :deep(a),
    :deep(button) {
      margin-top: 1em;
    }
  }

  .sticky {
    position: static;
  }

  .separator {
    display: none;
  }

  main {
    :deep(.first-card),
    :deep(.main-card) {
      margin: 0 1em 2em;
    }
  }
}
</style>
