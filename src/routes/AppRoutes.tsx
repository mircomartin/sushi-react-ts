import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/ui/Header'
import { Footer } from '../components/ui/Footer'
import { Loading } from '../components/ui'

const Home = lazy(() => import('../pages/Home'))
const MenuSushi = lazy(() => import('../pages/MenuSushi'))
const MenuVinos = lazy(() => import('../pages/MenuVinos'))
const SobreNosotros = lazy(() => import('../pages/SobreNosotros'))
const Contact = lazy(() => import('../pages/Contact'))

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/menu/sushi" element={<MenuSushi />} />
            <Route path="/menu/vinos" element={<MenuVinos />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contact />} />

            <Route path="*" element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
