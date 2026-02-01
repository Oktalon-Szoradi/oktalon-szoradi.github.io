/* eslint-env browser */

import { APP_INFO, updateAppName, formatTime } from './util.js'
import { playTouchSound } from './sfx.js'

const DISPLAY_HHMMSS = document.querySelector('#stopwatch .hhmmss')
const DISPLAY_CENTISECONDS = document.querySelector('#stopwatch .centiseconds')
const DISPLAY_DAY_COUNTER = document.querySelector(
  '.stopwatch-panel .stopwatch-subtitle'
)
const DISPLAY_LAP_STOPWATCH = document.getElementById('stopwatch-lap-stopwatch')
const DISPLAY_LAP_HHMMSS = document.querySelector(
  '#stopwatch-lap-stopwatch .hhmmss'
)
const DISPLAY_LAP_CENTISECONDS = document.querySelector(
  '#stopwatch-lap-stopwatch .centiseconds'
)
const HELP_AREA = document.getElementById('stopwatch-help')
const HELP_TEXT = document.getElementById('stopwatch-help-text')
const BUTTON_START = document.getElementById('stopwatch-start')
const BUTTON_AREA_STARTED = document.getElementById('stopwatch-buttons-started')
const BUTTON_STOP = document.getElementById('stopwatch-stop')
const BUTTON_LAP = document.getElementById('stopwatch-lap')
const BUTTON_AREA_STOPPED = document.getElementById('stopwatch-buttons-stopped')
const BUTTON_RESUME = document.getElementById('stopwatch-resume')
const BUTTON_RESET = document.getElementById('stopwatch-reset')
// const BUTTON_DEV = document.getElementById('stopwatch-dev')
const LAP_LIST = document.getElementById('stopwatch-laps')

let startTime = null
let running = false
let requestAnimationFrameID = null
let elapsedBeforePause = 0
let laps = []

function textWithWbr (element, text, delimiter = ':') {
  element.replaceChildren()

  text.split(delimiter).forEach((part, i, arr) => {
    element.appendChild(document.createTextNode(part))
    if (i < arr.length - 1) {
      element.appendChild(document.createTextNode(delimiter))
      element.appendChild(document.createElement('wbr'))
    }
  })
}

function update (now) {
  if (!running) return

  const elapsed = elapsedBeforePause + (now - startTime)
  const theTime = formatTime(elapsed)
  if (DISPLAY_HHMMSS.innerText !== theTime.hhmmss) {
    DISPLAY_HHMMSS.innerText = theTime.hhmmss
  }
  DISPLAY_CENTISECONDS.innerText = theTime.cs
  const days = Math.floor(theTime.hours / 24)
  const hours = theTime.hours % 24
  const newDisplayDayCounterInnerText =
    hours === 0
      ? `${days} day${days !== 1 ? 's' : ''}`
      : `${days} day${days !== 1 ? 's' : ''}, ${hours} hour${
          hours !== 1 ? 's' : ''
        }`
  if (days >= 1) {
    if (DISPLAY_DAY_COUNTER.hidden) {
      DISPLAY_DAY_COUNTER.hidden = false
    }
    if (DISPLAY_DAY_COUNTER.innerText !== newDisplayDayCounterInnerText) {
      DISPLAY_DAY_COUNTER.innerText = newDisplayDayCounterInnerText
    }
  }
  if (!DISPLAY_LAP_STOPWATCH.hidden) {
    const lapNumber = laps.length + 1
    const lapTime =
      lapNumber === 1 ? elapsed : elapsed - laps[laps.length - 1].total
    const lapTimeFormatted = formatTime(lapTime)
    if (
      lapTimeFormatted.hours >= 0 ||
      lapTimeFormatted.minutes >= 0 ||
      lapTimeFormatted.seconds >= 0
    ) {
      if (DISPLAY_LAP_HHMMSS.innerText !== lapTimeFormatted.hhmmss) {
        DISPLAY_LAP_HHMMSS.innerText = lapTimeFormatted.hhmmss
      }
      DISPLAY_LAP_CENTISECONDS.innerText = lapTimeFormatted.cs
    } else {
      if (DISPLAY_LAP_HHMMSS.innerText !== lapTimeFormatted.hhmmss) {
        DISPLAY_LAP_HHMMSS.innerText = '00:00:00'
      }
      DISPLAY_LAP_CENTISECONDS.innerText = '00'
    }
  }

  const hhLength = theTime.hh.length
  const hhBackdrop = '8'.repeat(hhLength)
  const backdrop = `${hhBackdrop}:88:88`

  DISPLAY_HHMMSS.style.setProperty(
    '--stopwatch-digit-backdrop',
    `"${backdrop}"`
  )

  requestAnimationFrameID = requestAnimationFrame(update)
}

function actionStart () {
  if (running) return

  running = true
  startTime = performance.now()
  requestAnimationFrameID = requestAnimationFrame(update)

  APP_INFO.appNameParts.splice(2, 0, 'Stopwatch Running')
  updateAppName()

  BUTTON_START.hidden = true
  BUTTON_AREA_STARTED.hidden = false

  HELP_AREA.hidden = false
  HELP_TEXT.innerText = 'After you click Lap, your lap times will be listed.'
}

