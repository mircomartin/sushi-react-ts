import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useSlider } from "../../hooks/useSlider";
import { Loading } from '../ui/Loading';

export const Slider = () => {
	
	const { sliders, error, loading } = useSlider()

	return (
		<>
			{
				loading
				? <Loading />
				: error
				? <p className="text-center text-white bg-red-400 rounded-md">{error}</p>
				: 
					<Swiper
						modules={[ Navigation, Pagination, EffectFade ]}
						slidesPerView={1}
						effect={"fade"}
						navigation
						pagination={{ clickable: true }}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
					{
						sliders?.map((slide) => (
							<SwiperSlide key={slide.id}>
								<div className="relative">
									<img src={slide.srcImg} alt={slide.title} className="object-cover object-center w-full max-h-[600px] brightness-75" />
									<div className="absolute flex items-center justify-center flex-col top-[50%] translate-y-[-50%] w-full gap-5">
										<p className="text-3xl text-white w-1/2 text-center">{slide.title}</p>
										<a href={slide.urlSlide} className="border-2 border-white p-3 text-white hover:bg-white hover:text-black transition-all delay-75">{slide.textButton}</a>
									</div>
								</div>
							</SwiperSlide>
						))
					}
					</Swiper>
			}
		</>

	)
}
