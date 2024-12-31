import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Dashboard from './pages/dashboard/Dashboard'
import Devices from './pages/devices/Devices'
import ReserveDevice from './pages/reserve device/ReserveDevice'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path='/devices' element={<Devices />} />
          <Route path='/devices/reserve-device/:id' element={<ReserveDevice />} />
          <Route path="*" element={<NotFound />} />
         </Route>
      </Routes>
    </BrowserRouter>
  )
}