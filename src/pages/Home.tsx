import { Helmet } from 'react-helmet'
import { MediaText, Slider, Testimonials, Map } from '../components/home'
import { Promos } from '../components/sections'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Inicio | Madame Butterfly Sushi</title>
        <meta name='description' content='¡Disfruta de la mejor experiencia de sushi en nuestro sitio web! Ofrecemos una amplia variedad de platos de sushi frescos y deliciosos, desde los clásicos hasta creaciones innovadoras. Nuestro equipo de chefs expertos prepara cada plato con ingredientes de la más alta calidad y con gran atención al detalle. ¡Haz tu pedido ahora y descubre por qué somos el mejor sitio de sushi en la ciudad!' />
      </Helmet>
      <Slider />
      <MediaText />
      <Promos />
      <Map />
      <Testimonials />
    </>
  )
}
export default Home