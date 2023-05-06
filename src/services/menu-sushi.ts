export const getMenuSushiFromApi = async ({ currentPage }: { currentPage: number }) => {
  try {
    // const response = await fetch(`${import.meta.env.VITE_API_URL}/promos?populate=*`)
    const response = await fetch(`${import.meta.env.VITE_API_URL_WP}/posts?per_page=8&page=${currentPage}`)
    if (!response.ok) throw new Error('Hubo un error cargando las Paginas')
    const data = await response.json()
    const totalPages = Object.fromEntries(response.headers.entries())
    return {
      data,
      totalPages: totalPages['x-wp-totalpages']
    }
  } catch (error) {
    throw new Error('Hubo un error cargando las Paginas')
  }
}
