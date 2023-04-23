import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/ui/Header'
import { Home } from '../pages/Home'

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </>
  )
}
