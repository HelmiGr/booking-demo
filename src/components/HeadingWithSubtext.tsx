interface HeadingWithSubtextProps {
    heading?: string;
    subtext?: string;
}

// main heading + subtext for the top of the page
export default function HeadingWithSubtext({ heading, subtext }: HeadingWithSubtextProps) {
  return (
    <div className='flex flex-col gap-[16px]'>
        <h1 className='text-[48px] leading-[120%]'>{heading}</h1>
        <p className='text-[16px] leading-[150%]'>{subtext}</p>
    </div>
  )
}
