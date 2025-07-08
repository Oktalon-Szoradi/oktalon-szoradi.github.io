<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavigationButton from '@/components/NavigationButton.vue'
import AccordionSingle from '@/components/AccordionSingle.vue'
import ProjectLink from '@/components/ProjectLink.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'

const SCHOOL_GRADES = [
  'Very Good',
  'Good',
  'Satisfactory',
  'Enough',
  'Not Enough'
]

const SCHOOLS = [
  // 'Pre-School*',
  'Kindergarten',
  'Elementary School 1st grade',
  'Elementary School 2nd grade',
  'Elementary School 3rd grade',
  'Elementary School 4th grade',
  'Middle School 1st grade',
  'Middle School 2nd grade',
  'Middle School 3rd grade',
  'Middle School 4th grade',
  'Höhere Technische Lehranstalt 1st grade',
  'Höhere Technische Lehranstalt 2nd grade',
  'Höhere Technische Lehranstalt 3rd grade',
  'Höhere Technische Lehranstalt 4th grade',
  'Höhere Technische Lehranstalt 5th grade'
  // "Fachhochschule (Bachelor's Study) Year 1",
  // "Fachhochschule (Bachelor's Study) Year 2",
  // "Fachhochschule (Bachelor's Study) Year 3",
]

const route = useRoute()

