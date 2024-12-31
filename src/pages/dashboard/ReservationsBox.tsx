import { MoreVertical } from 'react-feather'
import IndividualFilterOption from '../../components/IndividualFilterOption'
import Reservation from './Reservation'

interface ReservationsBoxProps {
  searchResults: any[]; 
}

// displays all reservations a user has made
export default function ReservationsBox({ searchResults }: ReservationsBoxProps) {

  // sample data for dropdowns
  const deviceTypes = ['Phone', 'Tablet', 'Laptop'];
  const versions = ['v1.0', 'v2.0', 'v3.0'];
  const statuses = ['Ready', 'Expired', 'Failed', 'Preparing'];

  // handles selection of an option in the dropdown
  const handleSelectOption = (option: string) => {
    console.log(`Selected: ${option}`);
  };

  return (
    <div className="h-auto border text-[16px] sm:text-[14px] md:text-[10px] lg:text-[16px]">
      {/* Filtering options for reservations */}
      <div className="grid grid-cols-7 gap-[2px] w-full">
        <IndividualFilterOption text="Device type" options={deviceTypes} hasDropdown={true} onSelectOption={handleSelectOption}/>
        <IndividualFilterOption text="Version" options={versions} hasDropdown={true} onSelectOption={handleSelectOption}/>
        <IndividualFilterOption text="Start time"/>
        <IndividualFilterOption text="Duration"/>
        <IndividualFilterOption text="Time remaining"/>
        <IndividualFilterOption text='Status'options={statuses} hasDropdown={true} onSelectOption={handleSelectOption}/>
        {/* Three dots icon for more options */}
        <div className="flex cursor-pointer text-right text-white items-center justify-center bg-brand-pine"> 
          <MoreVertical/>
        </div>
      </div>
      {/* Results of reservations */}
      <div className="grid grid-cols-1 min-h-[128px] items-center w-full">
      {searchResults.length > 0 ? (
          searchResults.map((reservation, index) => (
            <Reservation key={index} reservation={reservation} />
          ))
        ) : (
          <p className="text-nav-icons-gray text-center font-semibold text-[16px] leading-[24px]">
            No Reservation yet!
          </p>
        )}
      </div>
    </div>
  );
}