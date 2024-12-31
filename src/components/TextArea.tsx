interface SmallButtonProps {
    text: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ text, onChange }: SmallButtonProps) {
  return (
    <textarea 
    className='w-fill h-[126px] border border-gray-300 rounded px-[14px] pt-[9px] pb-[11px] bg-white resize-none'
    value={text}
    onChange={onChange} // notifies parent of changes
    >
    </textarea>
  )
}