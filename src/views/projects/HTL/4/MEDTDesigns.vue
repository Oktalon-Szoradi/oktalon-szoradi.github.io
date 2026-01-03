<script setup lang="ts">
import NavigationSideBySide from '@/components/NavigationSideBySide.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import type { ScrollToObjects } from '@/assets/types'

const NAVIGATION: ScrollToObjects[] = [
  {
    name: 'Typography',
    date: '2022-09',
    id: '2022-09'
  },
  {
    name: 'Magazine (Website)',
    date: '2022-11',
    id: '2022-11'
  },
  {
    name: 'Learning App',
    date: '2023-01',
    id: '2023-01'
  },
  {
    name: 'Magazine (Magazine)',
    date: '2023-05',
    id: '2023-05_Magazine'
  },
  {
    name: 'Magazine (Poster)',
    date: '2023-05',
    id: '2023-05_Poster'
  }
]

const IMAGES = {
  TYPOGRAPHY: [
    {
      name: 'Birthday Invitation',
      src: '/images/htl4/design/Typography_Birthday-Invitation.webp',
      alt: 'Birthday invitation example for practicing typography'
    },
    {
      name: 'Congrats on your New Job',
      src: '/images/htl4/design/Typography_New-Job-Congratulation.webp',
      alt: '"congrats on your new job" card example for practicing typography'
    },
    {
      name: 'Intentions',
      src: '/images/htl4/design/Typography_Intentions.webp',
      alt: 'Thought process behind the typography practice examples'
    }
  ],
  MAGAZINE_WEBSITE: [
    {
      name: 'Initial Moodboard',
      src: '/images/htl4/design/MagazineWebsite_Tetrazine.webp',
      alt: 'Initial moodboard for the magazine website design'
    },
    {
      name: 'Revised Moodboard',
      src: '/images/htl4/design/MagazineWebsite_Moodboard.webp',
      alt: 'Revised moodboard for the magazine website design'
    },
    {
      name: 'Mockup Preview',
      src: '/images/htl4/design/MagazineWebsite_image-384-2048.png',
      alt: 'Preview of the mockup for the magazine website design'
    }
  ],
  LEARNING_APP: [
    {
      name: 'Moodboard',
      src: '/images/htl4/design/MediaT_Moodboard.webp',
      alt: 'Learning App "MediaT" Design: Picture of the moodboard'
    },
    {
      name: 'Wireframe',
      src: '/images/htl4/design/MediaT_Wireframe.webp',
      alt: 'Learning App "MediaT" Design: Picture of the wireframe'
    },
    {
      name: 'Home',
      src: '/images/htl4/design/MediaT_Home.webp',
      alt: `Learning App "MediaT" Design: Picture of the mockup's Home screen`
    },
    {
      name: 'Learn',
      src: '/images/htl4/design/MediaT_Learn.webp',
      alt: `Learning App "MediaT" Design: Picture of the mockup's Learn screen`
    },
    {
      name: 'Leaderboards',
      src: '/images/htl4/design/MediaT_Leaderboards.webp',
      alt: `Learning App "MediaT" Design: Picture of the mockup's Leaderboards screen`
    },
    {
      name: 'Profile',
      src: '/images/htl4/design/MediaT_Profile.webp',
      alt: `Learning App "MediaT" Design: Picture of the mockup's Profile screen`
    },
    {
      name: 'Settings',
      src: '/images/htl4/design/MediaT_Settings.webp',
      alt: `Learning App "MediaT" Design: Picture of the mockup's Settings screen`
    },
    {
      name: 'Topic',
      src: '/images/htl4/design/MediaT_Topic.webp',
      alt: `Learning App "MediaT" Design: Picture of the mockup's Topic screen`
    },
    {
      name: 'Lesson',
      src: '/images/htl4/design/MediaT_TopicLesson.webp',
      alt: `Learning App "MediaT" Design: Picture of the mockup's Lesson screen`
    },
    {
      name: 'Unavailable',
      src: '/images/htl4/design/MediaT_Unavailable.webp',
      alt: `Learning App "MediaT" Design: Picture of the mockup's Unavailable screen`
    }
  ],
  MAGAZINE_MAGAZINE: [
    {
      name: 'Cover',
      src: '/images/htl4/design/MagazineMagazine_Cover.webp',
      alt: `Cover of the fictional TETRAZINE magazine`
    },
    {
      name: 'Contents',
      src: '/images/htl4/design/MagazineMagazine_Contents.webp',
      alt: `Contents page of the fictional TETRAZINE magazine`
    },
    {
      name: 'History section',
      src: '/images/htl4/design/MagazineMagazine_1.webp',
      alt: `History pages of the fictional TETRAZINE magazine`
    },
    {
      name: 'Designs of the Month section',
      src: '/images/htl4/design/MagazineMagazine_2.webp',
      alt: `Designs of the Month pages of the fictional TETRAZINE magazine`
    },
    {
      name: 'Health section',
      src: '/images/htl4/design/MagazineMagazine_3.webp',
      alt: `Health pages of the fictional TETRAZINE magazine`
    }
  ],
  MAGAZINE_POSTER: [
    {
      name: 'Initial Version',
      src: '/images/htl4/design/MagazinePoster_v1.webp',
      alt: `Initial version of a poster ad for the fictional TETRAZINE magazine`
    },
    {
      name: 'Revised Version',
      src: '/images/htl4/design/MagazinePoster_v2.webp',
      alt: `Revised version of a poster ad for the fictional TETRAZINE magazine`
    },
    {
      name: 'Final Version',
      src: '/images/htl4/design/MagazinePoster_v3.webp',
      alt: `Final version of a poster ad for the fictional TETRAZINE magazine`
    }
  ]
}
</script>

