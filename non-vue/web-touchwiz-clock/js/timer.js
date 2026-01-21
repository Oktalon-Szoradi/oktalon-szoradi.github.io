/* eslint-env browser */

import { APP_INFO, updateAppName, naturalJoin, formatTime } from './util.js'
import {
  POPUP_WINDOW_BUTTONS,
  showPopup,
  hidePopup,
  setPopupTitle,
  setPopupContent,
  newButton
} from './popup.js'

const TIMER_HOURS = document.getElementById('timer-hours')
const TIMER_MINUTES = document.getElementById('timer-minutes')
const TIMER_SECONDS = document.getElementById('timer-seconds')

const HELP_TEXT = document.getElementById('timer-help-text')
const HELP_TEXT_ANIM_MS = 475

const BUTTON_START = document.getElementById('timer-start')
const BUTTON_GROUP = document.getElementById('timer-button-group')
const BUTTON_STOP = document.getElementById('timer-stop')
const BUTTON_RESUME = document.getElementById('timer-resume')
const BUTTON_RESET = document.getElementById('timer-reset')

const SFX_TIMER_END = new Audio('./assets/media/Ticktac.ogg')
SFX_TIMER_END.preload = 'auto'
SFX_TIMER_END.loop = true

let lastTimerMs = 60_000
let remainingMs = lastTimerMs
let endTime = null
let rafId = null
let running = false

function disableInput () {
  TIMER_HOURS.disabled = true
  TIMER_MINUTES.disabled = true
  TIMER_SECONDS.disabled = true
}

function enableInput () {
  TIMER_HOURS.disabled = false
  TIMER_MINUTES.disabled = false
  TIMER_SECONDS.disabled = false
}

function afterResetStuff () {
  APP_INFO.appNameParts = APP_INFO.appNameParts.filter(
    part =>
      part !== 'Timer Running' &&
      part !== 'Timer Paused' &&
      part !== 'Timer Done!'
  )
  updateAppName()

  BUTTON_START.disabled = true
  BUTTON_STOP.disabled = false
  BUTTON_RESUME.disabled = false
  BUTTON_RESET.disabled = false

  BUTTON_GROUP.hidden = true
  BUTTON_START.hidden = false

  HELP_TEXT.classList.toggle('reveal')
  HELP_TEXT.hidden = false
  setTimeout(() => {
    HELP_TEXT.classList.toggle('reveal')
    BUTTON_START.disabled = false
  }, HELP_TEXT_ANIM_MS)

  remainingMs = lastTimerMs
  render()
}

function checkStartButtonEligibility () {
  if (
    Number(TIMER_HOURS.value) +
      Number(TIMER_MINUTES.value) +
      Number(TIMER_SECONDS.value) <=
    0
  ) {
    BUTTON_START.disabled = true
  } else {
    BUTTON_START.disabled = false
  }
}

function dismissTimerAlarm () {
  SFX_TIMER_END.pause()
  SFX_TIMER_END.currentTime = 0
  hidePopup()
  afterResetStuff()
}

function timerIsDoneStuff () {
  remainingMs = 0
  running = false
  cancelAnimationFrame(rafId)
  render()
  SFX_TIMER_END.play()

  BUTTON_START.disabled = true
  BUTTON_STOP.disabled = true
  BUTTON_RESUME.disabled = true
  BUTTON_RESET.disabled = true

  const formattedTime = formatTime(lastTimerMs)
  const timer = []
  if (formattedTime.hours > 0) timer.push(`${formattedTime.hours} hour`)
  if (formattedTime.minutes > 0) timer.push(`${formattedTime.minutes} minute`)
  if (formattedTime.seconds > 0) timer.push(`${formattedTime.seconds} second `)

  APP_INFO.appNameParts.splice(
    APP_INFO.appNameParts.indexOf('Timer Running'),
    1,
    'Timer Done!'
  )
  updateAppName()

  // eslint-disable-next-line no-irregular-whitespace
  setPopupTitle(`Time is up – ${formattedTime.hhmmss}`)
  setPopupContent(`Your ${naturalJoin(timer)} timer is up`)
  const buttonOK = newButton('OK')
  requestAnimationFrame(() => buttonOK.focus())
  buttonOK.addEventListener('click', () => {
    dismissTimerAlarm()
  })
  POPUP_WINDOW_BUTTONS.replaceChildren(buttonOK)
  showPopup()

  enableInput()
}

function render () {
  const formattedTime = formatTime(remainingMs + 999)
  TIMER_HOURS.value = formattedTime.hh
  TIMER_MINUTES.value = formattedTime.mm
  TIMER_SECONDS.value = formattedTime.ss
}

function tick () {
  if (!running) return

  const now = performance.now()
  remainingMs = endTime - now

  if (remainingMs <= 0) {
    timerIsDoneStuff()
    return
  }

  render()
  rafId = requestAnimationFrame(tick)
}

function start () {
  lastTimerMs =
    Number(TIMER_HOURS.value) * 60 * 60 * 1000 +
    Number(TIMER_MINUTES.value) * 60 * 1000 +
    Number(TIMER_SECONDS.value) * 1000
  remainingMs = lastTimerMs
  endTime = performance.now() + remainingMs
  running = true
  render()
  tick()
}

function stop () {
  if (!running) return
  running = false
  cancelAnimationFrame(rafId)
}

function resume () {
  if (running || remainingMs <= 0) return
  endTime = performance.now() + remainingMs
  running = true
  tick()
}

function reset () {
  stop()
  remainingMs = lastTimerMs
  render()
}

