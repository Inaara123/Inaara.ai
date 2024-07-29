import Image from 'next/image'
import React from 'react'
import lottie from 'lottie-web';

const Hero = () => {
  return (
    <div className='h-screen mx-20 pt-20 flex flex-col gap-8 items-center justify-center text-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-7xl author-medium text-[#FAFAFA] leading-[60px]'>Revolutionising
          <br/>
          {/* <span className='bg-gradient-to-br from-blue-400 to-purple-400 text-transparent bg-clip-text text-6xl author-semibold'>Patient Management</span> */}
          <span className='bg-gradient-to-r from-blue-400 to-purple-400 text-blue-400 bg-clip-text text-6xl author-semibold'>Patient Management</span>
        </h1>
        <p className='text-xl author-medium text-gray-300'>Transforming your patient management process,<br/> enhancing efficiency and improving the overall patient experience.</p>
      </div>
      <div className='flex gap-10'>
        <button className='border-2 border-white rounded-full px-4 py-2 flex items-center justify-center gap-2 group relative overflow-hidden hover:border-[#5226f3] transition-all duration-500 ease-in'>
          <div className='overflow-hidden relative'>
            <h1 className='author-medium text-xl group-hover:-translate-y-10 transition-all duration-500'>View our Products</h1>
            <h1 className='author-medium text-xl absolute group-hover:-translate-y-7 translate-y-0 transition-all duration-500'>View our Products</h1>
          </div>
          <div className='relative overflow-hidden'>
            <h1 className='font-black text-2xl group-hover:translate-x-10 transition-all duration-500'>›</h1>
            <h1 className='font-black text-2xl absolute -translate-y-8 -translate-x-10 group-hover:translate-x-0 transition-all duration-500'>›</h1>
          </div>
          <div className='absolute bg-[#5226f3] h-36 w-36 rounded-full translate-y-28 group-hover:scale-[3] transition-all duration-700 ease-in -z-10'/>
        </button>
      </div>
      {/* <div>
            <Image src="/images/online-doctor-appointment.svg" height={300} width={300} className=''/>
      </div> */}
      {/* <Image src="/images/microscope.png" height={200} width={200} className='absolute left-12 top-16'/> */}
      <Image src="/images/mobile-in-hand.png" height={300} width={300} className='absolute left-20 bottom-12'/>
      <Image src="/images/businessman-working-on-laptop.png" height={300} width={300} className='absolute right-20 '/>
      <Image src="/images/medical-task.png" height={80} width={80} className='absolute left-44 top-20  '/>
      <Image src="/images/star.png" height={30} width={30} className='absolute right-44 top-44  '/>
      <Image src="/images/star.png" height={80} width={80} className='absolute right-6 top-16  '/>
      <Image src="/images/star.png" height={50} width={50} className='absolute left-28 top-56  '/>
    </div>
  )
}

export default Hero