import { useState } from 'react'
import QtVersionSelection from './QtVersionSelection'
import TimeDurationSelection from './TimeDurationSelection'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'

interface CreateReservationBoxProps {
  deviceType: string; 
  onReservationResult: (result: 'success' | 'error' | 'no input') => void;
}

export default function CreateReservationBox({ deviceType, onReservationResult }: CreateReservationBoxProps) {
  // state variables for version, duration, and reason of the reservation
  const [selectedVersion, setSelectedVersion] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [reason, setReason] = useState('');

  // function to handle the reservation creation
  const handleReserve = () => {
  if (!deviceType || !selectedVersion || !selectedDuration) {
    // if reservation fails send error to parent
    onReservationResult('no input');
  } else {
    const createdReservation = {
      deviceType, 
      version: selectedVersion,
      startTime: new Date().toISOString().slice(0, 19),
      duration: selectedDuration, // duration elsewhere?
      reason: reason || 'No reason provided', 
      } 
    
    // send reservation to database under current user's ID
    // const response = await fakeApiCall(createdReservation);

    /*if (response.success) {
         onReservationResult('success');
      } else {
       onReservationResult('error');
      } */

    // if the reservation is successful send success to parent
    onReservationResult('success');
    console.log('Created Reservation:', createdReservation);
  }
  };

  return (
    <div className='flex flex-col gap-[16px] px-[32px] py-[16px] object-left bg-custom-bg-gray'>
        <h2 className='text-[24px] leading-[133%] font-semibold'>Reservation</h2>
        <QtVersionSelection onChange={setSelectedVersion}/>
        <TimeDurationSelection onChange={setSelectedDuration}/>
        <p className='font-semibold text-[16px]'>Reason for reservation</p>
        <TextArea text={reason} onChange={(e) => setReason(e.target.value)}/>
        <div onClick={handleReserve}>
          <Button text='Reserve device'/>
        </div>
    </div>
  )
}