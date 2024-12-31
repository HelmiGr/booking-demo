import { useState } from 'react'
import { X } from 'react-feather'

// add one of the allowed words as a prop when rendering to pick which card to use
// example: "<ErrorOrSuccessMessage='error'/>" to pick the error card
interface ErrorOrSuccessMessageProps {
    MessageContent: string;
    ErrorOrSuccess: 'error' | 'success' // allowed words to pick card
}


export default function ErrorOrSuccessMessage({ ErrorOrSuccess, MessageContent }: ErrorOrSuccessMessageProps) {
  const [isVisible, setIsVisible] = useState(true);

  // changes card content based on the message type
  const errorOrSuccessConfig = {
    error: {
      heading: 'Error!',
      bgClass: 'bg-error-message-red', 
    },
    success: {
      heading: 'Success!',
      bgClass: 'bg-success-message-green',
    },
  };

  // configuration for the passed status
  const messageTypeConfig = errorOrSuccessConfig[ErrorOrSuccess];
  
  // hides the card when the X icon is clicked
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
    <div className={`w-[full] max-w-[1033px] rounded-lg object-left px-8 py-4 gap-1 text-brand-pine ${messageTypeConfig.bgClass} bg-opacity-20`}>
        <div className='flex gap-[24px] justify-between items-center'>
            <h2 className='font-semibold text-[20px] leading-[32px]'>{messageTypeConfig.heading}</h2>
            <X className='w-[28px] h-[28px]' onClick={handleClose}/>
        </div>
        <p>{MessageContent}</p>
    </div>
    )
  )
}