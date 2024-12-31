import { MoreVertical } from 'react-feather'
import VersionTag from "../../components/VersionTag"
import StatusTag from "../../components/StatusTag"

interface ReservationProps {
    reservation: {
        deviceType: string;
        version: string;
        startTime: string;
        duration: string;
        timeRemaining: string;
        status: 'ready' | 'failed' | 'expired' | 'preparing';
    };
}

export default function Reservation({ reservation }: ReservationProps) {
  const { deviceType, version, startTime, duration, timeRemaining, status } = reservation;
  
  return (
    <div className='grid grid-cols-7 w-full h-[60px] object-left-top text-small-button-text'>
        <div className='p-[16px]'>
            {deviceType}
        </div>
        <div className='p-[16px]'>
            <VersionTag version={version}/>
        </div>
        <div className='p-[16px]'>
            {startTime}
        </div>
        <div className='p-[16px]'>
            {duration}
        </div>
        <div className='p-[16px]'>
            {timeRemaining}
        </div>
        <div className='p-[16px]'>
            <StatusTag status={status}/>
        </div>
        <div className='p-[16px] w-[24px]'>
            <MoreVertical />
        </div>
    </div>
  )
}
