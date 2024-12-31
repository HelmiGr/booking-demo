import { useState } from 'react'
import DevicesSearch from './DevicesSearch'
import IndividualFilterOption from '../../components/IndividualFilterOption'
import IndividualSearchResult from './IndividualSearchResult'

export default function AvailableDeviceBox() {
  // sample data for dropdowns
  const qtVersions = ['v1.0', 'v2.0', 'v3.0'];
  const availability = ['0/3 Available', '1/3 Available', '2/3 Available', '3/3 Available'];

  // sample data for devices
  const devices = [
    { id: 1, name: "Device A", version: "v1.0", availability: 0 },
    { id: 2, name: "Device B", version: "v2.0", availability: 2 },
    { id: 3, name: "Device C", version: "v1.0", availability: 3 },
    { id: 4, name: "Device D", version: "v3.0", availability: 1 },
  ];

  // state for managing search results
  const [searchResults, setSearchResults] = useState(devices);

  // function to handle search results based on searchbar input
  const handleSearch = (query: string) => {
    const filteredResults = devices.filter((device) =>
      device.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  }; 
 
  // handles selection of an option in the dropdown
  const handleSelectOption = (option: string | 0 | 1 | 2 | 3) => {
    console.log(`Selected: ${option}`);
    // filter devices by selected status or version
    const filteredResults = devices.filter(
      (device) => device.availability === option || device.version === option
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className='flex flex-col px-[32px] py-[16px] gap-[15px] object-left-top rounded-lg bg-custom-bg-gray'>
        <h2 className='text-[24px] font-semibold leading-[133%]'>Available Device</h2>
        {/* Search bar and buttons */}
          <DevicesSearch onSearch={handleSearch}/>
        <div>
          {/* Filtering options for search results */}
          <div className='flex gap-[2px] w-full'>
            <IndividualFilterOption text='Device Type'/>
            <IndividualFilterOption text='Qt Version' options={qtVersions} hasDropdown={true} onSelectOption={handleSelectOption}/>
            <IndividualFilterOption text='Availability' options={availability} hasDropdown={true} onSelectOption={handleSelectOption}/>
            {/* An empty filter option */}
            <IndividualFilterOption text='' />
          </div>
         {/* Search results */}
          <div className=''>
          {searchResults.length > 0 ? (
            searchResults.map((device) => (
             <IndividualSearchResult id={device.id} name={device.name} version={device.version} availability={device.availability as 0 | 1 | 2 | 3} />
           ))
         ) : (
           <p className='text-nav-icons-gray text-center font-semibold text-[16px] leading-[24px]'>No devices found!</p>)}
        </div>
      </div>
    </div>
  )
}