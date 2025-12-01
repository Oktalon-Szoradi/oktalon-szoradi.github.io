<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import AbbreviationMobile from '@/components/AbbreviationMobile.vue'
import LoadingCircle from '@/components/LoadingCircle.vue'
import PushButton from '@/components/PushButton.vue'
import ImageHandler from '@/components/ImageHandler.vue'
import CommandLink from '@/components/CommandLink.vue'
import { REPOSITORY_LINK, MY_BIRTHDAY } from '@/assets/constants'
import { getAge, isToday } from '@/assets/util'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBranchLastUpdatedStore } from '@/stores/branchLastUpdatedStore'

const route = useRoute()

const myAge = getAge(MY_BIRTHDAY)

const time = ref('')

const meow = useBranchLastUpdatedStore()
meow.fetchLastUpdated()

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

function updateTime(): void {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Europe/Vienna',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
  time.value = new Date().toLocaleTimeString('de-AT', options)
}

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

  updateTime()

  if (prefersReducedMotion) {
    setInterval(updateTime, 60000)
  } else {
    setInterval(updateTime, 1000)
  }
})

watch(
  () => route.fullPath,
  () => {
    scrollToTarget()
  }
)
</script>

<template>
  <main class="container">
    <GlassCard
      v-if="isToday(MY_BIRTHDAY)"
      :title="`${myAge - 1} → ${myAge}`"
      birthday
      class="text-center"
    >
      <span class="emoji">🎂</span>
      Today is my birthday!
      <span class="emoji">🎂</span>
    </GlassCard>

    <GlassCard id="hi" title="Hello, World!" class="text-justify">
      <div class="text-center">Welcome to my homepage!</div>
      <p>
        On this website you can find out more about me, my projects, see where
        else I'm at, and anything else I felt like putting here&emsp;:3
      </p>
      This website was made using the
      <a href="https://vuejs.org/" target="_blank">Vue.js</a>
      framework. All the styling is written by me in
      <a href="https://sass-lang.com/" target="_blank">Sass</a>. I'm also using
      <a href="https://ark-ui.com/" target="_blank">Ark UI</a>
      for some components.
      <div class="text-center">
        <PushButton :href="REPOSITORY_LINK">GitHub Repository</PushButton>
      </div>
    </GlassCard>

    <div class="flex intro-flex">
      <ImageHandler
        class="pfp"
        src="/images/Coins_FrameAero_MLM_Large.webp"
        :spaceRight="true"
      />
      <GlassCard id="about" title="About Me" noCenter>
        Talon, {{ myAge }}, <span class="symbol">♂</span> (he/him)
        <p>
          Born in Florida, but live in Austria<br />
          Time for me right now: <code class="time">{{ time }}</code>
          <span v-if="prefersReducedMotion" class="btw">
            (Only updated every minute to reduce motion)
          </span>
        </p>
        I know a bit
        <AbbreviationMobile title="Object-Oriented Programming"
          >OOP</AbbreviationMobile
        >, fullstack development, and some
        <AbbreviationMobile title="Structured Query Language (for databases)"
          >SQL</AbbreviationMobile
        >.
        <p>Some stuff I like:</p>
        <ul>
          <li>
            <AbbreviationMobile title="Information Technology"
              >IT</AbbreviationMobile
            >
            (Computers,
            <AbbreviationMobile title="Operating Systems"
              >OSes</AbbreviationMobile
            >, programming)
          </li>
          <li>
            <AbbreviationMobile title="Free and Open-Source Software"
              >FOSS</AbbreviationMobile
            >, Copyleft
          </li>
          <li>
            Companies like
            <a href="https://frame.work/" target="_blank"> Framework </a>
            and
            <a href="https://www.fairphone.com/" target="_blank">Fairphone</a>
          </li>
          <li>Skeuomorphism, "Frutiger Aero"</li>
          <li>
            <AbbreviationMobile title="Musical Instrument Digital Interface"
              >MIDI</AbbreviationMobile
            >-driven animation, like ANIMUSIC and
            <a href="https://laserslightsandmusic.com/" target="_blank">
              Lasers, Lights, and Music
            </a>
          </li>
          <li>
            Modern falling block puzzles, like modern Tetris (I'm pretty good at
            it)
          </li>
          <li>
            Home cooking (and also baking perhaps, I'm a total beginner, but
            have baked bread a couple times!)<br />
            Inspirational YouTube channels:
            <a href="https://www.youtube.com/@EthanChlebowski" target="_blank">
              Ethan Chlebowski
            </a>
            and
            <a href="https://www.youtube.com/@aragusea" target="_blank">
              Adam Ragusea
            </a>
          </li>
        </ul>
      </GlassCard>
    </div>

    <GlassCard id="funFacts" title="Fun Facts" class="text-justify">
      The profile picture I use basically everywhere is of three €0.50 coins
      stacked on top of each other. I shot it on my first phone, the Samsung
      Galaxy A5 (2017), on 17 April 2018 at 15:23. It took me quite a while to
      stack them, but it was well worth it&emsp;:3
      <br /><br />
      Have you noticed the gradient in the background and my logo? I didn't
      choose those colors at random. If you know what they mean and are
      supportive, then you're cool~
    </GlassCard>

    <GlassCard id="gear" title="My Gear">
      I daily drive:
      <div class="flex-center">
        <table class="spec-table">
          <thead>
            <tr>
              <th></th>
              <th>PC</th>
              <th>Framework Laptop 13</th>
            </tr>
            <tr class="divider-row">
              <td colspan="100%">
                <hr />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="spec-header-col">CPU:</td>
              <td>Intel Core i7-7700</td>
              <td>AMD Ryzen AI 5 340</td>
            </tr>
            <tr>
              <td class="spec-header-col">RAM:</td>
              <td>32 GiB DDR4</td>
              <td>32 GiB DDR5</td>
            </tr>
            <tr>
              <td class="spec-header-col">GPU:</td>
              <td>AMD Radeon RX 5700</td>
              <td>(integrated)</td>
            </tr>
            <tr>
              <td class="spec-header-col">Storage:</td>
              <td>I have like 3 SSDs<br />and a 750 GB HDD</td>
              <td>1 TB NVMe M.2 SSD</td>
            </tr>
            <tr>
              <td class="spec-header-col">OS:</td>
              <td>
                Windows 10 IoT Enterprise LTSC 2021,<br />
                Debian 13 (stable)
              </td>
              <td>Debian sid (unstable)</td>
            </tr>
          </tbody>
        </table>
      </div>
      Legend:<br />
      &emsp;
      <AbbreviationMobile title="Personal Computer"> PC </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Central Processing Unit">
        CPU
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Random Access Memory">
        RAM
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Graphics Processing Unit">
        GPU
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Operating System"> OS </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Advanced Micro Devices, Inc.">
        AMD
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Artificial Intelligence">
        AI
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Double Data Rate"> DDR </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Hard Disk Drive"> HDD </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Solid State Drive"> SSD </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Gibibyte (2^30 bytes)">
        GiB
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Gigabyte (10^9 bytes)">
        GB
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Terabyte (10^12 bytes)">
        TB
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Non-Volatile Memory Express">
        NVMe
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Internet of Things"> IoT </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title="Long-Term Servicing Channel">
        LTSC
      </AbbreviationMobile>
      &emsp;
      <AbbreviationMobile title='Sidney "Sid" Phillips (Toy Story, 1995)'>
        sid
      </AbbreviationMobile>
    </GlassCard>

    <GlassCard id="aboutExtra" clear>
      <h2 class="no-top-margin">More About Me</h2>
      Here are some extra pages to learn more about me
      <div id="music" class="command-link-area">
        <CommandLink
          title="What Music Do I Listen To?"
          to="/music"
          icon_src="/icons/audio-headphones.svg"
        >
          I have trouble answering this question, so… here's this page then!
        </CommandLink>
      </div>
    </GlassCard>

    <GlassCard id="lastUpdated" clear class="text-center">
      Site last updated on:<br />
      <div class="last-updated">
        <LoadingCircle v-if="meow.loading" :size="32" />
        <code>
          {{ meow.lastUpdated?.split('T')[0] }}
          <!-- {{ meow.lastUpdated?.split('T')[0] ?? '?' }} -->
          <!-- {{ meow.lastUpdated?.split('T')[1] }} -->
        </code>
      </div>
    </GlassCard>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as vars;

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

