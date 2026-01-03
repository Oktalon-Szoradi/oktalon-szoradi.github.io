<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const IMAGES = {
  RESUME: [
    {
      name: 'Email',
      src: '/images/GraphicDesign/Iconography/Icons_Email.webp',
      alt: 'Email'
    },
    {
      name: 'Phone',
      src: '/images/GraphicDesign/Iconography/Icons_Phone.webp',
      alt: 'Phone'
    },
    {
      name: 'Pin',
      src: '/images/GraphicDesign/Iconography/Icons_Pin.webp',
      alt: 'Pin'
    }
  ],
  GLOSSY: [
    {
      name: 'Calculator',
      src: '/images/GraphicDesign/Iconography/Glossy/Calculator(mine).png',
      alt: 'Recreation of old Android/Samsung calculator app icon'
    },
    {
      name: 'Calendar',
      src: '/images/GraphicDesign/Iconography/Glossy/Calendar(mine).png',
      alt: 'Recreation of old Android/Samsung calendar app icon'
    },
    {
      name: 'ChatGPT',
      src: '/images/GraphicDesign/Iconography/Glossy/ChatGPT.png',
      alt: 'ChatGPT'
    },
    {
      name: 'Discord',
      src: '/images/GraphicDesign/Iconography/Glossy/Discord(alt).png',
      alt: 'Discord'
    },
    {
      name: 'Geogebra',
      src: '/images/GraphicDesign/Iconography/Glossy/Geogebra.png',
      alt: 'Geogebra'
    },
    {
      name: 'Kahoot!',
      src: '/images/GraphicDesign/Iconography/Glossy/Kahoot.png',
      alt: 'Kahoot!'
    },
    {
      name: 'N26',
      src: '/images/GraphicDesign/Iconography/Glossy/N26.png',
      alt: 'N26'
    },
    {
      name: 'QR Code Scanner',
      src: '/images/GraphicDesign/Iconography/Glossy/QRcodeScanner.png',
      alt: 'QR Code Scanner'
    },
    {
      name: 'Reddit',
      src: '/images/GraphicDesign/Iconography/Glossy/Reddit.png',
      alt: 'Reddit'
    },
    {
      name: 'Reddit (alt.)',
      src: '/images/GraphicDesign/Iconography/Glossy/Reddit(alt).png',
      alt: 'Reddit (alt.)'
    },
    {
      name: 'Signal',
      src: '/images/GraphicDesign/Iconography/Glossy/Signal.png',
      alt: 'Signal'
    },
    {
      name: 'Studyly',
      src: '/images/GraphicDesign/Iconography/Glossy/Studyly.png',
      alt: 'Studyly'
    },
    {
      name: 'Weather',
      src: '/images/GraphicDesign/Iconography/Glossy/Weather.png',
      alt: 'Weather app icon using graphics from old Samsung weather widget'
    },
    {
      name: 'WienMobil',
      src: '/images/GraphicDesign/Iconography/Glossy/WienMobil.png',
      alt: 'WienMobil'
    }
  ],
  MODERN: [
    {
      name: 'Calculator',
      src: '/images/GraphicDesign/Iconography/Modern/Calculator.png',
      alt: 'Calculator'
    },
    {
      name: 'Calendar',
      src: '/images/GraphicDesign/Iconography/Modern/Calendar.png',
      alt: 'Calendar'
    },
    {
      name: 'Calendar Turquoise',
      src: '/images/GraphicDesign/Iconography/Modern/CalendarTurquoise.png',
      alt: 'Calendar Turquoise'
    },
    {
      name: 'Camera',
      src: '/images/GraphicDesign/Iconography/Modern/Camera.png',
      alt: 'Camera app icon. Lens is a recreation of the one seen in the macOS Photo Booth icon'
    },
    {
      name: 'Clock',
      src: '/images/GraphicDesign/Iconography/Modern/Clock.png',
      alt: 'Clock'
    },
    {
      name: 'Contacts',
      src: '/images/GraphicDesign/Iconography/Modern/Contacts.png',
      alt: 'Contacts'
    },
    {
      name: 'Contacts (alt.)',
      src: '/images/GraphicDesign/Iconography/Modern/ContactsAlt.png',
      alt: 'Contacts (alt.)'
    },
    {
      name: 'Messages',
      src: '/images/GraphicDesign/Iconography/Modern/Messages.png',
      alt: 'Messages'
    },
    {
      name: 'Phone',
      src: '/images/GraphicDesign/Iconography/Modern/Phone.png',
      alt: 'Phone'
    },
    {
      name: 'Settings',
      src: '/images/GraphicDesign/Iconography/Modern/Settings.png',
      alt: 'Settings'
    },
    {
      name: 'Settings (alt.)',
      src: '/images/GraphicDesign/Iconography/Modern/SettingsAlt.png',
      alt: 'Settings (alt.)'
    },
    {
      name: '[WIP] Gallery',
      src: '/images/GraphicDesign/Iconography/Modern/WIP_Gallery.png',
      alt: '[WIP] Gallery'
    },
    {
      name: '[WIP] Weather',
      src: '/images/GraphicDesign/Iconography/Modern/WIP_Weather.png',
      alt: '[WIP] Weather'
    }
  ],
  OTHER: [
    {
      name: 'Aero Buttons 1',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons1.webp',
      alt: 'Glossy rounded-rectangle icons/buttons with a variety of symbols. Feel free to recolor them',
      date: '2024-12-01'
    },
    {
      name: 'Aero Buttons 2',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons2.webp',
      alt: 'Glossy circle icons/buttons with a variety of symbols. Feel free to recolor them',
      date: '2024-12-01'
    },
    {
      name: 'Aero Buttons 3',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons3.webp',
      alt: 'Wide glossy blue button with two question marks',
      date: '2024-12-01'
    },
    {
      name: 'Aero Buttons 4',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons4.webp',
      alt: 'Orange circle icon/button with two exclamation points, gloss/reflection rounded',
      date: '2024-12-01'
    },
    {
      name: 'Aero Icon Critical Stop',
      src: '/images/GraphicDesign/Iconography/Other/AeroIcon_CriticalStop.webp',
      alt: 'Recreation of the Aero critical stop icon',
      date: '2022-12-22?'
    },
    {
      name: 'Aero Icon Do Not Enter',
      src: '/images/GraphicDesign/Iconography/Other/AeroIcon_DoNotEnter.webp',
      alt: 'Do Not Enter icon based off the Aero critical stop icon',
      date: '2022-12-24?'
    },
    {
      name: 'Aero Icon Success',
      src: '/images/GraphicDesign/Iconography/Other/AeroIcon_Success.webp',
      alt: 'Success icon based off the Aero critical stop icon',
      date: '2022-12-22?'
    },
    {
      name: 'Bacchess Icon Skeuomorphic',
      src: '/images/GraphicDesign/Iconography/Other/Bacchess_Icon_Skeuomorphic.webp',
      alt: 'Profile picture for Bacchess',
      links: ['https://www.youtube.com/@bacchess'],
      date: '2021-09-03'
    },
    {
      name: 'Broken Link (Missing Image)',
      src: '/images/GraphicDesign/Iconography/Other/BrokenLink(MissingImage).webp',
      alt: "Recreation of the icon shown when an image couldn't be loaded",
      date: '2025-02-24'
    },
    {
      name: 'Icons 2 (signs)',
      src: '/images/GraphicDesign/Iconography/Other/Icons2(signs).webp',
      alt: 'Variety of glossy icons and signs (Do Not Enter, Error, Stop, Diamond Warning, Triangle Warning, Success, Info, Question)',
      date: '2024-09-21'
    },
    {
      name: 'Icon Win95 Speaker',
      src: '/images/GraphicDesign/Iconography/Other/Icon_Win95-Speaker.webp',
      alt: 'Side-by-side comparison of the original Windows 95 speaker icon and my recreation of it',
      date: '2024-10-17'
    },
    {
      name: 'Skype Inspired Status Icons',
      src: '/images/GraphicDesign/Iconography/Other/SkypeInspiredStatusIcons.webp',
      alt: 'Square status icons inspired by the ones used in Skype back when it was still glossy',
      date: '2024-04-01'
    },
    {
      name: 'Stop Sign',
      src: '/images/GraphicDesign/Iconography/Other/StopSign.webp',
      alt: 'Glossy stop sign with reflective coating pattern',
      date: '2025-07-20'
    },
    {
      name: 'Windows Media Center Close Button',
      src: '/images/GraphicDesign/Iconography/Other/TWOFOOT.CONTROL.EXIT.FOCUS.webp',
      alt: 'Side-by-side comparison of an original close button from Windows Media Center and my recreation of it (not super accurate, though). The making of this was recorded to show my friend how I recreate glossy/skeuomorphic stuff',
      date: '2022-09-07'
    },
    {
      name: 'Warning',
      src: '/images/GraphicDesign/Iconography/Other/Warning.png',
      alt: "Yellow triangle warning icon inspired by Windows 11's design",
      date: '2023-05-25'
    },
    {
      name: 'Warning 2',
      src: '/images/GraphicDesign/Iconography/Other/Warning2.webp',
      alt: 'Glossy triangle warning icon like an EU (Vienna Convention) road sign',
      date: '2024-03-28'
    },
    {
      name: 'Window Buttons',
      src: '/images/GraphicDesign/Iconography/Other/WindowButtons.webp',
      alt: 'Square Aero close buttons in different states',
      date: '2021-01-07'
    },
    {
      name: 'Windows Aero Cube',
      src: '/images/GraphicDesign/Iconography/Other/WindowsAeroCube.webp',
      alt: 'Making an Aero cube to be used for the 3D Objects folder icon. Following the perspective used for Aero icons',
      links: ['https://learn.microsoft.com/en-us/windows/win32/uxguide/vis-icons#:~:text=Three-dimensional%20objects%20are%20represented%20in%20perspective%20as%20solid%20objects,%20seen%20from%20a%20low%20birds-eye%20view%20with%20two%20vanishing%20points.'],
      date: '2024-06-25'
    },
    {
      name: 'Windows Folder 3D Objects',
      src: '/images/GraphicDesign/Iconography/Other/WindowsFolder3DObjects.webp',
      alt: '3D Objects folder icon in the Aero style',
      date: '2024-06-25'
    },
    {
      name: 'WIP Sun',
      src: '/images/GraphicDesign/Iconography/Other/WIP_Sun.webp',
      alt: "Unfinished/Work-in-progress recreation of a skeuomorphic sun found in Samsung's old weather widget",
      date: '2024-12-28'
    }
  ]
}
</script>

<template>
  <main class="container">
    <NavigationButtons
      :queryIndex="1"
      :queryParams="{ scrollTo: 'GraphicDesign' }"
    />
    <GlassCard title="Icons - Graphic Design">
      <p>Coming soon…</p>
    </GlassCard>
    <GlassCard id="Resume">
      <p class="date-marker"><code>2024-06-19</code></p>
      <h2></h2>
      <ImageGallery :src="IMAGES.RESUME" :perRow="6" :squareImages="false" />
    </GlassCard>
    <GlassCard id="Glossy">
      <p class="date-marker">started on <code>2023-02-09</code></p>
      <h2></h2>
      <ImageGallery :src="IMAGES.GLOSSY" :perRow="6" :squareImages="false" />
    </GlassCard>
    <GlassCard id="Modern">
      <p class="date-marker">started on <code>2024-04-07</code></p>
      <h2></h2>
      <ImageGallery :src="IMAGES.MODERN" :perRow="6" :squareImages="false" />
    </GlassCard>
    <GlassCard id="Misc">
      <h2></h2>
      <ImageGallery :src="IMAGES.OTHER" :perRow="6" :squareImages="false" />
    </GlassCard>
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
