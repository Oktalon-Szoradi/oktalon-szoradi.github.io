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

const photo = document.querySelector('#pic')
const photoPrevButtons = document.querySelectorAll('.pic-prev')
const photoNextButtons = document.querySelectorAll('.pic-next')
const photoName = document.querySelector('#pic-name')
const photoNumber = document.querySelector('#pic-no')
const progressBarHolder = document.querySelector('.progress-bar-holder')
const progressBarJuice = document.querySelector('.progress-bar-juice')

let loadedCount = 0
let photoIndex = 0

const photosAsImages = photoNames.map(picture => {
  const image = new Image()
  image.src = `/img/water/Szor-${picture}.jpg`
  image.addEventListener('load', () => {
    photoNumber.innerText = `${(loadedCount += 1)}/${photoNames.length}`
    progressBarJuice.style.width = `${(loadedCount / photoNames.length) * 100}%`
    if (loadedCount === photoNames.length) {
      initializeControls()
    }
  })
  return image
})

const prevPhoto = () => {
  photoIndex = (photoIndex - 1 + photoNames.length) % photoNames.length
  photo.src = photosAsImages[photoIndex].src
  photoName.innerText = photoNames[photoIndex]
  photoNumber.innerText = `${photoIndex + 1}/${photoNames.length}`
}

const nextPhoto = () => {
  photoIndex = (photoIndex + 1) % photoNames.length
  photo.src = photosAsImages[photoIndex].src
  photoName.innerText = photoNames[photoIndex]
  photoNumber.innerText = `${photoIndex + 1}/${photoNames.length}`
}

const activateButton = button => {
  button.disabled = false
  button.classList.remove('button-normal-disabled')
  button.classList.add('button-normal')
}

const initializeControls = () => {
  setTimeout(() => {
    progressBarJuice.classList.remove('progress-bar-juice')
    progressBarJuice.classList.add('progress-bar-done')
    photoName.innerText = 'All photos loaded successfully'
  }, 250)
  setTimeout(() => {
    photoName.innerText = photoNames[photoIndex]
    photoNumber.innerText = `${photoIndex + 1}/${photoNames.length}`
    // for (let i = 32; i >= 0; i -= 1) {
    //   setTimeout(() => {
    //     progressBarHolder.style.margin = `${i}px 0 ${i}px 0`
    //     progressBarHolder.style.height = `${i}px`
    //     progressBarJuice.style.height = `${i}px`
    //   }, 25 * (32 - i))
    // }
    progressBarHolder.classList.add('shrink-animation')
    photo.classList.add('pic-view-grow-animation')
    setTimeout(() => {
      progressBarHolder.classList.add('hidden')
      photo.style.height = 'calc(100vh - 400px)'
    }, 499)
  }, 1000)

  photoPrevButtons.forEach(button => {
    button.addEventListener('click', prevPhoto)
    activateButton(button)
  })

  photoNextButtons.forEach(button => {
    button.addEventListener('click', nextPhoto)
    activateButton(button)
  })

  document.addEventListener('keydown', event => {
    switch (event.key) {
      case 'ArrowLeft':
        prevPhoto()
        break
      case 'ArrowRight':
        nextPhoto()
        break
      default:
        break
    }
  })
}
