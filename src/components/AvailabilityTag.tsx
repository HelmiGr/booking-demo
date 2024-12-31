// add one of the allowed availability options as a prop when rendering to pick which tag to use
interface AvailabilityTagProps {
  availability: 0 | 1 | 2 | 3; // allowed availability options
}

export default function AvailabilityTag({ availability }: AvailabilityTagProps) {

  const tag = availability > 0 ? 'Available' : 'NotAvailable';

  // definitions for differences between tags
  const availabilityConfig = {
    Available: {
      bgClass: 'bg-status-green-bg',
      textClass: 'text-status-green',
    },
    NotAvailable: {
      bgClass: 'bg-status-red-bg',
      textClass: 'text-status-red',
    },
  };

  const config = availabilityConfig[tag];

  return (
    <div className={`inline-flex items-center w-[105px] rounded-[100px] ${config.bgClass} gap-[4px] px-[12px] py-[4px]`}>
      <p className={`text-[14px] font-semibold leading-[20px] ${config.textClass}`}>{availability}/3 Available</p>
    </div>
  );
}

