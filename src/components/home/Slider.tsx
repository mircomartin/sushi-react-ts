import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper'
import { useSlider } from '../../hooks/useSlider'
import { Loading } from '../ui/Loading'

export const Slider = () => {
  const { sliders, error, loading } = useSlider()

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className='text-center text-white bg-red-400'>{error}</p>
 
  return (
    <Swiper
      className='mb-12 md:mb-36 min-h-screen md:min-h-[720px]'
      modules={[Navigation, Pagination, EffectFade]}
      slidesPerView={1}
      effect={'fade'}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        sliders?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='relative'>
              <img src={slide.srcImg} alt={slide.title !== null ? slide.title : 'Madame Butterfly' } className='object-cover object-center w-full max-h-screen min-h-screen md:max-h-[720px] md:min-h-[720px] brightness-75' />
              {
                slide.textButton !== null
                && 
                  <div className='absolute top-[50%] flex justify-center translate-y-[-50%] w-full'>
                    <div className='bg-black/75 w-full md:w-1/2 gap-5 flex justify-center items-center flex-col min-h-[250px]'>
                      <p className='text-2xl md:text-5xl text-white text-center font-bold uppercase'>{slide.title}</p>
                      {
                        slide.urlSlide !== ''
                        && 
                          <a href={slide.urlSlide} className='border-2 border-white p-3 text-white hover:bg-white hover:text-black transition-all delay-75'>
                            {slide.textButton}
                          </a>
                      }
                    </div>
                  </div>
              }
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
