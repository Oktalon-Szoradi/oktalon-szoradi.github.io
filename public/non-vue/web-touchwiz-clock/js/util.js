export const APP_INFO = {
  APP_NAME: 'Clock',
  appNameParts: ['Clock']
}

export function updateAppName () {
  document.title = APP_INFO.appNameParts.join(' | ')
}

export function resetAppName () {
  APP_INFO.appNameParts = [APP_INFO.APP_NAME]
  updateAppName()
}

export function naturalJoin (arr) {
  if (!arr || arr.length === 0) return ''
  if (arr.length === 1) return arr[0]
  if (arr.length === 2) return `${arr[0]} and ${arr[1]}`

  // 3 or more items
  return `${arr.slice(0, -1).join(', ')}, and ${arr[arr.length - 1]}`
}

export function formatTime (ms) {
  const totalSeconds = ms / 1000

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)
  const centiseconds = Math.floor((ms % 1000) / 10)

  const hh = String(hours).padStart(2, '0')
  const mm = String(minutes).padStart(2, '0')
  const ss = String(seconds).padStart(2, '0')
  const cs = String(centiseconds).padStart(2, '0')

  return {
    totalSeconds,
    hours,
    minutes,
    seconds,
    centiseconds,
    hh,
    mm,
    ss,
    cs,
    sscs: `${ss}.${cs}`,
    mmss: `${mm}:${ss}`,
    hhmm: `${hh}:${mm}`,
    mmsscs: `${mm}:${ss}.${cs}`,
    hhmmss: `${hh}:${mm}:${ss}`,
    hhmmsscs: `${hh}:${mm}:${ss}.${cs}`
  }
}

export function endAnimation (element, action) {
  // const onAnimationEnd = e => {
  //   if (e.target === element) {
  //     action()
  //     element.removeEventListener('animationend', onAnimationEnd)
  //   }
  // }
  // element.addEventListener('animationend', onAnimationEnd)
  element.addEventListener(
    'animationend',
    e => {
      if (e.target === element) action()
    },
    { once: true }
  )
}
