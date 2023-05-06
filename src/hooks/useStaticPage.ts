import { useCallback, useEffect, useMemo, useState } from 'react'
import { getStaticPageFromApi } from '../services/static-page'
import { type WP_Page } from '../interfaces/types'
import { type IStaticPage } from '../interfaces/interfaces'

export const useStaticPage = (title: string) => {
  const [pages, setPages] = useState<WP_Page[] | []>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const getStaticPage = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getStaticPageFromApi()
      setPages(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])
  
  useEffect(() => {
    getStaticPage()
  }, [getStaticPage])
  
  const findPage = useMemo(() => pages.find((page: WP_Page) => page.slug === title), [pages])

  const pageSelected: IStaticPage = {
    id: findPage?.id ?? '',
    title: findPage?.title.rendered ?? '',
    subtitle: findPage?.acf.sub_titulo ?? '',
    description: findPage?.content.rendered ?? '',
    image: findPage?.acf.imagen_destacada ?? ''
  }
  
  return {
    pageSelected,
    error,
    loading
  }
}
