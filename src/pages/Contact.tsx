import { FormContact, TitleSection } from '../components/sections'

export const Contact = () => {

  return (
    <>
      <TitleSection title={'Contacto'}/>
      <div className='container px-5 md:px-0 py-14 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-28'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-[#d21c0c] text-4xl md:text-5xl font-bold text-center md:text-left uppercase mb-9'>¡Contáctanos!</h3>
            <p>Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto con nosotros. Puedes hacerlo a través de cualquiera de los siguientes medios:</p>
            <ul>
              <li>Llamando a nuestro número de teléfono: 0341 425-2050.</li>
              <li>Visitando nuestra tienda en la siguiente dirección: Mitre 1102, Rosario, Santa Fe.</li>
            </ul>
            <p>También puedes seguirnos en nuestras redes sociales para estar al tanto de nuestras promociones y novedades:</p>
            <ul>
              <li><a href="https://www.facebook.com/MadameButterflySushiBar/" className='hover:text-[#d21c0c]'><strong>Facebook</strong></a></li>
              <li><a href="https://www.instagram.com/madame.butterfly.sushi/" className='hover:text-[#d21c0c]'><strong>Instagram</strong> </a></li>
            </ul>
            <p>¡Estamos a tus órdenes!</p>
          </div>
          <div>
            <FormContact />
          </div>
        </div>
      </div>
    </>
  )
}
