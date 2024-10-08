import { motion } from 'framer-motion';
import React, { useState } from 'react';
const Inaara = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };
    
      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };
    
    const text = 'Inaara.ai';
    return (
    <div className="h-[80vh] bg-black">
    <div className="h-full w-full flex items-center justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-white author-medium flex space-x-2 cursor-pointer">
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0.5 }}
              animate={{
                opacity:
                  hoveredIndex === index ||
                  hoveredIndex === index - 1 ||
                  hoveredIndex === index + 1
                    ? 1
                    : 0.5,
                scale:
                  hoveredIndex === index ||
                  hoveredIndex === index - 1 ||
                  hoveredIndex === index + 1
                    ? 1.2
                    : 1,
                transition: { duration: 0.3 },
              }}
              className="glow"
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>
      </div>
    )
}
export default Inaara;
