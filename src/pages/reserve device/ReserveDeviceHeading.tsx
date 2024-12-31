import { ChevronRight } from 'react-feather'

export default function ReserveDeviceHeading() {
  return (
    <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-col gap-[8px]'>
            <h1 className='text-[48px] leading-[120%]'>Reservation create</h1>
            <div className='flex gap-[4px] object-left text-[16px] font-semibold'>
                <p>Devices</p>
                    <ChevronRight className='max-w-[24px] max-h-[24px]'/>
                <p className='text-brand-pine'>Reservation create</p>
            </div>
        </div>
    </div>
  )
}