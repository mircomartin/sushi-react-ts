import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/ui/Header'
import { Footer } from '../components/ui/Footer'
import { Contact, Home, MenuSushi, MenuVinos, SobreNosotros } from '../pages'

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/menu/sushi" element={<MenuSushi />} />
          <Route path="/menu/vinos" element={<MenuVinos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contact />} />

          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
