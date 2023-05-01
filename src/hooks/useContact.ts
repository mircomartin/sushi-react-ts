import { useState } from 'react'

export const useContact = () => {
  const [formContact, setFormContact] = useState({
    nombre: '',
    mensaje: ''
  })
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

    if (formContact.nombre.trim().length <= 2) {
      setError('El nombre es obligatorio')
      return
    }
    if (formContact.mensaje.trim().length <= 2) {
      setError('El mensaje es obligatorio')
      return
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
        method: 'POST',
        body: JSON.stringify({
          data: {
            nombre: formContact.nombre,
            mensaje: formContact.mensaje
          }
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!res.ok) {
        throw new Error('Error al enviar los datos')
      } else {
        setSuccess(true)
        const data = await res.json()
        console.log('Datos de la respuesta:', data)
        setFormContact({
          nombre: '',
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
    success
  }
}
