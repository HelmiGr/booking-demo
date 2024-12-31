import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'react-feather'

interface IndividualFilterOptionProps {
  text: string; // filter name
  options?: string[]; // optional list of dropdown options
  hasDropdown?: boolean; // whether a dropdown is wanted on filter
  onSelectOption?: (option: string) => void; // callback when an option is selected
}

// a single filter element which can optionally have a dropdown
export default function IndividualFilterOption({ text, options, hasDropdown, onSelectOption }: IndividualFilterOptionProps) {
  const [activeDropdown, setActiveDropdown] = useState(false); // state managing dropdown visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // reference to the dropdown container

  const toggleDropdown = () => setActiveDropdown((prev) => !prev);

  const handleOptionSelect = (option: string) => {
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
    <div ref={dropdownRef} className='relative w-full text-[16px] bg-brand-pine text-white'>
      {/* filter box with name and possible dropdown */}
      <div className='flex items-center px-4 py-3'>
        <p className='flex-grow font-semibold text-left m-0 leading-none'>{text}</p>
        {/* only renders dropdown icon if hasDropdown = true and some other props are provided*/}
        <div className='cursor-pointer gap-[10px] px-[2px] py-[4px] flex-none' onClick={toggleDropdown}>
        {hasDropdown ? (
          <ChevronDown className='w-4 h-4 m-0'/>
        ) : (
          <div className='w-4 h-4 m-0'></div>
        )}
        </div>
      </div>
      {/* dropdown options, only rendered if options exist and isActive = true */}
      {activeDropdown && options && (
        <div className="absolute left-0 w-full border border-small-button-border bg-white mt-[2px] text-black">{options.map((option) => (
            <p key={option} className="cursor-pointer hover:bg-custom-bg-gray p-2 text-sm" onClick={() => handleOptionSelect(option)}> 
              {option}
            </p>))}
        </div>)}
    </div>
  );
}