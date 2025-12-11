<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import AbbreviationMobile from '@/components/AbbreviationMobile.vue'
import AudioHandler from '@/components/AudioHandler.vue'
import VideoHandler from '@/components/VideoHandler.vue'
import AccordionSingle from '@/components/AccordionSingle.vue'
import PushButton from '@/components/PushButton.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-5' }" />
    <GlassCard title="Audio" :noCenter="true">
      <h1 class="year-marker">
        HTL 5th Grade (Cumulative: 13) | School year 2023/2024
      </h1>
      <p>
        So, as is in Media Technology in 4th and 5th grade, we're split into
        groups to go through photography (only 4th grade), audio technology,
        video technology, and 3D (using Blender).
      </p>
      <p>
        This time, the audio and video group sorta work together. I started in
        the audio group, and had to pick a friend who was in the video group. We
        both decide on a video we want to recreate (audio people remake the
        <AbbreviationMobile title="Sound Effects">SFX</AbbreviationMobile>
        and
        <AbbreviationMobile title="Background Music">BGM</AbbreviationMobile>,
        video people remake the video shots).
      </p>
      <p>We decided on the following YouTube video:</p>
      <p>
        <a href="https://www.youtube.com/watch?v=eDqm9H1-YiE" target="_blank">
          <b>Fruit drink advertisement video | Created using IMOVIE</b><br />
          https://www.youtube.com/watch?v=eDqm9H1-YiE
        </a>
        <br />
        by
        <a
          href="https://www.youtube.com/channel/UCvvLApxKR1vwzqdf4SDboYg"
          target="_blank"
          >rishabh (@riimac)</a
        >
      </p>
      <p>
        So I went ahead and started with the music. I'm not really a fan of the
        original's music. I started making something in Soundtrap, but on that
        day, there was some weird connection bug, idk if it was the school's
        Wi-Fi or Soundtrap's servers, but autosave broke and I kinda "lost" my
        song. Well, I could export it, but it was lossy; instruments and tracks
        and track names and stuff get lost. I did decide to redo it anyway since
        I thought I could make it better.
      </p>
      <p>
        I took inspiration from Super Mario 64's Dire Dire Docks (well, the
        water level theme).
      </p>
      <p>
        I didn't really wanna try making the sound effects myself. I remembered
        a nifty site to get some SFX: freesound.org<br />
        Be sure to check the SFX Attributions below. They're mostly CC BY
        3.0/4.0 DEED
      </p>
      <p>We had to do this in Adobe Premiere Pro, so that's what I did:</p>
      <VideoHandler src="/videos/Szoradi_Fruits_(AudioUpdate).webm" />
      <b>2023-12-13</b>
      <hr />
      <AccordionSingle class="accordion" title="SFX Attributions">
        <hr />
        <div class="left-right-padding">
          <p>
            See
            <a
              href="https://freesound.org/people/OktalonSz/?downloaded_sounds=1"
              target="_blank"
              >https://freesound.org/people/OktalonSz/?downloaded_sounds=1</a
            >
            for all downloaded sounds and their licenses (starting "Downloaded
            on December 9th, 2023" and older).
          </p>
          <ul>
            <li>
              <b>splashes > splash10.wav</b> <br />
              by Rocktopus (licensed under CC BY 3.0 DEED) <br />
              <a
                href="https://freesound.org/people/Rocktopus/sounds/233413/"
                target="_blank"
                >https://freesound.org/people/Rocktopus/sounds/233413/</a
              >
            </li>
            <br />
            <li>
              <b>HOUSEHOLD ITEMS > ice cube modified .mp3</b> <br />
              by 808geo (licensed under CC BY 3.0 DEED) <br />
              <a
                href="https://freesound.org/people/808geo/sounds/569877/"
                target="_blank"
                >https://freesound.org/people/808geo/sounds/569877/</a
              >
            </li>
            <br />
            <li>
              <b>Three medium splashes in water.mp3</b> <br />
              by CGEffex (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/CGEffex/sounds/93082/"
                target="_blank"
                >https://freesound.org/people/CGEffex/sounds/93082/</a
              >
            </li>
            <br />
            <li>
              <b>Splash > WATRSplsh_rock splash 22_TK_SASSMKH8020.wav</b> <br />
              by tim.kahn (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/tim.kahn/sounds/628467/"
                target="_blank"
                >https://freesound.org/people/tim.kahn/sounds/628467/</a
              >
            </li>
            <br />
            <li>
              <b>Splash > WATRSplsh_rock splash 26_TK_SASSMKH8020.wav</b> <br />
              by tim.kahn (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/tim.kahn/sounds/628471/"
                target="_blank"
                >https://freesound.org/people/tim.kahn/sounds/628471/</a
              >
            </li>
            <br />
            <li>
              <b>Splash > WATRSplsh_rock splash 9_TK_SASSMKH8020.wav</b> <br />
              by tim.kahn (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/tim.kahn/sounds/628454/"
                target="_blank"
                >https://freesound.org/people/tim.kahn/sounds/628454/</a
              >
            </li>
            <br />
            <li>
              <b>Splash > WATRSplsh_rock splash 36_TK_SASSMKH8020.wav</b> <br />
              by tim.kahn (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/tim.kahn/sounds/628481/"
                target="_blank"
                >https://freesound.org/people/tim.kahn/sounds/628481/</a
              >
            </li>
            <br />
            <li>
              <b>Stream, Water, C.wav</b> <br />
              by InspectorJ (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/InspectorJ/sounds/339324/"
                target="_blank"
                >https://freesound.org/people/InspectorJ/sounds/339324/</a
              >
            </li>
            <br />
            <li>
              <b>Woosh Collection 13.12.2021 > Woosh - InstantDecay</b> <br />
              by jwsounddesign (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/jwsounddesign/sounds/611473/"
                target="_blank"
                >https://freesound.org/people/jwsounddesign/sounds/611473/</a
              >
            </li>
            <br />
            <li>
              <b>Sapceship?</b> <br />
              by everythingsounds (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/everythingsounds/sounds/628238/"
                target="_blank"
                >https://freesound.org/people/everythingsounds/sounds/628238/</a
              >
            </li>
            <br />
            <li>
              <b>Various SFX For Audios > Soda_Can_Pouring_4_Para.mp3</b> <br />
              by Paradoxxxical (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/Paradoxxxical/sounds/679300/"
                target="_blank"
                >https://freesound.org/people/Paradoxxxical/sounds/679300/</a
              >
            </li>
            <br />
            <li>
              <b>
                Foley > GLASImpt_cheers_clink_glass_of_wine_ZOOM_H6_XYH6.wav
              </b>
              <br />
              by DBS_Sounds (licensed under CC BY 4.0 DEED) <br />
              <a
                href="https://freesound.org/people/DBS_Sounds/sounds/613763/"
                target="_blank"
                >https://freesound.org/people/DBS_Sounds/sounds/613763/</a
              >
            </li>
          </ul>
        </div>
      </AccordionSingle>
      <hr />
      <p>
        I'm pretty satisfied and proud of the result, especially considering how
        the original video barely had any sound effects at all. The orange cut
        is maybe too juicy-sounding, but eh it's fine.
      </p>
      </GlassCard>
      <GlassCard title="Extras" :noCenter="true">
      <p class="no-top-margin">
        Here's the <b>final audio</b> used in the video. You can download the
        <AbbreviationMobile title="Free Lossless Audio Codec"
          >FLAC</AbbreviationMobile
        >
        (originally
        <AbbreviationMobile title="Waveform Audio File Format"
          >WAV</AbbreviationMobile
        >, but I converted it to save a bit on file size) and the
        <AbbreviationMobile title="Musical Instrument Digital Interface"
          >MIDI</AbbreviationMobile
        >!
      </p>
      <b>2023-12-09</b>
      <AudioHandler src="/audio/FruitAd(Real).flac" />
      <div class="button-section">
        <PushButton color="purple" href="/audio/FruitAd(Real).flac"
          >Download FLAC</PushButton
        >
        <PushButton color="purple" href="/audio/FruitAd(Real).mid"
          >Download MIDI</PushButton
        >
      </div>
      <hr />
      <p>
        Here's an <b>alt version</b> that I didn't end up using (ending is
        slightly different):
      </p>
      <b>2023-11-08</b>
      <AudioHandler src="/audio/FruitAd(Alt).flac" />
      <div class="button-section">
        <PushButton color="purple" href="/audio/FruitAd(Alt).flac"
          >Download FLAC</PushButton
        >
      </div>
      <hr />
      <p>
        Here's an <b>early version</b> of the video with the <b>music</b> I
        initially made:
      </p>
      <VideoHandler src="/videos/FruitDrinkTest2.webm" />
      <b>2023-10-25</b>
      <p>
        The drums are a basically 1:1 transcription of the ones in
        <AbbreviationMobile title="Super Mario 64">SM64</AbbreviationMobile>
        Dire Dire Docks
      </p>
      <div class="button-section">
        <PushButton color="purple" href="/audio/FruitAd.mid"
          >Download MIDI</PushButton
        >
      </div>
      <hr />
      <p>
        Finally, here's an <b>earlier version</b> that's SFX only, no music:
      </p>
      <VideoHandler src="/videos/FruitDrinkTest1.webm" />
      <b>2023-10-04</b>
      <!--
      <p>
        So, the idea was that at the end, the audio people and video people
         combine their work. Here's that:
      </p>
      <VideoHandler src="/videos/RSI-OAS_Fruit.webm" />
      <b>2024-01-29</b>
      <p>RSI is my friend's initials</p>
      -->
    </GlassCard>
  </main>
</template>

<style scoped lang="scss">
.accordion {
  :deep([data-part='item-trigger']) {
    padding: 0 0.75em;
  }

  .left-right-padding {
    padding: 0 1.25em;
  }
}

.button-section {
  padding-bottom: 1em;
  text-align: center;
}
</style>
