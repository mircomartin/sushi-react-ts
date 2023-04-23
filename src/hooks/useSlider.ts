import { useCallback, useEffect, useMemo, useState } from 'react';
import { getImagesSliderFromApi } from "../services/slider";
import { ISlide } from '../interfaces/interfaces';

export const useSlider = () => {

	const [sliders, setSliders] = useState<any[] | []>([])
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	const getImagesSlider = useCallback( async () => {

    try {
      setLoading(true)    
      const { data } = await getImagesSliderFromApi();
      setSliders(data)
    } catch ( error: any ) {
      setError( error.message )
    } finally {
      setLoading(false)      
    }

  },[])
	
	useEffect(() => {

		getImagesSlider()
		
	}, [getImagesSlider])
	
	const slidersMapped: ISlide[] = useMemo(()=> sliders?.map(slide => {
		return {
			id: slide.id,
			title: slide.attributes.title,
			textButton: slide.attributes.textButton,
			urlSlide: slide.attributes.urlSlide,
			srcImg: slide.attributes.imageSlide.data.attributes.url
		}
	}),[ sliders ])

	return {
		sliders: slidersMapped,
		error,
		loading
	}
}