BUTTON_START.addEventListener('click', () => {
  disableInput()
  start()
  APP_INFO.appNameParts.splice(1, 0, 'Timer Running')
  updateAppName()

  BUTTON_START.hidden = true

  BUTTON_STOP.hidden = false
  BUTTON_RESUME.hidden = true
  BUTTON_GROUP.hidden = false

  BUTTON_RESET.disabled = true
  HELP_TEXT.classList.toggle('hide')
  setTimeout(() => {
    HELP_TEXT.hidden = true
    HELP_TEXT.classList.toggle('hide')
    BUTTON_RESET.disabled = false
  }, HELP_TEXT_ANIM_MS)
})

BUTTON_STOP.addEventListener('click', () => {
  stop()
  APP_INFO.appNameParts.splice(
    APP_INFO.appNameParts.indexOf('Timer Running'),
    1,
    'Timer Paused'
  )
  updateAppName()

  BUTTON_STOP.hidden = true
  BUTTON_RESUME.hidden = false
})

BUTTON_RESUME.addEventListener('click', () => {
  resume()
  APP_INFO.appNameParts.splice(
    APP_INFO.appNameParts.indexOf('Timer Paused'),
    1,
    'Timer Running'
  )
  updateAppName()

  BUTTON_RESUME.hidden = true
  BUTTON_STOP.hidden = false
})

BUTTON_RESET.addEventListener('click', () => {
  reset()
  afterResetStuff()
  enableInput()
})

// -----------------------------------------------------------------------------
// Input Handling

const timerFields = [
  { pageElement: TIMER_HOURS, maxValue: 99, canAdvanceToNextField: true },
  { pageElement: TIMER_MINUTES, maxValue: 59, canAdvanceToNextField: true },
  { pageElement: TIMER_SECONDS, maxValue: 59, canAdvanceToNextField: false }
]

const state = new WeakMap()

timerFields.forEach((timerField, index) => {
  const { pageElement } = timerField

  pageElement.value = '00'
  state.set(pageElement, { digits: '', justHitMaxValue: false })

  // Focusing sets counted digits back to 0
  pageElement.addEventListener('focus', () => {
    state.set(pageElement, { digits: '', justHitMaxValue: false })
    checkStartButtonEligibility()
  })

  // Input navigation
  pageElement.addEventListener('keydown', e => {
    switch (e.key) {
      case 'Backspace':
        e.preventDefault()
        pageElement.value = '00'
        state.set(pageElement, { digits: '', justHitMaxValue: false })
        break
      case 'ArrowLeft':
        e.preventDefault()
        if (timerFields[index - 1]) timerFields[index - 1].pageElement.focus()
        break
      case 'ArrowRight':
      case 'Enter':
        e.preventDefault()
        if (timerFields[index + 1]) timerFields[index + 1].pageElement.focus()
        break
    }
    checkStartButtonEligibility()
  })

  pageElement.addEventListener('beforeinput', e => {
    if (e.inputType !== 'insertText') return
    e.preventDefault()
    if (!e.data || !/^\d$/.test(e.data)) return

    const timerFieldState = state.get(pageElement)
    let digits = timerFieldState.digits
    const justHitMaxValue = timerFieldState.justHitMaxValue

    // Special Seconds behavior: reset if just maxed
    if (!timerField.canAdvanceToNextField && justHitMaxValue) {
      digits = '' // start fresh
      timerFieldState.justHitMaxValue = false
    }

    digits += e.data

    // always last 2 digits
    if (digits.length > 2) digits = digits.slice(-2)

    let digitsValue = Number(digits)

    // snap to max if exceeded
    if (digitsValue > timerField.maxValue) {
      digitsValue = timerField.maxValue
      digits = String(digitsValue)
      if (!timerField.canAdvanceToNextField) {
        timerFieldState.justHitMaxValue = true
      }
    }

    pageElement.value = String(digitsValue).padStart(2, '0')
    timerFieldState.digits = digits
    checkStartButtonEligibility()

    // auto-advance only for Hours and Minutes
    if (
      digits.length === 2 &&
      timerField.canAdvanceToNextField &&
      timerFields[index + 1]
    ) {
      timerFields[index + 1].pageElement.focus()
    }
  })
})

document.addEventListener(
  'wheel',
  e => {
    let targetField = null
    const { activeElement } = document

    if (
      activeElement &&
      timerFields.some(f => f.pageElement === activeElement) &&
      !activeElement.disabled
    ) {
      // Focused input exists → it takes priority
      targetField = timerFields.find(f => f.pageElement === activeElement)
    } else if (
      e.target instanceof HTMLInputElement &&
      timerFields.some(f => f.pageElement === e.target) &&
      !e.target.disabled
    ) {
      // No focused input → hovered input takes the scroll
      targetField = timerFields.find(f => f.pageElement === e.target)
    } else {
      // Nothing relevant → do nothing
      return
    }

    e.preventDefault()

    const { pageElement, maxValue, canAdvanceToNextField } = targetField
    const fieldState = state.get(pageElement)
    let digitsValue = Number(pageElement.value)

    if (e.deltaY < 0) {
      if (digitsValue < maxValue) digitsValue += 1
      else if (!canAdvanceToNextField) fieldState.justHitMaxValue = true
    } else if (e.deltaY > 0 && digitsValue > 0) {
      digitsValue -= 1
    } else {
      return // at min/max
    }

    pageElement.value = String(digitsValue).padStart(2, '0')
    checkStartButtonEligibility()
  },
  { passive: false }
)

// -----------------------------------------------------------------------------

render()
