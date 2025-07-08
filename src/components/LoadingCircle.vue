<template>
  <div>
    <svg
      class="loading-circle"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${size} ${size}`"
      :width="size"
      :height="size"
    >
      <defs>
        <radialGradient id="Glow">
          <stop offset="35%" stop-color="#94c5eb" stop-opacity="0" />
          <stop offset="45%" stop-color="#216fac" />
          <stop offset="72.5%" stop-color="#216fac" />
          <stop offset="80%" stop-color="#94c5eb" stop-opacity="0.1" />
          <stop offset="90%" stop-color="transparent" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="Base" r="0.67">
          <stop offset="50%" stop-color="#0383ab" />
          <stop offset="100%" stop-color="#052d40" />
        </radialGradient>
        <linearGradient id="Base2" x1="0" y1="-0.1" x2="0" y2="1.1">
          <stop offset="0%" stop-color="#94ebfe" />
          <stop offset="10%" stop-color="#5adefe" />
          <stop offset="45%" stop-color="#5adefe" stop-opacity="0" />
          <stop offset="55%" stop-color="#5adefe" stop-opacity="0" />
          <stop offset="90%" stop-color="#5adefe" />
          <stop offset="100%" stop-color="#94ebfe" />
        </linearGradient>
        <radialGradient id="BottomShine" cy="0.067" r="2">
          <stop offset="45%" stop-color="white" stop-opacity="0" />
          <stop offset="50%" stop-color="#ebfcff" stop-opacity="0.5" />
          <stop offset="55%" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="Reflection" cy="-0.5" r="2">
          <stop offset="0%" stop-color="white" stop-opacity="0.25" />
          <stop offset="49.5%" stop-color="white" stop-opacity="0.5" />
          <stop offset="50.5%" stop-color="white" stop-opacity="0" />
          <stop offset="100%" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="TopShine" cy="0.625" r="1.4">
          <stop offset="45%" stop-color="white" stop-opacity="0" />
          <stop offset="50%" stop-color="white" stop-opacity="0.9" />
        </radialGradient>
        <radialGradient id="SpinnerOrb" cy="0" r="1">
          <stop offset="0%" stop-color="white" stop-opacity="0.9" />
          <stop offset="10%" stop-color="white" stop-opacity="0.8" />
          <stop offset="20%" stop-color="#94ebfe" stop-opacity="0.8" />
          <stop offset="25%" stop-color="#94ebfe" stop-opacity="0.7" />
          <stop offset="50%" stop-color="#94ebfe" stop-opacity="0" />
        </radialGradient>
        <!-- <radialGradient id="SpinnerOrbTrail" cx="0.4" cy="0.03" r="1">
          <stop offset="0%" stop-color="white" stop-opacity="0.9" />
          <stop offset="30%" stop-color="#94ebfe" stop-opacity="0.9" />
          <stop offset="60%" stop-color="#94ebfe" stop-opacity="0" />
        </radialGradient> -->
        <!-- <linearGradient id="SpinnerOrbTrail">
          <stop offset="20%" stop-color="#94ebfe" stop-opacity="0" />
          <stop offset="40%" stop-color="#94ebfe" />
          <stop offset="52.5%" stop-color="white" />
          <stop offset="60%" stop-color="#94ebfe" stop-opacity="0" />
        </linearGradient> -->
      </defs>
      <circle cx="50%" cy="50%" r="50%" fill="url(#Glow)" />
      <circle
        cx="50%"
        cy="50%"
        r="30%"
        fill="none"
        stroke="url(#Base)"
        :stroke-width="size / 8"
      />
      <circle
        cx="50%"
        cy="50%"
        r="30%"
        fill="none"
        stroke="url(#Base2)"
        :stroke-width="size / 8"
      />
      <circle
        cx="50%"
        cy="50%"
        r="30%"
        fill="none"
        stroke="url(#BottomShine)"
        :stroke-width="size / 8"
      />
      <!-- <circle
        cx="50%"
        cy="50%"
        r="30%"
        fill="none"
        stroke="url(#SpinnerOrbTrail)"
        :stroke-width="size / 8"
        :stroke-dasharray="size * 0.75"
        :stroke-dashoffset="size / -1.35"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          :from="`0 ${size / 2} ${size / 2}`"
          :to="`360 ${size / 2} ${size / 2}`"
          dur="s"
          repeatCount="indefinite"
        />
      </circle> -->
      <circle
        cx="50%"
        cy="50%"
        r="30%"
        fill="none"
        stroke="url(#SpinnerOrb)"
        :stroke-width="size / 8"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          :from="`0 ${size / 2} ${size / 2}`"
          :to="`360 ${size / 2} ${size / 2}`"
          :dur="`${speed}s`"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="50%"
        cy="50%"
        r="30%"
        fill="none"
        stroke="url(#Reflection)"
        :stroke-width="size / 8"
      />
      <circle
        cx="50%"
        cy="50%"
        r="30%"
        fill="none"
        stroke="url(#TopShine)"
        :stroke-width="size / 8"
      />
    </svg>
    <!-- <div class="ball" :style="`width: ${size / 8}px; height:${size / 8}px`"></div> -->
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: { type: Number, default: 64 },
  speed: { type: Number, default: 1 }
})
</script>

<style lang="scss" scoped>
.ball {
  border-radius: 50%;
  box-shadow: 0 0 4px 2px #94ebfe;
  background: radial-gradient(circle, white 50%, #5adefe 100%);
}
</style>
