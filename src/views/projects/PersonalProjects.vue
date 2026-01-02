<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
// import ImageHandler from '@/components/ImageHandler.vue'
import ProjectLink from '@/components/ProjectLink.vue'
import PushButton from '@/components/PushButton.vue'
import NavigationSideBySide from '@/components/NavigationSideBySide.vue'
import type { ScrollToObjects } from '@/assets/types'

const NAVIGATION: ScrollToObjects[] = [
  {
    name: 'Games',
    id: 'Games'
    // children: [
    //   {
    //     name: 'Tetra Legends Ultimate',
    //     id: 'TLU'
    //   }
    // ]
  },
  {
    name: 'Music',
    id: 'Music'
  },
  {
    name: 'Graphic Design',
    id: 'GraphicDesign'
  },
  {
    name: 'Miscellaneous',
    id: 'Misc'
  }
]
</script>

<template>
  <div class="container">
    <NavigationSideBySide
      :scrollToHeadings="NAVIGATION"
      :navigationButtons_queryIndex="1"
      :onlyOneLevel="true"
    >
      <GlassCard id="Games" class="first-card" title="Games">
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
              <PushButton href="https://github.com/Talon125/talon125.github.io">
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
            icon_src="/images/thumbnails/Thumbnail_PersonalProjects-Soundtrap.webp"
          >
            <p class="text-justify">
              Stuff I made in Soundtrap in my free time while at HTL.
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
            title="Original Creations"
            icon_src="/images/thumbnails/Thumbnail_PersonalProjects-GraphicDesign-OC.webp"
          >
            <p class="text-justify">
              Stuff I've made that are completely original. Some you could even
              use as a desktop background!
            </p>
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
            icon_src="/images/thumbnails/Thumbnail_PersonalProjects-GraphicDesign-Recreations.png"
          >
            <p class="text-justify">
              Stuff I've made that recreate something that already exists.
            </p>
            <div class="text-center">
              <PushButton
                :stayHere="true"
                :to="`${$route.path}/graphic-design_recreations`"
              >
                View
              </PushButton>
            </div>
          </ProjectLink>
          <ProjectLink
            title="Remixes"
            icon_src="/images/thumbnails/Thumbnail_PersonalProjects-GraphicDesign-kindaOC.webp"
          >
            <p class="text-justify">
              In between original creation and recreation.
            </p>
            <div class="text-center">
              <PushButton
                :stayHere="true"
                :to="`${$route.path}/graphic-design_kinda-oc`"
              >
                View
              </PushButton>
            </div>
          </ProjectLink>
          <ProjectLink
            title="Icons"
            icon_src="/images/thumbnails/Thumbnail_PersonalProjects-GraphicDesign-Icons.webp"
          >
            <p class="text-justify">
              Icons I made. Some I actually used on my phone.
            </p>
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
            title="Tetris"
            icon_src="/images/thumbnails/Thumbnail_PersonalProjects-GraphicDesign-Tetr.webp"
          >
            <p class="text-justify">
              Concepts and other stuff I made involving Tetris. Some are
              original, some are recreations.
            </p>
            <div class="text-center">
              <PushButton
                :stayHere="true"
                :to="`${$route.path}/graphic-design_tetr`"
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
            icon_src="/images/thumbnails/Thumbnail_PersonalProjects-GraphicDesign-en150LinuxLocale.webp"
          >
            <p class="text-justify">
              I wasn't satisfied that there wasn't a specific locale in Linux
              and KDE that had the exact formats I want, since in Linux you
              choose a locale, whereas in Windows you can kinda just easily
              custom define (have AM and PM be emojis if you really want).
            </p>
            <p class="text-justify">
              So, as you do in Linux when you want something specific, I went to
              see how locales are even defined and made my own!
            </p>
            <div class="text-center">
              <PushButton
                :stayHere="true"
                :to="`${$route.path}/github_eu-linux-locale`"
              >
                View
              </PushButton>
            </div>
          </ProjectLink>
          <ProjectLink
            title="ANIMUSIC-like thing"
            icon_src="/images/thumbnails/Thumbnail_MIDIanimTtFaF-1080p.webp"
          >
            <p class="text-justify">
              Only after my HTL-5 3D (Blender) project/assignment was over did I
              get more interest. Or maybe cuz I was tight on time before. Either
              way, I decided to try a bit more of MIDIAnimator!
            </p>
            <p class="text-justify">
              This one is just basic drums animated to Through The Fire And
              Flames. I'd also like to animate flying drumsticks, but idk yet
              how to do that. I may come back to this in the future.
            </p>
            <div class="text-center">
              <PushButton
                :stayHere="true"
                :to="`${$route.path}/midi-animation_ttfaf`"
              >
                View
              </PushButton>
            </div>
          </ProjectLink>
        </div>
      </GlassCard>
    </NavigationSideBySide>
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
</style>