function scrollToTarget(timeout: number = 0) {
  const scrollToId = route.query.scrollTo as string | undefined
  if (scrollToId) {
    setTimeout(() => {
      const element = document.getElementById(scrollToId)
      if (element) {
        // Optional: adjust for sticky navbar
        const navbar = document.querySelector('header') as HTMLElement | null
        const navbarHeight = navbar?.offsetHeight ?? 0
        const y =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight
        window.scrollTo({ top: y, behavior: 'smooth' })
        // window.scrollTo({ top: y })
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
  <div class="container flex">
    <aside class="sticky flex">
      <div class="main-aside">
        <NavigationButton to="/projects">
          <code>&lt;-</code>&ensp;Back to Projects
        </NavigationButton>
        <GlassCard class="aside-card navigation">
          <h1>Navigation</h1>
          <a :href="`/#${$route.path}?scrollTo=HTL`" @click="scrollToTarget()"
            ><b>HTL Wien West</b></a
          >
          <ul class="nav-list">
            <li>
              <a
                :href="`/#${$route.path}?scrollTo=HTL-3`"
                @click="scrollToTarget()"
              >
                3rd Grade (Cumulative: 11)
              </a>
            </li>
            <li>
              <a
                :href="`/#${$route.path}?scrollTo=HTL-4`"
                @click="scrollToTarget()"
              >
                4th Grade (Cumulative: 12)
              </a>
            </li>
            <!--
              <li>
                <a :href="`/#${$route.path}?scrollTo=HTL-5`">
                  5th Grade (Cumulative: 13)
                </a>
              </li>
              -->
          </ul>
          <!--
            <a :href="`/#${$route.path}?scrollTo=FH`"><b>FH Campus Wien</b></a>
            <ul class="nav-list">
              <li>
                <a :href="`/#${$route.path}?scrollTo=FH-1`"> Year 1 </a>
              </li>
              <li>
                <a :href="`/#${$route.path}?scrollTo=FH-2`"> Year 2 </a>
              </li>
              <li>
                <a :href="`/#${$route.path}?scrollTo=FH-3`"> Year 3 </a>
              </li>
            </ul>
            -->
        </GlassCard>
        <GlassCard class="reference-card aside-card">
          <h1>Reference</h1>
          <AccordionSingle title="Austrian grading system:" :open="true">
            <table class="indent small-text">
              <tbody>
                <tr v-for="(name, i) of SCHOOL_GRADES" :key="i">
                  <td class="text-center">{{ i + 1 }}</td>
                  <td>=</td>
                  <td>{{ name }}</td>
                </tr>
              </tbody>
            </table>
          </AccordionSingle>
          <hr />
          <AccordionSingle title="Cumulative grade:">
            <table class="indent small-text">
              <tbody>
                <tr v-for="(name, i) of SCHOOLS" :key="i">
                  <td>Grade</td>
                  <td class="text-center">{{ i }}:</td>
                  <td>{{ name }}</td>
                </tr>
              </tbody>
            </table>
          </AccordionSingle>
        </GlassCard>
      </div>
      <div class="separator"></div>
    </aside>
    <main>
      <GlassCard id="HTL" title="HTL Wien West" class="main-card">
        <!-- <h1 id="HTL" class="no-top-margin">HTL Wien West</h1> -->
        <h2 id="HTL-3" class="no-top-margin">3rd Grade (Cumulative: 11)</h2>
        <p class="no-top-margin">
          <b>School year 2021/2022</b>
        </p>
        <p class="text-justify">
          We started learning a bit of JavaScript and were tasked with
          programming a match-the-pairs memory game and a
          <i>Cookie Clicker</i>-like game. My JavaScript and overall web
          development skills at the time were quite... not good. Nevertheless,
          I'll keep them here as an exhibit.
        </p>
        <p>
          <img class="inline-icon" src="/icons/dialog-warning.svg" />
          <b class="amber">Caution:</b> Memory Game and Cookie Clicker Pro were
          only tested to work on 1920&times;1080 desktop screens (and at 100%
          scaling. Limited mobile support)!
        </p>
        <div class="flex flex-many">
          <ProjectLink
            title="Memory Game"
            icon_src="/images/thumbnails/Thumbnail_MemoryGame-1080p.webp"
          >
            <p class="text-justify">
              Match the pairs of numbers by flipping over the right cards. There
              are 3 levels, each with increasingly more cards.
            </p>
            <div class="text-center">
              <PushButton
                color="green"
                :stayHere="true"
                href="/non-vue/memory-game/index.html"
              >
                Play
              </PushButton>
            </div>
          </ProjectLink>
          <ProjectLink
            title="Cookie Clicker Pro"
            icon_src="/images/thumbnails/Thumbnail_CookieClickerPro-1080p.webp"
          >
            <p class="text-justify">
              Click the cookie as many times as you can within 15 seconds. Each
              click moves the cookie to a new random position.
            </p>
            <div class="text-center">
              <PushButton
                color="green"
                :stayHere="true"
                href="/non-vue/cookie-clicker-pro/index.html"
              >
                Play
              </PushButton>
            </div>
          </ProjectLink>
        </div>
        <h2 id="HTL-4">4th Grade (Cumulative: 12)</h2>
        <p class="no-top-margin">
          <b>School year 2022/2023</b>
        </p>
        <div class="flex flex-many">
          <ProjectLink
            title="Water Photo&shy;graphy"
            icon_src="/images/thumbnails/Thumbnail_WaterPhotography-1080p.webp"
          >
            <b>Teacher's grade: 1.2</b>
            <p class="text-justify">
              I was tasked with taking around 30 photos and editing them. I
              decided to take photos of water-related stuff. Most of them turned
              out pretty good.
            </p>
            The camera I used (borrowed from school) was a <b>Nikon D300S</b>.
            <div class="text-center">
              <PushButton :stayHere="true" :to="`${$route.path}/htl4_photo`">
                View
              </PushButton>
            </div>
          </ProjectLink>
          <ProjectLink
            title="3D (Blender)"
            icon_src="/images/thumbnails/Thumbnail_Blender-1080p.webp"
          >
            <b>Teacher's grade: 1-2</b>
            <p class="text-justify">
              The theme was space, but at the time I only had a donut, so I
              improvised:
            </p>
            <p class="text-justify">
              Suzanne is taking over the universe, I guess and it seems she's
              turning planets into donuts.
            </p>
            <div class="text-center">
              <PushButton :stayHere="true" :to="`${$route.path}/htl4_3d`">
                View
              </PushButton>
            </div>
          </ProjectLink>
          <ProjectLink
            title="Video"
            icon_src="/images/thumbnails/Thumbnail_Video-AnsweringToyLogo.webp"
          >
            <b>Teacher's grade: 8/10</b>
            <p class="text-justify">
              Here I had to make a short ad-style (or, moreso kickstarter-style)
              video. It had to have at least 10 shots, and some having motion.
              My initial video was long and boring, but I managed to make it a
              lot better.
            </p>
            <div class="text-center">
              <PushButton :stayHere="true" :to="`${$route.path}/htl4_video`">
                View
              </PushButton>
            </div>
          </ProjectLink>
          <ProjectLink
            title="Audio: Soundtrap"
            icon_src="/images/thumbnails/Thumbnail_Soundtrap-1080p.webp"
          >
            <b>Teacher's grade: 10/10</b>
            <p class="text-justify">
              This felt more like an assignment rather than a project. We
              learned a couple music basics (like how to make chords/harmony),
              then we had to make some songs using
              <a href="https://www.soundtrap.com/" target="_blank">Soundtrap</a
              >. I made 3 in total, I think they're okay.
            </p>
            <div class="text-center">
              <PushButton
                :stayHere="true"
                :to="`${$route.path}/htl4_audio-soundtrap`"
              >
                View
              </PushButton>
            </div>
          </ProjectLink>
          <ProjectLink
            title="Audio: Syn&shy;chro&shy;ni&shy;za&shy;tion"
            icon_src="/images/thumbnails/Thumbnail_Synchro-1080p.webp"
          >
            <b>Teacher's grade: 9/10</b>
            <p class="text-justify">
              Here I had to pick a random video and basically do a voiceover.
              Many chose to just translate from English to German. Some, like
              me, did a parody. I tried to make the new script fit the
              original's lip movements. I personally am not really satisfied
              with the script, but it's fine. It's kinda random, like shitposts,
              hence the name "Hey Vsauce, Random here"
            </p>
            <div class="text-center">
              <PushButton
                :stayHere="true"
                :to="`${$route.path}/htl4_audio-synchro`"
              >
                View
              </PushButton>
            </div>
          </ProjectLink>
        </div>
        <!--
        <h2 id="HTL-5">5th Grade (Cumulative: 13)</h2>

        <hr />

        <h1 id="FH">FH Campus Wien</h1>
        <h2 id="FH-1">Year 1</h2>
        <h2 id="FH-2">Year 2</h2>
        <h2 id="FH-3">Year 3</h2>
        -->
      </GlassCard>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as vars;
@use '@/assets/mixins.scss' as mixins;

.flex {
  gap: 1em;

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

.navigation {
  a {
    text-decoration: none;
    text-decoration-color: hsl(0deg 0% 100% / 45%);
    color: hsl(0deg 0% 100% / 90%);

    &:hover {
      text-decoration: underline;
    }
  }
}

.inception {
  padding: 0 0.5em 1px;
}

.content {
  padding: 0.5em;
}

.amber {
  color: orange;
}

.aside-card {
  margin: 1em 0;
}

.navigation,
.reference-card {
  h1 {
    margin: -0.67em 0 0;
    text-align: center;
    text-shadow: none;
    color: hsl(0deg 0% 100% / 25%);
    font-size: 2.5em;
    font-weight: lighter;
  }
}

.main-card,
.info-card {
  margin: 1em 0;

  h1 {
    border-radius: 2px;
    box-shadow:
      inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
      0 0 0 1px hsl(0deg 0% 0% / 50%);
    background:
      vars.$reflection-soft,
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
    text-align: center;
    color: hsl(0deg 0% 100% / 50%);
    scroll-margin-top: calc(64px + 24px);
  }

  h2,
  h3 {
    scroll-margin-top: calc(64px + 24px);
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
}

.nav-list,
.ref-list {
  /* margin: 0.5em 0 1em; */
  margin: 0.5em 0 0;
  padding-left: 1em;
  list-style: none;

  li {
    margin: 0.25em 0;
  }
}

.indent {
  margin-left: 0.333em;
}

.small-text {
  font-size: 0.75rem;
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

@media (width <= 768px) {
  .flex {
    flex-direction: column;

    aside {
      display: block;
      flex-basis: auto;
      width: 100%;

      a {
        margin-left: 0;
      }
    }
  }

  .flex-many {
    > * {
      display: block;
      margin: 0;
      width: auto;
    }
  }

  .sticky {
    position: static;
  }

  .main-aside {
    display: block;
    padding: 0 1em;
  }

  .separator {
    display: none;
  }

  .main-card {
    margin: 0 1em;
  }
}
</style>
