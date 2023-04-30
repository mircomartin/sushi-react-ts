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
      const { data } = await getMediaWithTextFromApi()
      const textMediaTyped = {
        id: data.id,
        title: data.attributes.title,
        description: data.attributes.description,
        srcImg: data.attributes.image.data.attributes.url,
        videoId: data.attributes.videoId
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
