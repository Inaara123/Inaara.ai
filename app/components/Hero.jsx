import Image from 'next/image'
import React from 'react'
import lottie from 'lottie-web';

const Hero = () => {
  return (
    <div className='h-screen mx-4 sm:mx-10 md:mx-20 pt-10 sm:pt-20 flex flex-col gap-4 sm:gap-8 items-center justify-center text-center'>
  <div className='flex flex-col gap-1 sm:gap-2'>
    <h1 className='text-4xl sm:text-5xl md:text-7xl author-medium text-[#FAFAFA] leading-[40px] sm:leading-[50px] md:leading-[60px]'>
      Revolutionising
      <br/>
      <span className='bg-gradient-to-r from-blue-400 to-purple-400 text-blue-400 bg-clip-text text-3xl sm:text-4xl md:text-6xl author-semibold'>
        Patient Management
      </span>
    </h1>
    <p className='text-base sm:text-lg md:text-xl author-medium text-gray-300'>
      Transforming your patient management process,<br/> enhancing efficiency and improving the overall patient experience.
    </p>
  </div>
  <div className='flex flex-col sm:flex-row gap-4 sm:gap-10'>
    <button className='border-2 border-white rounded-full px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-center gap-2 group relative overflow-hidden hover:border-[#5226f3] transition-all duration-500 ease-in'>
      <div className='overflow-hidden relative'>
        <h1 className='author-medium text-base sm:text-xl group-hover:-translate-y-10 transition-all duration-500'>
          View our Products
        </h1>
        <h1 className='author-medium text-base sm:text-xl absolute group-hover:-translate-y-7 translate-y-0 transition-all duration-500'>
          View our Products
        </h1>
      </div>
      <div className='relative overflow-hidden'>
        <h1 className='font-black text-lg sm:text-2xl group-hover:translate-x-10 transition-all duration-500'>›</h1>
        <h1 className='font-black text-lg sm:text-2xl absolute -translate-y-8 -translate-x-10 group-hover:translate-x-0 transition-all duration-500'>›</h1>
      </div>
      <div className='absolute bg-[#5226f3] h-24 sm:h-36 w-24 sm:w-36 rounded-full translate-y-20 sm:translate-y-28 group-hover:scale-[3] transition-all duration-700 ease-in -z-10'/>
    </button>
  </div>
  <Image src="/images/mobile-in-hand.png" height={200} width={200} className='absolute left-10 hidden lg:block xl:block 2xl:block sm:left-20 bottom-6 sm:bottom-12'/>
  <Image src="/images/businessman-working-on-laptop.png" height={200} width={200} className='absolute right-10 hidden lg:block xl:block 2xl:block sm:right-20'/>
  <Image src="/images/medical-task.png" height={60} width={60} className='absolute left-20 sm:left-44 top-10 sm:top-20 hidden lg:block xl:block 2xl:block'/>
  <Image src="/images/star.png" height={20} width={20} className='absolute right-20 sm:right-44 top-20 hidden lg:block xl:block 2xl:block sm:top-44'/>
  <Image src="/images/star.png" height={60} width={60} className='absolute right-3 sm:right-6 top-8 hidden lg:block xl:block 2xl:block sm:top-16'/>
  <Image src="/images/star.png" height={40} width={40} className='absolute left-14 sm:left-28 top-28 hidden lg:block xl:block 2xl:block sm:top-56'/>
</div>
  )
}

export default Hero