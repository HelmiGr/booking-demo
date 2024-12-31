import { RotateCw } from 'react-feather'
import SearchBar from "../../components/SearchBar"
import SmallButton from "../../components/SmallButton"

interface DevicesSearchProps {
    onSearch: (query: string) => void;
}  

export default function DevicesSearch({ onSearch }: DevicesSearchProps) {
  return (
    <div className='flex gap-[8px]'>
        <SearchBar placeholder='Search device' onSearch={onSearch}/>
        <SmallButton text='Update' icon=''/>
        <SmallButton text='Update' icon={<RotateCw />}/>
    </div>
  )
}
