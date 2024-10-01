'use client';
import React from 'react';
import Navbar from '../components/Navbar';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 text-black"> {/* Applied the same container styles */}
      <div className="max-w-3xl mx-auto"> {/* Center the content similarly */}
        <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1> {/* Adjusted the font size and styles */}
        <h2 className="text-xl font-semibold mb-2 mt-6">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our services, you agree to these Terms, our Privacy Policy, and any other policies or guidelines that we may provide. If you do not agree to these Terms, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">2. Use of Services</h2>
        <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not use our services in a way that could damage, disable, or impair the website or interfere with any other party's use of our services.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">3. Account Registration</h2>
        <p>You may need to create an account to access certain features of our services. You agree to provide accurate and complete information when registering and to keep this information up-to-date.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">4. Intellectual Property Rights</h2>
        <p>All content, including text, graphics, logos, images, software, and other materials on our website and services, are the intellectual property of Inaara.ai or our licensors.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">5. Payment and Subscription</h2>
        <p>Certain features of our services may be subject to payment or subscription fees. By purchasing a subscription or service, you agree to the payment terms provided at the time of purchase.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">6. Termination</h2>
        <p>We reserve the right to terminate or suspend your access to our services at any time, with or without cause, notice, or liability, including if you violate these Terms.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">7. Disclaimer of Warranties</h2>
        <p>Our services are provided "as is" and "as available," without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or secure.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Inaara.ai shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or use.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">9. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Inaara.ai, its affiliates, employees, and agents from any claims, damages, liabilities, and expenses arising out of your use of our services or violation of these Terms.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">10. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">11. Changes to Terms</h2>
        <p>We may update these Terms from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes by posting the updated Terms on our website.</p>

        <h2 className="text-xl font-semibold mb-2 mt-6">12. Contact Us</h2>
        <p>If you have any questions or concerns about these Terms, please contact us at:</p>
        <ul className="list-disc pl-5">
          <li>Email: <a href="mailto:tech@inaara.ai" className="text-blue-500 hover:underline">tech@inaara.ai</a></li>
          <li>Address: Church road, HUDA Colony,Hyderabad,India</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
