import { useCallback, useEffect, useMemo, useState } from 'react'
import { getPromosFromApi } from '../services/promos'
import { type IPromo } from '../interfaces/interfaces'
import { type PromoAPI } from '../interfaces/types'

export const usePromos = () => {
  const [promos, setPromos] = useState<PromoAPI[] | []>([])
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

  const promosMapped: IPromo[] = useMemo(
    () => promos?.map((card) => {
      return {
        id: card.id,
        title: card.attributes.title,
        description: card.attributes.description,
        price: card.attributes.price,
        image: card.attributes.image.data.attributes.url
      }
    }), [promos]
  )
 
  return {
    promos: promosMapped,
    error,
    loading
  }
}
