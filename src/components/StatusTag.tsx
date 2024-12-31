import ThreeDots from '../assets/ThreeDotsStatusTag.png'; // hardcoded for now

// add one of the allowed statuses as a prop when rendering to pick which button to use
// example: "<StatusTag status='failed'/>"
interface StatusTagProps {
  status: 'ready' | 'failed' | 'expired' | 'preparing'; // allowed statuses
}

export default function StatusTag({ status }: StatusTagProps) {
  // definitions for differences between buttons
  const statusConfig = {
    ready: {
      width: 'w-[62px]',
      bgClass: 'bg-status-green-bg',
      textClass: 'text-status-green',
      text: 'Ready',
      img: null, 
    },
    failed: {
      width: 'w-[61px]',
      bgClass: 'bg-status-yellow-bg',
      textClass: 'text-status-yellow',
      text: 'Failed',
      img: null, 
    },
    expired: {
      width: 'w-[70px]',
      bgClass: 'bg-status-red-bg',
      textClass: 'text-status-red',
      text: 'Expired',
      img: null, 
    },
    preparing: {
      width: 'w-[98px]',
      bgClass: 'bg-status-blue-bg',
      textClass: 'text-status-blue',
      text: 'Preparing',
      img: <img src={ThreeDots} alt="Three Dots" />, 
    },
  };

  // configuration for the passed status
  const config = statusConfig[status];

  return (
    <div className={`inline-flex items-center ${config.width} rounded-[100px] ${config.bgClass} gap-[4px] px-[12px] py-[4px]`}>
      <p className={`text-[14px] font-semibold leading-[20px] ${config.textClass}`}>{config.text}</p>
      {config.img}
    </div>
  );
}