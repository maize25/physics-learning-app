'use client'

export default function ShootingStarLoader({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      <div className="relative w-48 h-12 overflow-hidden">
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            animation: 'shootingStar 1.5s ease-in-out infinite',
          }}
        >
          <div className="relative flex items-center">
            <div
              className="h-px"
              style={{
                width: '60px',
                background: 'linear-gradient(to left, transparent, rgba(96,165,250,0.8))',
              }}
            />
            <div
              className="w-2 h-2 rounded-full bg-white"
              style={{
                boxShadow: '0 0 6px 2px rgba(147,197,253,0.8)',
              }}
            />
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm animate-pulse">{message}</p>
      <style>{`
        @keyframes shootingStar {
          0% { left: -80px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
