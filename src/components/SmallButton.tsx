import { ReactNode } from 'react'

interface SmallButtonProps {
    text: string;
    icon?: ReactNode;
}

// less prominent button with any icon + text
export default function SmallButton({ text, icon }: SmallButtonProps) {
  return (
    <div className='flex h-[38px] w-[104px] gap-[10px] p-2 pt-[6px] pb-[8px] border border-small-button-border rounded-[6px] bg-white'>
        {/* icon if provided */}
        {icon && <div className='w-[20px] h-[20px] flex items-center justify-center pt-[4px] text-nav-icons-gray'>{icon}</div>}
        {/* text for button */}
        <p className='leading-[150%] text-[16px] font-semibold text-small-button-text'>{text}</p>
    </div>
  )
}