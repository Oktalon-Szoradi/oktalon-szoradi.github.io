<script setup lang="ts">
import CommandLink from '@/components/CommandLink.vue'
</script>

<template>
  <main class="container">
    <div class="command-link-area">
      <CommandLink
        title="School Projects"
        to="/projects/school"
        icon_src="/icons/applications-education-university.svg"
      >
        Check out the stuff I made at school and university.
      </CommandLink>
      <CommandLink
        title="Personal Projects"
        to="/projects/personal"
        icon_src="/icons/Talon.svg"
      >
        Check out the stuff I made in my free time.
      </CommandLink>
    </div>
  </main>
</template>

<style scoped lang="scss">
.command-link-area {
  display: flex;
  flex-direction: column;

  > * {
    margin: 2em 0 0;
  }

  @media (width <= 576px) {
    > * {
      margin: 2em 1em 0;
    }
  }
}
</style>
