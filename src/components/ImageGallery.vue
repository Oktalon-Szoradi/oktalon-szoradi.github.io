<template>
  <div>
    <div class="images" :per-row="perRow">
      <GlassCard
        class="no-top-margin image-card"
        v-for="(img, i) of src"
        :key="i"
        @click="viewImage(img)"
      >
        <ImageHandler
          :class="squareImages ? 'square-image' : ''"
          :src="img.src ?? ''"
          :alt="img.alt"
        />
        <p class="image-name">{{ img.name }}</p>
        <p class="image-number">{{ i + 1 }}/{{ src.length }}</p>
      </GlassCard>
    </div>
    <div class="fullscreen-view" v-if="currentImage">
      <div class="fullscreen-view-controls">
        <Transition name="gentle-fade">
          <div
            class="control previous"
            v-show="isVisible"
            @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave"
          >
            <div @click="viewPrevious()">
              <code>&lt;-</code>
            </div>
          </div>
        </Transition>
        <Transition name="gentle-fade">
          <div
            class="control next"
            v-show="isVisible"
            @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave"
          >
            <div @click="viewNext()">
              <code>-&gt;</code>
            </div>
          </div>
        </Transition>
        <PushButton class="close" color="red" @click="closeImage()">
          <!-- <span class="icon">x</span> -->
          <!-- <span class="icon">╳</span> -->
          <span class="icon">✕</span>
        </PushButton>
        <PushButton
          v-if="!noDownload && downloadExt"
          class="download"
          color="purple"
          :href="currentImageDownloadLink"
        >
          <span class="flex">
            <code class="icon">&DownArrow;</code>
            <span>Download {{ downloadExt.toUpperCase() }}</span>
          </span>
        </PushButton>
        <PushButton
          v-if="!noDownload && !downloadExt"
          class="download"
          color="purple-desat"
          :href="currentImageDownloadLink"
        >
          <span class="flex">
            <code class="icon">&DownArrow;</code>
            <span>Download {{ currentImageExtension.toUpperCase() }}</span>
          </span>
        </PushButton>
      </div>
      <img
        class="fullscreen-view-image"
        :src="currentImage?.src ?? ''"
        :alt="currentImage?.alt"
      />
      <div class="fullscreen-view-details">
        <code>{{ currentImageIndex + 1 }}</code
        >/<code>{{ src.length }}</code>
        <h1>{{ currentImage?.name }}</h1>
        <div class="">
          <code>{{ currentImage?.date }}</code>
          <div
            v-if="
              (currentImage?.alt && currentImage?.name !== currentImage?.alt) ||
              currentImage?.links
            "
            class="alt-text-section"
          >
            <!-- <hr /> -->
            <AccordionSingle
              class="alt-text"
              title="Show details"
              open-title="Hide details"
            >
              <!-- <hr /> -->
              <!-- <code>{{ currentImage?.date }}</code> ❘ -->
              {{ currentImage?.alt }}
              <div v-if="currentImage?.links" class="links-section">
                <p
                  :class="
                    !currentImage?.alt ||
                    currentImage?.name === currentImage?.alt
                      ? 'no-top-margin'
                      : ''
                  "
                >
                  Links:
                </p>
                <ul>
                  <li v-for="link of currentImage?.links" :key="link">
                    <a :href="link" target="_blank">
                      <code>{{ link }}</code>
                    </a>
                  </li>
                </ul>
              </div>
            </AccordionSingle>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import GlassCard from '@/components/GlassCard.vue'
import ImageHandler from '@/components/ImageHandler.vue'
import PushButton from '@/components/PushButton.vue'
import AccordionSingle from './AccordionSingle.vue'
// import { DownloadTrigger } from '@ark-ui/vue'
import { useAutoHide } from '@/composables/useAutoHide'

const { isVisible, onMouseEnter, onMouseLeave } = useAutoHide(3000)

interface ImageData {
  name: string
  src: string
  alt: string
  date?: string
  links?: string[]
}

const props = withDefaults(
  defineProps<{
    src: Array<ImageData>
    squareImages?: boolean
    perRow?: number
    legacyImages?: boolean
    noDownload?: boolean
    downloadExt?: string
  }>(),
  {
    perRow: 5
    // downloadExt: 'png'
  }
)

const currentImage = ref<ImageData | null>(null)
const currentImageIndex = computed(() =>
  currentImage.value
    ? props.src.findIndex((img) => img.src === currentImage.value?.src)
    : -1
)
const LEGACY_DOWNLOAD_LINK_BASE =
  'https://raw.githubusercontent.com/Oktalon-Szoradi/oktalon-szoradi.github.io/refs/heads/legacy/img'
