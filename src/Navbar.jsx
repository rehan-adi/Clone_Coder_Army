import React from 'react'
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div>
            <nav className='flex justify-between bg-white h-20 z-10 w-full items-center shadow-md fixed ' >
                <div className='ml-[120px]'>
                    <img src="https://www.coderarmy.in/assets/images/Logo_PNG/Black_Logo.png" width={190} />
                </div>
                <ul className='flex space-x-16 font-sans font-medium text-lg'>
                    <Link to='home' spy={true} smooth={true} offset={0} duration={1500} >
                    <li className='text-orange-500 hover:transition-color cursor-pointer  hover:underline'>Home</li>
                    </Link>
                    <Link  to='about' spy={true} smooth={true} offset={0} duration={1500} >
                    <li className='text-blue-950  hover:transition-color cursor-pointer hover:text-orange-500 hover:transition-color hover:underline  '>About us</li>
                    </Link>
                    <Link to='Placements' spy={true} smooth={true} offset={0} duration={1500} >
                    <li className='text-blue-950 hover:text-orange-500 cursor-pointer hover:underline'>Placements</li>
                    </Link>
                    <Link to='contact' spy={true} smooth={true} offset={0} duration={1500} >
                    <li className='text-blue-950 hover:text-orange-500 cursor-pointer hover:underline'>Contact</li>
                    </Link>
                </ul>
                <div>
                    <button className='bg-[#FF8A00] mr-2 py-3 font-medium text-white px-8 rounded-lg '>Login</button>
                    <button className='bg-[#0C24FF] mr-[120px] py-3 px-8 rounded-lg text-white '>Dashbord</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;