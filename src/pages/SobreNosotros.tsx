import ReactHtmlParser from 'react-html-parser'
import { Helmet } from 'react-helmet'
import { useStaticPage } from '../hooks/useStaticPage'
import { Promos, TitleSection } from '../components/sections'
import { Loading } from '../components/ui/'
import IMG from '../assets/sobre-nosotros.jpeg'

export const SobreNosotros = () => {

  const { error, loading, pageSelected } = useStaticPage('sobre-nosotros')

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className='text-center text-white bg-red-400'>{error}</p>
  if (!loading && error === null && pageSelected.id === '') return <p className='text-center text-4xl py-5 text-white bg-red-400 mt-[400px]'>No se encontró la página</p>

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Madame Butterfly Sushi</title>
        <meta name='description' content='En nuestro restaurante de sushi, nos apasiona ofrecer a nuestros clientes la mejor experiencia gastronómica japonesa. Desde nuestro equipo de chefs expertos hasta nuestro servicio amable y atento, nos esforzamos por crear un ambiente acogedor y auténtico para nuestros comensales. Utilizamos ingredientes frescos y de calidad para preparar nuestros platos de sushi clásicos y creativos, y siempre estamos innovando para ofrecer nuevas opciones a nuestros clientes. ¡Ven a visitarnos y descubre por qué somos el restaurante de sushi favorito de la ciudad!' />
      </Helmet>
      <TitleSection title={pageSelected?.title}/>
      <div className='container px-5 md:px-0 py-12 md:py-36'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-28 items-center'>
          <div className='flex flex-col'>
            <h3 className='text-3xl text-[#B6262F] font-bold uppercase mb-11'>{ReactHtmlParser(pageSelected?.subtitle)}</h3>
            <div className='flex flex-col gap-5'>
              {ReactHtmlParser(pageSelected?.description)}
            </div>
          </div>
          <figure className='overflow-hidden'>
            <img src={IMG} alt="Sobre Nosotros" className='object-cover object-center w-full h-auto'/>
          </figure>
        </div>
      </div>
      <Promos />
    </>
  )
}
