/* eslint-env browser */

import { APP_INFO, updateAppName, formatTime } from './util.js'

const DISPLAY_HHMMSS = document.querySelector('#stopwatch .hhmmss')
const DISPLAY_CENTISECONDS = document.querySelector('#stopwatch .centiseconds')
const HELP_AREA = document.getElementById('stopwatch-help')
const HELP_TEXT = document.getElementById('stopwatch-help-text')
const BUTTON_START = document.getElementById('stopwatch-start')
const BUTTON_AREA_STARTED = document.getElementById('stopwatch-buttons-started')
const BUTTON_STOP = document.getElementById('stopwatch-stop')
const BUTTON_LAP = document.getElementById('stopwatch-lap')
const BUTTON_AREA_STOPPED = document.getElementById('stopwatch-buttons-stopped')
const BUTTON_RESUME = document.getElementById('stopwatch-resume')
const BUTTON_RESET = document.getElementById('stopwatch-reset')
const LAP_LIST = document.getElementById('stopwatch-laps')

let startTime = null
let running = false
let rafId = null
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
  DISPLAY_HHMMSS.innerText = theTime.hhmmss
  DISPLAY_CENTISECONDS.innerText = theTime.cs

  const hhLength = theTime.hh.length
  const hhBackdrop = '8'.repeat(hhLength)
  const backdrop = `${hhBackdrop}:88:88`

  DISPLAY_HHMMSS.style.setProperty(
    '--stopwatch-digit-backdrop',
    `"${backdrop}"`
  )

  rafId = requestAnimationFrame(update)
}

function actionStart () {
  if (running) return

  running = true
  startTime = performance.now()
  rafId = requestAnimationFrame(update)

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
  cancelAnimationFrame(rafId)
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
  rafId = requestAnimationFrame(update)

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
  cancelAnimationFrame(rafId)
  startTime = null
  elapsedBeforePause = 0
  laps = []

  APP_INFO.appNameParts = APP_INFO.appNameParts.filter(
    part => part !== 'Stopwatch Running' && part !== 'Stopwatch Paused'
  )
  updateAppName()

  DISPLAY_HHMMSS.innerText = '00:00:00'
  DISPLAY_CENTISECONDS.innerText = '00'
  LAP_LIST.innerHTML = ''

  BUTTON_AREA_STOPPED.hidden = true
  BUTTON_START.hidden = false

  HELP_AREA.hidden = false
  HELP_TEXT.innerText = 'After you click Start, the Stopwatch will start.'
}

BUTTON_START.addEventListener('mousedown', actionStart)
BUTTON_START.addEventListener('click', actionStart)

BUTTON_STOP.addEventListener('mousedown', actionStop)
BUTTON_STOP.addEventListener('click', actionStop)

BUTTON_LAP.addEventListener('mousedown', actionLap)
BUTTON_LAP.addEventListener('click', actionLap)

BUTTON_RESUME.addEventListener('mousedown', actionResume)
BUTTON_RESUME.addEventListener('click', actionResume)

BUTTON_RESET.addEventListener('mousedown', actionReset)
BUTTON_RESET.addEventListener('click', actionReset)
