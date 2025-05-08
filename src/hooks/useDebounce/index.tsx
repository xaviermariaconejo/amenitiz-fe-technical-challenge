import { useState, useEffect } from 'react'

const DELAY_DEFAULT = 300

export function useDebounce<T>(value: T, delay = DELAY_DEFAULT): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timeoutId)
  }, [value, delay])

  return debounced
}
