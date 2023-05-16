import { usePromos } from '../../hooks/usePromos'
import { Loading } from '../ui/Loading'
import { Card } from '../ui/Card'

export const Promos = () => {
  const { error, loading, promos } = usePromos()

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className='text-center text-white bg-red-400 rounded-md'>{error}</p>

  return (
    <div className='pb-12 md:pb-36 bg-slate-950' 
      style={{
        background: 'linear-gradient(173deg, rgba(255,255,255,1) 35%, rgba(17,20,36,1) 50%, rgba(2,6,23,1) 60%)'
      }}
    >
      <div className='container px-5 md:px-0'>
        <div className='mb-10'>
          <h2 className='text-[#d21c0c] text-3xl font-bold uppercase text-center'>Encontrá nuestros menús destacados</h2>
        </div>
        <div className='w-full flex overflow-x-auto flex-nowrap md:grid md:grid-cols-3 gap-7 md:gap-12'>
        {
          promos?.map((promo) => (
            <article key={promo.id}>
              <Card product={promo}/>
            </article>
          ))
        }
        </div>
      </div>
    </div>
  )
}
