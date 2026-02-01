/* eslint-env browser */

import { endAnimation } from './util.js'

export const POPUP_AREA = document.getElementById('popup-area')
export const POPUP_WINDOW = document.querySelector('#popup-area .popup-window')
export const POPUP_WINDOW_TITLE = document.querySelector(
  '#popup-area .popup-window .popup-title'
)
export const POPUP_WINDOW_CONTENT = document.querySelector(
  '#popup-area .popup-window .popup-content'
)
export const POPUP_WINDOW_BUTTONS = document.querySelector(
  '#popup-area .popup-window .popup-buttons'
)

export function showPopup () {
  POPUP_AREA.hidden = false
}

export function hidePopup () {
  POPUP_AREA.classList.toggle('close')
  POPUP_WINDOW.classList.toggle('close')
  endAnimation(POPUP_AREA, () => {
    POPUP_AREA.hidden = true
    POPUP_AREA.classList.toggle('close')
    POPUP_WINDOW.classList.toggle('close')
  })
}

export function setPopupTitle (title) {
  POPUP_WINDOW_TITLE.innerText = title
}

export function setPopupContent (innerText) {
  POPUP_WINDOW_CONTENT.innerText = innerText
}

export function newButton (innerText, type = 'button') {
  const button = document.createElement('button')
  button.type = type
  button.innerText = innerText
  return button
}
