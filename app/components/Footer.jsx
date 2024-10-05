import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa';
const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const text = 'Inaara.ai';

  return (
    <div className="h-[100vh] bg-black">
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
      <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: About */}
            <div>
              <h2 className="text-xl font-bold mb-4">About Us</h2>
              <p>
              <a href="http://localhost:3000/aboutus" className="text-gray-400 hover:text-white">
          Visit our About Us page 
        </a>
              </p>
             <div className="mt-4">
             <h2 className="text-xl font-bold mb-4">Follow us on Social Media</h2>
             <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
          <FaTwitter size={24} />
        </a>
        </div>
      </div>
            </div>
           
            {/* Column 2: Services */}
            <div>
              <h2 className="text-xl font-bold mb-4">Our Services</h2>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <span className="text-white font-semibold">Patient Queue Display:</span> 
                  Real-time patient queue display on Android TVs for hospitals.
                </li>
                <li className="mb-2">
                  <span className="text-white font-semibold">Patient Insights:</span> 
                  Comprehensive dashboard for tracking and analyzing patient data.
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <ul>
                <li className="mb-2 text-gray-400">
                  Email: tech@inaara.ai
                </li>
                <li className="mb-2 text-gray-400">
                  Phone: +91-8106134951
                </li>
                <li className="mb-2 text-gray-400">
                  Address: Church road, HUDA Colony,Hyderabad,India
                </li>
              </ul>
            </div>

             {/* Column 4: Links */}
             <div>
              <h2 className="text-xl font-bold mb-4">Links</h2>
              <ul>
                <li className="mb-2">
                  <a href="https://inaara.ai/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="https://inaara.ai/terms-conditions" className="text-gray-400 hover:text-white">Terms and Conditions</a>
                </li>
                <li className="mb-2">
                  <a href="https://inaara.ai/cancellation" className="text-gray-400 hover:text-white">Cancellation and Refund</a>
                </li>
                <li className="mb-2">
                  <a href="https://inaara.ai/shipping-delivery" className="text-gray-400 hover:text-white">Shipping and Delivery</a>
                </li>
              </ul>
            </div>
            
            </div>
            </div>
      </footer>
    </div>
    
  );
};

export default Footer;
