import Image from 'next/image'
import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

const Services = () => {
    
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({ target: targetRef });

    const height = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);

    return (
        <div 
        ref={targetRef}
        className='mx-20 mt-20 flex flex-col gap-2 items-center justify-center relative'>
            <h1 className='text-5xl author-semibold text-center'>
                Beautifully crafted applications that make<br/> <span className='text-blue-400'>bookings</span> a <span className='text-purple-400'>breeze</span>!
            </h1>
            <p className='author-medium text-gray-400 text-xl'>Explore our applications below</p>
            <div className='flex flex-col w-full gap-10 mt-4'>
                <div className='flex items-center justify-between border-t-2 py-4'>
                    <Image src="/images/booking-online.png" height={200} width={200} className='object-cover invert w-1/6' />
                    <div className=' flex items-start w-4/5 justify-between'>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <h1 className='w-full author-medium text-5xl text-indigo-400'>Queue Management App</h1>
                        <button className='border-2 w-4/5 border-white rounded-full px-4 py-2 flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-in'>
                        <div className='overflow-hidden relative'>
                            <h1 className='author-medium text-xl group-hover:-translate-y-10 group-hover:text-black transition-all duration-500'>View App</h1>
                            <h1 className='author-medium text-xl absolute group-hover:-translate-y-7 group-hover:text-black translate-y-0 transition-all duration-500'>View App</h1>
                        </div>
                        <div className='relative overflow-hidden'>
                            <h1 className='font-black text-2xl group-hover:translate-x-10 transition-all group-hover:text-black duration-500'>›</h1>
                            <h1 className='font-black group-hover:text-black text-2xl absolute -translate-y-8 -translate-x-10 group-hover:translate-x-0 transition-all duration-500'>›</h1>
                        </div>
                        <div className='absolute bg-[#FAFAFA] h-36 w-36 rounded-full translate-y-28 group-hover:scale-[3] transition-all duration-700 ease-in -z-10'/>
                        </button>
                    </div>
                        <div className='w-1/2 ml-2 mt-3'>
                            <p className='author-light text-lg'>• Effortlessly enter and manage patient details with the receptionist app.</p>
                            <p className='author-light text-lg'>• Display current and upcoming patients on an Android TV.</p>
                            <p className='author-light text-lg'>• Improve patient flow and minimize waiting times.</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between border-t-2 py-4'>
                    <Image src="/images/booking.png" height={200} width={200} className='object-cover invert w-1/6' />
                    <div className=' flex items-start w-4/5 justify-between'>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <h1 className='w-full author-medium text-5xl text-indigo-400'>Booking Management System</h1>
                        <button className='border-2 w-4/5 border-white rounded-full px-4 py-2 flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-in'>
                        <div className='overflow-hidden relative'>
                            <h1 className='author-medium text-xl group-hover:-translate-y-10 group-hover:text-black transition-all duration-500'>View App</h1>
                            <h1 className='author-medium text-xl absolute group-hover:-translate-y-7 group-hover:text-black translate-y-0 transition-all duration-500'>View App</h1>
                        </div>
                        <div className='relative overflow-hidden'>
                            <h1 className='font-black text-2xl group-hover:translate-x-10 transition-all group-hover:text-black duration-500'>›</h1>
                            <h1 className='font-black group-hover:text-black text-2xl absolute -translate-y-8 -translate-x-10 group-hover:translate-x-0 transition-all duration-500'>›</h1>
                        </div>
                        <div className='absolute bg-[#FAFAFA] h-36 w-36 rounded-full translate-y-28 group-hover:scale-[3] transition-all duration-700 ease-in -z-10'/>
                        </button>
                    </div>
                        <div className='w-1/2 ml-2 mt-3'>
                            <p className='author-light text-lg'>• Monitor current token numbers and estimated wait times.</p>
                            <p className='author-light text-lg'>• Set reminders for patients before their token is examined.</p>
                            <p className='author-light text-lg'>• Provide accurate wait time predictions and reduce no-shows.</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between border-t-2 py-4'>
                    <Image src="/images/artificial-intelligence.svg" height={200} width={200} className='object-cover grayscale invert w-1/6' />
                    <div className=' flex items-start w-4/5 justify-between'>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <h1 className='w-full author-medium text-5xl text-indigo-400'>A.I Assistant</h1>
                        <button className='border-2 w-4/5 border-white rounded-full px-4 py-2 flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-in'>
                        <div className='overflow-hidden relative'>
                            <h1 className='author-medium text-xl group-hover:-translate-y-10 group-hover:text-black transition-all duration-500'>View App</h1>
                            <h1 className='author-medium text-xl absolute group-hover:-translate-y-7 group-hover:text-black translate-y-0 transition-all duration-500'>View App</h1>
                        </div>
                        <div className='relative overflow-hidden'>
                            <h1 className='font-black text-2xl group-hover:translate-x-10 transition-all group-hover:text-black duration-500'>›</h1>
                            <h1 className='font-black group-hover:text-black text-2xl absolute -translate-y-8 -translate-x-10 group-hover:translate-x-0 transition-all duration-500'>›</h1>
                        </div>
                        <div className='absolute bg-[#FAFAFA] h-36 w-36 rounded-full translate-y-28 group-hover:scale-[3] transition-all duration-700 ease-in -z-10'/>
                        </button>
                    </div>
                        <div className='w-1/2 ml-2 mt-3'>
                            <p className='author-light text-lg'>• Generate real-time data on patient volumes and trends.</p>
                            <p className='author-light text-lg'>• Detailed insights into patient demographics, including age groups and geographic areas.</p>
                            <p className='author-light text-lg'>• Track and analyze patient types and visit frequencies to inform decision-making.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services