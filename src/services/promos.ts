export const getPromosFromApi = async () => {
  try {
    // const response = await fetch(`${import.meta.env.VITE_API_URL}/promos?populate=*`)
    const response = await fetch(`${import.meta.env.VITE_API_URL_WP}/menus-destacados`)
    if (!response.ok) throw new Error('Hubo un error cargando las Promos')
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Hubo un error cargando las Promos')
  }
}
