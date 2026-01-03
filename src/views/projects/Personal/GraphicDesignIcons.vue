<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageGallery from '@/components/ImageGallery.vue'

const IMAGES = {
  RESUME: [
    {
      name: 'Email',
      src: '/images/GraphicDesign/Iconography/Icons_Email.webp',
      alt: ''
    },
    {
      name: 'Phone',
      src: '/images/GraphicDesign/Iconography/Icons_Phone.webp',
      alt: ''
    },
    {
      name: 'Pin',
      src: '/images/GraphicDesign/Iconography/Icons_Pin.webp',
      alt: ''
    }
  ],
  GLOSSY: [
    {
      name: 'Calculator',
      src: '/images/GraphicDesign/Iconography/Glossy/Calculator(mine).png',
      alt: ''
    },
    {
      name: 'Calendar',
      src: '/images/GraphicDesign/Iconography/Glossy/Calendar(mine).png',
      alt: ''
    },
    {
      name: 'ChatGPT',
      src: '/images/GraphicDesign/Iconography/Glossy/ChatGPT.png',
      alt: ''
    },
    {
      name: 'Discord',
      src: '/images/GraphicDesign/Iconography/Glossy/Discord(alt).png',
      alt: ''
    },
    {
      name: 'Geogebra',
      src: '/images/GraphicDesign/Iconography/Glossy/Geogebra.png',
      alt: ''
    },
    {
      name: 'Kahoot',
      src: '/images/GraphicDesign/Iconography/Glossy/Kahoot.png',
      alt: ''
    },
    {
      name: 'N26',
      src: '/images/GraphicDesign/Iconography/Glossy/N26.png',
      alt: ''
    },
    {
      name: 'QR Code Scanner',
      src: '/images/GraphicDesign/Iconography/Glossy/QRcodeScanner.png',
      alt: ''
    },
    {
      name: 'Reddit',
      src: '/images/GraphicDesign/Iconography/Glossy/Reddit.png',
      alt: ''
    },
    {
      name: 'Reddit (alt)',
      src: '/images/GraphicDesign/Iconography/Glossy/Reddit(alt).png',
      alt: ''
    },
    {
      name: 'Signal',
      src: '/images/GraphicDesign/Iconography/Glossy/Signal.png',
      alt: ''
    },
    {
      name: 'Studyly',
      src: '/images/GraphicDesign/Iconography/Glossy/Studyly.png',
      alt: ''
    },
    {
      name: 'Weather',
      src: '/images/GraphicDesign/Iconography/Glossy/Weather.png',
      alt: ''
    },
    {
      name: 'WienMobil',
      src: '/images/GraphicDesign/Iconography/Glossy/WienMobil.png',
      alt: ''
    }
  ],
  MODERN: [
    {
      name: 'Calculator',
      src: '/images/GraphicDesign/Iconography/Modern/Calculator.png',
      alt: ''
    },
    {
      name: 'Calendar',
      src: '/images/GraphicDesign/Iconography/Modern/Calendar.png',
      alt: ''
    },
    {
      name: 'Calendar Turquoise',
      src: '/images/GraphicDesign/Iconography/Modern/CalendarTurquoise.png',
      alt: ''
    },
    {
      name: 'Camera',
      src: '/images/GraphicDesign/Iconography/Modern/Camera.png',
      alt: ''
    },
    {
      name: 'Clock',
      src: '/images/GraphicDesign/Iconography/Modern/Clock.png',
      alt: ''
    },
    {
      name: 'Contacts',
      src: '/images/GraphicDesign/Iconography/Modern/Contacts.png',
      alt: ''
    },
    {
      name: 'Contacts Alt',
      src: '/images/GraphicDesign/Iconography/Modern/ContactsAlt.png',
      alt: ''
    },
    {
      name: 'Messages',
      src: '/images/GraphicDesign/Iconography/Modern/Messages.png',
      alt: ''
    },
    {
      name: 'Phone',
      src: '/images/GraphicDesign/Iconography/Modern/Phone.png',
      alt: ''
    },
    {
      name: 'Settings',
      src: '/images/GraphicDesign/Iconography/Modern/Settings.png',
      alt: ''
    },
    {
      name: 'Settings Alt',
      src: '/images/GraphicDesign/Iconography/Modern/SettingsAlt.png',
      alt: ''
    },
    {
      name: 'WIP Gallery',
      src: '/images/GraphicDesign/Iconography/Modern/WIP_Gallery.png',
      alt: ''
    },
    {
      name: 'WIP Weather',
      src: '/images/GraphicDesign/Iconography/Modern/WIP_Weather.png',
      alt: ''
    }
  ],
  OTHER: [
    {
      name: 'Aero Buttons 1',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons1.webp',
      alt: '',
      date: '2024-12-01'
    },
    {
      name: 'Aero Buttons 2',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons2.webp',
      alt: '',
      date: '2024-12-01'
    },
    {
      name: 'Aero Buttons 3',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons3.webp',
      alt: '',
      date: '2024-12-01'
    },
    {
      name: 'Aero Buttons 4',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons4.webp',
      alt: '',
      date: '2024-12-01'
    },
    {
      name: 'Aero Icon Critical Stop',
      src: '/images/GraphicDesign/Iconography/Other/AeroIcon_CriticalStop.webp',
      alt: '',
      date: '2022-12-22?'
    },
    {
      name: 'Aero Icon Do Not Enter',
      src: '/images/GraphicDesign/Iconography/Other/AeroIcon_DoNotEnter.webp',
      alt: '',
      date: '2022-12-24?'
    },
    {
      name: 'Aero Icon Success',
      src: '/images/GraphicDesign/Iconography/Other/AeroIcon_Success.webp',
      alt: '',
      date: '2022-12-22?'
    },
    {
      name: 'Baccess Icon Skeuomorphic',
      src: '/images/GraphicDesign/Iconography/Other/Baccess_Icon_Skeuomorphic.webp',
      alt: '',
      date: '2021-09-03'
    },
    {
      name: 'Broken Link (Missing Image)',
      src: '/images/GraphicDesign/Iconography/Other/BrokenLink(MissingImage).webp',
      alt: '',
      date: '2025-02-24'
    },
    {
      name: 'Icons 2 (signs)',
      src: '/images/GraphicDesign/Iconography/Other/Icons2(signs).webp',
      alt: '',
      date: '2024-09-21'
    },
    {
      name: 'Icon Win95 Speaker',
      src: '/images/GraphicDesign/Iconography/Other/Icon_Win95-Speaker.webp',
      alt: '',
      date: '2024-10-17'
    },
    {
      name: 'Skype Inspired Status Icons',
      src: '/images/GraphicDesign/Iconography/Other/SkypeInspiredStatusIcons.webp',
      alt: '',
      date: '2024-04-01'
    },
    {
      name: 'Stop Sign',
      src: '/images/GraphicDesign/Iconography/Other/StopSign.webp',
      alt: '',
      date: '2025-07-20'
    },
    {
      name: 'TWOFOOT CONTROL EXIT FOCUS',
      src: '/images/GraphicDesign/Iconography/Other/TWOFOOT.CONTROL.EXIT.FOCUS.webp',
      alt: '',
      date: '2022-09-07'
    },
    {
      name: 'Warning 2',
      src: '/images/GraphicDesign/Iconography/Other/Warning2.webp',
      alt: '',
      date: '2024-03-28'
    },
    {
      name: 'Warning',
      src: '/images/GraphicDesign/Iconography/Other/Warning.png',
      alt: '',
      date: '2023-05-25'
    },
    {
      name: 'Window Buttons',
      src: '/images/GraphicDesign/Iconography/Other/WindowButtons.webp',
      alt: '',
      date: '2021-01-07'
    },
    {
      name: 'Windows Aero Cube',
      src: '/images/GraphicDesign/Iconography/Other/WindowsAeroCube.webp',
      alt: '',
      date: '2024-06-25'
    },
    {
      name: 'Windows Folder 3D Objects',
      src: '/images/GraphicDesign/Iconography/Other/WindowsFolder3DObjects.webp',
      alt: '',
      date: '2024-06-25'
    },
    {
      name: 'WIP Sun',
      src: '/images/GraphicDesign/Iconography/Other/WIP_Sun.webp',
      alt: '',
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
    <GlassCard id="">
      <p class="date-marker"><code>2024-06-19</code></p>
      <h2></h2>
      <ImageGallery :src="IMAGES.RESUME" :perRow="6" :squareImages="false" />
    </GlassCard>
    <GlassCard id="">
      <p class="date-marker">started on <code>2023-02-09</code></p>
      <h2></h2>
      <ImageGallery :src="IMAGES.GLOSSY" :perRow="6" :squareImages="false" />
    </GlassCard>
    <GlassCard id="">
      <p class="date-marker">started on <code>2024-04-07</code></p>
      <h2></h2>
      <ImageGallery :src="IMAGES.MODERN" :perRow="6" :squareImages="false" />
    </GlassCard>
    <GlassCard id="">
      <h2></h2>
      <ImageGallery :src="IMAGES.OTHER" :perRow="6" :squareImages="false" />
    </GlassCard>
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
