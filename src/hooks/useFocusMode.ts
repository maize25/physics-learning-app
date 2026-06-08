'use client'
import { useState, useEffect } from 'react'

export function useFocusMode() {
  const [focusMode, setFocusMode] = useState(false)

  useEffect(() => {
    if (focusMode) {
      document.body.classList.add('focus-mode')
    } else {
      document.body.classList.remove('focus-mode')
    }
  }, [focusMode])

  const toggle = () => setFocusMode((prev) => !prev)
  return { focusMode, toggle }
}
