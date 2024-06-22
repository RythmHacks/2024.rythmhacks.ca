import Links from "../Links/Links"
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import './Navbar.scss'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  return (
    <>
      <div className='hidden md:block'>
        <NavbarDesktop />
      </div>
      <div className='block md:hidden'>
        <NavbarMobile />
      </div>
    </>
  )
}

const NavbarDesktop = () => {
  return (
    <nav className='fixed z-50 left-4 right-4 top-4 py-4 border-[1px] border-[#ffffff1f] rounded-2xl backdrop-blur-md bg-[#202020]/30'>
      <div className='max-w-[70rem] px-8 flex items-center justify-between text-xl'>
        <a className='flex items-center gap-4 text-accent text-2xl' href='#'>
          <img src={logo} className='w-8' />
          RythmHacks
        </a>
        <Links
          parentClass="gap-8 flex items-center"
          linkClass="text-gray-400 hover:text-gray-200 transition-colors duration-200 ease-in-out"
          key="navbar"
        />
      </div>
    </nav>
  )
}

const NavbarMobile = () => {

  const [isHamMenuOpened, setIsHamMenuOpened] = useState<boolean>(false)

  const handleHamMenuClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsHamMenuOpened(!isHamMenuOpened)
  }


  return (
    <nav className='navbar-mobile fixed z-50 left-4 right-4 top-4 py-4 border-[1px] border-[#ffffff1f] rounded-2xl backdrop-blur-md bg-[#202020]/30'>
      <div className='flex items-center justify-between text-xl w-full px-8'>
        <a className='flex items-center gap-4 text-accent text-2xl' href='#'>
          <img src={logo} className='w-8' />
          RythmHacks
        </a>
        <div onClick={handleHamMenuClick} className='h-full flex items-center'>
          <FiMenu size={24} />
        </div>
      </div>
      <div className={`${isHamMenuOpened ? "open" : "close"} ham-menu popup`}>
        <Links 
          parentClass="flex flex-col gap-4 bg-zinc-900 p-4 rounded-md"
          linkClass=""
          key="navbar"
        />
      </div>
  </nav>
)
}

export default Navbar