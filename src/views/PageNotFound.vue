<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <div class="mrow">
      <GlassCard title="404" class="text-center miau">
        <p>
          There's no <code>{{ $route.fullPath }}</code
          >!!!11!1!1
        </p>
        Grrr...&emsp;&gt;&omega;&lt;
      </GlassCard>
    </div>
  </main>
</template>

<style scoped lang="scss">
.mrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.miau {
  min-width: 50vw;
}
</style>
