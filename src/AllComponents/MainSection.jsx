import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";


function MainSection() {
  return (
    <main>
    <div className="bg-white text-black flex h-screen justify-center pt-[200px] ">
      <div className=" b-32  mr-10 h-ful text-center">
        <h1 className="text-6xl font-bold pt-16 text-blue-950 ">Be a part of our <span className='text-[#FF7B00]'>Army!</span> </h1>
        <p className='mt-6 text-gray-700 text-2xl text-center mr-16 ' >A community of coders, making world a better place.</p>
        <div className='flex justify-start items-center mt-8 space-x-4'>
           <FaLinkedin className='text-3xl cursor-pointer hover:text-indigo-700 text-indigo-600 ' /> 
           <FaGithub className='text-3xl cursor-pointer text-black ' />
           <FaYoutube className='text-3xl cursor-pointer text-red-600 hover:text-red-700' />
        </div>
        <div className='mt-8 flex justify-start'>
            <button className='btn text-black py-3 px-4 '>Enroll Now</button>
            <button className='bg-transparent py-2 px-6 text-black font-medium  border-2 border-[#FF7B00] rounded-md '>Watch Video <FaPhotoVideo className='inline-block ml-2' /> </button>
        </div>
      </div>
      <div className='ml-[80px]'>
        <img src="https://www.coderarmy.in/assets/images/Imgwebp/cwebp/frontpage-bgimage-removebg-min_1.webp" width={520} />
      </div>
    </div>
    <div className='h-[85vh] bg-gradient-to-r from-white to-[#f48217] mt-16  ' >
      <h1 className='text-black text-4xl text-center font-bold pt-8'>Articles</h1>
      <h3 className='text-center text-gray-600 font-extrabold text-base pt-10 '>DO YOU KNOW TEXT BEATS VIDEOS IN TERMS OF LEARNING SPEED.</h3>
       <div className='flex justify-center py-10 pt-12 ' >
       <div className='bg-white h-80 w-80 rounded-lg shadow-xl shadow-indigo-500  text-center hover:underline cursor-pointer  hover:text-blue-600 hover:scale-110 duration-700 transition ' >
            <h1 className='text-black pt-6  font-semibold hover:text-blue-600'>Data Structure</h1>
            <p className='text-base text-center text-gray-500 font-semibold p-5 pt-3' >DSA (Data Structures and Algorithms) are essential concepts in computer science, focused on efficient data organization and problem-solving techniques. They provide tools to store, retrieve, and process data, influencing the efficiency of software applications. Mastering DSA enhances coding skills and optimizes algorithmic solutions.</p>
        </div>
        <div className='bg-white h-80 w-80 ml-60 rounded-lg text-center hover:underline cursor-pointer hover:text-blue-600 shadow-xl shadow-cyan-500  hover:scale-110 transition duration-700 '>
            <h1 className='text-black font-semibold pt-5 '>C++</h1>
            <p className='text-base text-center text-gray-500 font-semibold p-4 pt-3 ' >C++ is a high-performance programming language known for its versatility and efficiency. It combines features like object-oriented programming and low-level memory control, making it ideal for diverse applications. Its extensive standard library and wide industry usage make C++ a popular choice for software development.</p>
        </div>
       </div>
    </div>
    </main>

  );
}

export default MainSection;
