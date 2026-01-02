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
      alt: ''
    },
    {
      name: 'Aero Buttons 2',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons2.webp',
      alt: ''
    },
    {
      name: 'Aero Buttons 3',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons3.webp',
      alt: ''
    },
    {
      name: 'Aero Buttons 4',
      src: '/images/GraphicDesign/Iconography/Other/AeroButtons4.webp',
      alt: ''
    },
    {
      name: 'Aero Icon Critical Stop',
      src: '/images/GraphicDesign/Iconography/Other/AeroIcon_CriticalStop.webp',
      alt: ''
    },
    {
      name: 'Aero Icon Do Not Enter',
      src: '/images/GraphicDesign/Iconography/Other/AeroIcon_DoNotEnter.webp',
      alt: ''
    },
    {
      name: 'Aero Icon Success',
      src: '/images/GraphicDesign/Iconography/Other/AeroIcon_Success.webp',
      alt: ''
    },
    {
      name: 'Baccess Icon Skeuomorphic',
      src: '/images/GraphicDesign/Iconography/Other/Baccess_Icon_Skeuomorphic.webp',
      alt: ''
    },
    {
      name: 'Broken Link (Missing Image)',
      src: '/images/GraphicDesign/Iconography/Other/BrokenLink(MissingImage).webp',
      alt: ''
    },
    {
      name: 'Icons 2 (signs)',
      src: '/images/GraphicDesign/Iconography/Other/Icons2(signs).webp',
      alt: ''
    },
    {
      name: 'Icon Win95 Speaker',
      src: '/images/GraphicDesign/Iconography/Other/Icon_Win95-Speaker.webp',
      alt: ''
    },
    {
      name: 'Skype Inspired Status Icons',
      src: '/images/GraphicDesign/Iconography/Other/SkypeInspiredStatusIcons.webp',
      alt: ''
    },
    {
      name: 'Stop Sign',
      src: '/images/GraphicDesign/Iconography/Other/StopSign.webp',
      alt: ''
    },
    {
      name: 'TWOFOOT CONTROL EXIT FOCUS',
      src: '/images/GraphicDesign/Iconography/Other/TWOFOOT.CONTROL.EXIT.FOCUS.webp',
      alt: ''
    },
    {
      name: 'Warning 2',
      src: '/images/GraphicDesign/Iconography/Other/Warning2.webp',
      alt: ''
    },
    {
      name: 'Warning',
      src: '/images/GraphicDesign/Iconography/Other/Warning.png',
      alt: ''
    },
    {
      name: 'Window Buttons',
      src: '/images/GraphicDesign/Iconography/Other/WindowButtons.webp',
      alt: ''
    },
    {
      name: 'Windows Aero Cube',
      src: '/images/GraphicDesign/Iconography/Other/WindowsAeroCube.webp',
      alt: ''
    },
    {
      name: 'Windows Folder 3D Objects',
      src: '/images/GraphicDesign/Iconography/Other/WindowsFolder3DObjects.webp',
      alt: ''
    },
    {
      name: 'WIP Sun',
      src: '/images/GraphicDesign/Iconography/Other/WIP_Sun.webp',
      alt: ''
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
    <ImageGallery :src="IMAGES.RESUME" :perRow="6" :squareImages="false" />
    <ImageGallery :src="IMAGES.GLOSSY" :perRow="6" :squareImages="false" />
    <ImageGallery :src="IMAGES.MODERN" :perRow="6" :squareImages="false" />
    <ImageGallery :src="IMAGES.OTHER" :perRow="6" :squareImages="false" />
  </main>
</template>

<!-- <style scoped lang="scss">
</style> -->
