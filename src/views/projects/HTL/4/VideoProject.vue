<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import VideoHandler from '@/components/VideoHandler.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-4' }" />
    <GlassCard title="Video Project" :noCenter="true">
      <h1 class="year-marker">
        HTL 4th Grade (Cumulative: 12) | School year 2022/2023
      </h1>
      <VideoHandler src="/videos/AnsweringToy.mp4" />
      <h1>Answering Toy</h1>
      <p><b>Teacher's grade: 8/10</b></p>
      <p>
        Here I had to make a short ad-style (or, moreso kickstarter-style)
        video. It had to have at least 10 shots, and some having motion. My
        initial video was long and boring, but I managed to make it a lot
        better.
      </p>
      <p>
        I took the shots with the video cameras they had at school. I had some
        days where I didn't do anything, either because I wasn't in the mood
        (these lessons were the last 3 on Friday which lasted until 16:30 (4:30
        PM)) or due to my pollen allergy (it was spring time). I finished it
        just in time, though.
      </p>
      <p>
        We were expected to use Adobe Premiere Pro and After Effects, but I
        decided to use Shotcut instead, as I was more familiar with it and don't
        like Adobe. Besides, Shotcut is free and open-source.
      </p>
      <p>The answers the toy can give you are:</p>
      <ul>
        <li>Yes Sir</li>
        <li>Hell No!</li>
        <li>No.</li>
        <li>Think Twice</li>
        <li>Ask Your Mum</li>
        <li>Why Not</li>
      </ul>
      <p></p>
      <p>
        I don't remember the exact name of this toy, where/how I got it (I think
        it might've been a gift), and how much it costed. I lost the
        box&nbsp;&nbsp;D:<br />
        However, if you search something like "magnetic decider" you'll surely
        find something similar.<br />
        I do not garantee that you will find it at Toys"R"Us, Walmart, or
        Target.<br />
        "Werde ich gewinnen?" is German for "Will I win?"<br />
        The font I used in this video is called
        <a
          href="https://learn.microsoft.com/en-us/typography/font-list/mv-boli"
          target="_blank"
        >
          MV Boli </a
        >. It's a font that comes with Windows.
      </p>
      <p><b>Links:</b></p>
      <ul>
        <li>
          <a href="https://shotcut.com/" target="_blank">Shotcut</a>
          — a free, open source, cross-platform video editor
        </li>
        <li>
          <a
            href="https://pixabay.com/music/corporate-upbeat-inspiration-106838/"
            target="_blank"
          >
            Upbeat Inspiration | Royalty-free Music - Pixabay
          </a>
          — the music I used in this video. Found it here:
          <a
            href="https://pixabay.com/music/search/infomercial/"
            target="_blank"
          >
            https://pixabay.com/music/search/infomercial/
          </a>
        </li>
      </ul>
    </GlassCard>
  </main>
</template>
