import React, { useEffect, useState } from 'react'
import './navbar.css';
import {navItems} from '../data/Data';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(()=>{
    if (showMobileMenu) {
      document.body.style.overflow ="hidden"
    } else {
      document.body.style.overflow ="auto"
    }
  }, [showMobileMenu]);


  return (
    
    <>
      <div className='fixed bg-blue-300/15 backdrop-blur-sm h-10 top-0 w-full z-50
        px-3 transition-all'>

          {/*Navber menu start*/}
          <div className='container mx-auto flex items-center justify-between px-2'>
            <div className='text-2xl px-3 mt-1 text-outline text-white font-bold'>Tech Writ Demo</div>
            <ul className=' hidden mt-1 py-2 px-3 sm:flex space-x-8 text-white text-sm font-semibold uppercase'>
              {navItems.map((item)=>(
                <li key={item.name} className='navItems hover:text-cyan-800'>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>

            {/*Mobile menu start*/}
            <button className='mobileBtn text-white scroll-smooth text-2xl transition cursor-pointer md:hidden 
            z-50 fixed mt-1.5 right-4'>
              <HiMenuAlt3 onClick={()=> setShowMobileMenu(true)}
              className='menuBtn cursor-pointer'
              />
            </button>
          </div>
      </div>

      {/*Mobile men pop-out start*/}
      {showMobileMenu && (
        <div className='fixed inset-0 z-[100] bg-white/10 backdrop-blur-md bg-opacity-90 flex flex-col items-center 
        p-6 transition-all duration-300 md:hidden'>
          <MdClose onClick={()=> setShowMobileMenu(false)}
          className='text-white text-3xl ml-[20rem] cursor-pointer'
          />

          {/*Mobile menu items*/}
          <nav className='mt-10 text-blue-400 text-[24px] space-y-4 text-center'>
            <a  href="https://reid-dev-portfolio.vercel.app" 
            onClick={()=> setShowMobileMenu(false)}
            className="block cursor-pointer text-white font-semibold">Home</a>
            <a  href="https://reid-education.vercel.app" 
            onClick={()=> setShowMobileMenu(false)}
            className="block cursor-pointer text-white font-semibold">Education</a>
            <a  href="https://reid-ms-training.vercel.app" 
            onClick={()=> setShowMobileMenu(false)}
            className="block cursor-pointer text-white font-semibold">MS Training</a>
            <a  href="https://reid-dev-portfolio.vercel.app/#contact" 
            onClick={()=> setShowMobileMenu(false)}
            className="block cursor-pointer text-white font-semibold">Contact</a>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar