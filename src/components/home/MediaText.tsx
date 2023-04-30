import { AnimationOnScroll } from 'react-animation-on-scroll'
import ReactMarkdown from 'react-markdown'
import { useMediaText } from '../../hooks/useMediaText'
import { Loading } from '../ui/Loading'

export const MediaText = () => {
  const { mediaText, error, loading } = useMediaText()

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className='text-center text-white bg-red-400 rounded-md'>{error}</p>

  return (
    <div className='container w-full px-5 md:px-0 mb-12 md:mb-36'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='order-2 md:order-1'>
          <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce={true} animatePreScroll={false}>
            <div className='flex flex-col gap-8'>
              <h3 className='text-[#d21c0c] text-4xl md:text-5xl font-bold text-center md:text-left uppercase'>{mediaText?.title}</h3>
              <div className='text-lg font-semibold flex flex-col gap-5'>{mediaText?.description !== undefined && <ReactMarkdown>{mediaText.description}</ReactMarkdown>}</div>
            </div>
          </AnimationOnScroll>
        </div>
        <figure className='order-1 md:order-2 rounded-lg overflow-hidden'>
          <img src={mediaText?.srcImg} alt={mediaText?.description} className='w-full object-cover' />
        </figure>
      </div>
    </div>
  )
}
