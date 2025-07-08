<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { MY_BIRTHDAY } from '@/assets/constants'
import { isToday } from '@/assets/util'

const route = useRoute()

const showTouchMenu = ref(false)
// const animCloseTouchMenu = ref(false)
// const currentWindowWidth = ref(0)

watch(route, () => {
  showTouchMenu.value = false
})

const toggleShowTouchMenu = () => {
  // if (showTouchMenu.value) {
  //   animCloseTouchMenu.value = true
  //   setTimeout(() => {
  //     showTouchMenu.value = false
  //     animCloseTouchMenu.value = false
  //   }, 500)
  // } else {
  //   showTouchMenu.value = true
  // }
  showTouchMenu.value = !showTouchMenu.value
}

const resizeHandler = () => {
  // currentWindowWidth.value = window.innerWidth
  if (window.innerWidth >= 992) {
    showTouchMenu.value = false
  }
}

onMounted(() => {
  resizeHandler()
  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>

<template>
  <header>
    <nav :class="showTouchMenu ? 'nav-adjust' : ''">
      <div class="container">
        <div class="nav-other">
          <a
            title="Return to the homepage"
            href="/"
            class="brand stay-pushed"
            :class="showTouchMenu ? 'brand-adjust' : ''"
          ></a>
          <div class="separator"></div>
          <a class="where-am-i"> {{ $route.name }} </a>
          <a
            :title="
              showTouchMenu
                ? 'Close the navigation menu'
                : 'Open the navigation menu'
            "
            class="menu-button"
            :class="showTouchMenu ? 'menu-button-active' : ''"
            @click="toggleShowTouchMenu()"
            >≡</a
          >
        </div>
        <div class="nav-links">
          <!-- <ul
            :class="[
              showTouchMenu ? '' : 'touch-hidden',
              animCloseTouchMenu ? 'nav-close-anim' : 'nav-open-anim'
            ]"
          > -->
          <ul :class="showTouchMenu ? '' : 'touch-hidden'">
            <li><RouterLink class="router-link" to="/">Home</RouterLink></li>
            <li>
              <RouterLink class="router-link" to="/projects"
                >Projects</RouterLink
              >
            </li>
            <li>
              <RouterLink class="router-link" to="/connections"
                >Connections</RouterLink
              >
            </li>
            <li>
              <RouterLink class="router-link" to="/credits">Credits</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="websitewide-message severe">!!! Something is broken !!!</div> -->
    <!-- <div class="websitewide-message major">!!! Under Construction !!!</div> -->
    <!-- <div class="websitewide-message minor">!!! will undergo maintenance on !!!</div> -->
    <div
      v-if="isToday(MY_BIRTHDAY) && $route.fullPath !== '/'"
      class="websitewide-message birthday"
    >
      🎂 Today is my birthday! 🎂
    </div>
    <div v-if="new Date().getMonth() === 5" class="websitewide-message rainbow">
      🏳️‍🌈 Happy Pride Month! 🏳️‍🌈
    </div>
    <!-- <div class="websitewide-message">Website-wide Banner Message</div> -->
    <!-- <div
      class="touch-close"
      v-show="showTouchMenu"
      @click="showTouchMenu = false"
    ></div> -->
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as vars;
@use '@/assets/mixins.scss' as mixins;

$navbar-height: 64px;
$gradient-nav:
  linear-gradient(
    to right,
    hsl(0deg 0% 0% / 50%),
    hsl(0deg 0% 0% / 0%),
    hsl(0deg 0% 0% / 50%)
  ),
  linear-gradient(
    to bottom,
    hsl(0deg 0% 0% / 80%),
    hsl(0deg 0% 0% / 70%),
    hsl(0deg 0% 0% / 90%)
  );

header {
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  box-shadow: 0 0 16px hsl(0deg 0% 0% / 50%);
  width: 100%;
  min-height: $navbar-height;
  backdrop-filter: blur(8px);
  /* * {
    z-index: 10;
  } */

  .websitewide-message {
    box-shadow:
      0 1px hsl(0deg 0% 0% / 75%),
      inset 0 -1px hsl(0deg 0% 100% / 50%),
      inset 0 1px hsl(0deg 0% 0% / 75%);
    background:
      vars.$reflection-minor,
      linear-gradient(
        to bottom,
        hsl(0deg 0% 55% / 75%),
        hsl(0deg 0% 20% / 75%),
        hsl(0deg 0% 30% / 75%)
      );
    padding: 4px 0;
    width: 100%;
    height: 100%;
    text-align: center;
    text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%);
    color: hsl(0deg 0% 85%);
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    font-weight: bold;

    &.birthday {
      background:
        vars.$reflection-minor,
        linear-gradient(
          to right,
          hsl(0deg 0% 0% / 0%),
          hsl(0deg 0% 0% / 15%),
          hsl(0deg 0% 0% / 0%)
        ),
        linear-gradient(
          to bottom,
          hsl(0deg 0% 100% / 20%),
          hsl(0deg 0% 0% / 20%),
          hsl(0deg 0% 0% / 0%)
        ),
        linear-gradient(
          to right,
          hsl(167deg 91% 29% / 90%),
          hsl(167deg 69% 48% / 90%),
          hsl(150deg 63% 75% / 90%),
          hsl(211deg 64% 68% / 90%),
          hsl(243deg 56% 54% / 90%),
          hsl(263deg 64% 28% / 90%)
        );
      text-shadow: vars.$textshadow-dimensions-nav 2px hsl(0deg 0% 0% / 100%);
    }

    &.rainbow {
      background:
        vars.$reflection-minor,
        linear-gradient(
          to right,
          hsl(0deg 0% 0% / 0%),
          hsl(0deg 0% 0% / 15%),
          hsl(0deg 0% 0% / 0%)
        ),
        linear-gradient(
          to bottom,
          hsl(0deg 0% 100% / 20%),
          hsl(0deg 0% 0% / 20%),
          hsl(0deg 0% 0% / 0%)
        ),
        linear-gradient(
          to right,
          hsl(0deg 100% 45% / 75%),
          hsl(33deg 100% 50% / 75%),
          hsl(56deg 100% 50% / 75%),
          hsl(135deg 97% 26% / 75%),
          hsl(222deg 100% 50% / 75%),
          hsl(293deg 100% 27% / 75%)
        );
      text-shadow: vars.$textshadow-dimensions-nav 2px hsl(0deg 0% 0% / 100%);
    }

    &.minor {
      @include mixins.glossy-color-gradient(
        45deg,
        vars.$reflection-minor,
        vars.$stripes
      );
    }

    &.major {
      @include mixins.glossy-color-gradient(
        25deg,
        vars.$reflection-minor,
        vars.$stripes
      );
    }

    &.severe {
      @include mixins.glossy-color-gradient(
        0deg,
        vars.$reflection-minor,
        vars.$stripes
      );
    }
  }
}

