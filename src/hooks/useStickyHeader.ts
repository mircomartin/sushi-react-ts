import { useEffect, useRef } from 'react'
import { scrollPosition } from '../helpers/scrollPosition'

export const useStickyHeader = () => {
  const header = useRef(null)
  
  useEffect(() => {
    if (header.current !== null) scrollPosition({ header: header.current })
  }, [header])
  
  return {
    header
  }
}
