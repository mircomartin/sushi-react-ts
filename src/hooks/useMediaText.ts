import { useCallback, useEffect, useState } from 'react'
import { getMediaWithTextFromApi } from '../services/media-text'
import { type IMediaText } from '../interfaces/interfaces'

export const useMediaText = () => {
  const [mediaText, setMediaText] = useState<IMediaText | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const getMediaWithText = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getMediaWithTextFromApi()
      const textMediaTyped = {
        id: data.id,
        title: data.acf.title,
        description: data.acf.description,
        srcImg: data.acf.image,
        videoId: data.acf.videoId
      }
      setMediaText(textMediaTyped)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getMediaWithText()
  }, [getMediaWithText])

  return {
    mediaText,
    error,
    loading
  }
}