function actionStop () {
  if (!running) return

  running = false
  cancelAnimationFrame(requestAnimationFrameID)
  elapsedBeforePause += performance.now() - startTime

  APP_INFO.appNameParts.splice(
    APP_INFO.appNameParts.indexOf('Stopwatch Running'),
    1,
    'Stopwatch Paused'
  )
  updateAppName()

  BUTTON_AREA_STARTED.hidden = true
  BUTTON_AREA_STOPPED.hidden = false
}

function actionLap () {
  if (!running) return

  HELP_AREA.hidden = true
  DISPLAY_LAP_STOPWATCH.hidden = false

  const now = performance.now()
  const totalElapsed = elapsedBeforePause + (now - startTime)
  const lapNumber = laps.length + 1
  const lapTime =
    lapNumber === 1 ? totalElapsed : totalElapsed - laps[laps.length - 1].total

  const lap = {
    number: lapNumber,
    total: totalElapsed,
    lap: lapTime
  }
  laps.push(lap)

  const lapElement = document.createElement('p')
  lapElement.classList.add('stopwatch-lap')

  const lapElementNumber = document.createElement('span')
  lapElementNumber.classList.add('stopwatch-lap-number')

  const lapElementTimeTotal = document.createElement('span')
  lapElementTimeTotal.classList.add('stopwatch-lap-time-total')

  const lapElementTimeLapHHMMSS = document.createElement('span')
  lapElementTimeLapHHMMSS.classList.add('stopwatch-lap-time-lap-hhmmss')

  const lapElementTimeLapCentiseconds = document.createElement('span')
  lapElementTimeLapCentiseconds.classList.add(
    'stopwatch-lap-time-lap-centiseconds'
  )

  const formattedTimeLapTotal = formatTime(lap.total)
  const formattedTimeLapLap = formatTime(lap.lap)

  lapElementNumber.innerText = String(lap.number).padStart(2, '0')
  lapElementTimeTotal.innerText = formattedTimeLapTotal.hhmmsscs
  // lapElementTimeLapHHMMSS.innerText = formattedTimeLapLap.hhmmss
  textWithWbr(lapElementTimeLapHHMMSS, formattedTimeLapLap.hhmmss)
  lapElementTimeLapCentiseconds.innerText = `.${formattedTimeLapLap.cs}`

  lapElement.appendChild(lapElementNumber)
  lapElement.appendChild(lapElementTimeTotal)
  lapElementTimeLapHHMMSS.appendChild(lapElementTimeLapCentiseconds)
  lapElement.appendChild(lapElementTimeLapHHMMSS)

  LAP_LIST.appendChild(lapElement)
}

function actionResume () {
  if (running) return

  running = true
  startTime = performance.now()
  requestAnimationFrameID = requestAnimationFrame(update)

  APP_INFO.appNameParts.splice(
    APP_INFO.appNameParts.indexOf('Stopwatch Paused'),
    1,
    'Stopwatch Running'
  )
  updateAppName()

  BUTTON_AREA_STOPPED.hidden = true
  BUTTON_AREA_STARTED.hidden = false
}

function actionReset () {
  running = false
  cancelAnimationFrame(requestAnimationFrameID)
  startTime = null
  elapsedBeforePause = 0
  laps = []

  APP_INFO.appNameParts = APP_INFO.appNameParts.filter(
    part => part !== 'Stopwatch Running' && part !== 'Stopwatch Paused'
  )
  updateAppName()

  DISPLAY_HHMMSS.innerText = '00:00:00'
  DISPLAY_HHMMSS.style.setProperty('--stopwatch-digit-backdrop', '"88:88:88"')
  DISPLAY_CENTISECONDS.innerText = '00'
  DISPLAY_DAY_COUNTER.hidden = true
  DISPLAY_LAP_STOPWATCH.hidden = true
  DISPLAY_LAP_HHMMSS.innerText = '00:00:00'
  DISPLAY_LAP_CENTISECONDS.innerText = '00'
  LAP_LIST.innerHTML = ''

  BUTTON_AREA_STOPPED.hidden = true
  BUTTON_START.hidden = false

  HELP_AREA.hidden = false
  HELP_TEXT.innerText = 'After you click Start, the Stopwatch will start.'
}

function bindButton (button, action) {
  button.addEventListener('pointerdown', e => {
    e.preventDefault()
    playTouchSound()
    action()
  })

  button.addEventListener('click', e => {
    e.preventDefault()
  })
}

bindButton(BUTTON_START, actionStart)
bindButton(BUTTON_STOP, actionStop)
bindButton(BUTTON_LAP, actionLap)
bindButton(BUTTON_RESUME, actionResume)
bindButton(BUTTON_RESET, actionReset)
// bindButton(BUTTON_DEV, () => {
//   if (!running) return

//   elapsedBeforePause += 50 * 60 * 60 * 1000

//   update(performance.now())
// })
