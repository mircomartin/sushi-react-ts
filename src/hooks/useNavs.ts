import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getNavFromApi } from '../services/nav-header'
import { type WP_NavMenu } from '../interfaces/types'
import { type INav } from '../interfaces/interfaces'
import { scrollPosition } from '../helpers/scrollPosition'

export const useNavs = () => {
  const [nav, setNav] = useState<WP_NavMenu[] | []>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const header = useRef(null)
  const mobileMenuButton = useRef(null)

  const getNav = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getNavFromApi()
      setNav(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])
  
  useEffect(() => {
    getNav()
  }, [getNav])

  const navMemo: INav[] = useMemo(() => 
    nav.map((item) => ({
      id: item.ID,
      text: item.title,
      url: item.url,
      submenu: item.child_items?.map((subitem) => ({
        id: subitem.ID,
        text: subitem.title,
        url: subitem.url
      }))
    }))
  , [nav])

  useEffect(() => {
    if (header.current !== null && navMemo.length !== 0) scrollPosition({ header: header.current })
  }, [header, navMemo])

  return {
    nav: navMemo,
    error,
    loading,
    header,
    mobileMenuButton
  }
}
