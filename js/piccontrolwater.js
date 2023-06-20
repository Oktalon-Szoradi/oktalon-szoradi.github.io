/* eslint-env browser */

const pictures = [
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

const pic = document.querySelector('#pic')
const picPrevButtons = document.querySelectorAll('.pic-prev')
const picNextButtons = document.querySelectorAll('.pic-next')
const picName = document.querySelector('#pic-name')
const picNumber = document.querySelector('#pic-no')

let picIndex = 0

const images = pictures.map(picture => {
  const image = new Image()
  image.src = `/img/water/Szor-${picture}.jpg`
  return image
})

const prevPic = () => {
  picIndex = (picIndex - 1 + pictures.length) % pictures.length
  pic.src = images[picIndex].src
  picName.innerText = pictures[picIndex]
  picNumber.innerText = `${picIndex + 1}/${pictures.length}`
}

const nextPic = () => {
  picIndex = (picIndex + 1) % pictures.length
  pic.src = images[picIndex].src
  picName.innerText = pictures[picIndex]
  picNumber.innerText = `${picIndex + 1}/${pictures.length}`
}

picPrevButtons.forEach(button => {
  button.addEventListener('click', prevPic)
})

picNextButtons.forEach(button => {
  button.addEventListener('click', nextPic)
})

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowLeft':
      prevPic()
      break
    case 'ArrowRight':
      nextPic()
      break
    default:
      break
  }
})
