export const getStaticPageFromApi = async () => {
  try {
    // const response = await fetch(`${import.meta.env.VITE_API_URL}/promos?populate=*`)
    const response = await fetch(`${import.meta.env.VITE_API_URL_WP}/pages`)
    if (!response.ok) throw new Error('Hubo un error cargando las Paginas')
    const data = await response.json()
    // const totalPages = Object.fromEntries(response.headers.entries())
    // console.log(totalPages['x-wp-totalpages'])
    return data
  } catch (error) {
    throw new Error('Hubo un error cargando las Paginas')
  }
}
