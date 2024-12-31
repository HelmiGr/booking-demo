import { Grid, Layers, Clipboard, Settings, HelpCircle, LogOut } from 'react-feather'
import { Link } from 'react-router-dom'

export default function LeftNav() {
  return (
  <div className='bg-custom-bg-gray rounded-lg h-[902px] w-[267px] flex flex-col justify-between p-[24px] object-left-top font-semibold'>
    <div className='flex flex-col gap-[12px] text-lg'>
      {/* Dashboard Link */}
      <div className='flex gap-[30px] leading-[27px] items-center group'>
        <Grid className='h-[24px] w-[24px] text-nav-icons-gray group-hover:text-brand-pine'/>
        <Link to='/' className='group-hover:text-brand-pine'>Dashboard</Link>
      </div>
      {/* Devices Link */}
      <div className='flex gap-[30px] leading-[27px] items-center group'>
        <Layers className='h-[24px] w-[24px] text-nav-icons-gray group-hover:text-brand-pine'/>
        <Link to='/devices' className='group-hover:text-brand-pine'>Devices</Link>
      </div>
      {/* Usage logs Link */}
      <div className='flex gap-[30px] leading-[27px] items-center group'>
        <Clipboard className='h-[24px] w-[24px] text-nav-icons-gray group-hover:text-brand-pine'/>
        <Link to='/logs' className='group-hover:text-brand-pine'>Usage logs</Link>
      </div>
      {/* Settings Link */}
      <div className='flex gap-[30px] leading-[27px] items-center group'>
        <Settings className='h-[24px] w-[24px] text-nav-icons-gray group-hover:text-brand-pine'/>
        <Link to='/settings' className='group-hover:text-brand-pine'>Settings</Link>
      </div>
    </div>
    <div className='flex flex-col gap-[12px] text-lg'>
      {/* Support Center Link */}
      <div className='flex gap-[30px] leading-[27px] items-center group'>
        <HelpCircle className='h-[24px] w-[24px] text-nav-icons-gray group-hover:text-brand-pine'/>
        <Link to='/support' className='group-hover:text-brand-pine'>Support Center</Link>
      </div>
      {/* Log out Link */}
      <div className='flex gap-[30px] leading-[27px] items-center group'>
        <LogOut className='h-[24px] w-[24px] text-nav-icons-gray group-hover:text-brand-pine'/>
        <Link to='/logout' className='group-hover:text-brand-pine'>Log out</Link>
      </div>
    </div>
  </div>
  )
}