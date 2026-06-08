'use client'

import React, { useEffect, useRef, useState } from 'react'

type Note = {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

const STORAGE_KEY = 'physics_app_notes_v1'

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9)
}

export default function NotesPanel() {
  const [open, setOpen] = useState(false)
  const [notes, setNotes] = useState<Note[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const autosaveTimer = useRef<number | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setNotes(JSON.parse(raw))
    } catch (e) {
      console.error('Failed to load notes', e)
    }
  }, [])

  useEffect(() => {
    if (activeId) {
      const n = notes.find((x) => x.id === activeId) || null
      setTitle(n?.title || '')
      setContent(n?.content || '')
    } else {
      setTitle('')
      setContent('')
    }
  }, [activeId, notes])

  useEffect(() => {
    if (autosaveTimer.current) window.clearTimeout(autosaveTimer.current)
    autosaveTimer.current = window.setTimeout(() => handleSave(true), 1000)
    return () => {
      if (autosaveTimer.current) window.clearTimeout(autosaveTimer.current)
    }
  }, [title, content])

  function persist(list: Note[]) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
    } catch (e) {
      console.error('Failed to save notes', e)
    }
  }

  function createNew() {
    const n: Note = {
      id: uid(),
      title: 'Untitled',
      content: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    const next = [n, ...notes]
    setNotes(next)
    setActiveId(n.id)
    persist(next)
  }

  function handleSave(fromAutosave = false) {
    if (!activeId) return
    const updated = notes.map((n) => (n.id === activeId ? { ...n, title: title || 'Untitled', content, updatedAt: new Date().toISOString() } : n))
    setNotes(updated)
    persist(updated)
    if (!fromAutosave) {
      // brief flash or feedback could be added
    }
  }

  function removeNote(id: string) {
    const next = notes.filter((n) => n.id !== id)
    setNotes(next)
    persist(next)
    if (activeId === id) setActiveId(next[0]?.id ?? null)
  }

  function exportNotes() {
    const blob = new Blob([JSON.stringify(notes, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'notes.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function importNotes(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as Note[]
        setNotes(parsed)
        persist(parsed)
        setActiveId(parsed[0]?.id ?? null)
      } catch (err) {
        alert('Failed to import notes: invalid file')
      }
    }
    reader.readAsText(f)
  }

  return (
    <>
      <button
        onClick={() => setOpen((s) => !s)}
        title="Notes"
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-xl transition-all"
      >
        📝
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[28rem] max-h-[70vh] rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col">
          <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Notes</h3>
              <span className="text-xs text-slate-500">{notes.length} saved</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={createNew} className="text-sm px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">New</button>
              <button onClick={exportNotes} className="text-sm px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">Export</button>
              <label className="text-sm px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white cursor-pointer">
                Import
                <input onChange={importNotes} accept="application/json" type="file" className="hidden" />
              </label>
              <button onClick={() => setOpen(false)} className="text-sm px-3 py-1 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300">Close</button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            <div className="w-40 border-r border-slate-100 dark:border-slate-800 overflow-y-auto p-3 bg-slate-50 dark:bg-slate-900">
              {notes.length === 0 && <p className="text-xs text-slate-500">No notes yet — create one.</p>}
              <ul className="space-y-2">
                {notes.map((n) => (
                  <li key={n.id}>
                    <button
                      onClick={() => setActiveId(n.id)}
                      className={`w-full text-left text-sm p-2 rounded-md ${activeId === n.id ? 'bg-slate-200 dark:bg-slate-800' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                    >
                      <div className="font-medium text-slate-900 dark:text-white truncate">{n.title || 'Untitled'}</div>
                      <div className="text-xs text-slate-500">{new Date(n.updatedAt).toLocaleString()}</div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 p-3 overflow-auto">
              {activeId ? (
                <div className="flex flex-col h-full">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="mb-2 rounded-md border border-slate-200 px-3 py-2 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                  />
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your note here..."
                    className="flex-1 resize-none rounded-md border border-slate-200 p-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                  />
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleSave(false)} className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-sm">Save</button>
                      <button onClick={() => activeId && removeNote(activeId)} className="px-3 py-1 rounded-md text-sm text-rose-600">Delete</button>
                    </div>
                    <div className="text-xs text-slate-500">Autosaves 1s after edits</div>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-slate-500">Select or create a note to begin editing.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
