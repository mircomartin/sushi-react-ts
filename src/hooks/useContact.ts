import { useState } from 'react'

export const useContact = () => {
  const [formContact, setFormContact] = useState({
    nombre: '',
    mensaje: ''
  })
  const [error, setError] = useState<string | null>(null)

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
      const res = await fetch('url', {
        method: 'POST',
        body: JSON.stringify({ formContact }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      console.log('Datos de la respuesta:', data)
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }

  return {
    handleInputChange,
    handleSubmit,
    formContact,
    error
  }
}
