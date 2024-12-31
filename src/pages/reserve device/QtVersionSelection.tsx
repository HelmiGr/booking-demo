import { useState } from 'react'
import CircleSelectingButton from '../../components/CircleSelectingButton'
import IndividualReservationFilter from '../../components/IndividualReservationFilter'
import UploadFileButton from '../../components/UploadFileButton'

interface QtVersionSelectionProps {
  onChange: (selectedVersion: string) => void;
}

export default function QtVersionSelection({ onChange }: QtVersionSelectionProps) {
  const [selectedButton, setSelectedButton] = useState<'selectQt' | 'uploadCustomQt'>('selectQt'); // initially sets selectQt as selected
  const [selectedVersion, setSelectedVersion] = useState<string>(''); // keeps track of the selected version
  const [dropdownVersion, setDropdownVersion] = useState<string>(''); // stores the dropdown selection
  const [uploadedFileName, setUploadedFileName] = useState<string>(''); // stores the uploaded file name

  const handleButtonClick = (button: 'selectQt' | 'uploadCustomQt') => {
    // sets the selected button as which ever button was clicked last
    setSelectedButton(button)
    if (button === 'selectQt') {
      // set the selected version to the dropdown value when switching to dropdown selection
      setSelectedVersion(dropdownVersion);
      // notify parent
      onChange(dropdownVersion); 
    } else if (button === 'uploadCustomQt') {
      // set the selected version to the uploaded file name when switching to upload
      setSelectedVersion(uploadedFileName);
      // notify parent
      onChange(uploadedFileName); 
    }
  };

  // handles changes in dropdown selection
  const handleVersionChange = (version: string) => {
    // update the dropdown version
    setDropdownVersion(version); 
    if (selectedButton === 'selectQt') {
      // update selected version if dropdown is active
      setSelectedVersion(version); 
      // notify parent
      onChange(version); 
    }
  };

  // handle file upload and set the uploaded file name as the selected version
  const handleFileUpload = (fileName: string) => {
    // update uploaded file name
    setUploadedFileName(fileName); 
    if (selectedButton === 'uploadCustomQt') {
      // update selected version if upload is active
      setSelectedVersion(fileName); 
      // notify parent
      onChange(fileName); 
    }
  };

  // sample data
  const customQtVersions = ['Qt 6.2.7', 'Qt 6.2.8', 'Qt 6.2.9', 'Qt 6.2.10', 'Qt 6.3.1', 'Qt 6.3.2', 'Qt 6.3.3', 'Qt 6.3.4'];

  return (
    <div className='flex gap-[24px] object-left'>
        <div className='flex flex-col gap-[6px]'>
            <div className='flex gap-[12px]'>
                {/* button to select from versions */}
                <CircleSelectingButton isSelected={selectedButton === 'selectQt'} onClick={() => handleButtonClick('selectQt')}/>
                <p className='font-semibold text-[16px]'>Select Qt version <span className="text-error-message-red">*</span></p>
            </div>
            {/* dropdown for selecting a custom version */}
            <IndividualReservationFilter text='Custom Qt version' options={customQtVersions} hasDropdown={true} onSelectOption={handleVersionChange}/>
        </div>
        <div className='flex flex-col gap-[6px]'>
            <div className='flex gap-[12px]'>
                  {/* button to upload a custom version */}
                  <CircleSelectingButton isSelected={selectedButton === 'uploadCustomQt'} onClick={() => handleButtonClick('uploadCustomQt')}/>
                  <p className='font-semibold text-[16px]'>Upload your custom Ot version</p>
            </div>
            {/* button for uploading a custom version */}
            <UploadFileButton onFileUpload={handleFileUpload}/>
        </div>
    </div>
  )
}