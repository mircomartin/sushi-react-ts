import ReactHtmlParser from 'react-html-parser'
import { useStaticPage } from '../hooks/useStaticPage'
import { FormContact, TitleSection } from '../components/sections'
import { Loading } from '../components/ui/Loading'

export const Contact = () => {

  const { error, loading, pageSelected } = useStaticPage('contacto')

  if (loading) return <Loading />
  if (!loading && error !== null) return <p className='text-center text-white bg-red-400 rounded-md'>{error}</p>
  if (!loading && error === null && pageSelected.id === '') return (<p className='text-center text-4xl py-5 text-white bg-red-400 mt-[400px]'>No se encontró la página</p>)

  return (
    <>
      <TitleSection title={pageSelected?.title} />
      <div className='container px-5 md:px-0 py-12 md:py-36'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-28'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-[#d21c0c] text-4xl md:text-5xl font-bold text-center md:text-left uppercase mb-9'>{ReactHtmlParser(pageSelected?.subtitle)}</h3>
            {/* <p>Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto con nosotros. Puedes hacerlo a través de cualquiera de los siguientes medios:</p>
            <ul>
              <li>Llamando a nuestro número de teléfono: 0341 425-2050.</li>
              <li>Visitando nuestra tienda en la siguiente dirección: Mitre 1102, Rosario, Santa Fe.</li>
            </ul>
            <p>También puedes seguirnos en nuestras redes sociales para estar al tanto de nuestras promociones y novedades:</p>
            <ul>
              <li><a href="https://www.facebook.com/MadameButterflySushiBar/" className='hover:text-[#d21c0c]'><strong>Facebook</strong></a></li>
              <li><a href="https://www.instagram.com/madame.butterfly.sushi/" className='hover:text-[#d21c0c]'><strong>Instagram</strong> </a></li>
            </ul>
            <p>¡Estamos a tus órdenes!</p> */}
            <div className='flex flex-col gap-5'>
              {ReactHtmlParser(pageSelected?.description)}
            </div>
          </div>
          <div>
            <FormContact />
          </div>
        </div>
      </div>
    </>
  )
}
