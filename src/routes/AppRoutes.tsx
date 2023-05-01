import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/ui/Header'
import { Footer } from '../components/ui/Footer'
import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { SobreNosotros } from '../pages/SobreNosotros'
import { Wines } from '../pages/Wines'

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/menu/vinos" element={<Wines />} />

          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
