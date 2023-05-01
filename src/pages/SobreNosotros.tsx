import { Promos, TitleSection } from '../components/sections'
import IMG from '../assets/sobre-nosotros.jpeg'

export const SobreNosotros = () => {
  return (
    <>
      <TitleSection title={'Sobre Nosotros'}/>
      <div className='container px-5 md:px-0 py-14 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
          <div className='flex flex-col'>
            <h3 className='text-4xl text-[#d21c0c] font-bold uppercase mb-11'>Nuestra Historia</h3>
            <div className='flex flex-col gap-5'>
              <p>Sushi Madame Butterfly es un restaurante de comida japonesa ubicado en calle Mitre 1102, Rosario. Desde nuestra apertura en 2012, nos hemos enfocado en ofrecer a nuestros clientes la mejor experiencia culinaria con platillos auténticos y de alta calidad.</p>
              <p>Nuestro equipo está conformado por expertos chefs japoneses y un amable personal de servicio, todos comprometidos en brindarte una experiencia única. Nos enorgullece ofrecer un menú variado que incluye sushi, sashimi, rollos y platillos tradicionales de la cocina japonesa. Además, nos aseguramos de utilizar ingredientes frescos y de alta calidad en todos nuestros platillos.</p>
              <p>Nos esforzamos por crear un ambiente cálido y acogedor en nuestro restaurante, para que nuestros clientes puedan disfrutar de una experiencia única en cada visita. Nos complace recibir a clientes de todas partes y nos aseguramos de que se sientan como en casa en nuestro restaurante.</p>
              <p>Estamos comprometidos en ofrecer una experiencia culinaria excepcional y esperamos poder atenderte pronto. ¡Te esperamos en <strong>Sushi Madame Butterfly</strong>!</p>
            </div>
          </div>
          <figure className='rounded-lg overflow-hidden'>
            <img src={IMG} alt="Sobre Nosotros" className='object-cover object-center w-full h-auto'/>
          </figure>
        </div>
      </div>
      <Promos />
    </>
  )
}
