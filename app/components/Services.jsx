'use client';
import Image from 'next/image'
import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRouter } from 'next/navigation';

const Services = () => {
    const router = useRouter();
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({ target: targetRef });

    const height = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);

    const handleButtonClick = (path) => {
        router.push(path);  // Use router.push to navigate to the desired path
    };

    return (
        <div 
    ref={targetRef}
    className='mx-4 sm:mx-10 md:mx-20 mt-20 sm:mt-40 md:mt-60 flex flex-col gap-2 items-center justify-center relative'>
    <h1 className='text-3xl sm:text-4xl md:text-5xl author-semibold text-center'>
        Beautifully crafted applications that make<br/> <span className='text-blue-400'>bookings</span> a <span className='text-purple-400'>breeze</span>!
    </h1>
    <p className='author-medium text-gray-400 text-lg sm:text-xl text-center'>Explore our applications below</p>
    <div className='flex flex-col w-full gap-10 mt-4'>
        <div className='flex flex-col md:flex-row items-center justify-between border-t-2 py-4'>
            <Image src="/images/booking-online.png" height={200} width={200} className='object-cover invert w-1/3 md:w-1/6' />
            <div className='flex flex-col md:flex-row items-start w-full md:w-4/5 justify-between mt-4 md:mt-0'>
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <h1 className='w-full author-medium text-3xl sm:text-4xl md:text-5xl text-indigo-400'>Queue Management App</h1> 
                    <button onClick={() => handleButtonClick('/queue-management')} className='border-2 w-full md:w-4/5 border-white rounded-full px-4 py-2 flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-in'>
                        <div className='overflow-hidden relative'>
                            <h1 className='author-medium text-lg sm:text-xl group-hover:-translate-y-10 group-hover:text-black transition-all duration-500'>View App</h1>
                            <h1 className='author-medium text-lg sm:text-xl absolute group-hover:-translate-y-7 group-hover:text-black translate-y-0 transition-all duration-500'>View App</h1>
                        </div>
                        <div className='relative overflow-hidden'>
                            <h1 className='font-black text-xl sm:text-2xl group-hover:translate-x-10 transition-all group-hover:text-black duration-500'>›</h1>
                            <h1 className='font-black group-hover:text-black text-xl sm:text-2xl absolute -translate-y-8 -translate-x-10 group-hover:translate-x-0 transition-all duration-500'>›</h1>
                        </div>
                        <div className='absolute bg-[#FAFAFA] h-24 sm:h-36 w-24 sm:w-36 rounded-full translate-y-20 sm:translate-y-28 group-hover:scale-[3] transition-all duration-700 ease-in -z-10'/>
                    </button>

                </div>
                <div className='w-full md:w-1/2 ml-0 md:ml-2 mt-4 md:mt-3'>
                    <p className='author-light text-base sm:text-lg'>• Effortlessly enter and manage patient details with the receptionist app.</p>
                    <p className='author-light text-base sm:text-lg'>• Display current and upcoming patients on an Android TV.</p>
                    <p className='author-light text-base sm:text-lg'>• Improve patient flow and minimize waiting times.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between border-t-2 py-4'>
            <Image src="/images/dashboard.jpeg" height={100} width={100} className='object-cover invert w-1/3 md:w-1/6' />
            <div className='flex flex-col md:flex-row items-start w-full md:w-4/5 justify-between mt-4 md:mt-0'>
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <h1 className='w-full author-medium text-3xl sm:text-4xl md:text-5xl text-indigo-400'>Comprehensive Analytics Dashboard</h1>
                    <button onClick={() => handleButtonClick('/dashboard')} className='border-2 w-full md:w-4/5 border-white rounded-full px-4 py-2 flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-in'>
                        <div className='overflow-hidden relative'>
                            <h1 className='author-medium text-lg sm:text-xl group-hover:-translate-y-10 group-hover:text-black transition-all duration-500'>View App</h1>
                            <h1 className='author-medium text-lg sm:text-xl absolute group-hover:-translate-y-7 group-hover:text-black translate-y-0 transition-all duration-500'>View App</h1>
                        </div>
                        <div className='relative overflow-hidden'>
                            <h1 className='font-black text-xl sm:text-2xl group-hover:translate-x-10 transition-all group-hover:text-black duration-500'>›</h1>
                            <h1 className='font-black group-hover:text-black text-xl sm:text-2xl absolute -translate-y-8 -translate-x-10 group-hover:translate-x-0 transition-all duration-500'>›</h1>
                        </div>
                        <div className='absolute bg-[#FAFAFA] h-24 sm:h-36 w-24 sm:w-36 rounded-full translate-y-20 sm:translate-y-28 group-hover:scale-[3] transition-all duration-700 ease-in -z-10'/>
                    </button>
                </div>
                <div className='w-full md:w-1/2 ml-0 md:ml-2 mt-4 md:mt-3'>
                    <p className='author-light text-base sm:text-lg'>• Gain real-time insights on customer demographics, including age groups and locations.</p>
                    <p className='author-light text-base sm:text-lg'>• Analyze which marketing channels are driving the most traffic and conversions.</p>
                    <p className='author-light text-base sm:text-lg'>• Track patient engagement and optimize service based on detailed data analytics.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between border-t-2 py-4'>
            <Image src="/images/ai.png" height={200} width={200} className='object-cover grayscale invert w-1/3 md:w-1/6' />
            <div className='flex flex-col md:flex-row items-start w-full md:w-4/5 justify-between mt-4 md:mt-0'>
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <h1 className='w-full author-medium text-3xl sm:text-4xl md:text-5xl text-indigo-400'>A.I Insights</h1>
                    <button onClick={() => handleButtonClick('/ai')} className='border-2 w-full md:w-4/5 border-white rounded-full px-4 py-2 flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-in'>
                        <div className='overflow-hidden relative'>
                            <h1 className='author-medium text-lg sm:text-xl group-hover:-translate-y-10 group-hover:text-black transition-all duration-500'>View App</h1>
                            <h1 className='author-medium text-lg sm:text-xl absolute group-hover:-translate-y-7 group-hover:text-black translate-y-0 transition-all duration-500'>View App</h1>
                        </div>
                        <div className='relative overflow-hidden'>
                            <h1 className='font-black text-xl sm:text-2xl group-hover:translate-x-10 transition-all group-hover:text-black duration-500'>›</h1>
                            <h1 className='font-black group-hover:text-black text-xl sm:text-2xl absolute -translate-y-8 -translate-x-10 group-hover:translate-x-0 transition-all duration-500'>›</h1>
                        </div>
                        <div className='absolute bg-[#FAFAFA] h-24 sm:h-36 w-24 sm:w-36 rounded-full translate-y-20 sm:translate-y-28 group-hover:scale-[3] transition-all duration-700 ease-in -z-10'/>
                    </button>
                </div>
                <div className='w-full md:w-1/2 ml-0 md:ml-2 mt-4 md:mt-3'>
                    <p className='author-light text-base sm:text-lg'>• Uncover intricate patterns in patient demographics, enhancing targeted service offerings.</p>
                    <p className='author-light text-base sm:text-lg'>• Leverage predictive analytics to plan better marketing strategies.</p>
                    <p className='author-light text-base sm:text-lg'>• Track and analyze patient types and visit frequencies to inform decision-making.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Services
