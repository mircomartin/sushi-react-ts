export const getMediaWithTextFromApi = async () => {
  try {
    // const response = await fetch(`${import.meta.env.VITE_API_URL}/imagen-y-texto?populate=*`)
    const response = await fetch(`${import.meta.env.VITE_API_URL_WP}/media-text`)
    if (!response.ok) throw new Error('Hubo un error cargando la seccion - Imagen con Texto')
    const data = await response.json()
    return data[0]
  } catch (error) {
    throw new Error('Hubo un error cargando la sección')
  }
}
