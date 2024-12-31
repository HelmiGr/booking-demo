import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReserveDeviceHeading from './ReserveDeviceHeading'
import ReserveDeviceInstruction from "./ReserveDeviceInstruction"
import CreateReservationBox from './CreateReservationBox'

export default function ReserveDevice() {
  const [reservationStatus, setReservationStatus] = useState<'success' | 'error' | 'no input' | null>(null);
  const navigate = useNavigate();

  // callback function to handle the result of the reservation
  const handleReservationResult = (result: 'success' | 'error' | 'no input') => {
    setReservationStatus(result);
  };

  // redirect to dashboard if reservation is successful
  useEffect(() => {
    if (reservationStatus === 'success') {
      // navigate to the dashboard and send success message
      navigate('/', { state: { message: 'success' } }); 
    }
  }, [reservationStatus, navigate]);

  // gets the id of the device
  const { id } = useParams();
  // change id into a number
  const deviceID = id ? parseInt(id, 10) : undefined;
  // get device type based on the id from database
  const deviceType = 'imx8mn-ddr4-evk';

  // if no id is found in the url or it's invalid
  if (deviceID === undefined || isNaN(deviceID)) {
    return <p>Invalid or missing device ID.</p>;
  }

  return (
    <div className='flex flex-col gap-[16px] object-left-top'>
        <ReserveDeviceHeading />
        <ReserveDeviceInstruction deviceID={deviceID} successOrError={reservationStatus}/>
        <CreateReservationBox deviceType={deviceType} onReservationResult={handleReservationResult}/>
    </div>
  )
}