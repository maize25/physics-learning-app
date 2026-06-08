'use client'

import { useState } from 'react'

interface FallbackImageProps {
  src: string
  alt: string
  className?: string
}

export default function FallbackImage({ src, alt, className }: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        setCurrentSrc('https://source.unsplash.com/400x300/?physics,science')
      }}
    />
  )
}
