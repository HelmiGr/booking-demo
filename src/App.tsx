import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import LeftNav from './components/LeftNav'

export default function App() {
  return (
    <div>
      <Header />
      <div className='flex flex-row px-[40px] mt-[38px] mb-[10px] gap-[60px]'>
        <div>
          <LeftNav />
        </div>
        <main className='flex flex-col gap-[16px]'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}