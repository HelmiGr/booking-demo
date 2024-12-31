import logo from '../assets/Qt logo.png'
import profileImgDefault from '../assets/Default profile image.png'

export default function Header() {
  return (
    <div className='h-16 w-full flex justify-between items-center p-6 bg-white text-black shadow-header-shadow'>
        {/* Logo and website name */}
        <div className='flex items-center gap-3'>
            <img src={logo} alt='logo'/>
            <div className='font-semibold text-2xl'>Hardware Cloud</div>
        </div>
        {/* Username and profile image */}
        <div className='flex items-center gap-10'>
            <img src={profileImgDefault} alt='default-profile-picture'/>
            <div className='font-semibold text-font-13'>USERNAME</div>
        </div>
    </div>
  )
}
