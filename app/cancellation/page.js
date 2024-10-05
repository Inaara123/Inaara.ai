'use client';
import React from 'react';
import Navbar from '../components/Navbar'; // Ensure the path to Navbar is correct

const CancellationAndRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 text-black">
    {/* Navbar component is placed at the top */}
      <div className="max-w-3xl mx-auto mt-10"> {/* Add margin-top to the content */}
        <h1 className="text-3xl font-bold mb-6 text-center">Cancellation and Refund Policy</h1>

        <h2 className="text-xl font-semibold mb-2">1. Cancellation Policy</h2>
        <p>
          <strong>Subscription Services:</strong> You may cancel your subscription at any time through your account settings. Cancellations will take effect at the end of the current billing cycle, and no further charges will be applied.
        </p>
        <p>
          <strong>One-Time Purchases:</strong> Once a one-time purchase is made, cancellations are not permitted, as these products or services are delivered immediately upon payment.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Refund Policy</h2>
        <p>
          <strong>Subscription Services:</strong> If you cancel your subscription, you will continue to have access to the service until the end of the current billing period. No refunds will be provided for the remaining period after cancellation.
        </p>
        <p>
          <strong>One-Time Purchases:</strong> Refunds are only available for one-time purchases if there is a defect in the product or service delivered. Refund requests must be made within 7 days of purchase and will be reviewed on a case-by-case basis.
        </p>
        <p>Refunds will be processed using the original payment method. It may take 5-10 business days for the refund to reflect in your account, depending on your payment provider.</p>

        <h2 className="text-xl font-semibold mb-2">3. Exceptions</h2>
        <p>No refunds will be granted for services that have already been rendered or for downloadable digital products once they have been accessed or downloaded.</p>
        <p>Refunds are not available for discounted or promotional items.</p>

        <h2 className="text-xl font-semibold mb-2">4. Contact Us</h2>
        <p>If you have any questions or concerns about our Cancellation and Refund Policy, please contact us at:</p>
        <ul>
          <li>Email: <a href="mailto:tech@inaara.ai" className="text-blue-500">tech@inaara.ai</a></li>
          <li>Address: Church road, HUDA Colony,Hyderabad,India</li>
        </ul>
      </div>
    </div>
  );
};

export default CancellationAndRefundPolicy;
