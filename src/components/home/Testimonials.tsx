import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactHtmlParser from 'react-html-parser'
import { useTestimonials } from '../../hooks/useTestimonials'
import { Loading } from '../ui/Loading'
import { Star } from '../ui/icons'

export const Testimonials = () => {
  const { error, loading, testimonials } = useTestimonials()

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className='text-center text-white bg-red-400'>{error}</p>
  
  return (
    <div className='bg-slate-950 py-12 md:py-36 testimonials relative'>
      <div className='container px-5 md:px-0'>
        <Swiper
          className='static'
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1
            },
            1024: {
              width: 1024,
              slidesPerView: 3
            },
            1280: {
              width: 1280,
              slidesPerView: 3
            },
            1536: {
              width: 1536,
              slidesPerView: 3
            }
          }}
          spaceBetween={50}
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            testimonials?.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className='testimomonialsItem flex flex-col gap-5 justify-between bg-white p-10'>
                  <div className='min-h-[250px]'>
                    {ReactHtmlParser(slide.comment)}
                  </div>
                  <div>
                    <span className='font-bold uppercase'>{slide.author}</span>
                    <p className='flex gap-1 mt-3'><Star /><Star /><Star /><Star /><Star /></p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}
