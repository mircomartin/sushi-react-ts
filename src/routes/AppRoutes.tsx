import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/ui/Header'
import { Footer } from '../components/ui/Footer'
import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />

          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
