import ReactMarkdown from 'react-markdown'
import { usePromos } from '../../hooks/usePromos'
import { Loading } from '../ui/Loading'

export const Promos = () => {
  const { error, loading, promos } = usePromos()

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className='text-center text-white bg-red-400 rounded-md'>{error}</p>

  return (
    <div className='pb-12 md:pb-36 bg-slate-950' 
      style={{
        background: 'linear-gradient(173deg, rgba(255,255,255,1) 25%, rgba(17,20,36,1) 50%, rgba(2,6,23,1) 100%)'
      }}
    >
      <div className='container px-5 md:px-0'>
        <div className='mb-5'>
          <h2 className='text-[#d21c0c] text-4xl font-bold uppercase text-center'>Promos</h2>
        </div>
        <div className='w-full flex overflow-x-auto flex-nowrap md:grid md:grid-cols-3 gap-7 md:gap-12'>
        {
          promos.map((promo) => (
            <div key={promo.id} className='bg-white rounded-lg shadow-md w-[290px] md:w-auto flex-shrink-0 flex-grow-[290px] md:flex-[unset]'>
              <div className='p-4 flex flex-col items-center justify-center gap-5'>
                <figure className='overflow-hidden'>
                  <img src={promo.image} alt={promo.title} className='transition duration-300 ease-in-out hover:scale-105' />
                </figure>
                <h3 className='text-xl font-bold uppercase'>{promo.title}</h3>
                <ReactMarkdown className='text-gray-500 max-h-[200px] min-h-[140px] overflow-hidden'>
                  {promo.description}
                </ReactMarkdown>
                <span className='text-xl uppercase font-bold'>{promo.price}</span>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}
