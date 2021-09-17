import { useEffect, useState } from 'react'

const useMediaQuery = (width: string): boolean => {
  const [mediaQuery, setMediaQuery] = useState<boolean>(false)

  useEffect(() => {
    const handleWindowResize = () => {
      const { matches } = window.matchMedia(width)
      setMediaQuery(matches)
    }

    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [width])

  return mediaQuery
}

export default useMediaQuery