nav {
  box-shadow:
    0 1px hsl(0deg 0% 0% / 75%),
    inset 0 -1px hsl(0deg 0% 100% / 50%);
  background:
    vars.$reflection-weak,
    linear-gradient(
      to right,
      hsl(0deg 0% 0% / 50%),
      hsl(0deg 0% 0% / 0%),
      hsl(0deg 0% 0% / 50%)
    ),
    linear-gradient(
      to bottom,
      hsl(0deg 0% 0% / 80%),
      hsl(0deg 0% 0% / 70%),
      hsl(0deg 0% 0% / 90%)
    );
  width: 100%;

  .container,
  .nav-other {
    display: flex;
    /* justify-content: center; */
    /* transition-duration: 500ms; */
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    /* transition: color 100ms, text-shadow 100ms, background 0ms; */
    cursor: pointer;
    padding: 0 32px;
    min-width: 64px;
    min-height: $navbar-height;
    text-decoration: none;
    text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%);
    white-space: nowrap;
    color: hsl(0deg 0% 75%);
    user-select: none;

    &:not(.where-am-i, .router-link-active):hover {
      text-shadow:
        vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
        0 0 8px hsl(0deg 0% 100% / 75%);
      color: hsl(0deg 0% 85%);
    }

    &:not(.where-am-i, .router-link-active):focus,
    &:not(.where-am-i, .router-link-active):active {
      text-shadow:
        vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
        0 0 8px hsl(0deg 0% 0% / 10%);
      color: hsl(0deg 0% 45%);
    }

    &.router-link-active {
      background:
        linear-gradient(
          to right,
          transparent 40%,
          hsl(0deg 0% 100% / 7.5%),
          transparent 60%
        ),
        linear-gradient(
          to right,
          transparent 37.5%,
          hsl(0deg 0% 100% / 7.5%),
          transparent 62.5%
        ),
        radial-gradient(
          ellipse at top,
          hsl(0deg 0% 100% / 40%),
          transparent 7.5%
        ),
        radial-gradient(
          ellipse at bottom,
          hsl(0deg 0% 100% / 75%),
          transparent 7.5%
        );
      background-position: 50% 0%;
      background-size: 350% 100%;
      text-shadow:
        vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
        0 0 8px hsl(0deg 0% 100% / 75%);
      color: hsl(0deg 0% 85%);
    }
  }

  .where-am-i {
    display: none;
    margin: 0 64px 0 0;
    cursor: text;
    padding: 0;
    color: hsl(0deg 0% 100% / 75%);
    /* letter-spacing: 0.1em; */
    font-size: 1.25em;
    user-select: auto;

    &:hover {
      filter: none;
    }

    &:active {
      filter: none;
    }
  }

  .menu-button {
    display: none;
    padding-right: 0;
    font-size: 2.777em;
  }

  .menu-button-active,
  .menu-button-active:hover {
    /* position: relative;
    top: 4px; */
    text-shadow:
      vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
      0 0 8px hsl(0deg 0% 0% / 10%) !important;
    color: hsl(0deg 0% 45%) !important;
  }

  /* @keyframes slide-in {
    from {
      opacity: 0;
      margin-top: calc(-64px * 5);
    }

    to {
      opacity: 1;
      margin-top: 0;
    }
  }

  @keyframes slide-out {
    from {
      opacity: 1;
      margin-top: 0;
    }

    to {
      opacity: 0;
      margin-top: calc(-64px * 5);
    }
  } */

  @media (width <= 992px) {
    .touch-hidden {
      display: none;
    }

    .brand {
      padding-right: 0;
    }

    .where-am-i {
      display: flex;
      align-items: center;
    }

    .menu-button {
      display: flex;
      align-items: baseline;
      padding-left: 0;
    }

    .separator {
      display: none;
    }

    ul {
      flex-direction: column;
      // box-shadow: inset 0 4px 4px -4px hsl(0deg 0% 0% / 10%);
    }

    /* .nav-open-anim {
      animation: slide-in 500ms;
    }

    .nav-close-anim {
      animation: slide-out 500ms;
    } */

    .container {
      display: block;
    }

    .nav-other {
      justify-content: space-between;
      /* box-shadow: 0 1px hsl(0deg 0% 0% / 5%);
      background: radial-gradient(
        ellipse 100% 50% at bottom,
        hsl(0deg 0% 100% / 10%),
        transparent 55%
      ); */
      /* border-width: 1px;
      border-style: solid;
      border-image: conic-gradient(
          transparent 95deg,
          hsl(0deg 0% 50% / 50%) 95.75deg 95.9deg,
          transparent 96.4deg 261.75deg,
          hsl(0deg 0% 50% / 50%) 262.75deg 264.5deg,
          transparent 265deg
        )
        1;
      border-image-outset: 0; */
    }
  }
}

