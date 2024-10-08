import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    // Animation variants
    const menuVariants = {
        hidden: {
            x: '100%',
            y: '-100%',
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20,
            },
        },
        visible: {
            x: 0,
            y: 0,
            borderRadius: '10px',
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: -2, x: 100 },
        visible: { opacity: 1, y: 0, x: 0 },
    };

    const openWhatsApp = () => {
        const phoneNumber = "+918106134951"; // Replace with the WhatsApp number you want to use
        const message = "Hello, I'm interested in learning more about your services."; // Pre-filled message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };

    return (
        <div>
    <section className='fixed w-full px-4 sm:px-10 md:px-20 pb-6 z-50'>
        <div className='flex justify-between items-center pt-6'>
            <div>
                <Link href="/" className={`text-xl sm:text-2xl font-bold author-bold ${isActive ? 'text-black' : 'text-white'}`}><span className='text-2xl sm:text-3xl'>‹ › </span>INAARA.AI</Link>
            </div>
            {/* Toggle button */}
            {/* <div className='flex gap-4'>
                <div onClick={() => setIsActive(!isActive)} className={`${styles.button} z-50`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                    </div>
                </div>
            </div> */}
        </div>
        
        <button onClick={openWhatsApp} className={`border-[1.5px] border-white hover:border-[#23c989] px-4 py-2 rounded-full absolute right-4 sm:right-10 md:right-36 top-6 transition-all duration-500 ease-in-out ${isActive ? 'opacity-0' : 'opacity-100'} z-10 group overflow-hidden flex items-center justify-center `}>
            <div className='overflow-hidden relative flex items-center justify-center'>
                <h1 className='author-medium text-lg sm:text-xl group-hover:-translate-y-10 transition-all duration-500'>Contact us</h1>
                {/* <h1 className='author-medium text-xl absolute group-hover:-translate-y-7 translate-y-0 transition-all duration-500'>Whatsapp</h1> */}
                <Image src="/images/whatsapp-icon.svg" width={30} height={30} className='author-medium text-xl absolute group-hover:translate-y-0 translate-y-10 transition-all duration-500' />
            </div>
            <div className='w-24 h-24 sm:w-32 sm:h-32 bg-[#23c989] rounded-full absolute -z-10 translate-y-24 group-hover:scale-[2] transition-all duration-500 ease-in-out'/>
        </button>
    </section>
    <AnimatePresence>
        {isActive && (
            <motion.div
                initial="hidden"
                animate="visible"
                exit={{ y: '100%', borderRadius: '50%' }}
                transition={{ duration: 0.6 }}
                variants={menuVariants}
                className='fixed bg-white backdrop-blur-sm h-screen w-screen flex p-10 sm:p-20 justify-between items-end gap-5 sm:gap-10 z-40'
            >
                {/* Fullscreen menu content */}
                <motion.div
                    variants={menuItemVariants}
                >
                    <div className='flex flex-col justify-end items-end text-black'>
                        <h1 className='pb-2 text-xs sm:text-sm font-bold text-blue-500 uppercase'>Get in touch</h1>
                        <h1 className='author-regular text-xl sm:text-2xl pb-2'>inaara@gmail.com</h1>
                        <h1 className='font-medium text-xl sm:text-2xl pb-10'>+91 9988776655</h1>
                        <ul className='flex flex-row gap-2 sm:gap-3'>
                            <motion.li
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: 'spring', stiffness: 150 }}
                            ><a href="https://www.instagram.com/mubashir_7750"><img src="/assets/instagram.png" alt="" className='h-[30px] sm:h-[40px] rounded-full' /></a></motion.li>
                            <motion.li
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: 'spring', stiffness: 150 }}
                            ><a href=""><img src="/assets/twitter.png" alt="" className='h-[30px] sm:h-[40px] rounded-full' /></a></motion.li>
                            <motion.li
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: 'spring', stiffness: 150 }}
                            ><a href=""><img src="/assets/linkedin.png" alt="" className='h-[30px] sm:h-[40px] rounded-full' /></a></motion.li>
                            <motion.li
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: 'spring', stiffness: 150 }}
                            ><a href=""><img src="/assets/facebook.png" alt="" className='h-[30px] sm:h-[40px] rounded-full' /></a></motion.li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    variants={menuVariants}
                    exit={{ opacity: 0, y: '100%' }}
                    transition={{ duration: 0.4 }}
                    className='text-black text-6xl sm:text-8xl author-medium'>
                    <ul>
                        <motion.li
                            className='links before:bg-teal-400'
                            variants={menuItemVariants}
                            whileHover={{ x: 30 }}
                            transition={{ duration: 0.3 }}
                        ><Link href="/about" className='hover:text-gray-600 hover:transition-all hover:duration-500 transition-all duration-700'>About</Link>
                        </motion.li>
                        <motion.li
                            className='links before:bg-violet-400'
                            variants={menuItemVariants}
                            whileHover={{ color: "", x: 30 }}
                            transition={{ duration: 0.3 }}
                        ><Link href="/projects" className='hover:text-gray-600 hover:transition-all hover:duration-500 transition-all duration-700'>Products</Link></motion.li>
                        <motion.li
                            className='links before:bg-yellow-400'
                            variants={menuItemVariants}
                            whileHover={{ color: "", x: 30 }}
                            transition={{ duration: 0.3 }}
                        ><Link href="/solution" className='hover:text-gray-600 hover:transition-all hover:duration-500 transition-all duration-700'>Method</Link></motion.li>
                        <motion.li
                            className='links before:bg-green-400'
                            variants={menuItemVariants}
                            whileHover={{ color: "", x: 30 }}
                            transition={{ duration: 0.3 }}
                        ><Link href="/contact" className='hover:text-gray-600 hover:transition-all hover:duration-500 transition-all duration-700'>Contact</Link></motion.li>
                    </ul>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
</div>
    );
}

export default Navbar;
