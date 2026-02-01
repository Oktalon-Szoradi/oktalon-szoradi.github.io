/* eslint-env browser */

const CLASS_NAME_TAB_BAR = 'tab-bar'
const CLASS_NAME_TAB = 'tab'
const CLASS_NAME_TAB_ACTIVE = 'tab-active'
const CLASS_NAME_TAB_CONTENT = 'tab-content'
const ID_PREFIX_TAB = 'tab-'
const ID_PREFIX_CONTENT = 'content-'

const STORAGE_KEY_ACTIVE_TAB = 'clock.activeTab'

const tabs = document.querySelectorAll(`.${CLASS_NAME_TAB}`)
const tabContents = document.querySelectorAll(`.${CLASS_NAME_TAB_CONTENT}`)

/**
 * Activate a tab by intent name (e.g. "clock", "timer")
 */
function activateTabByIntent (intent) {
  const tab = document.getElementById(`${ID_PREFIX_TAB}${intent}`)
  const panel = document.getElementById(`${ID_PREFIX_CONTENT}${intent}`)

  if (!tab || !panel) return

  tabs.forEach(t => t.classList.remove(CLASS_NAME_TAB_ACTIVE))
  tabContents.forEach(c => (c.hidden = true))

  tab.classList.add(CLASS_NAME_TAB_ACTIVE)
  panel.hidden = false
}

/**
 * Restore last active tab on load
 */
document.addEventListener('DOMContentLoaded', () => {
  const savedIntent = localStorage.getItem(STORAGE_KEY_ACTIVE_TAB)

  if (savedIntent) {
    activateTabByIntent(savedIntent)
  }
})

document.addEventListener('click', e => {
  const tab = e.target.closest(`.${CLASS_NAME_TAB}`)
  if (!tab) return

  // Do nothing if tab has invalid ID
  if (!tab.id.startsWith(ID_PREFIX_TAB)) return

  // Do nothing when clicking on already active tab
  if (tab.classList.contains(CLASS_NAME_TAB_ACTIVE)) return

  const intent = tab.id.slice(ID_PREFIX_TAB.length)

  // Style clicked tab active
  tabs.forEach(t => t.classList.remove(CLASS_NAME_TAB_ACTIVE))
  tab.classList.add(CLASS_NAME_TAB_ACTIVE)

  // Hide other content and show the one meant for this tab
  tabContents.forEach(c => (c.hidden = true))
  const panel = document.getElementById(`${ID_PREFIX_CONTENT}${intent}`)
  if (panel) panel.hidden = false

  // Save active tab
  localStorage.setItem(STORAGE_KEY_ACTIVE_TAB, intent)
})

const tabBar = document.querySelector(`.${CLASS_NAME_TAB_BAR}`)
tabBar.addEventListener(
  'wheel',
  e => {
    // Only when horizontal scrolling is possible
    if (tabBar.scrollWidth <= tabBar.clientWidth) return

    e.preventDefault()
    tabBar.scrollLeft += e.deltaY
  },
  { passive: false }
)