.nav-adjust {
  background:
    linear-gradient(
      to bottom,
      hsl(0deg 0% 100% / 2.5%),
      hsl(0deg 0% 100% / 5%) 9.9%,
      transparent 9.9%
    ),
    linear-gradient(
      to right,
      hsl(0deg 0% 0% / 50%),
      hsl(0deg 0% 0% / 0%),
      hsl(0deg 0% 0% / 50%)
    ),
    linear-gradient(
      to bottom,
      hsl(0deg 0% 0% / 80%),
      hsl(0deg 0% 0% / 70%),
      hsl(0deg 0% 0% / 90%)
    );
}

.touch-close {
  position: absolute;
  z-index: 1;
  /* background: hsl(0deg 0% 0% / 10%); */
  width: 100%;
  height: 100vh;
  /* backdrop-filter: blur(4px); */
}

.brand {
  justify-content: start;
  background-image: url('@/assets/TalonLogo/TalonLogo.png');
  background-position: left 1.5px;
  background-repeat: no-repeat;
  background-size: 128px 171px;
  padding: 0 16px 0 0;
  width: 128px;

  &:hover {
    background-position: left -58.5px;
    text-shadow:
      vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
      0 0 8px hsl(0deg 0% 100% / 75%);
    color: hsl(0deg 0% 85%);
  }

  &:focus,
  &:active {
    background-position: left -115.5px;
    text-shadow:
      vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
      0 0 8px hsl(0deg 0% 0% / 10%);
    color: hsl(0deg 0% 45%);
  }
}

