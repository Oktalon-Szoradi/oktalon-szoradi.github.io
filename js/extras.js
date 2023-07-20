/* eslint-env browser */

// ----------------------------------------------------------------
// Preloading graphics
const graphicsPathsToPreload = [
  '/img/logo_dark.png',
  '/img/Icon-Hamburger.svg',
  '/img/Icon-Hamburger-Hover.svg',
  '/img/Icon-Hamburger-Active.svg',
  '/img/Icon-ArrowLeft.svg',
  '/img/Icon-ArrowLeft-Hover.svg',
  '/img/Icon-ArrowLeft-Active.svg',
  '/img/Icon-ArrowRight.svg',
  '/img/Icon-ArrowRight-Hover.svg',
  '/img/Icon-ArrowRight-Active.svg'
]
// eslint-disable-next-line no-unused-vars
const graphicsAsImages = graphicsPathsToPreload.map(img => {
  const image = new Image()
  image.src = img
  return image
})

// ----------------------------------------------------------------
// Remove "JavaScript is not enabled." banner
const noJsBanner = document.querySelector('#banner-no-js')
noJsBanner.remove()

// ----------------------------------------------------------------
// Hide boxes
const hiddenTags = document.querySelectorAll('.box')
hiddenTags.forEach(tag => {
  tag.classList.add('hidden')
})

// ----------------------------------------------------------------
// Animate boxes
const boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length; i++) {
  setTimeout(() => {
    boxes[i].classList.add('display-block')
    boxes[i].classList.add('appear-animation')
  }, i * 100)
}

// ----------------------------------------------------------------
// Pop Up
const popUp = document.querySelector('#popup')
const buttonOk = document.querySelector('#button-ok')
const buttonTrigger = document.querySelector('#button-trigger')

buttonOk.addEventListener('click', () => {
  popUp.classList.add('d-none')
})

buttonTrigger.addEventListener('click', () => {
  popUp.classList.remove('d-none')
})
