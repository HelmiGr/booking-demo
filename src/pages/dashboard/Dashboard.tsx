import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import HeadingWithSubtext from '../../components/HeadingWithSubtext'
import ReservationsSearch from './ReservationsSearch'
import ReservationsBox from './ReservationsBox'
import GettingStartedCard from './GettingStartedCard'
import ErrorOrSuccessMessage from '../../components/ErrorOrSuccessMessage'

export default function Dashboard() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const userID = '444'; // userID from database
  const location = useLocation();
  // get the possible message sent from reserve device
  const message = location.state?.message;

  // sample data for reservations based on imaginary userId
  const userReservation: {
    deviceType: string;
    version: string;
    startTime: string;
    duration: string;
    timeRemaining: string;
    status: 'ready' | 'failed' | 'expired' | 'preparing'; 
  }[] =[
    {
      deviceType: 'imx8mn-ddr4-evk',
      version: '6.2.7',
      startTime: '2024-08-26T14:59:38',
      duration: '2 hours',
      timeRemaining: '--',
      status: 'preparing',
    }, {
      deviceType: 'amx8mn-ddr4-evk',
      version: '6.2.7',
      startTime: '2024-08-26T14:59:38',
      duration: '2 hours',
      timeRemaining: '--',
      status: 'expired',
    }, {
      deviceType: 'bmx8mn-ddr4-evk',
      version: '6.2.7',
      startTime: '2024-08-26T14:59:38',
      duration: '2 hours',
      timeRemaining: '01:25',
      status: 'ready',
    }, {
      deviceType: 'cmx8mn-ddr4-evk',
      version: 'Custom',
      startTime: '2024-08-26T14:59:38',
      duration: '2 hours',
      timeRemaining: '--',
      status: 'failed',
    }
  ];

  // state for current search results
  const [searchResults, setSearchResults] = useState(userReservation);

  // handle search and pass the updated results to ReservationsBox
  const handleSearch = (query: string) => {
    const filteredResults = userReservation.filter((reservation) =>
      reservation.deviceType.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  
  // determine whether a user is visiting for the first time based on userID
  useEffect(() => {
    const storedUserID = localStorage.getItem('userID');
    if (!storedUserID) {
      setIsFirstVisit(true);
      localStorage.setItem('userID', 'userID');
    }
  }, [userID]);

  const heading = isFirstVisit ? 'Welcome' : 'Dashboard';
  const subtext = isFirstVisit
    ? 'Welcome to the Qt Hardware Cloud App! Here’s a quick guide to help you get started: Explore available devices, reserve them for your projects, and manage your reservations easily. Follow the instructions to get connected and start working.'
    : 'The dashboard shows all your current device reservations. To view connection instructions or manage your reservation, click on the device name or the desired row.';

  return (
    <div className='flex flex-col gap-[16px]'>
      <HeadingWithSubtext heading={heading} subtext={subtext}/>
      {/* possible success message from reserve device page */}
      {message === 'success' && (
        <ErrorOrSuccessMessage ErrorOrSuccess='success' MessageContent='Device was successfully reserved to the free pool.'/>
      )}
      <ReservationsSearch onSearch={handleSearch}/>
      <ReservationsBox searchResults={searchResults}/>
      {isFirstVisit && (
        <GettingStartedCard />
      )}
    </div>
  )
}