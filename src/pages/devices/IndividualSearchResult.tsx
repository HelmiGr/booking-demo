import { Link } from 'react-router-dom'
import AvailabilityTag from '../../components/AvailabilityTag'

interface IndividualSearchResultProps {
    id: number; // device id
    name: string; // device name
    version: string; // Qt version
    availability: 0 | 1 | 2 | 3; // availability status
  }

// displays all devices that come up as results on the devices page
export default function IndividualSearchResult({ id, name, version, availability }: IndividualSearchResultProps) {

  return (
    <div className='flex h-[60px] object-left-top text-brand-pine bg-white'>
        {/* Device type results */}
        <div className='p-[16px]'>
            <p className="font-semibold">{name}</p>
        </div>
        {/*Qt version results */}
        <div className='p-[16px]'>
            <p>{version}</p>
        </div>
        {/* Availablity results */}
        <div className='p-[16px] pr-0'>
            <AvailabilityTag availability={availability}/>
        </div>
        {/* Reserve buttons */}
        <div className='p-[16px] pr-0'>
            <Link to={`/devices/reserve-device/${id}`}>Reserve</Link>
        </div>
    </div>
  )
}