/* .brand-adjust {
  background-position: left 4px;

  &:hover {
    background-position: left calc(-57px + 4px);
  }

  &:active {
    background-position: left calc(-114px + 4px);
  }
} */

.separator {
  background: linear-gradient(
    to bottom,
    transparent,
    hsl(0deg 0% 100% / 25%),
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
      hsl(0deg 0% 0% / 50%),
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

@media (prefers-reduced-transparency) {
  header {
    backdrop-filter: none;

    .websitewide-message {
      background:
        vars.$reflection-minor,
        linear-gradient(
          to bottom,
          hsl(167deg 25% 55%),
          hsl(167deg 25% 20%),
          hsl(167deg 25% 30%)
        );

      &.birthday {
        background:
          vars.$reflection-minor,
          linear-gradient(
            to right,
            hsl(0deg 0% 0% / 0%),
            hsl(0deg 0% 0% / 15%),
            hsl(0deg 0% 0% / 0%)
          ),
          linear-gradient(
            to bottom,
            hsl(0deg 0% 100% / 20%),
            hsl(0deg 0% 0% / 20%),
            hsl(0deg 0% 0% / 0%)
          ),
          linear-gradient(
            to right,
            hsl(167deg 91% 29%),
            hsl(167deg 69% 48%),
            hsl(150deg 63% 75%),
            hsl(211deg 64% 68%),
            hsl(243deg 56% 54%),
            hsl(263deg 64% 28%)
          );
        text-shadow: vars.$textshadow-dimensions-nav 2px hsl(0deg 0% 0% / 100%);
      }

      &.rainbow {
        background:
          vars.$reflection-minor,
          linear-gradient(
            to right,
            hsl(0deg 0% 0% / 0%),
            hsl(0deg 0% 0% / 15%),
            hsl(0deg 0% 0% / 0%)
          ),
          linear-gradient(
            to bottom,
            hsl(0deg 0% 100% / 20%),
            hsl(0deg 0% 0% / 20%),
            hsl(0deg 0% 0% / 0%)
          ),
          linear-gradient(
            to right,
            hsl(0deg 100% 45%),
            hsl(33deg 100% 50%),
            hsl(56deg 100% 50%),
            hsl(135deg 97% 26%),
            hsl(222deg 100% 50%),
            hsl(293deg 100% 27%)
          );
        text-shadow: vars.$textshadow-dimensions-nav 2px hsl(0deg 0% 0% / 100%);
      }

      &.minor {
        @include mixins.glossy-color-gradient-opaque(
          45deg,
          vars.$reflection-minor,
          vars.$stripes
        );
      }

      &.major {
        @include mixins.glossy-color-gradient-opaque(
          25deg,
          vars.$reflection-minor,
          vars.$stripes
        );
      }

      &.severe {
        @include mixins.glossy-color-gradient-opaque(
          0deg,
          vars.$reflection-minor,
          vars.$stripes
        );
      }
    }
  }

  nav {
    background:
      vars.$reflection-weak,
      linear-gradient(
        to right,
        hsl(0deg 0% 0% / 50%),
        hsl(0deg 0% 0% / 0%),
        hsl(0deg 0% 0% / 50%)
      ),
      linear-gradient(
        to bottom,
        hsl(167deg 25% 7.5%),
        hsl(167deg 25% 10%),
        hsl(167deg 25% 5%)
      );
  }
}
</style>
