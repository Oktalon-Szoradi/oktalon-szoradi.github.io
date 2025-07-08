<script setup lang="ts">
import { RouterView } from 'vue-router'
import { isNextViewLoading } from '@/stores/loadingHandler'
import WebsiteNavigationBar from '@/components/WebsiteNavigationBar.vue'
import LoadingCircle from '@/components/LoadingCircle.vue'
</script>

<template>
  <div id="status" v-if="isNextViewLoading">
    <LoadingCircle :size="256" />
  </div>
  <WebsiteNavigationBar />

  <!-- <div id="page-name">{{ String($route.name).toLowerCase() }}</div> -->
  <!-- <div id="page-name">{{ $route.name?.toString().toLowerCase() }}</div> -->
  <div id="page-name">{{ $route.name }}</div>

  <RouterView />
</template>

<style lang="scss">
@use '@/assets/util';

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#page-name {
  position: fixed;
  top: 64px;
  left: -0.125em;
  opacity: 0.1;
  z-index: -1;
  line-height: 0.9em;
  color: hsl(0deg 0% 0% / 100%);
  font-size: 18vw;
  user-select: none;
  filter: blur(0.333vw);

  @media (width <= 992px) {
    display: none;
  }
}

#background-gradient {
  position: fixed;
  z-index: -1;
  /* background: linear-gradient(
    to right,
    hsl(0deg 0% 0% / 15%),
    hsl(0deg 0% 0% / 5%) 25%,
    hsl(0deg 0% 0% / 5%) 75%,
    hsl(0deg 0% 0% / 15%)
    );
    background: linear-gradient(
      to top,
      hsl(206deg 50% 95%),
      hsl(206deg 100% 85%)
      ); */
  /* background-attachment: fixed; */
  /* background-clip: border-box; */
  background-image:
    linear-gradient(
      190deg,
      rgb(7 142 112 / 50%),
      rgb(38 207 170 / 50%),
      rgb(153 232 193 / 50%),
      rgb(123 173 226 / 50%),
      rgb(79 72 203 / 50%),
      rgb(61 26 119 / 50%)
    ),
    linear-gradient(
      185deg,
      rgb(7 142 112 / 50%),
      rgb(38 207 170 / 50%),
      rgb(153 232 193 / 50%),
      rgb(123 173 226 / 50%),
      rgb(79 72 203 / 50%),
      rgb(61 26 119 / 50%)
    ),
    linear-gradient(
      to bottom,
      rgb(7 142 112),
      rgb(38 207 170),
      rgb(153 232 193),
      rgb(123 173 226),
      rgb(79 72 203),
      rgb(61 26 119)
    );
  /* background-origin: border-box; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  /* height: 100%; */
}

#status {
  display: block;
  position: fixed;
  top: calc(50vh - 256px);
  z-index: 30;
  background: linear-gradient(
    to bottom,
    transparent,
    hsl(0deg 0% 0% / 75%),
    transparent
  );
  width: 100%;
  height: 512px;
  animation: fade-in 1s;

  > * {
    position: fixed;
    right: calc(50vw - 128px);
    bottom: calc(50vh - 128px);
    opacity: 0.9;
  }
}

main {
  padding-bottom: 1em;
}

.container {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 1320px;

  @media (width >= 576px) {
    max-width: 540px;
  }

  @media (width >= 768px) {
    max-width: 720px;
  }

  @media (width >= 992px) {
    max-width: 960px;
  }

  @media (width >= 1200px) {
    max-width: 1140px;
  }

  @media (width >= 1400px) {
    max-width: 1320px;
  }
}

.symbol {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1.15em;
}

.year-marker {
  margin: -2em 0 0.75em;
  text-align: end;
  text-shadow: none;
  color: hsl(0deg 0% 100% / 50%);
  font-size: 1.5em;
  font-weight: lighter;

  @media (width <= 1400px) {
    margin: 0 0 0.75em;
  }
}
</style>
