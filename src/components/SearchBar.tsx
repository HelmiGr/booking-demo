import { useState } from 'react'
import SearchIcon from '../assets/SearchIcon.png'

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ placeholder = 'Search', onSearch }: SearchBarProps) {
  // stores current query in the search bar
  const [query, setQuery] = useState('');

  // updates the state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // sends the current query to the parent element once enter is pressed
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query); // passes the query to the parent component
  };

  return (
    <form onSubmit={handleSearch} className='flex w-full h-[38px] p-2 pt-[6px] pb-[8px] gap-[10px] rounded-[6px] border border-gray-border bg-white'>
        <img src={SearchIcon} alt="Search Icon" className='w-[24px] h-[24px]'/>
        <input type='text' placeholder={placeholder} value={query} onChange={handleInputChange} className='flex-1 leading-[150%] text-[16px] placeholder-nav-icons-gray focus:outline-none'></input>
    </form>
  )
}