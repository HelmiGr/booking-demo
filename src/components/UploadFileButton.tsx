import { useRef, useState } from 'react'
import {UploadCloud } from 'react-feather'

interface UploadFileButtonProps {
  onFileUpload: (fileName: string) => void; // callback to notify parent of the uploaded file
}

export default function UploadFileButton({ onFileUpload }: UploadFileButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');

  // handle file selection from file input
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // get the first selected file
    if (file) {
      setFileName(file.name); // set the file name to locally
      onFileUpload(file.name); // notify parent component
    }
  };

  // handle drag and drop event
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();  // prevent default browser behavior for drop
    const file = event.dataTransfer.files?.[0]; // get the dropped file
    if (file) {
      setFileName(file.name); // set the file name to display
      onFileUpload(file.name); // notify parent component
    }
  };

  // function to handle drag over event to allow drop
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // allows drop
  };

  return (
  <div className='flex flex-col gap-[6px]'>
    <div className='relative w-[473px] text-gray-900 border border-gray-300 rounded bg-white'>
      <div className='flex items-center text-[16px] gap-[12px] pl-[14px] pr-[16px] pt-[9px] pb-[11px]'
        onClick={() => fileInputRef.current?.click()} 
        onDrop={handleDrop} 
        onDragOver={handleDragOver}>
            <p className='flex-grow text-left m-0 leading-none'>
                {fileName || `Drag & drop file or browse`}
            </p>
            <div className='cursor-pointer gap-[10px] px-[2px] py-[4px] flex-none'>
              <UploadCloud className='w-[16px] h-[16px] m-0'/>
            </div>
      </div>
      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileSelect}/>
    </div>
    <p className='text-[14px] leading-[150%] text-gray-900'> Allowed extension: xz. Max 5MB</p>
  </div>
  )
}