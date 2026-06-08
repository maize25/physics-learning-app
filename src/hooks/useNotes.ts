'use client'
import { useState, useEffect } from 'react'

export interface Note {
  id: string
  text: string
  page: string
  color: string
  createdAt: string
}

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('physics-notes')
    if (saved) setNotes(JSON.parse(saved))
  }, [])

  const saveNote = (text: string, page: string, color: string) => {
    const note: Note = {
      id: Date.now().toString(),
      text,
      page,
      color,
      createdAt: new Date().toLocaleDateString(),
    }
    const updated = [...notes, note]
    setNotes(updated)
    localStorage.setItem('physics-notes', JSON.stringify(updated))
  }

  const deleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id)
    setNotes(updated)
    localStorage.setItem('physics-notes', JSON.stringify(updated))
  }

  return { notes, saveNote, deleteNote }
}
