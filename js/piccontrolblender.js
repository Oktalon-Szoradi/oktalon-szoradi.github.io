/* eslint-env browser */

const photoNames19 = [
  'SuzanneCloseupDonut',
  'SuzanneCloseupPlanet',
  'SuzanneDonutKiwi',
  'SuzannePlanets'
]

const photoNames20 = ['Overview1', 'Overview2', 'SuzanneDonutChocolate']

const allPhotoNames = photoNames19.concat(photoNames20)

const glossyFramePlaceholder = document.querySelector(
  '#glossy-frame-placeholder'
)

glossyFramePlaceholder.classList.add('hidden')

const breakIntoWords = string => {
  const words = string.split(/(?=[A-Z])/)
  return words.join(' ')
}

const getCorrectPath = index => {
  if (index < photoNames19.length) {
    return `/img/blender/Render_20230619-${photoNames19[index]}.png`
  } else {
    return `/img/blender/Render_20230620-${
      photoNames20[index - photoNames19.length]
    }.png`
  }
}

/* -------------------------------------------------------------------------------------------- */
/* - Fullscreen - */
/* -------------------------------------------------------------------------------------------- */

const picFullscreen = document.querySelector('#pic-fullscreen')
const picFullscreenImage = document.querySelector('#pic-fullscreen-img')
const picFullscreenTitle = document.querySelector('.pic-fullscreen-title')
const picFullscreenIndex = document.querySelector('.pic-fullscreen-index')
const picFullscreenPrev = document.querySelector('.pic-fullscreen-prev')
const picFullscreenNext = document.querySelector('.pic-fullscreen-next')
const picFullscreenClose = document.querySelector('.pic-fullscreen-close')
let curPicIndex = 0

const toggleFullScreen = () => {
  picFullscreen.classList.toggle('d-none')
}

picFullscreenClose.addEventListener('click', toggleFullScreen)

const setData = () => {
  picFullscreenTitle.innerText = breakIntoWords(allPhotoNames[curPicIndex])
  picFullscreenIndex.innerText = `${curPicIndex + 1}/${allPhotoNames.length}`
  picFullscreenImage.attributes.src.value = getCorrectPath(curPicIndex)
}

const viewFullScreen = function () {
  toggleFullScreen()
  curPicIndex = Number(this.attributes['data-index'].value)
  setData()
}

const prevPhoto = () => {
  curPicIndex = curPicIndex === 0 ? allPhotoNames.length - 1 : curPicIndex - 1
  setData()
}

const nextPhoto = () => {
  curPicIndex = curPicIndex === allPhotoNames.length - 1 ? 0 : curPicIndex + 1
  setData()
}

picFullscreenPrev.addEventListener('click', prevPhoto)

picFullscreenNext.addEventListener('click', nextPhoto)

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowLeft':
      prevPhoto()
      break
    case 'ArrowRight':
      nextPhoto()
      break
    case 'Escape':
      toggleFullScreen()
      break
    default:
      break
  }
})

/* -------------------------------------------------------------------------------------------- */
/* - Thumbnail Generation - */
/* -------------------------------------------------------------------------------------------- */

const frameGrid = document.querySelector('.frame-grid')

allPhotoNames.map((picture, index) => {
  const photoFrame = document.createElement('div')
  photoFrame.classList.add('glossy-frame')

  const image = document.createElement('div')
  image.classList.add('pic')
  image.style.backgroundImage = `url(${getCorrectPath(index)})`

  const label = document.createElement('span')
  label.classList.add('pic-label')
  label.innerText = breakIntoWords(picture)

  const number = document.createElement('span')
  number.classList.add('pic-index')
  number.innerText = `${index + 1}/${allPhotoNames.length}`

  photoFrame.setAttribute('data-index', index)

  photoFrame.appendChild(image)
  photoFrame.appendChild(label)
  photoFrame.appendChild(number)
  frameGrid.appendChild(photoFrame)

  photoFrame.addEventListener('click', viewFullScreen)

  return image
})