const currentImageDownloadLink = computed(() => {
  if (!currentImage.value) return ''

  if (props.legacyImages) {
    const parts = currentImage.value.src.split('/')
    const lastPart = parts[parts.length - 1]
    const ext1 = '.50.webp'
    const nameWithoutExt: string = lastPart.includes(ext1)
      ? lastPart.split(ext1)[0]
      : lastPart.split('.webp')[0]
    return `${LEGACY_DOWNLOAD_LINK_BASE}/${
      parts[parts.length - 2]
    }/${nameWithoutExt}.${props.downloadExt}`
  }

  return currentImage.value.src
})
const currentImageExtension = computed(() => {
  if (!currentImage.value) return ''

  const parts = currentImage.value.src.split('.')
  const lastPart = parts[parts.length - 1]

  return lastPart
})

function viewImage(img: ImageData): void
function viewImage(i: number): void
function viewImage(arg: ImageData | number): void {
  if (typeof arg === 'number') {
    currentImage.value = props.src[arg]
  } else {
    currentImage.value = arg
  }
}

function viewPrevious() {
  const prevIndex = currentImageIndex.value - 1
  if (prevIndex < 0) {
    viewImage(props.src.length - 1)
    return
  }
  viewImage(prevIndex)
}
function viewNext() {
  const nextIndex = currentImageIndex.value + 1
  if (nextIndex >= props.src.length) {
    viewImage(0)
    return
  }
  viewImage(nextIndex)
}

function closeImage() {
  currentImage.value = null
}

document.addEventListener('keydown', (event) => {
  if (currentImage.value) {
    switch (event.key) {
      case 'ArrowLeft':
        viewPrevious()
        break
      case 'ArrowRight':
        viewNext()
        break
      case 'Escape':
        closeImage()
        break
      default:
        break
    }
  }
})
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

/* #region per-row definitions */

[per-row='1'] {
  --image-size: 80.375em;
}

[per-row='2'] {
  --image-size: 38.75em;
}

[per-row='3'] {
  --image-size: 24.833em;
}

[per-row='4'] {
  --image-size: 17.875em;
}

[per-row='5'] {
  --image-size: 13.7em;
}

[per-row='6'] {
  --image-size: 10.917em;
}

[per-row='7'] {
  --image-size: 8.928em;
}

[per-row='8'] {
  --image-size: 7.438em;
}

[per-row='9'] {
  --image-size: 6.277em;
}

[per-row='10'] {
  --image-size: 5.35em;
}

/* #endregion */

.images {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  margin-top: 2em;

  > * {
    display: flex;
    position: relative;
    flex-direction: column;
    transition-duration: vars.$transdur-mouseleave;
    cursor: pointer;
    width: var(--image-size);

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      transition-duration: vars.$transdur-mouseleave;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      content: '';
    }

    &:hover {
      transition-duration: vars.$transdur-mouseenter;
      filter: brightness(1.5);

      &::before {
        transition-duration: vars.$transdur-mouseenter;
        box-shadow: 0 0 16px hsl(0deg 0% 100% / 50%);
      }
    }

    &:active {
      transition-duration: vars.$transdur-press;
      filter: brightness(0.75);

      &::before {
        transition-duration: vars.$transdur-press;
        box-shadow: none;
      }
    }

    :deep(img) {
      border-radius: 4px;
      box-shadow:
        0 0 0 1px hsl(0deg 0% 0% / 75%),
        0 0 0 2px hsl(0deg 0% 100% / 25%);
      width: 100%;
      /* width: 10vw; */
    }

    :deep(.square-image) {
      height: var(--image-size);
      object-fit: cover;
    }

    .image-name {
      flex: 1;
      margin: 0.5em 0;
      color: hsl(0deg 0% 100% / 75%);
      font-size: 1rem;
    }

    .image-number {
      margin: 0;
      text-align: end;
      color: hsl(0deg 0% 100% / 25%);
      font-size: 0.75rem;
    }
  }
}

