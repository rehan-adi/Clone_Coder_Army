import React from 'react'

function About() {
    return (
        <div className='bg-white h-[75vh] w-auto '>
            <div className='flex justify-between mt-16 ml-28 max-w-7xl'>
                <h1 className='text-black font-semibold text-5xl'>Learn from the <span className='text-[#FF8A00] '>Best!</span></h1>
                <button className='bg-[#FF8A00] mr-2 py-3 font-medium text-lg text-white px-10 rounded-lg  '>Know More</button>
            </div>
            <div className='border max-w-7xl mt-7 ml-28 border-black'>

            </div>
            <div className='flex justify-between'>
            <div className='ml-44 mt-14'>
                <img src="	src/AllComponents/Rehan.jpg" className='rounded-full' width={290} />
                <div className='text-center'>
                <h1 className='text-black text-3xl mt-3 font-bold'>MD Rehan</h1>
                <h1 className='text-[#777C85] mt-1 text-2xl font-bold'>Co-Founder, CoderArmy</h1>
            </div>
            </div>
            <div className='items-center mr-44' >
                <h4 className='text-[#FF8A00] mt-14 text-sm  font-bold'>ABOUT ME</h4>
                <h1 className='text-black text-3xl font-bold mt-2 '>Heartfelt Problem Solver, Instructor, and <br /> Visionary Leader, Striving to Make a <br /> Difference.</h1>
                <p className='mt-3 font-semibold text-base text-[#777C85]'>Working hard to make Technology better and more Impactful for the society.</p>
                <div className='bg-[#E6F9FF] mt-3 hover:scale-110 duration-700 py-8 rounded-lg '>
                    <h1 className='text-[#003366] text-center text-xl  font-bold'>
                      Post Graduate - MIT, Graduate - Harvard University
                    </h1>
                </div>
                <div className='bg-[#F7E6FF] mt-3 py-8 hover:scale-110 duration-700 rounded-lg '>
                    <h1 className='text-[#660099] text-center text-xl font-bold '> Co-Founder of Coder Army, Ex - Facebook Developer </h1>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;