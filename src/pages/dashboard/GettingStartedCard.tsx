import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, ChevronRight } from 'react-feather'

// card for first time users displaying instructions for the webpage
export default function GettingStartedCard() {

  const [isVisible, setIsVisible] = useState(true);

  // hides the card when the X icon is clicked
  const handleClose = () => {
    setIsVisible(false);
  };

  const instructionText = `To get started with reserving a device, simply navigate to the "Devices" section from the left-hand menu. Here, you'll see a list of available devices sorted by type. Select the device type you're interested in, and then click on the specific device you want to reserve. If the device is available, click the "Reserve device" button. Once reserved, you'll be provided with connection details and options to manage your reservation.`

  return (
    isVisible && (
    <div className='flex flex-col px-8 py-4 rounded-lg gap-[16px] bg-custom-bg-gray'>
      {/* heading + X icon */}
      <div className='flex gap-[24px] justify-between'>
        <h2 className='font-semibold leading-[133%] text-[24px]'>Getting started</h2>
        {/* Once X is clicked the card is hidden */}
        <X className='h-[24px] w-[24px]' onClick={handleClose}/>
      </div>
      {/* Link and icon to the devices page */}
      <p className='leading-[150%] text-[16px] w-full resize-y'>{instructionText}</p>
      <Link to='/devices' className='flex gap-[4px] text-[16px] font-semibold text-brand-pine'>
        Go to the devices and create reservation
        <ChevronRight className='pb-[2px] pt-[4px]' />
      </Link>
    </div>
    )
  )
}