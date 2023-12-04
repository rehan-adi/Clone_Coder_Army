import React from 'react'

function Contact() {
  return (
    <div>
        <div className='flex h-screen bg-white justify-center '>
            <div className='ml-14'>
                <h1 className='text-black font-bold text-4xl mt-10 text-center '>Contact Us ! </h1>
                <input type="text" placeholder='Full Name' className='bg-[#939598] py-3 placeholder-white border-none rounded-lg mt-10 px-8 text-sm' />
                <input type="text" placeholder='Email Adress' className='bg-[#939598] text-white placeholder-white py-3 ml-2 rounded-lg px-8 mt-10 text-sm '  />
                <br />
                <input type="text" placeholder='Mobile Number' className='bg-[#939598] text-white placeholder-white py-3 border-none rounded-lg mt-3 px-8 text-sm' />
                <input type="text" placeholder='Email Subject'  className='bg-[#939598] placeholder-white py-3 ml-2 text-sm border-none rounded-lg mt-3  px-8'  />
                <br />
                <textarea type="text" cols='56' rows='9' placeholder='Your Message' className='bg-[#939598] placeholder-white text-base mt-3 rounded-lg p-4 '/>
                <br />
                <button className='bg-[#939598] py-2 px-6 rounded-full mt-5 ml-36 shadow-lg text-white placeholder-white hover:shadow-2xl '>Send Message</button>
            </div>
            <div className='flex items-center justify-center mt-10 pl-6 ml-16'>
                <img src="https://www.coderarmy.in/assets/images/Imgwebp/webp/contactmewebp.webp" alt="Contact Image" width={730} />
            </div>
        </div>
    </div>
  )
}

export default Contact;