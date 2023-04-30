import { useCallback, useEffect, useMemo, useState } from 'react'
import { getTestimonialsFromApi } from '../services/testimonials'
import { type ITestimonial } from '../interfaces/interfaces'
import { type TestimonialsAPI } from '../interfaces/types'

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialsAPI[] | []>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  
  const getTestimonials = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getTestimonialsFromApi()
      setTestimonials(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])
  
  useEffect(() => {
    getTestimonials()
  }, [getTestimonials])

  const testimonialsMapped: ITestimonial[] = useMemo(() => {
    return testimonials.map((testimonial) => ({
      id: testimonial.id,
      author: testimonial.attributes.author,
      comment: testimonial.attributes.comment
    }))
  }, [testimonials])
  
  return {
    testimonials: testimonialsMapped,
    error,
    loading
  }
}
