export const getNavFromApi = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL_WP_NAV}/header`)
    if (!response.ok) throw new Error('Hubo un error cargando el menu')
    const { items } = await response.json()
    return items
  } catch (error) {
    throw new Error('Hubo un error cargando el menu')
  }
}
