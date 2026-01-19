const EL_BACKGROUND = document.getElementById('content-clock')
const EL_THE_TIME = document.getElementById('clock-time-hhmm')
const EL_SECONDS = document.getElementById('clock-time-ss')
const EL_THE_DATE = document.getElementById('clock-date')
const EL_PROGRESS_TEXT = document.getElementById('clock-progress')
const EL_TIME_BAR = document.querySelector('#time-bar')

const EL_SETTINGS_AREA = document.getElementById('clock-settings-popup')
export const EL_SETTINGS_WINDOW = document.querySelector(
  '#clock-settings-popup .popup-window'
)
export const EL_SETTINGS_WINDOW_TITLE = document.querySelector(
  '#clock-settings-popup .popup-window .popup-title'
)
export const EL_SETTINGS_WINDOW_CONTENT = document.querySelector(
  '#clock-settings-popup .popup-window .popup-content'
)
export const EL_SETTINGS_WINDOW_BUTTONS = document.querySelector(
  '#clock-settings-popup .popup-window .popup-buttons'
)
const BUTTON_SETTINGS = document.getElementById('clock-settings')
const BUTTON_SETTINGS_OK = document.getElementById('clock-settings-button-ok')
const BUTTON_SETTINGS_CANCEL = document.getElementById(
  'clock-settings-button-cancel'
)

const ERROR_TEXT = document.querySelector('#clock-settings-popup .error-text')
const SETTINGS_INPUT_TIME_ZONE = document.getElementById(
  'clock-settings-timezone'
)
const SETTINGS_DATALIST_TIME_ZONE_OPTIONS = document.getElementById(
  'clock-settings-timezone-options'
)
const TIME_ZONES = Intl.supportedValuesOf('timeZone').sort((a, b) => {
  const regex = /^Etc\/GMT([+-]\d+)$/

  const matchA = a.match(regex)
  const matchB = b.match(regex)

  if (matchA && matchB) {
    return parseInt(matchA[1], 10) - parseInt(matchB[1], 10)
  }

  if (matchA) return 1
  if (matchB) return -1

  return a.localeCompare(b)
})

for (const timeZone of TIME_ZONES) {
  const option = document.createElement('option')
  option.innerText = timeZone
  SETTINGS_DATALIST_TIME_ZONE_OPTIONS.appendChild(option)
}

let setTimeZone = 'UTC'
SETTINGS_INPUT_TIME_ZONE.value = setTimeZone
BUTTON_SETTINGS.innerText = `Time Zone: ${setTimeZone}`

function round (number, decimalPlaces, round = false) {
  const dividend = !round
    ? Math.floor(number * Math.pow(10, decimalPlaces))
    : Math.round(number * Math.pow(10, decimalPlaces))
  return dividend / Math.pow(10, decimalPlaces)
}

function getDayProgress (timeStr) {
  const [hours, minutes, seconds] = timeStr.split(':').map(Number)
  const totalSeconds = hours * 3600 + minutes * 60 + seconds
  const secondsInDay = 24 * 3600
  return totalSeconds / secondsInDay
}

function updateBackground (timeStr) {
  const hourStr = timeStr.split(':')[0]
  const hour = Number(hourStr)
  EL_BACKGROUND.classList = `tab-content hour-${hour}`
  // // EL_MAIN.classList = ''

  // if (hour > 8 && hour < 13) {
  //   // EL_MAIN.classList = 'day'
  // }

  // if (hour >= 22 || hour <= 5) {
  //   // EL_MAIN.classList = 'trans'
  //   EL_BACKGROUND.classList = `tab-content hour-${hour} trans-bg`
  // }

  // if (hour > 22 || hour < 5) {
  //   // EL_MAIN.classList = 'sleep'
  //   EL_BACKGROUND.classList = `tab-content hour-${hour} darken`
  // }
}

function updateProgress (timeStr) {
  const theTimeAsProgress = getDayProgress(timeStr)
  const theTimeAsPercent = round(theTimeAsProgress * 100, 1)
  EL_PROGRESS_TEXT.innerText = `You are ${theTimeAsPercent}% through the day`
  EL_TIME_BAR.setAttribute('value', theTimeAsProgress)
}

function updateDateTime (timeStr, dateStr) {
  const [hours, minutes, seconds] = timeStr.split(':')
  EL_THE_TIME.innerText = `${hours}:${minutes}`
  // const secondsWithoutLeadingZero = Number(seconds)
  // EL_SECONDS.innerText = `and ${secondsWithoutLeadingZero} seconds | ${TIME_ZONE}`
  EL_SECONDS.innerText = `:${seconds}`
  EL_THE_DATE.innerHTML = `&numsp;${dateStr}`
}

function getTimeStr (dateObject) {
  const options = {
    timeZone: setTimeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
  return dateObject.toLocaleTimeString('de-AT', options)
}

function getDateStr (dateObject) {
  // const optionsDate = {
  //   timeZone: setTimeZone,
  //   year: 'numeric',
  //   month: 'numeric',
  //   day: 'numeric'
  // }
  const optionsWeekDay = {
    timeZone: setTimeZone,
    weekday: 'long'
  }
  const optionsMonth = {
    timeZone: setTimeZone,
    month: 'long'
  }
  // const dateISO = dateObject.toLocaleDateString('se', optionsDate)
  const dateISO = `${dateObject.getFullYear()}-${String(
    dateObject.getMonth() + 1
  ).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`
  const weekday = dateObject.toLocaleDateString('en-US', optionsWeekDay)
  const month = dateObject.toLocaleDateString('en-US', optionsMonth)

  // return `${dateISO} | ${weekday}, ${month}`
  return `${dateISO}<br>&numsp;&numsp;&numsp;&numsp;&numsp;&numsp;${month}, ${weekday}`
}

function main () {
  const now = new Date()
  const time = getTimeStr(now)
  const date = getDateStr(now)

  updateDateTime(time, date)
  updateProgress(time)
  updateBackground(time)
}

main()
setInterval(() => {
  main()
}, 1000)

function closePopupSettings () {
  EL_SETTINGS_AREA.classList.toggle('close')
  EL_SETTINGS_WINDOW.classList.toggle('close')
  setTimeout(() => {
    EL_SETTINGS_AREA.hidden = true
    EL_SETTINGS_AREA.classList.toggle('close')
    EL_SETTINGS_WINDOW.classList.toggle('close')
  }, 250)
}

function submitSettings () {
  ERROR_TEXT.hidden = true
  const currentTimeZone = SETTINGS_INPUT_TIME_ZONE.value
  if (!TIME_ZONES.includes(currentTimeZone)) {
    ERROR_TEXT.hidden = false
    return
  }

  setTimeZone = currentTimeZone
  BUTTON_SETTINGS.innerText = `Time Zone: ${setTimeZone}`

  closePopupSettings()
}

BUTTON_SETTINGS.addEventListener('click', () => {
  EL_SETTINGS_AREA.hidden = false
  SETTINGS_INPUT_TIME_ZONE.focus()
})

BUTTON_SETTINGS_CANCEL.addEventListener('click', () => {
  closePopupSettings()
})

BUTTON_SETTINGS_OK.addEventListener('click', () => {
  submitSettings()
})

SETTINGS_INPUT_TIME_ZONE.addEventListener('focus', () => {
  SETTINGS_INPUT_TIME_ZONE.select()
})

SETTINGS_INPUT_TIME_ZONE.addEventListener('keydown', e => {
  switch (e.key) {
    case 'Enter':
      submitSettings()
      break
  }
})
