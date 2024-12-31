import { useState } from 'react'

// filtering options for devices on the devices page
export default function DeviceFilter() {
  const [selectedOption, setSelectedOption] = useState('All devices');
  const filterOptions = ['All devices', 'TI', 'NPX', 'ST', 'Raspberry'];

  return (
    <div className='flex gap-[25px]'>
        {/* filter through and display the filter options */}
        {/* if the selected option is clicked, it will be highlighted */}
        {filterOptions.map((option, index) => (
            <div key={index} className={`text-[20px] py-[14px] text-small-button-text cursor-pointer 
              ${selectedOption === option ? 'font-semibold !text-black border-b-[3px] border-black' : ''}`}
              onClick={() => setSelectedOption(option)}
              >
              {option}
            </div>
        ))}
    </div>
  )
}