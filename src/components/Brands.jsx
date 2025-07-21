import React from 'react'

export default function Brands() {
  return (
    <div>
      <div className='w-full bg-black py-[50px]'>
     
        <div className='w-full flex items-center justify-center gap-4'>

          {/* Left Line */}
          <div className="w-[200px] h-[1px] bg-gradient-to-r from-transparent to-white" />


          {/* Text */}
          <div>
            <h1 className='text-white'>Trusted by 500+ global brand</h1>
          </div>

          {/* Right Line */}
          <div className="w-[200px] h-[1px] bg-gradient-to-l from-transparent to-white" />

        </div>
        {/*items*/}
        <div className='w-full  py-4 mt-2 '>
            <ul className='text-white text-[20px] flex gap-18 w-fit mx-auto'>
                <li><a href="#">Google</a></li>
                <li><a href="#">Open AI</a></li>
                <li><a href="#">Microsoft</a></li>
                <li><a href="#">Tesla</a></li>
                <li><a href="#">Walmart</a></li>
                <li><a href="#">Adobe</a></li>
                <li><a href="#">Framer</a></li>
            </ul>
        </div>
    </div>
    </div>
  )
}
