import { Back, Next } from './icons'

interface Props {
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  totalPages: number
}

export const Pagination = ({ currentPage, setCurrentPage, totalPages }: Props) => {

  return (
    <section className='container mb-10 md:mb-14'>
      <div className='flex justify-center items-center gap-8'>
        {/* <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={`${currentPage === 1 ? 'invisible' : 'visible'}`}><Back /></button>
        <div className='flex items-center gap-4 font-bold text-lg'>
          <span>
            {currentPage}
          </span>
          <span>
            /
          </span>
          <span>
          {totalPages}
          </span>
        </div>  */}
        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className={`${currentPage === totalPages ? 'invisible' : 'text-white visible border-white rounded px-4 py-3 border uppercase font-medium'}`}>
          Ver más
        </button>
      </div>
    </section>
  )
}
