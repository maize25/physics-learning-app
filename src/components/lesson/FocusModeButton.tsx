'use client'

import { useFocusMode } from '../../hooks/useFocusMode'

export default function FocusModeButton() {
  const { focusMode, toggle } = useFocusMode()

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all text-sm font-medium
        ${focusMode
          ? 'bg-purple-600 border-purple-500 text-white'
          : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white'
        }`}
    >
      {focusMode ? '🎯 Exit Focus' : '🎯 Focus Mode'}
    </button>
  )
}
