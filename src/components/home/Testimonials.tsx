import { Navigation } from 'swiper'
import ReactMarkdown from 'react-markdown'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTestimonials } from '../../hooks/useTestimonials'
import { Loading } from '../ui/Loading'
import { Star } from '../ui/icons'

export const Testimonials = () => {
  const { error, loading, testimonials } = useTestimonials()

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className="text-center text-white bg-red-400 rounded-md">{error}</p>
  
  return (
    <div className="bg-slate-950 pt-10 md:pt-16">
      <div className="container px-5 md:px-0">
        <Swiper
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
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            testimonials?.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col gap-5 justify-between bg-white p-10 rounded-lg">
                  <div className="min-h-[250px]">
                    <ReactMarkdown>{slide.comment}</ReactMarkdown>
                  </div>
                  <div>
                    <span className="font-bold uppercase">{slide.author}</span>
                    <p className="flex gap-1 mt-3"><Star /><Star /><Star /><Star /><Star /></p>
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
