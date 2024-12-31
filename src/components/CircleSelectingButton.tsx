import { useState } from 'react'

interface CircleSelectingButtonProps {
  isSelected?: boolean;
  onClick: () => void;
}

// a circlular button to select items
export default function CircleSelectingButton({ isSelected, onClick }: CircleSelectingButtonProps) {
  const [isInnerCircleVisible, setIsInnerCircleVisible] = useState(true);

  // changes the visibility of the inner circle
  const toggleInnerCircle = () => {
    setIsInnerCircleVisible((prev) => !prev);
  };

  return (
    <div className='flex items-center justify-center w-[24px] h-[24px] border rounded-full border-brand-pine bg-white' onClick={() => { toggleInnerCircle(); onClick(); }}>
      {isSelected && isInnerCircleVisible && (
      <div className='w-[14px] h-[14px] bg-brand-pine border rounded-full'></div>
      )}
    </div>
  )
}