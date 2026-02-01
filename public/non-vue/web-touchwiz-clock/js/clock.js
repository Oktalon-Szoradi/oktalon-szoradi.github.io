import { playTouchSound } from './sfx.js'
import { endAnimation } from './util.js'

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

const TAB_BAR = document.querySelector('.tab-bar')
const BUTTON_FULLSCREEN = document.getElementById('clock-fullscreen')
const BUTTON_FULLSCREEN_ICON = document.querySelector('#clock-fullscreen i')
const BOTTOM_PANNEL = document.querySelector('#content-clock .bottom-panel')

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
const SETTINGS_TIMEZONE_NAVIGATION_LOCATION = document.getElementById(
  'clock-settings-timezone-nav-loc'
)
const SETTINGS_TIMEZONE_LAYER1 = document.getElementById(
  'clock-settings-timezones-layer-1'
)
const SETTINGS_TIMEZONE_LAYER2 = document.getElementById(
  'clock-settings-timezones-layer-2'
)
const SETTINGS_TIMEZONE_LAYER3 = document.getElementById(
  'clock-settings-timezones-layer-3'
)

for (const timeZone of TIME_ZONES) {
  const option = document.createElement('option')
  option.innerText = timeZone
  SETTINGS_DATALIST_TIME_ZONE_OPTIONS.appendChild(option)
}

// let setTimeZone = 'UTC'
let setTimeZone = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone ?? 'UTC'
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
  const newHHMM = `${hours}:${minutes}`
  const newSS = `:${seconds}`
  const newDate = dateStr.dateISO
  if (EL_THE_TIME.innerText !== newHHMM) {
    EL_THE_TIME.innerText = `${hours}:${minutes}`
  }
  if (EL_SECONDS.innerText !== newSS) {
    EL_SECONDS.innerText = `:${seconds}`
  }
  if (EL_THE_DATE.dataset.value !== newDate) {
    EL_THE_DATE.innerHTML = `&numsp;${dateStr.html}`
    EL_THE_DATE.dataset.value = `${dateStr.dateISO}`
  }
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
  return {
    dateISO,
    month,
    weekday,
    html: `${dateISO}<br>&numsp;&numsp;&numsp;&numsp;&numsp;&numsp;${month}, ${weekday}`
  }
}

function main () {
  // if (EL_BACKGROUND.hidden) return

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
}, 100)

function closePopupSettings () {
  EL_SETTINGS_AREA.classList.toggle('close')
  EL_SETTINGS_WINDOW.classList.toggle('close')
  endAnimation(EL_SETTINGS_AREA, () => {
    EL_SETTINGS_AREA.hidden = true
    EL_SETTINGS_AREA.classList.toggle('close')
    EL_SETTINGS_WINDOW.classList.toggle('close')
  })
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
  SETTINGS_TIMEZONE_LAYER1.hidden = false
  SETTINGS_TIMEZONE_LAYER2.hidden = true
  SETTINGS_TIMEZONE_LAYER3.hidden = true

  SETTINGS_TIMEZONE_LAYER2.innerHTML = ''
  SETTINGS_TIMEZONE_LAYER3.innerHTML = ''

  SETTINGS_TIMEZONE_NAVIGATION_LOCATION.hidden = true
  SETTINGS_TIMEZONE_NAVIGATION_LOCATION.innerText = 'Earth'

  EL_SETTINGS_AREA.hidden = false
  // SETTINGS_INPUT_TIME_ZONE.focus()
})

BUTTON_SETTINGS_CANCEL.addEventListener('click', () => {
  SETTINGS_INPUT_TIME_ZONE.value = setTimeZone
  ERROR_TEXT.hidden = true
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
      playTouchSound()
      submitSettings()
      break
  }
})

BUTTON_FULLSCREEN.addEventListener('click', () => {
  TAB_BAR.hidden = !TAB_BAR.hidden
  BOTTOM_PANNEL.hidden = !BOTTOM_PANNEL.hidden

  BUTTON_FULLSCREEN_ICON.classList.toggle('icon-enter-fullscreen')
  BUTTON_FULLSCREEN_ICON.classList.toggle('icon-exit-fullscreen')
})

const timeZoneLayer1ZonesWithDuplicates = TIME_ZONES.map(t => t.split('/')[0])
const timeZoneLayer1ZonesWithoutDuplicates = [
  ...new Set(timeZoneLayer1ZonesWithDuplicates)
].sort()
const TIME_ZONE_LAYER_1_ZONES = []
timeZoneLayer1ZonesWithoutDuplicates.forEach(timeZone => {
  TIME_ZONE_LAYER_1_ZONES.push({
    name: timeZone,
    count: TIME_ZONES.filter(t => t.includes(`${timeZone}/`)).length
  })
})

/* Layer 1 */
// Africa, America, Antarctica, Arctic, Asia, Atlantic, Australia, Europe, Indian, Pacific, UTC, Etc
TIME_ZONE_LAYER_1_ZONES.forEach(layer1zoneObject => {
  const timeZoneLayer1Option = document.createElement('button')
  timeZoneLayer1Option.innerText = layer1zoneObject.name
  timeZoneLayer1Option.classList = 'submenu'
  if (layer1zoneObject.count <= 0) {
    timeZoneLayer1Option.classList.add('option')
  }
  timeZoneLayer1Option.type = 'button'
  SETTINGS_TIMEZONE_LAYER1.appendChild(timeZoneLayer1Option)
})

