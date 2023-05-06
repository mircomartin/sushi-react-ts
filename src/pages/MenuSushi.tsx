import { useSushiMenu } from '../hooks/useSushiMenu'
import { TitleSection } from '../components/sections'
import { Card } from '../components/ui/Card'
import { Loading } from '../components/ui/Loading'
import { Pagination } from '../components/ui/Pagination'

export const MenuSushi = () => {
  const { error, loading, menuMapped, currentPage, setCurrentPage, totalPages } = useSushiMenu()

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className='text-center text-white bg-red-400 rounded-md'>{error}</p>
  if (!loading && error === null && menuMapped === undefined) return <p className='text-center text-4xl py-5 text-white bg-red-400 mt-[400px]'>No se encontró la página</p>

  return (
    <>
      <TitleSection title={'Carta de Sushi'}/>
      <div 
        className='min-h-screen w-full flex flex-col justify-between'
        style={{
          background: 'linear-gradient(173deg, rgba(255,255,255,1) 35%, rgba(17,20,36,1) 50%, rgba(2,6,23,1) 60%)'
        }}
      >
        <section className='container py-12 md:py-36'>
          <div className="md:grid md:grid-cols-4 gap-7 md:gap-12">
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
