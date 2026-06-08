'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  const crumbs = segments.map((segment, index) => {
    const route = '/' + segments.slice(0, index + 1).join('/')
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    return { label, route }
  })

  if (crumbs.length === 0) return null

  return (
    <nav className="flex items-center gap-2 text-sm px-4 py-2 text-gray-400">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb.route} className="flex items-center gap-2">
          <span className="text-gray-600">›</span>
          {i === crumbs.length - 1 ? (
            <span className="text-white">{crumb.label}</span>
          ) : (
            <Link href={crumb.route} className="hover:text-white transition-colors">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}
