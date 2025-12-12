<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavigationButton from '@/components/NavigationButton.vue'
import GlassCard from '@/components/GlassCard.vue'
// import ImageHandler from '@/components/ImageHandler.vue'
import ProjectLink from '@/components/ProjectLink.vue'
import PushButton from '@/components/PushButton.vue'

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

<template>
  <div class="container">
    <!-- <GlassCard title="more coming soon" class="text-center">
      Don't worry, this page will be populated soon!
    </GlassCard> -->
    <div class="flex area-with-side-nav">
      <aside class="sticky flex">
        <div class="main-aside">
          <NavigationButton to="/projects">
            <code>&lt;-</code>&ensp;Back to Projects
          </NavigationButton>
          <GlassCard class="aside-card navigation">
            <h1>Navigation</h1>
            <a
              :href="`/#${$route.path}?scrollTo=Games`"
              class="no-top-margin"
              @click="scrollToTarget()"
              ><b>Games</b></a
            >
            <ul class="nav-list">
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=TLU`"
                  @click="scrollToTarget()"
                >
                  Tetra Legends Ultimate
                </a>
              </li>
            </ul>
            <a
              :href="`/#${$route.path}?scrollTo=Music`"
              @click="scrollToTarget()"
              ><b>Music</b></a
            >
            <a
              :href="`/#${$route.path}?scrollTo=GraphicDesign`"
              @click="scrollToTarget()"
              ><b>Graphic Design</b></a
            >
            <a
              :href="`/#${$route.path}?scrollTo=Misc`"
              @click="scrollToTarget()"
              ><b>Miscellaneous</b></a
            >
          </GlassCard>
        </div>
        <div class="separator"></div>
      </aside>
      <main>
        <GlassCard id="Games" title="Games">
          <div class="flex flex-many">
            <ProjectLink
              id="TLU"
              title="Tetra Legends Ultimate"
              icon_src="/images/thumbnails/Thumbnail_TetraLegendsUltimate-1080p.webp"
            >
              <p>
                My fork of Tetra Legends, an abandoned Tetris clone by
                <a
                  href="https://github.com/doktorocelot?tab=repositories"
                  target="_blank"
                  >Dr Ocelot</a
                >.
              </p>
              <p>For more info on this, see its GitHub repository.</p>
              <div class="text-center">
                <PushButton color="green" href="https://talon125.github.io/">
                  Play
                </PushButton>
                <PushButton
                  href="https://github.com/Talon125/talon125.github.io"
                >
                  GitHub Repository
                </PushButton>
              </div>
            </ProjectLink>
          </div>
        </GlassCard>
        <GlassCard id="Music" title="Music">
          <div class="flex flex-many">
            <ProjectLink
              title="Soundtrap"
              icon_src="/images/TalonOpenGraphImage.webp"
            >
              <p class="text-justify">
                Stuff I made in Soundtrap in my free time while at HTL
              </p>
              <div class="text-center">
                <PushButton :stayHere="true" :to="`${$route.path}/soundtrap`">
                  View
                </PushButton>
              </div>
            </ProjectLink>
          </div>
        </GlassCard>
        <GlassCard id="GraphicDesign" title="Graphic Design">
          <div class="flex flex-many">
            <ProjectLink
              title="Icons"
              icon_src="/images/TalonOpenGraphImage.webp"
            >
              <p class="text-justify">Icons!</p>
              <div class="text-center">
                <PushButton
                  :stayHere="true"
                  :to="`${$route.path}/graphic-design_icons`"
                >
                  View
                </PushButton>
              </div>
            </ProjectLink>
            <ProjectLink
              title="Original Creations"
              icon_src="/images/TalonOpenGraphImage.webp"
            >
              <p class="text-justify">Skeuomorphism!</p>
              <div class="text-center">
                <PushButton
                  :stayHere="true"
                  :to="`${$route.path}/graphic-design_oc`"
                >
                  View
                </PushButton>
              </div>
            </ProjectLink>
            <ProjectLink
              title="Recreations"
              icon_src="/images/TalonOpenGraphImage.webp"
            >
              <p class="text-justify">Skeuomorphism!</p>
              <div class="text-center">
                <PushButton
                  :stayHere="true"
                  :to="`${$route.path}/graphic-design_recreations`"
                >
                  View
                </PushButton>
              </div>
            </ProjectLink>
          </div>
        </GlassCard>
        <GlassCard id="Misc" title="Miscellaneous">
          <div class="flex flex-many">
            <ProjectLink
              title="EU English Linux Locale"
              icon_src="/images/TalonOpenGraphImage.webp"
            >
              <p class="text-justify">description</p>
              <div class="text-center">
                <PushButton
                  :stayHere="true"
                  :to="`${$route.path}/github_eu-linux-locale`"
                >
                  View
                </PushButton>
              </div>
            </ProjectLink>
          </div>
        </GlassCard>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/layout_side-by-side';
@use '@/assets/variables.scss' as vars;

.top-margin {
  margin-top: 2em;
}

.area-with-side-nav {
  aside {
    flex-basis: 33.333em;

    .main-aside {
      flex: 1;
    }
  }

  main {
    width: 100%;
  }
}

h1 {
  margin: 1em 0 0.5em;
  color: hsl(0deg 0% 100% / 75%);

  &::after {
    display: block;
    margin-top: 0.1em;
    box-shadow: 0 0 2px hsl(0deg 0% 0% / 75%);
    background: linear-gradient(
      to right,
      hsl(0deg 0% 100% / 50%),
      hsl(0deg 0% 100% / 5%)
    );
    width: 100%;
    height: 1px;
    content: '';
  }
}

.navigation {
  display: flex;
  flex-direction: column;
  margin-top: 1em;

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

  a {
    margin-top: 0.5em;
    text-decoration: none;
    text-decoration-color: hsl(0deg 0% 100% / 45%);
    color: hsl(0deg 0% 100% / 90%);

    &:hover {
      text-decoration: underline;
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

td {
  padding: 0 0.5em;
  vertical-align: top;
}

.divider-row {
  hr {
    opacity: 0.25;
    margin: 0 0 0.333em;
  }
}

.image {
  :deep(img) {
    border-radius: 4px;
    box-shadow:
      0 0 0 1px hsl(0deg 0% 0% / 75%),
      0 0 0 2px hsl(0deg 0% 100% / 25%);
    width: 100%;
  }
}

.separator {
  margin-top: 2em;
}

@media (width <=vars.$breakpoint-lg) {
  .flex {
    gap: 0;
  }

  .area-with-side-nav {
    flex-direction: column;

    aside {
      display: block;
      flex-basis: auto;
      width: 100%;
    }
  }
}
</style>
