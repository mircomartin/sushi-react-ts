import { Helmet } from 'react-helmet'
import { useSushiMenu } from '../hooks/useSushiMenu'
import { TitleSection } from '../components/sections'
import { Card, Loading, Pagination } from '../components/ui/'

export const MenuSushi = () => {
  const { error, loading, menuMapped, currentPage, setCurrentPage, totalPages } = useSushiMenu()

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className='text-center text-white bg-red-400'>{error}</p>
  if (!loading && error === null && menuMapped === undefined) return <p className='text-center text-4xl py-5 text-white bg-red-400 mt-[400px]'>No se encontró la página</p>

  return (
    <>
      <Helmet>
        <title>Nuestra Carta de Sushi | Madame Butterfly Sushi</title>
        <meta name='description' content='Descubre la amplia variedad de opciones que ofrecemos en nuestra carta de sushi. Desde los clásicos rollos de sushi hasta nuestras creaciones únicas, cada uno de nuestros platos es preparado con ingredientes frescos y de la más alta calidad por nuestro equipo de chefs expertos. Ya sea que seas un fanático del sushi o simplemente estés buscando probar algo nuevo, estamos seguros de que encontrarás algo que te encantará en nuestra carta. ¡Haz tu pedido ahora y disfruta de la experiencia del auténtico sabor japonés en nuestro restaurante de sushi!' />
      </Helmet>
      <TitleSection title={'Carta de Sushi'}/>
      <div 
        className='min-h-screen w-full flex flex-col justify-between'
        style={{
          background: 'linear-gradient(173deg, rgb(255, 255, 255) 10%, rgb(17, 20, 36) 60%, rgb(2, 6, 23) 70%)'
        }}
      >
        <section className='container py-12 md:py-36'>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-12 justify-items-center px-5 md:px-[unset]">
            {
              menuMapped.map((menu) => (
                <article key={menu.id}>
                  <Card product={menu} />
                </article>
              ))
            }
          </div>
        </section>
        {
          totalPages > 1 && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        }
      </div>
    </>
  )
}
