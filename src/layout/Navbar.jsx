import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import {FaBars, FaTimes} from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = ()=>(setNav(!nav))
  return (
    <div className='flex z-50 w-full fixed justify-between px-4 items-center text-gray-200 h-[80px] bg-[#281906] top-0 right-0'>
      <div>
        <img src={logo} width={50} />
      </div>
    
        <ul className=' md:flex  hidden font-semibold monsterrat  '>
          <li> <Link to='/'onClick={() => {
                    window.scroll(0, 0);}} >Home</Link> </li>
          <li><Link to='/queendom' onClick={() => {
                    window.scroll(0, 0);}}  >Queendom</Link></li>
          <li><Link to='/ipada'onClick={() => {
                    window.scroll(0, 0);}}  > Ipada</Link></li>
          <li>Blog</li>
          <li>Gallery</li>
        </ul>
        <button
        type='button'
        className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  bg-light-brown text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      >
         
      </button>
   
      {/*  hambuger menu */}
      <div onClick={handleClick} className=' md:hidden flex z-10'>
        <FaBars/>

      </div>

      {/* mobile nav */}
      
      <ul className={!nav ? 'hidden' : '  absolute top-0 right-0 h-screen w-full  bg-[#242145] justify-center flex items-center flex-col ' }>
          <li className='text-4xl py-4'>Home</li>
          <li className='text-4xl py-4'>About</li>
          <li className='text-4xl py-4'>Skills</li>
          <li className='text-4xl py-4'>Projects</li>
          <li className='text-4xl py-4'>Contact</li>
        </ul>
      
      
    </div>
  )
}

export default Navbar
