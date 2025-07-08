<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import VideoHandler from '@/components/VideoHandler.vue'

const tableTransEdit = ref<HTMLTableElement | null>(null)
const tableTransOrig = ref<HTMLTableElement | null>(null)

const syncTdHeights = () => {
  const rows1 = tableTransEdit.value?.rows
  const rows2 = tableTransOrig.value?.rows

  if (!rows1 || !rows2) return

  for (let i = 0; i < rows1.length; i++) {
    const cells1 = rows1[i].cells
    const cells2 = rows2[i].cells

    for (let j = 0; j < cells1.length; j++) {
      const td1 = cells1[j] as HTMLTableCellElement
      const td2 = cells2[j] as HTMLTableCellElement

      td1.style.height = td2.style.height = 'auto' // reset first
      const maxHeight = Math.max(td1.offsetHeight, td2.offsetHeight)
      td1.style.height = td2.style.height = `${maxHeight}px`
    }
  }
}

onMounted(() => {
  nextTick(() => {
    syncTdHeights()
    // Optional: Add resize listener to re-sync if needed
    window.addEventListener('resize', syncTdHeights)
  })
})
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-4' }" />
    <GlassCard
      title="Audio Syn&shy;chro&shy;ni&shy;za&shy;tion"
      :noCenter="true"
    >
      <h1 class="year-marker">
        HTL 4th Grade (Cumulative: 12) | School year 2022/2023
      </h1>
      <VideoHandler src="/videos/Szoradi_HeyVSauceRandomHere.mp4" />
      <h1>Hey Vsauce, Random Here</h1>
      <p><b>Teacher's grade: 9/10</b></p>
      <p>
        Here we had to pick a video with people speaking and replace the voices
        with our own. You could repeat the original script, but it was
        encouraged to change it up a bit. Either by translating, or by making a
        parody. I chose the latter.
      </p>
      <p>
        I wanted the lip movements to still look natural, but at the same time
        try to make the script funny. I'm not really satisfied with the script,
        but I didn't have time to make a better one. The goal here was to
        practice synchronizing audio anyway. So, I guess it's fine.
      </p>
      <p>
        Our audio laboratory had a small little "room" for recording, that had
        special soundproofing walls. We borrowed a real microphone (H4n) and
        used that. Time was running short so I didn't do many takes.
      </p>
      <p>
        I used Adobe Premiere Pro to synchronize the audio, then I used Shotcut
        to finalize the video. I also used vocalremover to extract the music,
        since I couldn't get the original music.
      </p>
      <p>
        I almost turned it in just in time, but then got interrupted. By the
        time I came back to my laptop, I got graded 0/10. I turned it in really
        quickly and wrote a message to the teacher. He was kind enough to change
        it to 9/10. But then later we were allowed to improve our projects
        anyway. I adjusted the audio a bit.
      </p>
      <p>
        I was actually also planning to imitate the classic intro: "Hey Vsauce,
        Michael here!", but I didn't have time for that-
      </p>
      <p>
        Healthy Station is the name of a nearby small restaurant:<br />
        <a href="https://www.healthy-station.at/" target="_blank"
          >https://www.healthy-station.at/</a
        >
      </p>
      <p><b>Links:</b></p>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=QDCcuCHOIyY" target="_blank">
            The Power of Suggestion by Vsauce (Mind Field S2E6)
          </a>
          — the original video
        </li>
        <li>
          <a href="https://vocalremover.org/" target="_blank"
            >Vocal Remover and Isolation [AI]</a
          >
          — free online AI tool I used to "extract" the music from the original
          video
        </li>
        <li>
          <a href="https://podcast.adobe.com/enhance" target="_blank">
            Enhance Speech from Adobe | Free AI filter for cleaning up spoken
            audio
          </a>
          — I also tried out this
        </li>
        <li>
          <a
            href="https://www.zoom.co.jp/sites/default/files/products/downloads/pdfs/E_H4nSP_0.pdf"
            target="_blank"
          >
            H4n - E_H4nSP_0.pdf
          </a>
          — the manual for the microphone used
        </li>
        <li>
          <a href="https://shotcut.com/" target="_blank">Shotcut</a>
          — a free, open source, cross-platform video editor
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=g_UMoi_EVqg" target="_blank"
            >Jake Chudnow - "Atlas" (Theme from Mind Field)</a
          >
          — outro theme of this video
        </li>
        <li>
          <a href="https://www.dafont.com/alsina.font" target="_blank"
            >Alsina Font | dafont.com</a
          >
          — font I used for the outro text. Same as the one Vsauce uses
        </li>
      </ul>
      <h2 class="text-center">Transcript:</h2>
      <div class="flex transcript-area">
        <div class="flex-item">
          <table class="transcript-table" ref="tableTransEdit">
            <thead>
              <tr>
                <td><b>Edited:</b></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  This is <span class="diff">Wien West</span> University in
                  <span class="diff">Vienna</span>,
                  <span class="diff">Austria</span>.
                </td>
              </tr>
              <tr>
                <td>
                  It <span class="diff">roasts a Döner for</span> more than
                  forty-thousand students from a hundred-fifty countries.
                </td>
              </tr>
              <tr>
                <td>
                  <span class="diff">But they can't even enjoy</span> one
                  <span class="diff"
                    >sample of Healthy Station for more than</span
                  >
                  three-hundred <span class="diff">long years</span><br />
                  and it's <span class="diff">about</span> to be<span
                    class="diff"
                    >come a</span
                  >
                  twelve <span class="diff">Newtonpain weakness</span>.
                </td>
              </tr>
              <tr>
                <td>
                  It is considered one of the
                  <span class="diff">fakest</span> research universities in the
                  world.
                </td>
              </tr>
              <tr>
                <td>
                  Recently, researchers at
                  <span class="diff">Wien West</span> have embarked on a
                  study,<br />
                  that uses a <span class="diff">deadly</span> scanning device
                  to <span class="diff">destroy</span> people's minds<br />
                  and
                  <span class="diff">inject lethal injections inside</span>
                  their heads.
                </td>
              </tr>
              <tr>
                <td>Or so their subjects think.</td>
              </tr>
              <tr>
                <td>
                  <span class="diff">|</span> The same device may be able to
                  help kids with<br />
                  ADHD,<br />
                  anxiety,<br />
                  obsessive-compulsive disorder,<br />
                  migraines,<br />
                  Tourette's and more.
                </td>
              </tr>
              <tr>
                <td>
                  This study is not about <span class="diff">donutology</span>.
                </td>
              </tr>
              <tr>
                <td>
                  The <span class="diff">Mario pipe</span> behind me may look
                  impressive, but it's a <span class="diff">scam</span>.
                </td>
              </tr>
              <tr>
                <td>It's deactivated, nonfunctioning.</td>
              </tr>
              <tr>
                <td>
                  What this study is really about is faith in
                  <span class="diff">India</span>.
                </td>
              </tr>
              <tr>
                <td>
                  It's about the power of thoughts to
                  <span class="diff">hell</span>.
                </td>
              </tr>
              <tr>
                <td>
                  All you need is the power of <span class="diff">donuts</span>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex-item">
          <table class="transcript-table" ref="tableTransOrig">
            <thead>
              <tr>
                <td><b>Original:</b></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  This is <span class="diff">McGill</span> University in
                  <span class="diff">Montreal</span>,
                  <span class="diff">Canada</span>.
                </td>
              </tr>
              <tr>
                <td>
                  It <span class="diff">boasts an enrollment of</span> more than
                  40'000 students from 150 countries.
                </td>
              </tr>
              <tr>
                <td>
                  <span class="diff">The campus employs</span> 1<span
                    class="diff"
                    >'700 professors teaching</span
                  >
                  300 <span class="diff">programs of study,</span><br />
                  and it's <span class="diff">proud</span> to be
                  <span class="diff">home to</span> twelve
                  <span class="diff">Nobel Prize winners</span>.
                </td>
              </tr>
              <tr>
                <td>
                  It is considered one of the
                  <span class="diff">finest</span> research universities in the
                  world.
                </td>
              </tr>
              <tr>
                <td>
                  Recently, researchers at
                  <span class="diff">McGill</span> have embarked on a study,<br />
                  that uses a <span class="diff">brain</span> scanning device to
                  <span class="diff">read</span> people's minds<br />
                  and
                  <span class="diff">implant thoughts into</span>
                  their heads.
                </td>
              </tr>
              <tr>
                <td>Or so their subjects think.</td>
              </tr>
              <tr>
                <td>
                  <span class="diff">Now,</span> the same device may be able to
                  help kids with<br />
                  ADHD,<br />
                  anxiety,<br />
                  obsessive-compulsive disorder,<br />
                  migraines,<br />
                  Tourette's and more.
                </td>
              </tr>
              <tr>
                <td>
                  This study is not about <span class="diff">technology</span>.
                </td>
              </tr>
              <tr>
                <td>
                  The <span class="diff">MRI machine</span> behind me may look
                  impressive, but it's a <span class="diff">sham</span>.
                </td>
              </tr>
              <tr>
                <td>It's deactivated, nonfunctioning.</td>
              </tr>
              <tr>
                <td>
                  What this study is really about is faith in
                  <span class="diff">science</span>.
                </td>
              </tr>
              <tr>
                <td>
                  It's about the power of thoughts to
                  <span class="diff">heal</span>.
                </td>
              </tr>
              <tr>
                <td>
                  All you need is the power of
                  <span class="diff">suggestion</span>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </GlassCard>
  </main>
</template>

<style scoped lang="scss">
.diff,
.difference {
  color: hsl(0deg 100% 80% / 90%);
}

.transcript-area {
  gap: 0.5em;
}

.transcript-table {
  tbody tr td {
    padding: 0.5em 0;
    vertical-align: top;
  }
}
</style>
