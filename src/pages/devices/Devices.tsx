import HeadingWithSubtext from '../../components/HeadingWithSubtext'
import DeviceFilter from './DeviceFilter'
import AvailableDeviceBox from './AvailableDeviceBox'

const heading = 'Devices';
const subtext = 'Here is the list of available devices, showing how many are available along with their supported Qt versions. Use the filters to find the device you need, and select it from the list below. To reserve a device, simply complete the reservation process and check the availability status to ensure the device is ready for use.'

export default function Devices() {
  return (
    <div className='flex flex-col gap-[16px]'>
       <HeadingWithSubtext heading={heading} subtext={subtext}/>
       <DeviceFilter />
       <AvailableDeviceBox />
    </div>
  )
}
