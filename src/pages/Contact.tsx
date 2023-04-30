import { useContact } from '../hooks/useContact'

export const Contact = () => {
  const { formContact, handleInputChange, handleSubmit, error } = useContact()

  return (
    <>
      <div className='bg-[#d21c0c] py-6 md:py-16'>
        <div className='container px-5 md:px-0'>
          <h2 className='text-white uppercase font-bold md:text-6xl text-2xl italic'>Contacto</h2>
        </div>
      </div>
      <div className='py-14 md:py-20'>
        <div className='container px-5 md:px-0'>
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
              <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                {error !== null && <p className='bg-red-500 text-white text-lg rounded-xl uppercase p-5'>Error: { error }</p>}
                <div className='flex flex-col gap-2'>
                  <label className='text-[#d21c0c] text-lg font-semibold'>Nombre</label>
                  <input name="nombre" value={formContact.nombre} onChange={handleInputChange} type='text' className='border border-[#d21c0c] rounded-md p-2' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[#d21c0c] text-lg font-semibold'>Mensaje</label>
                  <textarea name="mensaje" value={formContact.mensaje} onChange={handleInputChange} className='border border-[#d21c0c] rounded-md p-2 min-h-[250px]'/>
                </div>
                <div className='flex flex-col md:justify-end gap-5'>
                  <button className='w-full md:w-[auto] rounded-xl uppercase px-10 py-3 border border-[#d21c0c] text-[#d21c0c] font-semibold hover:bg-[#d21c0c] hover:text-white transition-all duration-150'>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
