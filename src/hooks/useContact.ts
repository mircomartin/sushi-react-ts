import { useRef, useState } from 'react'

export const useContact = () => {
  const [formContact, setFormContact] = useState({
    email: '',
    nombre: '',
    asunto: 'Consulta desde la web',
    mensaje: ''
  })
  const form = useRef<HTMLFormElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormContact({
      ...formContact,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formContact.email.trim().length <= 2) {
      setError('El email es obligatorio')
      return
    }
    if (formContact.nombre.trim().length <= 2) {
      setError('El nombre es obligatorio')
      return
    }
    if (formContact.asunto.trim().length <= 2) {
      setError('El asunto es obligatorio')
      return
    }
    if (formContact.mensaje.trim().length <= 2) {
      setError('El mensaje es obligatorio')
      return
    }

    try {
      if (form.current === null) return

      const data = new FormData(form.current)

      const res = await fetch('https://madame-butterfly-sushi.000webhostapp.com/wp-json/contact-form-7/v1/contact-forms/5/feedback', {
        method: 'POST',
        body: data
      })
      if (!res.ok) {
        throw new Error('Error al enviar los datos')
      } else {
        setSuccess(true)
        const data = await res.json()
        console.log('Datos de la respuesta:', data)
        setFormContact({
          email: '',
          nombre: '',
          asunto: 'Consulta desde la web',
          mensaje: ''
        })
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }

  return {
    handleInputChange,
    handleSubmit,
    formContact,
    error,
    success,
    form
  }
}