/* Layer 1 → Layer 2 */
;[...SETTINGS_TIMEZONE_LAYER1.children].forEach(layer2zone => {
  layer2zone.addEventListener('click', () => {
    const selectedArea = layer2zone.innerText

    const timeZonesInThisSection = TIME_ZONES.filter(t =>
      t.includes(`${selectedArea}/`)
    )
    if (timeZonesInThisSection.length <= 0) {
      SETTINGS_INPUT_TIME_ZONE.value = selectedArea
      submitSettings()
      return
    }

    SETTINGS_TIMEZONE_NAVIGATION_LOCATION.innerText = selectedArea
    SETTINGS_TIMEZONE_NAVIGATION_LOCATION.hidden = false

    const backButton = document.createElement('button')
    backButton.innerText = '← Back'
    backButton.classList = 'submenu back'
    backButton.type = 'button'
    backButton.addEventListener('click', () => {
      SETTINGS_TIMEZONE_LAYER1.hidden = false
      SETTINGS_TIMEZONE_LAYER2.hidden = true
      SETTINGS_TIMEZONE_LAYER3.hidden = true

      SETTINGS_TIMEZONE_LAYER2.innerHTML = ''
      SETTINGS_TIMEZONE_LAYER3.innerHTML = ''

      SETTINGS_TIMEZONE_NAVIGATION_LOCATION.hidden = true
      SETTINGS_TIMEZONE_NAVIGATION_LOCATION.innerText = 'Earth'
    })
    SETTINGS_TIMEZONE_LAYER2.appendChild(backButton)

    const timeZoneLayer3Options = []
    for (const timeZone of timeZonesInThisSection) {
      const timeZoneParts = timeZone.split('/')
      const timeZoneLayerOption = document.createElement('button')

      switch (timeZoneParts.length) {
        case 2:
          timeZoneLayerOption.innerText = timeZoneParts[1].replaceAll('_', ' ')
          timeZoneLayerOption.classList = 'submenu option'
          timeZoneLayerOption.type = 'button'
          timeZoneLayerOption.addEventListener('click', () => {
            SETTINGS_INPUT_TIME_ZONE.value = timeZone.replaceAll(' ', '_')
            submitSettings()
          })
          SETTINGS_TIMEZONE_LAYER2.appendChild(timeZoneLayerOption)
          break
        case 3:
          if (!timeZoneLayer3Options.find(tzl3 => tzl3 === timeZoneParts[1])) {
            timeZoneLayer3Options.push(timeZoneParts[1])
            timeZoneLayerOption.innerText = timeZoneParts[1].replaceAll(
              '_',
              ' '
            )
            timeZoneLayerOption.classList = 'submenu'
            timeZoneLayerOption.type = 'button'
            timeZoneLayerOption.addEventListener('click', () => {
              showTimeZoneLayer3(timeZone)
            })
            SETTINGS_TIMEZONE_LAYER2.appendChild(timeZoneLayerOption)
          }
          break
        default:
          timeZoneLayerOption.innerText = timeZone
          timeZoneLayerOption.classList = 'submenu option'
          timeZoneLayerOption.type = 'button'
          timeZoneLayerOption.addEventListener('click', () => {
            SETTINGS_INPUT_TIME_ZONE.value = timeZone.replaceAll(' ', '_')
            submitSettings()
          })
          SETTINGS_TIMEZONE_LAYER2.appendChild(timeZoneLayerOption)
          break
      }
    }

    SETTINGS_TIMEZONE_LAYER1.hidden = true
    SETTINGS_TIMEZONE_LAYER2.hidden = false
  })
})

/* Layer 3 */
function showTimeZoneLayer3 (timeZone) {
  const timeZoneParts = timeZone.split('/')

  SETTINGS_TIMEZONE_LAYER2.hidden = true
  SETTINGS_TIMEZONE_LAYER3.hidden = false
  // America ⟩ Argentina
  // America ⟩ Indiana
  // America ⟩ Kentucky
  // America ⟩ North Dakota
  SETTINGS_TIMEZONE_NAVIGATION_LOCATION.innerText = `${timeZoneParts[0]} ⟩ ${timeZoneParts[1]}`

  const backButton = document.createElement('button')
  backButton.innerText = '← Back'
  backButton.classList = 'submenu back'
  backButton.type = 'button'
  backButton.addEventListener('click', () => {
    SETTINGS_TIMEZONE_LAYER1.hidden = true
    SETTINGS_TIMEZONE_LAYER2.hidden = false
    SETTINGS_TIMEZONE_LAYER3.hidden = true

    SETTINGS_TIMEZONE_LAYER3.innerHTML = ''

    SETTINGS_TIMEZONE_NAVIGATION_LOCATION.innerText = timeZoneParts[0]
  })
  SETTINGS_TIMEZONE_LAYER3.appendChild(backButton)

  const timeZonesInThisSubSection = TIME_ZONES.filter(t =>
    t.includes(`${timeZoneParts.slice(0, 2).join('/')}/`)
  )

  timeZonesInThisSubSection.forEach(t3 => {
    const timeZoneLayer3Option = document.createElement('button')
    timeZoneLayer3Option.innerText = t3.split('/')[2].replaceAll('_', ' ')
    timeZoneLayer3Option.classList = 'submenu option'
    timeZoneLayer3Option.type = 'button'
    timeZoneLayer3Option.addEventListener('click', () => {
      SETTINGS_INPUT_TIME_ZONE.value = t3.replaceAll(' ', '_')
      submitSettings()
    })
    SETTINGS_TIMEZONE_LAYER3.appendChild(timeZoneLayer3Option)
  })
}
