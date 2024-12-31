import { Link } from 'react-router-dom'
import { ChevronRight } from 'react-feather'
import ErrorOrSuccessMessage from '../../components/ErrorOrSuccessMessage'

interface ReserveDeviceInstructionProps {
    deviceID : number;
    successOrError: 'success' | 'error' | 'no input' | null;
}

export default function ReserveDeviceInstruction({ deviceID, successOrError }: ReserveDeviceInstructionProps) {
  return (
    <div className='flex flex-col gap-[8px]'>
        <h2 className='object-left text-[24px] leading-[133%] font-semibold'>Reserve Device {deviceID}</h2>
        <p className='text-[16px] leading-[150%]'>Please select your device and Qt version. Once you confirm the reservation, the device will begin preparing the necessary installations and granting access.</p>
        {successOrError === 'error' && (
          <ErrorOrSuccessMessage ErrorOrSuccess='error' MessageContent='The device is not available , please try again or choose another device!' />
        )}
        {successOrError === 'no input' && (
          <ErrorOrSuccessMessage ErrorOrSuccess='error' MessageContent='Failed to reserve device. Please try again.' />
        )}
        <div className="inline-flex gap-[4px]">
            <Link to='/devices' className='flex gap-[4px] text-brand-pine'>
               <p className='text-[16px] font-semibold'>Explore more</p>
               <ChevronRight className='pt-1 pb-0.5'/>
            </Link>
        </div>
    </div>
  )
}
