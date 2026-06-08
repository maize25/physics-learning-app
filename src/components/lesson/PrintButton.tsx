'use client'

export default function PrintButton({ title }: { title: string }) {
  const handlePrint = () => {
    const style = document.createElement('style')
    style.innerHTML = `
      @media print {
        nav, footer, button, .no-print { display: none !important; }
        body { background: white !important; color: black !important; }
      }
    `
    document.head.appendChild(style)
    window.print()
    document.head.removeChild(style)
  }

  return (
    <button
      onClick={handlePrint}
      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white rounded-xl text-sm font-medium transition-all"
    >
      🖨️ Print / Save as PDF
    </button>
  )
}
