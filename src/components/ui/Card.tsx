import { useRef, useState, useEffect } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import ReactHtmlParser from 'react-html-parser'
import { type ICard } from '../../interfaces/interfaces'
import { useLocation } from 'react-router-dom'

export const Card = ({ product }: { product: ICard }) => {
  const [verMas, setVerMas] = useState(false)
  const heightInfoCard = useRef<HTMLDivElement>(null)
  const path = useLocation().pathname

  useEffect(() => {
    if (heightInfoCard.current !== null) {
      const height = heightInfoCard.current.clientHeight
      if (height > 100) {
        document.querySelectorAll('#buttonShow').forEach((button) => {
          button.classList.remove('hidden')
        })
      }
    }
  }, [heightInfoCard])
  
  return (
    <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true} animatePreScroll={true}>
      <div className={`${(path === '/' || path === '/sobre-nosotros') && 'min-h-[625px] md:min-h-[595px]'} bg-white hover:bg-[#fbfbfbf5] hover:shadow-md transition duration-300 ease-in-out`}>
        <div className='flex flex-col'>
          <figure className='overflow-hidden'>
            <img src={product.image} alt={product.title} className='min-h-[300px] max-h-[300px] object-cover w-full transition duration-300 ease-in-out hover:scale-105' />
          </figure>
          <div className='p-4 flex flex-col gap-3'>
            <h3 className='text-2xl font-bold uppercase text-[#0C0F1F]'>{product.title}</h3>
            <div className='w-full flex flex-col gap-5'>
              <div ref={heightInfoCard} className={`text-[#333] w-full overflow-hidden min-h-[75px] transition-[all] duration-500 ease-in-out ${verMas ? 'max-h-[500px]' : 'max-h-[150px]'}`}>
                {ReactHtmlParser(product.description)}
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-xl uppercase font-semibold text-[#D13E2A]'>{product.price}</span>
                <button id="buttonShow" onClick={() => setVerMas(!verMas)} className='hidden text-[#0C0F1F] font-semibold p-3 uppercase hover:bg-slate-300 transition duration-300 ease-in-out'>
                  {
                    verMas ? 'Ver menos' : 'Ver más'
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}
