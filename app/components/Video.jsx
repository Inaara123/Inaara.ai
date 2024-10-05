import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion'

const imageVariants = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  visible: (i) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: i * 0.3, // delay based on the image index
    },
  }),
};


const Video = () => {
  return (
    <div className='mx-4 sm:mx-10 md:mx-20 h-screen relative flex items-center justify-center'>
    <div className='h-4/6 sm:h-5/6 w-full sm:w-5/6 border-2 border-gray-700 rounded-3xl overflow-hidden translate-x-0 sm:translate-x-10 md:translate-x-20 skew-x-0 sm:skew-x-[32deg] p-2'>
      <div className='h-full w-full flex items-center justify-center'>
        <motion.div initial="hidden" whileInView="visible" className="relative">
          <motion.div custom={0} variants={imageVariants}>
            <Image
              src="/images/MacBook Air - 1(1).svg"
              height={1000}
              width={700}
              className="object-cover rounded-3xl"
              alt="First Image"
            />
          </motion.div>
          <motion.div
            custom={1}
            variants={imageVariants}
            className="absolute right-0 top-12 sm:top-24"
          >
            <Image
              src="/images/Frame 251.svg"
              height={300}
              width={300}
              className="object-cover rounded-3xl"
              alt="Second Image"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
  );
};

export default Video;
