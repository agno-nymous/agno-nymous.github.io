import { useEffect, useState } from 'react'

export function useHashRoute() {
  const [route, setRouteState] = useState<string>(() =>
    typeof window !== 'undefined' ? (window.location.hash.replace('#', '') || '/') : '/'
  )

  useEffect(() => {
    const onHash = () => setRouteState(window.location.hash.replace('#', '') || '/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const setRoute = (r: string) => {
    setRouteState(r)
    if (typeof window !== 'undefined') window.location.hash = r === '/' ? '' : r
  }

  return { route, setRoute }
}

