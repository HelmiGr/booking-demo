interface VersionTagProps {
    version: string;
}

export default function VersionTag({ version }: VersionTagProps) {
  return (
    <div className='inline-block px-[6px] py-[2px] border rounded-[100px] bg-brand-pine text-white text-[12px] leading-[18px]'>
        {version}
    </div>
  )
}
