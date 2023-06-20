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

let loadedCount = 0
let photoIndex = 0

const photosAsImages = photoNames.map(picture => {
  const image = new Image()
  image.src = `/img/water/Szor-${picture}.jpg`
  image.addEventListener('load', () => {
    photoNumber.innerText = `${loadedCount += 1}/${photoNames.length}`
    if (loadedCount === photoNames.length) {
      photoName.innerText = 'All photos loaded successfully'
      setTimeout(() => {
        photoName.innerText = photoNames[photoIndex]
        photoNumber.innerText = `${photoIndex + 1}/${photoNames.length}`
      }, 1000)
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

photoPrevButtons.forEach(button => {
  button.addEventListener('click', prevPhoto)
})

photoNextButtons.forEach(button => {
  button.addEventListener('click', nextPhoto)
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
