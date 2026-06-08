'use client'

import { useState } from 'react'
import { useKeyboardShortcut } from '../hooks/useKeyboardShortcut'
import GlobalSearch from './search/GlobalSearch'
import NotesPanel from './lesson/NotesPanel'
import FocusModeButton from './lesson/FocusModeButton'
import Navbar from '../../components/Navbar'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)
  useKeyboardShortcut('/', () => setSearchOpen(true))
  useKeyboardShortcut('k', () => setSearchOpen(true), 'ctrl')

  return (
    <>
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      {children}
      <NotesPanel />
      <div className="fixed bottom-6 left-6 z-40">
        <FocusModeButton />
      </div>
      {searchOpen && <GlobalSearch onClose={() => setSearchOpen(false)} />}
    </>
  )
}
