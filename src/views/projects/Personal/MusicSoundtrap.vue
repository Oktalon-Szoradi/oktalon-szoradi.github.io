<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import AudioHandler from '@/components/AudioHandler.vue'
import VideoHandler from '@/components/VideoHandler.vue'
import PushButton from '@/components/PushButton.vue'
import NavigationSideBySide from '@/components/NavigationSideBySide.vue'
import type { ScrollToObjects } from '@/assets/types'

const NAVIGATION: ScrollToObjects[] = [
  {
    name: 'Non-Original and Original-ish Creations',
    id: 'nonOCandKindaOC',
    children: [
      {
        name: 'Dire Dire Docks',
        id: 'sm64_ddd'
      },
      {
        name: 'Tetris',
        id: 'tetris'
      },
      {
        name: 'Tetris (Non-Korobeiniki)',
        id: 'tetris_other'
      },
      {
        name: '"Something idk"',
        id: 'something_idk'
      },
      {
        name: '切ない想い',
        id: 'sad_thought'
      },
      {
        name: '"Cheer"',
        id: 'cheer'
      }
    ]
  },
  {
    name: 'Original Creations',
    id: 'OCs',
    children: [
      {
        name: '"Relax"',
        id: 'relax'
      },
      {
        name: '"Untitled song (4)"',
        id: 'untitled_song_4'
      }
    ]
  }
]
</script>