<template>
  <NavigationSideBySide
    :scrollToHeadings="NAVIGATION"
    :navigationButtons_queryIndex="1"
    :navigationButtons_queryParams="{ scrollTo: 'HTL-4' }"
    width="school"
    :onlyOneLevel="true"
  >
    <GlassCard title="Design" class="main-card" :noCenter="true">
      <h1 class="year-marker">
        HTL 4th Grade (Cumulative: 12) | School year 2022/2023
      </h1>
      <p>
        Design was about, like, UI, UX, website, magazine, poster, etc. design.
        Make a moodboard, then wireframe, then prototype and mockup. Latter 2 in
        Adobe XD.
      </p>
      <p>
        A couple things are the mobile view rather than the desktop view due to
        the "mobile-first" mindset.
      </p>
      <p>Here's a couple of assignments I had and my work:</p>
      <h2 id="2022-09"><code>2022-09</code>: Typography</h2>
      <b>Late September</b>
      <p>
        I don't remember if this was our very first assignment; it might have
        been. Either way, we were tasked with making celebratory cards. One as
        an invitation to a birthday party, and another as a heartfelt
        congratulatory card for a new job.
      </p>
      <p>
        The location part of the birthday invitation has been redacted because I
        wrote the name of an area that I live in.
      </p>
      <p>
        The blurred background of the birthday one is of the light mode variant
        of the Windows 11 SE desktop backgrounds (or wallpapers). The new job
        one is of the dark mode variant of the Windows Insiders 7th anniversary
        backgrounds.
      </p>
      <ImageGallery :src="IMAGES.TYPOGRAPHY" :perRow="6" :noDownload="true" />
      <h2 id="2022-11"><code>2022-11</code>: Magazine (Website)</h2>
      <b>Early November</b>
      <p>
        Here we had to design what the mobile version of a website for a
        magazine issuer would look like.
      </p>
      <p>
        I initially made a mockup in Canva, but decided to move to Affinity
        since I like it more. Hah, this was before Canva purchased Affinity
        Serif.
      </p>
      <p>
        Yes, my previous logo used Samsung One. I no longer do, i.e. the logo
        you see up there in the navbar uses Oxygen, which is legally allowed by
        its license. Also I like it glossy.
      </p>
      <p>
        Unfortunately, it seems like I don't have any exports of the Adobe XD
        stuff. I'm too lazy to go install Adobe XD just for this one file. I do
        see it's kinda like an archive, though, so I did find a thumbnail in
        there (<code>renditions/image-384-2048.png</code>)!
      </p>
      <ImageGallery
        :src="IMAGES.MAGAZINE_WEBSITE"
        :perRow="6"
        :noDownload="true"
        :squareImages="true"
      />
      <p>Here's the logo that you can click:</p>
      <div class="flex-center">
        <div class="tetrazine-logo"></div>
      </div>
      <h2 id="2023-01"><code>2023-01</code>: Learning App</h2>
      <b>Early January</b>
      <p>
        In this assignment, we were tasked with designing a kind of learning
        app. One design idea I had was how in Samsung's OneUI, there's a view
        where mostly the top half of the screen is just the title or text or
        decoration or something, so you can reach the UI buttons with one hand.
      </p>
      <p>
        The flag you see in the leaderboards page is the supposed flag of Null
        Island, a place at coordinates 0, 0.
      </p>
      <p>
        The unavailable page is there to make the interactive Adobe XD mockup
        feel a teensy bit more "professional" (alternative would be tapping on
        something resulting in nothing)
      </p>
      <ImageGallery :src="IMAGES.LEARNING_APP" :perRow="6" :noDownload="true" />
      <h2 id="2023-05_Magazine"><code>2023-05</code>: Magazine (Magazine)</h2>
      <b>Mid May</b>
      <p>
        We made a mobile version of the website for some made up magazine
        company. Now to actually make a magazine!
      </p>
      <p>Here's what I came up with:</p>
      <ImageGallery
        :src="IMAGES.MAGAZINE_MAGAZINE"
        :perRow="6"
        :noDownload="true"
      />
      <h2 id="2023-05_Poster"><code>2023-05</code>: Magazine (Poster)</h2>
      <b>Late May</b>
      <p>Now, a poster to advertise the magazine</p>
      <ImageGallery
        :src="IMAGES.MAGAZINE_POSTER"
        :perRow="6"
        :noDownload="true"
      />
    </GlassCard>
  </NavigationSideBySide>
</template>

<style lang="scss" scoped>
@use '@/assets/extra_fancy-headings';

.tetrazine-logo {
  cursor: pointer;
  padding: 0 16px 0 0;
  width: 16em;
  height: 100%;
  content: url('/images/htl4/design/MagazineWebsite_TetrazineLogo.webp');
  user-select: none;

  &:hover {
    content: url('/images/htl4/design/MagazineWebsite_TetrazineLogoHover.webp');
  }

  &:focus,
  &:active {
    content: url('/images/htl4/design/MagazineWebsite_TetrazineLogoPressed.webp');
  }
}
</style>
