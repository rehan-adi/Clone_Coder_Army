import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-[#4B4A4A] w-auto h-[38vh] '>
            <div className='flex justify-between item'>
                <div className='ml-12 mt-12'>
                    <img src="https://www.coderarmy.in/assets/images/Logo_PNG/Black_Logo.png" width={260} />
                    <h3 className='text-white font-semibold text-base '>A community of coders, making the world a <br /> better place.</h3>
                </div>
                <div className=''>
                    <h1 className='text-[#FF7B00] pt-5 font-bold text-base tracking-widest'>QUICK LINKS</h1>
                    <ul className='text-[#D2CDCD] mt-3'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Tutorials</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[#FF7B00] pt-5 font-bold text-base tracking-widest'>COMPANY</h1>
                     <ul className='text-[#D2CDCD] mt-3'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Legal</li>
                     </ul>
                </div>
                <div className='mr-12'>
                    <h1 className='text-[#FF7B00] pt-5 font-bold text-base tracking-widest'>DON'T LET YOUR <br /> DREAMS STAY <br /> DREAMS</h1>
                    <h1 className='text-[#FF7B00] pt-2 font-bold text-base  tracking-widest'>BUILD YOUR SKILLS <br /> WITH US AND TURN <br /> THEM INTO REALITY</h1>
                </div>
            </div>
            <div className='border mt-6 border-white max-w-[1444px] ml-12'>

            </div>
            <div className=' ml-12 mt-5 flex justify-between mr-20 '>
                <h1 className='text-white font-semibold text-base'>Copyright © 2023 by Rohit Negi | All Rights Reserved.</h1>
                <div className='flex space-x-5 '>
                <FaLinkedin className=' text-3xl cursor-pointer hover:text-indigo-700 text-indigo-600  ' />
                <FaGithub className='text-3xl cursor-pointer text-black ' />
                <FaYoutube className='text-3xl cursor-pointer text-red-600' />
            </div>
            </div>
        </div>
    )
}

export default Footer