export function calcReadTime(value: string | number): string {
  if (typeof value === 'number') {
    const minutes = Math.max(5, Math.ceil(value))
    return `${minutes} min read`
  }

  const words = value.trim().split(/\s+/).length
  const minutes = Math.max(5, Math.ceil(words / 200))
  return `${minutes} min read`
}
