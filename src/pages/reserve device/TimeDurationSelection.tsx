import { useState } from 'react'
import IndividualReservationFilter from '../../components/IndividualReservationFilter'

interface TimeDurationSelectionProps {
  onChange: (selectedDuration: string) => void; // callback to notify parent of selected duration
}

export default function TimeDurationSelection({ onChange }: TimeDurationSelectionProps) {
  // state to track the selected time duration
  const [selectedDuration, setSelectedDuration] = useState<string>('Duration');
  
  // sample data
  const timeDurations = ['1 Hour', '2 Hour', '3 Hour', '5 Hour', '8 Hour', '1 Day', '2 Days', '3 Days' ]

  // handle when a new duration is selected
  const handleDurationChange = (duration: string) => {
    setSelectedDuration(duration); // update the selected duration in state
    onChange(duration); // notify the parent component
  };

  return (
    <div className='flex flex-col gap-[6px]'>
        <p className='font-semibold text-[16px]'>Select time duration <span className="text-error-message-red">*</span></p>
        <IndividualReservationFilter text='Duration' options={timeDurations} hasDropdown={true} onSelectOption={handleDurationChange}/>
        <p className='text-[14px] leading-[150%]'>Reservation will start right now if the device is available!</p>
    </div>
  )
}