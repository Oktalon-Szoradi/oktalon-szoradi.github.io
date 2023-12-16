/* eslint-env browser */

const photoNames = [
  'Becken',
  'BeckenLinks',
  'BeckenRechts',
  'Ente',
  'Enten',
  'FontaeneBaeume',
  'FontaeneBaeumeDunkel',
  'FontaeneBaeumeLang',
  'FontaeneBaeumeLinsenreflexion',
  'FontaeneGras',
  'FontaenePlatscherBlume',
  'FontaenePlatscherEnte',
  'FontaenePlatscherLang',
  'FontaenePlatscherLangEnte',
  'FontaenePlatscherZiegel',
  'FontaenenEingang',
  'FontaenenUebersicht',
  'Papagenobrunnen',
  'PapagenobrunnenLang',
  'PapagenobrunnenMuschelschaleChaos',
  'PapagenobrunnenMuschelschaleFluss',
  'PapagenobrunnenMuschelschaleKurve',
  'SteinFlussKurz',
  'SteinFlussLang',
  'WasserEingefrohren',
  'WasserEingefrohrenKlar',
  'WasserEingefrohrenKuehl',
  'WasserEingefrohrenNiedrig',
  'WasserEingefrohrenWiese',
  'WasserNebel'
]

const glossyFramePlaceholder = document.querySelector(
  '#glossy-frame-placeholder'
)

glossyFramePlaceholder.classList.add('hidden')

const replaceGermanChars = string => {
  return string.replace(/ae/gi, 'ä').replace(/oe/gi, 'ö').replace(/ue/gi, 'ü')
}

const breakIntoWords = string => {
  const words = replaceGermanChars(string).split(/(?=[A-Z])/)
  return words.join(' ')
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
  picFullscreenTitle.innerText = breakIntoWords(photoNames[curPicIndex])
  picFullscreenIndex.innerText = `${curPicIndex + 1}/${photoNames.length}`
  picFullscreenImage.attributes.src.value = `/img/water/Szor-${photoNames[curPicIndex]}.jpg`
}

const viewFullScreen = function () {
  toggleFullScreen()
  curPicIndex = Number(this.attributes['data-index'].value)
  setData()
}

const prevPhoto = () => {
  curPicIndex = curPicIndex === 0 ? photoNames.length - 1 : curPicIndex - 1
  setData()
}

const nextPhoto = () => {
  curPicIndex = curPicIndex === photoNames.length - 1 ? 0 : curPicIndex + 1
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

photoNames.map((picture, index) => {
  const photoFrame = document.createElement('div')
  photoFrame.classList.add('glossy-frame')

  const image = document.createElement('div')
  image.classList.add('pic')
  image.style.backgroundImage = `url(/img/water/Szor-${picture}.jpg)`

  const label = document.createElement('span')
  label.classList.add('pic-label')
  label.innerText = breakIntoWords(picture)

  const number = document.createElement('span')
  number.classList.add('pic-index')
  number.innerText = `${index + 1}/${photoNames.length}`

  photoFrame.setAttribute('data-index', index)

  photoFrame.appendChild(image)
  photoFrame.appendChild(label)
  photoFrame.appendChild(number)
  frameGrid.appendChild(photoFrame)

  photoFrame.addEventListener('click', viewFullScreen)

  return image
})