<template>
  <NavigationSideBySide
    :scrollToHeadings="NAVIGATION"
    :navigationButtons_queryIndex="1"
    :navigationButtons_queryParams="{ scrollTo: 'Music' }"
    width="personal"
  >
    <GlassCard title="Music: Soundtrap" class="first-card">
      <p>
        While I was at HTL (2023–2024), we got Soundtrap Education. Here's some
        stuff I made not for school in my free time!
      </p>
    </GlassCard>
    <GlassCard>
      <h2 id="nonOCandKindaOC">Non-Original and Original-ish Creations</h2>
      <p>
        So, like, recreations or covers and stuff<br />
        as well as stuff inspired by or based on something that already exists,
        but I put a bit of my own creativity into it
      </p>
    </GlassCard>
    <GlassCard>
      <div id="sm64_ddd" class="audio-section">
        <h3>Dire Dire Docks</h3>
        <p class="no-top-margin">Super Mario 64's water level theme</p>
        <b>All instruments, once</b>
        <AudioHandler src="/audio/Dire Dire Docks.flac" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/Dire Dire Docks.flac"
            >Download FLAC</PushButton
          >
          <PushButton color="purple" href="/audio/Dire Dire Docks.mid"
            >Download MIDI</PushButton
          >
        </div>
        <b>Bass Focus</b>
        <AudioHandler src="/audio/Dire Dire Docks (Bass Focus).flac" />
        <div class="button-section">
          <PushButton
            color="purple"
            href="/audio/Dire Dire Docks (Bass Focus).flac"
            >Download FLAC
          </PushButton>
          <PushButton
            color="purple"
            href="/audio/Dire Dire Docks (Bass Focus).mid"
            >Download MIDI
          </PushButton>
        </div>
        <p class="no-top-margin">
          I really like the bass track lol, so here's a version where the main
          instrument plays the same notes.
        </p>
        <p>
          I was gonna use this for a, like, concept art video for Dire Dire
          Docks Animated, which I was gonna do as my 5th grade HTL 3D (Blender)
          project.
        </p>
        <b>All Phases (Shore, Underwater, Cave)</b>
        <AudioHandler src="/audio/Dire Dire Docks (Restored).flac" />
        <div class="button-section">
          <PushButton
            color="purple"
            href="/audio/Dire Dire Docks (Restored).flac"
            >Download FLAC
          </PushButton>
          <PushButton
            color="purple"
            href="/audio/Dire Dire Docks (Restored).mid"
            >Download MIDI
          </PushButton>
        </div>
        <p class="no-top-margin">
          The "Restored" part in the file name is kind of a misnomer. It doesn't
          refer to the music, it refers to the Soundtrap project. I don't
          remember what went wrong, but Soundtrap gave me a pop-up asking if I'd
          like to restore some project or something.
        </p>
        <p>
          This is sort of an early transcription, so there are a couple
          inaccuracies that aren't in the above two. Also Soundtrap made some
          export mistakes (sound (instrument loop) glitches) with the strings, I
          believe.
        </p>
        <p>This also uses a slower BPM than the above two.</p>
        <b>"Untitled song (2)"</b>
        <AudioHandler src="/audio/Dire Dire Docks (Bass as Piano).flac" />
        <div class="button-section">
          <PushButton
            color="purple"
            href="/audio/Dire Dire Docks (Bass as Piano).flac"
            >Download FLAC
          </PushButton>
          <!-- <PushButton
            color="purple"
            href="/audio/Dire Dire Docks (Bass as Piano).mid"
            >Download MIDI</PushButton
          > -->
        </div>
        <p class="no-top-margin">
          This is just the bass track but played by a piano. It's from the
          actual MIDI used in-game, which I obtained through some Windows
          program that seemed to also have MIDIs for a bunch of other Nintendo
          64 games.
        </p>
        <p>
          Looped 3 times. There's some weird extra pause between the end of the
          2nd loop and the start of the 3rd and final loop.
        </p>
      </div>
    </GlassCard>
    <GlassCard>
      <div id="tetris" class="audio-section">
        <h3>Tetris</h3>
        <p class="no-top-margin">
          A mix of the Gameboy's melody and the rendition heard in the sunsetted
          EA Tetris mobile app
        </p>
        <p>
          I'm planning on remaking this at some point in the future, since
          someone found the audio stems for the EA version
        </p>
        <b>Short Version, once</b>
        <AudioHandler src="/audio/EA Tetris Modern 8-Bit (Short).flac" />
        <div class="button-section">
          <PushButton
            color="purple"
            href="/audio/EA Tetris Modern 8-Bit (Short).flac"
            >Download FLAC
          </PushButton>
          <PushButton
            color="purple"
            href="/audio/EA Tetris Modern 8-Bit (Short).mid"
            >Download MIDI
          </PushButton>
        </div>
        <b>Short Version, thrice</b>
        <AudioHandler src="/audio/EA_Tetris_Modern_8-Bit_Short.mp3" />
        <div class="button-section">
          <PushButton
            color="purple"
            href="/audio/EA_Tetris_Modern_8-Bit_Short.mp3"
            >Download MP3
          </PushButton>
        </div>
        <b>Early Short Version, thrice</b>
        <AudioHandler src="/audio/Korobeiniki.mp3" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/Korobeiniki.mp3"
            >Download MP3
          </PushButton>
        </div>
        <p class="no-top-margin">This one has no piano</p>
        <b>Really Early Short Version, twice (2021-02-12)</b>
        <p class="no-top-margin">
          <VideoHandler src="/videos/2021-02-12 13-42-06_Trim.mp4" />
        </p>
        <hr class="gapful-horizontal-rule" />
        <p>The long version follows the progression in EA Tetris 2011</p>
        <b>Long Version, once</b>
        <AudioHandler src="/audio/EA Tetris Modern 8-Bit (Full).flac" />
        <div class="button-section">
          <PushButton
            color="purple"
            href="/audio/EA Tetris Modern 8-Bit (Full).flac"
            >Download FLAC
          </PushButton>
          <PushButton
            color="purple"
            href="/audio/EA Tetris Modern 8-Bit (Full).mid"
            >Download MIDI
          </PushButton>
        </div>
        <b>Early Long Version, once</b>
        <AudioHandler src="/audio/EA-Tetris-Remake.mp3" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/EA-Tetris-Remake.mp3"
            >Download MP3</PushButton
          >
        </div>
        <b>Really Early Long Version, once (2021-03-03)</b>
        <p class="no-top-margin">
          <VideoHandler src="/videos/2021-03-03_13-53-33.mp4" />
        </p>
      </div>
    </GlassCard>
    <GlassCard>
      <div id="tetris_other" class="audio-section">
        <h3>Tetris (Non-Korobeiniki)</h3>
        <p class="no-top-margin">
          Specifically, some from the arcade version by Atari
        </p>
        <b>Kalinka (Harmonica), once</b>
        <AudioHandler src="/audio/Kalinka.flac" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/Kalinka.flac"
            >Download FLAC
          </PushButton>
          <PushButton color="purple" href="/audio/Kalinka.mid"
            >Download MIDI
          </PushButton>
        </div>
        <b>Kalinka (Accordion), thrice</b>
        <AudioHandler src="/audio/Kalinka_Early.flac" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/Kalinka_Early.flac"
            >Download FLAC</PushButton
          >
        </div>
        <p class="no-top-margin">
          The accordion sounds more French than Russian…
        </p>
        <b>Troika, thrice</b>
        <AudioHandler src="/audio/Troika.flac" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/Troika.flac"
            >Download FLAC
          </PushButton>
          <PushButton color="purple" href="/audio/Troika.mid"
            >Download MIDI
          </PushButton>
        </div>
      </div>
    </GlassCard>
    <GlassCard>
      <div id="something_idk" class="audio-section">
        <h3>"Something idk"</h3>
        <AudioHandler src="/audio/Something idk.flac" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/Something idk.flac"
            >Download FLAC
          </PushButton>
          <PushButton color="purple" href="/audio/Something idk.mid"
            >Download MIDI
          </PushButton>
        </div>
        <p class="no-top-margin">
          I kinda used this Soundtrap project as a scratchpad, so the MIDI is
          really messy at the beginning. I don't even remember what I put there.
        </p>
        <p>
          But, mainly, and in the export, this is the bass line of Vampire
          Killer, Castlevania Ⅲ (Akumajou Densetsu)
        </p>
        <p>First heard it in this video:</p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=8RrQrATnXXY&t=3m31s"
            target="_blank"
          >
            <b>How I Created the Perfect NES Sound Chip</b><br />
            https://www.youtube.com/watch?v=8RrQrATnXXY&t=3m31s
          </a>
          <br />
          by
          <a
            href="https://www.youtube.com/channel/UCWez19plrYj73H1Oyp2srXA"
            target="_blank"
            >KYLXBN (Kyle) (@KYLXBN)</a
          >
        </p>
      </div>
    </GlassCard>
    <GlassCard>
      <div id="sad_thought" class="audio-section">
        <h3>切ない想い</h3>
        <AudioHandler src="/audio/切ない想い.flac" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/切ない想い.flac"
            >Download FLAC
          </PushButton>
          <PushButton color="purple" href="/audio/切ない想い.mid"
            >Download MIDI
          </PushButton>
        </div>
        <p class="no-top-margin">I heard this from this video:</p>
        <p>
          <a href="https://www.youtube.com/watch?v=GJEJNoxoiIQ" target="_blank">
            <b>The horrid April Fools joke of 2012 on ROBLOX. ( Hack )</b><br />
            https://www.youtube.com/watch?v=GJEJNoxoiIQ
          </a>
          <br />
          by
          <a
            href="https://www.youtube.com/channel/UCEGAtR8xmsggHnYKN7v_J-A"
            target="_blank"
            >Bluedarkness826 (@Bluedarkness826)</a
          >
        </p>
        <p>
          Supposedly it's from 犬夜叉 (Inuyasha). I know next to nothing about
          it tho
        </p>
      </div>
    </GlassCard>
    <GlassCard>
      <div id="cheer" class="audio-section">
        <h3>"Cheer"</h3>
        <AudioHandler src="/audio/Cheer.flac" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/Cheer.flac"
            >Download FLAC
          </PushButton>
          <PushButton color="purple" href="/audio/Cheer.mid"
            >Download MIDI
          </PushButton>
        </div>
        <p class="no-top-margin">
          This is based off this 6-second clip I saw back then:
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=1WzxmPGEeiI" target="_blank">
            <b>Unknown Song Clip "Cheer/Complex"</b><br />
            https://www.youtube.com/watch?v=1WzxmPGEeiI
          </a>
          <br />
          uploaded by
          <a
            href="https://www.youtube.com/channel/UCyoxZBeMMutKUMU4_bqNcjQ"
            target="_blank"
            >Solaris (@SolarisLostwave)</a
          >
        </p>
        <p>
          This isn't the only video of it on YouTube, others have uploaded it
          too.
        </p>
        <p>
          Pretty catchy, and I really wanted to hear the whole thing, but nobody
          found it yet at the time. I decided to transcribe it and extend it a
          bit.
        </p>
        <p>
          It has been found, though. It's <i>Het - Strange Complex (1988)</i>.
          When I had a listen to it, well… I don't like it lol
        </p>
      </div>
    </GlassCard>
    <GlassCard>
      <h2 id="OCs">Original Creations</h2>
      <p>Stuff I made entirely myself</p>
      <p>
        The thing is, sometimes I have some random idea, but the moment I go
        into Soundtrap and play a note, the idea gets warped and diluted and
        phooey
      </p>
      <p>
        I'm not proud of these, but I'm putting them up anyway in case it might
        inspire someone to make something better lol
      </p>
    </GlassCard>
    <GlassCard>
      <div id="relax" class="audio-section">
        <h3>"Relax"</h3>
        <AudioHandler src="/audio/Relax.flac" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/Relax.flac"
            >Download FLAC
          </PushButton>
          <PushButton color="purple" href="/audio/Relax.mid"
            >Download MIDI
          </PushButton>
        </div>
      </div>
    </GlassCard>
    <GlassCard>
      <div id="untitled_song_4" class="audio-section">
        <h3>"Untitled song (4)"</h3>
        <AudioHandler src="/audio/Untitled song (4).flac" />
        <div class="button-section">
          <PushButton color="purple" href="/audio/Untitled song (4).flac">
            Download FLAC
          </PushButton>
          <PushButton color="purple" href="/audio/Untitled song (4).mid">
            Download MIDI
          </PushButton>
        </div>
      </div>
    </GlassCard>
  </NavigationSideBySide>
</template>

<style scoped lang="scss">
@use '@/assets/extra_fancy-headings';

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

.audio-section {
  /* margin: 2em 0; */
}

.gapful-horizontal-rule {
  margin: 2em 0;
}
</style>
