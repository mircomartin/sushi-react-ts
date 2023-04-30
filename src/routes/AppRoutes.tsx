import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/ui/Header'
import { Footer } from '../components/ui/Footer'
import { Home } from '../pages/Home'

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="/*" element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  )
}
