import { useCallback, useEffect, useMemo, useState } from 'react'
import { getMenuSushiFromApi } from '../services/menu-sushi'
import { type WP_Post } from '../interfaces/types'
import { type ICard } from '../interfaces/interfaces'

export const useSushiMenu = () => {
  const [menus, setMenus] = useState<WP_Post[] | []>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const getMenuSushi = useCallback(async () => {
    setLoading(true)
    try {
      const { data, totalPages } = await getMenuSushiFromApi({ currentPage })
      setTotalPages(Number(totalPages))
      setMenus(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [currentPage])

  useEffect(() => {
    getMenuSushi()
  }, [getMenuSushi])
  
  const menuMapped: ICard[] = useMemo(() => menus?.map((menu) => {
    return {
      id: menu.id,
      title: menu.title.rendered,
      price: menu.acf.price,
      description: menu.acf.description,
      image: menu.acf.image
    }
  }), [menus, currentPage])
  console.log(totalPages, menuMapped)

  return {
    menuMapped,
    error,
    loading,
    currentPage,
    setCurrentPage,
    totalPages
  }
}
