import { FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    
      <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: About */}
            <div>
            <h1 className="text-2xl font-bold mb-4 text-white">
              INAARA AI SOLUTIONS PRIVATE LIMITED
            </h1>
              <h2 className="text-xl font-bold mb-4">About Us</h2>
              <p>
              <a href="https://inaara.ai/aboutus" className="text-gray-400 hover:text-white">
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
    
  );
};

export default Footer;
