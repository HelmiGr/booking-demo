import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'react-feather'

interface IndividualReservationFilterProps {
    text: string; // filter name
    options?: string[]; // optional list of dropdown options
    hasDropdown?: boolean; // whether a dropdown is wanted on filter
    onSelectOption?: (option: string) => void; // callback when an option is selected
}

export default function IndividualReservationFilter({ text, options, hasDropdown, onSelectOption }: IndividualReservationFilterProps) {
  const [activeDropdown, setActiveDropdown] = useState(false); // state managing dropdown visibility
  const [selectedText, setSelectedText] = useState<string>(text); // state for updating text in filter
  const dropdownRef = useRef<HTMLDivElement>(null); // reference to the dropdown container

  const toggleDropdown = () => setActiveDropdown((prev) => !prev);

  const handleOptionSelect = (option: string) => {
    setSelectedText(option); // update text in filter to the selected option
    if (onSelectOption) onSelectOption(option); // tells parent element of a selected option
    setActiveDropdown(false); // close the dropdown
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setActiveDropdown(false); // close the dropdown if clicking outside
    }
  };

  // event listener to detect clicks outside of the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className='relative 2xl:w-[473px] xl:w-[250px] md:w-[150px] text-gray-900 border border-gray-300 rounded bg-white'>
        {/* filter box with name and possible dropdown */}
      <div className='flex items-center text-[16px] gap-[12px] pl-[14px] pr-[16px] pt-[9px] pb-[11px]'>
        <p className='flex-grow text-left m-0 leading-none'>{selectedText}</p>
        {/* only renders dropdown icon if hasDropdown = true and some other props are provided*/}
        {hasDropdown && (
        <div className='cursor-pointer gap-[10px] px-[2px] py-[4px] flex-none' onClick={toggleDropdown}>
          <ChevronDown className='w-4 h-4 m-0'/>
        </div>
        )}
      </div>
      {/* dropdown options, only rendered if options exist and isActive = true */}
      {activeDropdown && options && (
        <div className="absolute mt-[6px] left-0 w-full h-[288px] border border-gray-300 rounded bg-white custom-scrollbar overflow-y-auto z-50">{options.map((option) => (
            <p key={option} className="h-[48px] text-[16px] cursor-pointer hover:bg-custom-bg-gray p-3" onClick={() => handleOptionSelect(option)}> 
              {option}
            </p>))}
        </div>)}
    </div>
  )
}