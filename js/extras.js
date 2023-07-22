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
const popUpBg = document.querySelector('#popup-bg')
const popUpBox = document.querySelector('#popup-box')
const popUpTitle = document.querySelector('#popup-title')
const popUpContentHeaderTop = document.querySelector(
  '#popup-content-header-top'
)
const popUpContentBody = document.querySelector('#popup-content-body')
const popUpContentHeaderBottom = document.querySelector(
  '#popup-content-header-bottom'
)
const popUpActions = document.querySelector('#popup-actions')
const triggerButtons = ['#trigger-button-blender']

const showPopUp = () => {
  popUpBg.classList.add('fadein-animation')
  popUpBg.classList.remove('d-none')
}

const dismissPopUp = () => {
  popUpBox.classList.add('disappear-animation')
  setTimeout(() => {
    popUpBg.classList.add('fadeout-animation')
    popUpBox.classList.remove('disappear-animation')
    setTimeout(() => {
      popUpBg.classList.remove('fadein-animation')
      popUpBg.classList.remove('fadeout-animation')
      popUpBg.classList.add('d-none')
    }, 500)
  }, 500)
}

const createButton = (
  text,
  isDefault = false,
  color = 'button-normal',
  action = () => {
    dismissPopUp()
  }
) => {
  const button = document.createElement('button')
  button.innerText = text
  button.classList.add('button')
  button.classList.add(color)
  if (isDefault) {
    button.classList.add('button-default')
  }
  button.addEventListener('click', action)
  return button
}

const setContent = button => {
  popUpTitle.innerText = ''
  popUpContentHeaderTop.innerText = ''
  popUpContentBody.innerText = ''
  popUpContentHeaderBottom.innerText = ''
  popUpActions.innerHTML = ''
  switch (button) {
    case '#trigger-button-blender':
      popUpTitle.innerText = 'Confirm download of Blender Project'
      popUpContentHeaderTop.innerText = 'BlenderProject.zip'
      popUpContentBody.innerText = 'Size: 67.6 MiB\n'
      popUpContentBody.innerText += 'Type: ZIP archive\n'
      popUpContentBody.innerText += 'From: /other/BlenderProject.zip\n'
      popUpContentHeaderBottom.innerText = 'Do you want to download this file?'
      popUpActions.appendChild(
        createButton('Download', true, 'button-blue', () => {
          window.location.href = '/other/BlenderProject.zip'
          dismissPopUp()
        })
      )
      popUpActions.appendChild(createButton('Cancel', false))
      break
    default:
      popUpTitle.innerText = 'No specific content available'
      popUpContentHeaderTop.innerText = "Oh my... This shouldn't appear!"
      popUpContentBody.innerText =
        'The button you clicked was meant to show a pop up like this, but with specific content related to the button...\n'
      popUpContentBody.innerText +=
        "but instead, it seeems like that content doesn't exist! Oh no :("
      popUpContentHeaderBottom.innerText = 'Please let me know if you see this.'
      popUpActions.appendChild(createButton('Dismiss', true))
      popUpActions.appendChild(
        createButton('Contact me', false, 'button-normal', () => {
          window.location.href = '/pages/contact.html'
        })
      )
      break
  }
}

triggerButtons.forEach(b => {
  const button = document.querySelector(b)
  button?.addEventListener('click', () => {
    showPopUp()
    setContent(b)
  })
})
