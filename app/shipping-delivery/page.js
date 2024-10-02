'use client';
import React from 'react';
import Navbar from '../components/Navbar';
 
const ShippingDeliveryPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Shipping and Delivery Policy</h1>
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Delivery Timeframe</h2>
            <p>
              Our software products are available for immediate download and access once the payment is successfully processed.
              After purchasing, you will receive an email with instructions to download and install the product if applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Access and Activation</h2>
            <p>
              Once the app is downloaded from the Play Store or App Store, and the payment is confirmed, you will be granted full access to the product&apos;s features.
              Access credentials, if required, will be provided instantly upon successful payment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Digital Delivery</h2>
            <p>
              All our products are delivered digitally. There is no physical shipping involved.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Refund and Cancellation</h2>
            <p>
              As our products are digital and instantly accessible upon purchase, we have specific terms and conditions regarding refunds. 
              Please refer to our <a href="http://localhost:3000/cancellation-refund" className="text-blue-500 hover:underline">Cancellation and Refund Policy</a> for more details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Customer Support</h2>
            <p>
              If you face any issues with accessing or downloading the software, please reach out to our support team at 
              <a href="mailto:tech@inaara.ai" className="text-blue-500"> tech@inaara.ai</a> or call us at +91-8106134951.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingDeliveryPolicy;
