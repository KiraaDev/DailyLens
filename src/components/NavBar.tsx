import React, { useState } from 'react';
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import logo from '../assets/logo.svg';
import { MenuLinks } from '../config/menu';
import { Link, useLocation } from 'react-router';

const NavBar: React.FC = () => {

  const [nav, setNav] = useState<boolean>(false)

  const location = useLocation()

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='h-[15svh] flex justify-around items-center'>
      <div className=' flex items-center gap-5 text-sm'>
        <button className=' md:hidden cursor-pointer'
          onClick={toggleNav}
        >
          <img src={menu} alt="" />
        </button>
        <ul className=' items-center gap-5 text-sm hidden md:flex'>
          <a href="/">
            <img src={logo} alt="Logo" className='h-10' />
          </a>
          {MenuLinks.map((link, index) => (
            <li key={index} className={location.pathname === link.href ? 'font-bold text-[#af695c]' : ''}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex gap-5">
        <a href="" className=" text-xs md:text-sm">Contact Us</a>

        <label
          className="relative flex items-center w-10 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
          htmlFor="switch"
        >
          <input className="peer sr-only" id="switch" type="checkbox" />

          <span className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>

          <span
            className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-4 peer-checked:[&amp;_>_*]:scale-0"
          >
            <span
              className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition"
            >
            </span>
          </span>
        </label>

      </div>
      
      {/* mobile view */}
      <div className={nav ? 'flex fixed flex-col items-start left-0 top-0 bg-[#eaeaea] w-60 min-h-svh md:hidden z-50' : 'hidden'}>
        <div className=' flex justify-around items-center gap-10 flex-row w-full h-20 mt-10'>
          <img src={logo} alt="Logo" className=' h-10' />
          <button className='cursor-pointer'
            onClick={toggleNav}
          >
            <img src={close} alt="Close Sidebar" className='h-7' />
          </button>
        </div>
        <ul className=' flex flex-col ml-10 gap-10'>
          {MenuLinks.map((link, index) => (
            <li key={index} className={location.pathname === link.href ? 'font-bold text-[#af695c]' : ''}>
              <Link onClick={toggleNav} to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
