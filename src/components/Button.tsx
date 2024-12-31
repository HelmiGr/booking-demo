interface ButtonProps {
    text: string;
}

// prominent button with any text
export default function Button({ text }: ButtonProps) {
  return (
    <button className='w-[163px] h-[44px] px-[24px] pt-[9px] pb-[11px] bg-brand-pine rounded-[6px] items-center font-semibold text-white'>
        {text}
    </button>
  )
}