.fullscreen-view {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 20;
  background-color: hsl(0deg 0% 0% / 50%);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);

  .fullscreen-view-controls {
    .control {
      display: flex;
      position: absolute;
      top: 0;
      align-items: center;
      // opacity: 0.333;
      height: 100%;

      div {
        display: flex;
        transition-duration: vars.$transdur-mouseleave;
        /* background: red; */
        opacity: 0.75;
        cursor: pointer;

        &:hover {
          transition-duration: vars.$transdur-mouseenter;

          code {
            transition-duration: vars.$transdur-mouseenter;
            text-shadow: 0 0 0.25em hsl(0deg 0% 100% / 90%);
            filter: brightness(1.5);
          }
        }

        &:active {
          transition-duration: vars.$transdur-press;

          code {
            transition-duration: vars.$transdur-press;
            filter: brightness(0.75);
          }
        }

        /* stylelint-disable-next-line no-descending-specificity */
        code {
          transition-duration: vars.$transdur-mouseleave;
          padding: 4em 5vw;
          text-shadow: 0 2px 8px hsl(0deg 0% 0% / 33.3333%);
          color: hsl(0deg 0% 90%);
          font-size: 5em;
          user-select: none;
        }
      }
    }

    .previous {
      left: 0;
      transition-duration: vars.$transdur-mouseleave;
      background: linear-gradient(to right, hsl(0deg 0% 0% / 50%), transparent);

      div {
        &:hover code {
          transform: translateX(-8px);
        }

        &:active code {
          transform: translateX(-24px);
          text-shadow:
            8px 0 8px hsl(0deg 0% 0% / 100%),
            16px 0 8px hsl(0deg 0% 0% / 50%);
        }
      }
    }

    .next {
      right: 0;
      transition-duration: vars.$transdur-mouseleave;
      background: linear-gradient(to left, hsl(0deg 0% 0% / 50%), transparent);

      div {
        &:hover code {
          transform: translateX(8px);
        }

        &:active code {
          transform: translateX(24px);
          text-shadow:
            -8px 0 8px hsl(0deg 0% 0% / 100%),
            -16px 0 8px hsl(0deg 0% 0% / 50%);
        }
      }
    }

    :deep(a),
    :deep(button) {
      position: absolute;
      right: 2em;

      .side {
        backdrop-filter: blur(2px);
      }

      .icon {
        font-size: 2em;
      }

      @media (width < vars.$breakpoint-sm) {
        right: 1em;
      }
    }

    :deep(.close) {
      top: 1em;

      .bottom,
      .side,
      .face {
        padding: 0 2em;
      }

      .icon {
        display: inline-block;
        /* transform: translateY(-0.125em); */
        transform: translateY(-0.06em);
        font-family: 'Oxygen Bold', sans-serif;
      }
    }

    :deep(.download) {
      bottom: 2em;

      .bottom,
      .side,
      .face {
        padding: 0 1em;
        text-decoration: none;
      }

      .icon {
        text-decoration: underline;
      }

      .face span {
        display: flex;
        align-items: center;
      }

      .flex {
        gap: 1ch;
        align-items: center;

        span {
          text-decoration: underline;
        }
      }
    }
  }

  .fullscreen-view-image {
    margin: auto;
    max-width: 100%;
    max-height: 100vh;
  }

  .fullscreen-view-details {
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to right,
      hsl(0deg 0% 0% / 50%),
      transparent
    );
    padding: 1em 4em 1.5em 2em;
    // width: clamp(0vw, auto, 50vw);
    max-width: 50vw;
    text-shadow:
      0 2px 4px hsl(0deg 0% 0% / 50%),
      0 2px 12px hsl(0deg 0% 0% / 100%);
    color: hsl(0deg 0% 100% / 80%);

    h1 {
      margin: 0.25em 0 0.3333em;
    }

    hr {
      margin: 0 0 4px;
      box-shadow: none;
      background: linear-gradient(
        to right,
        hsl(0deg 0% 100% / 50%),
        transparent
      );
      height: 1px;
    }

    // .alt-text-section {
    //   width: 75%;
    // }

    .links-section {
      p {
        margin: 1em 0 0;
        text-shadow:
          0 2px 8px hsl(0deg 0% 0% / 100%),
          0 2px 8px hsl(0deg 0% 0% / 100%);
        letter-spacing: 0.1em;
        color: hsl(0deg 0% 100% / 66.6667%);
        font-size: 0.9em;
        font-weight: 100;
      }

      ul {
        margin: 0;
        padding: 0 0 0 1.5em;

        li::marker {
          color: #98A1E5;
        }

        li a * {
          font-size: 0.75em;
        }
      }
    }

    .alt-text {
      margin-top: 0.25em;
      // padding-right: 0.25em;

      :deep([data-part='item-content']) {
        text-shadow:
          0 2px 8px hsl(0deg 0% 0% / 100%),
          0 2px 8px hsl(0deg 0% 0% / 100%);
      }

      :deep([data-part='item-indicator']),
      :deep([data-part='item-trigger']) {
        padding-bottom: 0.1em;
        text-decoration: underline;
        text-decoration-thickness: 0.1px;
        text-shadow:
          0 2px 8px hsl(0deg 0% 0% / 100%),
          0 2px 8px hsl(0deg 0% 0% / 100%);
        letter-spacing: 0.1em;
        color: hsl(0deg 0% 100% / 66.6667%);
        font-size: 0.9em;
        font-weight: 100;
        font-style: italic;
      }

      :deep([data-part='item-indicator']) {
        opacity: 0;
        font-style: normal;
      }
    }
  }
}

.gentle-fade-enter-active {
  transition: opacity 100ms !important;
}

.gentle-fade-leave-active {
  transition: opacity 1000ms !important;
}

.gentle-fade-enter-from,
.gentle-fade-leave-to {
  opacity: 0;
}

@media (width < vars.$breakpoint-sm) {
  [per-row='6'],
  [per-row='7'] {
    --image-size: 9em;
  }

  .image-card {
    margin: 0;
  }
}
</style>
