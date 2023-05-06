import { useCallback, useEffect, useMemo, useState } from 'react'
import { getPromosFromApi } from '../services/promos'
import { type ICard } from '../interfaces/interfaces'
import { type WP_MenuDestacados } from '../interfaces/types'

export const usePromos = () => {
  const [promos, setPromos] = useState<WP_MenuDestacados[] | []>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const getPromos = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getPromosFromApi()
      setPromos(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])
  
  useEffect(() => {
    getPromos()
  }, [getPromos])

  const promosMapped: ICard[] = useMemo(
    () => promos?.map((card) => {
      return {
        id: card.id,
        title: card.acf.title,
        description: card.acf.description,
        price: card.acf.price,
        image: card.acf.image
      }
    }), [promos]
  )
 
  return {
    promos: promosMapped,
    error,
    loading
  }
}
