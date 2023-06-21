import { useContact } from '../../hooks/useContact'

export const FormContact = () => {
  const { formContact, handleInputChange, handleSubmit, error, success, form } = useContact()
  
  return (
    <form ref={form} className='flex flex-col gap-5' onSubmit={handleSubmit}>
      {error !== null && <p className='bg-red-500 text-white text-lg uppercase p-4 text-center font-semibold'>Error: { error }</p>}
      {success && <p className='bg-green-500 text-white text-lg uppercase p-4 text-center font-semibold'>Mensaje enviado correctamente</p>}
      <div className='flex flex-col gap-2'>
        <label className='text-[#B6262F] text-lg font-semibold'>Email</label>
        <input name='email' value={formContact.email} onChange={handleInputChange} type='text' className='border border-[#B6262F] p-2' />
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-[#B6262F] text-lg font-semibold'>Nombre</label>
        <input name='nombre' value={formContact.nombre} onChange={handleInputChange} type='text' className='border border-[#B6262F] p-2' />
      </div>
      <div className='flex-col gap-2 hidden'>
        <label className='text-[#B6262F] text-lg font-semibold'>Asunto</label>
        <input name='asunto' value={formContact.asunto} onChange={handleInputChange} type='text' className='border border-[#B6262F] p-2' />
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-[#B6262F] text-lg font-semibold'>Mensaje</label>
        <textarea name='mensaje' value={formContact.mensaje} onChange={handleInputChange} className='border border-[#B6262F] p-2 min-h-[250px]'/>
      </div>
      <div className='flex flex-col md:items-end gap-5'>
        <button className='w-full md:w-[auto] uppercase px-10 py-3 border border-[#B6262F] text-[#B6262F] font-semibold hover:bg-[#B6262F] hover:text-white transition-all duration-150'>
          Enviar
        </button>
      </div>
    </form>
  )
}
