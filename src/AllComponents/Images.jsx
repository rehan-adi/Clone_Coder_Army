import React from 'react'


function Images() {
  return (
    <div id='Placements' className='h-[80vh] w-auto flex justify-center items-center bg-gradient-to-r mt-6 from-white to-[#f48217]'>
      <div className='bg-white w-[80vw] shadow-lg shadow-black h-[60vh]  overflow-hidden '>
        <h1 className='text-black text-center font-semibold text-4xl mt-5'>Get a chance to be placed at top PBC's</h1>
        <div className='flex mt-5 items-center justify-center space-x-10 animation-container '>
          <div className=''>
            <img src="https://www.coderarmy.in/assets/images/Sliding/meta.png" className='hover:scale-125 transition cursor-pointer duration-700' width={170} />
          </div>
          <div className='mt-6'>
          <img src="https://www.coderarmy.in/assets/images/Sliding/amazon.png" className='hover:scale-125 transition cursor-pointer duration-700' width={170} />
          </div>
          <div>
            <img src="	https://www.coderarmy.in/assets/images/Sliding/netflix.png" className='hover:scale-125 transition cursor-pointer duration-700' width={170}/>
          </div>
          <div className=''>
            <img src="	https://www.coderarmy.in/assets/images/Sliding/google.png" className='hover:scale-125 transition cursor-pointer duration-700' width={170} />
          </div>
          <div className=''>
            <img src="	https://www.coderarmy.in/assets/images/Sliding/micro.png" className='hover:scale-125 transition cursor-pointer duration-700' width={170} />
          </div>
          <div className=''>
            <img src="	https://www.coderarmy.in/assets/images/Sliding/salesforce.png" className='hover:scale-125 transition cursor-pointer duration-700' width={170} />
          </div>
        </div>
        <div className='flex justify-center items-center  animation-container-right space-x-10 mt-1'>
          <div className=''>
            <img src="https://www.coderarmy.in/assets/images/logo-comp/uber.png" className='hover:scale-125 transition duration-700 object-cover cursor-pointer' width={170} />
          </div>
          <div className=''>
            <img src="	https://www.coderarmy.in/assets/images/logo-comp/share-chat.png" className='hover:scale-125 transition duration-700 object-cover cursor-pointer' width={170} />
          </div>
          <div>
            <img src="https://www.coderarmy.in/assets/images/logo-comp/CRED-LOGO2.png" className='hover:scale-125 transition cursor-pointer duration-700' width={170} />
          </div>
          <div>
            <img src="	https://www.coderarmy.in/assets/images/logo-comp/Zomato_logo_PNG1.png"  className='hover:scale-125 transition  cursor-pointer duration-700' width={170} />
          </div>
          <div>
            <img src="https://www.coderarmy.in/assets/images/logo-comp/Swiggy.png"  className='hover:scale-125 transition cursor-pointer duration-700' width={170} />
          </div>
          <div>
            <img src="https://www.coderarmy.in/assets/images/logo-comp/razorpay-icon.png"  className='hover:scale-125 transition cursor-pointer duration-700' width={150} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Images;