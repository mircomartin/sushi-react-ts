export const getImagesSliderFromApi = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/sliders?populate=*`)
    if (!response.ok) throw new Error('Hubo un error cargando el Slider')
    const { data } = await response.json()
    return data
  } catch (error) {
    throw new Error('Hubo un error cargando el Slider')
  }
}
