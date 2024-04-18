import Links from "../Links/Links"
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import './Navbar.scss'
import { FiMenu } from 'react-icons/fi'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className='hidden md:block'>
        <NavbarDesktop />
      </div>
      <div className='block md:hidden'>
        <NavbarMobile />
      </div>
    </nav>
  )
}

const NavbarDesktop = () => {
  return (
    <nav className='border-b-[1px] border-b-[#6A6A6A] py-8 absolute top-0 w-full z-10'>
      <div className='max-w-[70rem] mx-auto flex items-center justify-between text-xl px-8'>
        <a className='flex items-center gap-4 text-accent' href='#'>
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
    <nav className='navbar-mobile'>
      <div className='flex items-center justify-between text-xl w-full'>
        <a className='flex items-center gap-4 text-accent' href='#'>
          <img src={logo} className='w-8' />
          RythmHacks
        </a>
        <div onClick={handleHamMenuClick} className='h-full flex items-center'>
          <FiMenu size={24} />
        </div>
      </div>
      <div className={`${isHamMenuOpened ? "open" : "close"} ham-menu popup`}>
        <Links 
          parentClass="flex flex-col gap-4 bg-slate-900 p-4 rounded-md"
          linkClass=""
          key="navbar"
        />
      </div>
  </nav>
)
}

export default Navbar