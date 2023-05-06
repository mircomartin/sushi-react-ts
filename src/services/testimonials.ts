export const getTestimonialsFromApi = async () => {
  try {
    // const response = await fetch(`${import.meta.env.VITE_API_URL}/testimonials?populate=*`)
    const response = await fetch(`${import.meta.env.VITE_API_URL_WP}/testimonials`)
    if (!response.ok) throw new Error('Error fetching testimonials')
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching testimonials')
  }
}
