import { useCallback, useEffect, useMemo, useState } from 'react'
import { getImagesSliderFromApi } from '../services/slider'
import { type ISlide } from '../interfaces/interfaces'
import { type WP_Slider } from '../interfaces/types'

export const useSlider = () => {
  const [sliders, setSliders] = useState<WP_Slider[] | []>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const getSlider = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getImagesSliderFromApi()
      setSliders(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])
  
  useEffect(() => {
    getSlider()
  }, [getSlider])
  
  const slidersMapped: ISlide[] = useMemo(() => sliders?.map((slide) => {
    return {
      id: slide.id,
      title: slide.acf.title,
      textButton: slide.acf.textButton,
      urlSlide: slide.acf.urlSlide,
      srcImg: slide.acf.image
    }
  }), [sliders])

  return {
    sliders: slidersMapped,
    error,
    loading
  }
}
