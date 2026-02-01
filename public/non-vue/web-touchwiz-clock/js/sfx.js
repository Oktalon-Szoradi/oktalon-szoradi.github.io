/* eslint-env browser */

const SETTING_USE_ALT_SFX_CHECKBOX =
  document.getElementById('use-alt-touch-sfx')
const SFX_TOUCH = new Audio('./assets/media/TW_Touch.ogg')
const SFX_TOUCH_ALT = new Audio('./assets/media/simple_ripple_down.ogg')
SFX_TOUCH.preload = 'auto'

export function playTouchSound () {
  if (!SETTING_USE_ALT_SFX_CHECKBOX.checked) {
    SFX_TOUCH.cloneNode().play()
  } else {
    SFX_TOUCH_ALT.cloneNode().play()
  }
}

const ELEMENTS = ['button', 'select', 'input']

;['click', 'mousedown', 'keydown'].forEach(eventName => {
  document.addEventListener(eventName, e => {
    let interactedwithElement
    for (const element of ELEMENTS) {
      interactedwithElement = e.target.closest(element)
      if (!interactedwithElement) continue
      else break
    }
    if (!interactedwithElement) return

    const isImmediate = interactedwithElement.classList.contains('immediate')

    if (
      (eventName === 'click' && !isImmediate) ||
      (eventName === 'keydown' &&
        isImmediate &&
        (e.key === ' ' || e.key === 'Enter')) ||
      (eventName === 'mousedown' && isImmediate)
    ) {
      playTouchSound()
    }
  })
})
