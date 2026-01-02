import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useAutoHide(timeout = 2000) {
  const isVisible = ref(true)
  const isHovered = ref(false)
  let timer: ReturnType<typeof setTimeout> | null = null

  function show() {
    if (!isHovered.value) {
      isVisible.value = true
    }
    resetTimer()
  }

  function hide() {
    if (!isHovered.value) {
      isVisible.value = false
    }
    clearTimer()
  }

  function resetTimer() {
    clearTimer()
    timer = setTimeout(() => {
      if (!isHovered.value) isVisible.value = false
    }, timeout)
  }

  function clearTimer() {
    if (timer) clearTimeout(timer)
  }

  onMounted(() => {
    document.addEventListener('mousemove', show)
    document.addEventListener('mouseenter', show)
    document.addEventListener('mouseleave', hide)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', show)
    document.removeEventListener('mouseenter', show)
    document.removeEventListener('mouseleave', hide)
    clearTimer()
  })

  // Hover events for the element itself
  const onMouseEnter = () => {
    isHovered.value = true
    isVisible.value = true
    clearTimer()
  }

  const onMouseLeave = () => {
    isHovered.value = false
    resetTimer()
  }

  return { isVisible, onMouseEnter, onMouseLeave }
}
