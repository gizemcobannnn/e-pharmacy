import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <div className='grid grid-cols-3 bg-green-700 items-center'>
        <p className='text-white'>E-Pharmacy</p>
        <nav className='flex flex-row gap-0 justify-center'>
        {/**    <NavLink>Home</NavLink> 
            <NavLink>Medicine Store</NavLink> 
            <NavLink>Medicine</NavLink>  */}
        </nav>
        <div className='flex flex-row items-center'>
            <FiShoppingCart className='text-white text-md'/>
            <button className='text-white w-20'>Register</button>
            <button className='text-white w-20'>Login</button>
        </div>

    </div>
  )
}
