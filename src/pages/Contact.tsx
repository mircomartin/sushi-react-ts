import ReactHtmlParser from 'react-html-parser'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>Contacto | Madame Butterfly Sushi</title>
        <meta name='description' content='La página de contacto es el lugar donde puedes comunicarte con nosotros y hacernos llegar tus preguntas, comentarios o sugerencias. Completa el formulario de contacto y te responderemos a la brevedad. ¡Estamos ansiosos por escuchar de ti!' />
      </Helmet>
      <TitleSection title={pageSelected?.title} />
      <div className='container px-5 md:px-0 py-12 md:py-36'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-28'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-[#d21c0c] text-3xl md:text-5xl font-bold text-center md:text-left uppercase mb-9'>{ReactHtmlParser(pageSelected?.subtitle)}</h3>
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