.emoji {
  /* text-shadow: none; */
  text-shadow: 0 2px 2px hsl(0deg 0% 0% / 15%);
  font-size: 2em;
}

.btw {
  font-size: 0.8em;
}

.intro-flex {
  align-items: start;
  justify-content: center;
  margin-top: 2em;

  :deep(.pfp) {
    margin-top: -8px;
    margin-right: 2em;
    height: 256px;
  }

  div {
    margin: 0;
    /* width: 100%; */
  }

  @media (width <=vars.$breakpoint-sm) {
    flex-direction: column;
    align-items: center;
    margin: 2em 1em 0;

    :deep(.pfp) {
      margin: 2em;
    }
  }
}

.time {
  font-size: 1rem;
}

.last-updated {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;

  code {
    font-size: 1rem;
  }

  div {
    margin-bottom: -4px;
  }
}

td {
  padding: 0.25em 0.5em;
}

.divider-row {
  hr {
    margin: 0 0 0.333em;
  }
}

.spec-table {
  thead th {
    padding-right: 3em;
    letter-spacing: 0.1em;
    color: rgb(153 232 193);
    font-weight: 900;
  }

  tbody {
    td {
      vertical-align: top;
    }

    .spec-header-col {
      text-align: end;
      letter-spacing: 0.1em;
      color: rgb(123 173 226);
      font-weight: 900;
    }
  }
}

.command-link-area {
  display: flex;
  flex-direction: column;

  > * {
    margin: 1.5em 0 0;
  }

  @media (width <=vars.$breakpoint-sm) {
    > * {
      margin: 2em 1em 0;
    }
  }
}

.accordion {
  :deep([data-part='item-trigger']) {
    padding: 0 0.75em;
  }

  .left-right-padding {
    padding: 0 1.25em;
  }
}
</style>
