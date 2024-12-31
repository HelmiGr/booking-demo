import { RotateCw } from 'react-feather'
import Button from '../../components/Button'
import SearchBar from '../../components/SearchBar'
import SmallButton from '../../components/SmallButton'

interface ReservationsSearchProps {
  onSearch: (query: string) => void; 
}

export default function ReservationsSearch({ onSearch }: ReservationsSearchProps) {

  return (
    <div className='flex flex-col gap-[16px]'>
        <div className='flex justify-between gap-[24px] items-center'>
            <h2 className='font-semibold leading-[133%] text-[24px]'>Reservations</h2>
            <Button text='Reserve a device'/>
        </div>
        <div className='flex gap-[12px]'>
            <SearchBar placeholder='Search device' onSearch={onSearch}/>
            <SmallButton text='Refresh' icon={<RotateCw />}/>
        </div>
    </div>
  )
}