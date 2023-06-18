// ----------------------------------------------------------------
// Preloading images
/* eslint-disable-next-line no-undef */
const img = new Image()
img.src = '/img/logo_dark.png'

// ----------------------------------------------------------------
// Remove "JavaScript is not enabled." banner
const noJsBanner = document.querySelector('.banner-error')
noJsBanner.remove()

// ----------------------------------------------------------------
// Hide boxes
const hiddenTags = document.querySelectorAll('.box')
hiddenTags.forEach((tag) => {
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
