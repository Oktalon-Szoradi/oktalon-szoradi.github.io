<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import AudioHandler from '@/components/AudioHandler.vue'
import ImageHandler from '@/components/ImageHandler.vue'
import AbbreviationMobile from '@/components/AbbreviationMobile.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-4' }" />
    <GlassCard title="Audio Soundtrap" :noCenter="true">
      <h1 class="year-marker">
        HTL 4th Grade (Cumulative: 12) | School year 2022/2023
      </h1>
      <p><b>Teacher's grade: 10/10</b></p>
      <p>
        We learned <i>some</i> music basics, like making simple chords. I think
        the others tried to recreate or transcribe some song, but I decided to
        make something original. My first music! I think they're okay, but not
        great.
      </p>
      <p>
        Of course since graduating, I no longer have access to Soundtrap
        Education. That means I also no longer have access to these projects.
        But I did export everything. As
        <AbbreviationMobile title="Waveform Audio File Format"
          >WAV</AbbreviationMobile
        >
        and
        <AbbreviationMobile title="Musical Instrument Digital Interface"
          >MIDI</AbbreviationMobile
        >!
      </p>
      <!-- <div class="banner">
        <ImageHandler src="/images/thumbnails/Thumbnail_Soundtrap-1080p.webp" />
      </div> -->
      <div class="audio-section">
        <h2>"Fight Against The Catastrophe"</h2>
        <p class="no-top-margin">Made on <code>2023-05-05</code>.</p>
        <p>
          This is actually the first I made. All 4 tracks/stems I made myself.
        </p>
        <AudioHandler
          src="/audio/Szoradi_MEDT_2023-05-05_Fight-Against-The-Catastrophe.wav"
        />
        <div class="banner">
          <ImageHandler
            src="/images/htl4/soundtrap/Szoradi_MEDT_2023-05-05_Fight-Against-The-Catastrophe.webp"
          />
        </div>
        <div class="button-section">
          <PushButton
            color="purple"
            href="/audio/Szoradi_MEDT_2023-05-05_Fight-Against-The-Catastrophe.wav"
            >Download WAV</PushButton
          >
          <PushButton
            color="purple"
            href="/audio/Szoradi_MEDT_2023-05-05_Fight-Against-The-Catastrophe.mid"
            >Download MIDI</PushButton
          >
        </div>
      </div>
      <div class="audio-section">
        <h2>"Strolling Through The Field"</h2>
        <p class="no-top-margin">Made on <code>2023-05-12</code>.</p>
        <p>
          This was one of the days where our teacher said we should make 2
          songs. I think I was the only one to succeed lol
        </p>
        <p>
          The drums and bass I took from some presets Soundtrap had. Overall, I
          think this might be my favorite of the 3 I made.
        </p>
        <AudioHandler
          src="/audio/Szoradi_MEDT_2023-05-12_Strolling-Through-The-Field.wav"
        />
        <div class="banner">
          <ImageHandler
            src="/images/htl4/soundtrap/Szoradi_MEDT_2023-05-12_Strolling-Through-The-Field.webp"
          />
        </div>
        <div class="button-section">
          <PushButton
            color="purple"
            href="/audio/Szoradi_MEDT_2023-05-12_Strolling-Through-The-Field.wav"
            >Download WAV</PushButton
          >
          <PushButton
            color="purple"
            href="/audio/Szoradi_MEDT_2023-05-12_Strolling-Through-The-Field.mid"
            >Download MIDI</PushButton
          >
        </div>
      </div>
      <div class="audio-section">
        <h2>"Battle"</h2>
        <p class="no-top-margin">Made on <code>2023-05-12</code>.</p>
        <p>
          The 2nd song I made just in time on that day. Again, drums and bass I
          took from some presets Soundtrap had; like, half of the instruments. I
          didn't have much time left, if I remember correctly. The bass is kinda
          too quiet because they sounded loud enough on the headphones I was
          using at school.
        </p>
        <AudioHandler src="/audio/Szoradi_MEDT_2023-05-12_Battle.wav" />
        <div class="banner">
          <ImageHandler
            src="/images/htl4/soundtrap/Szoradi_MEDT_2023-05-12_Battle.webp"
          />
        </div>
        <div class="button-section">
          <PushButton
            color="purple"
            href="/audio/Szoradi_MEDT_2023-05-12_Battle.wav"
            >Download WAV</PushButton
          >
          <PushButton
            color="purple"
            href="/audio/Szoradi_MEDT_2023-05-12_Battle.mid"
            >Download MIDI</PushButton
          >
        </div>
      </div>
    </GlassCard>
  </main>
</template>

<style lang="scss" scoped>
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

.banner {
  :deep(img) {
    border-radius: 4px;
    box-shadow:
      0 0 0 1px hsl(0deg 0% 0% / 75%),
      0 0 0 2px hsl(0deg 0% 100% / 25%);
    width: 100%;
  }
}

.button-section {
  text-align: center;
}
</style>
