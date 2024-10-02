'use client';
import React from 'react';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
      <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 text-black mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

          <div className="space-y-4">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
              <p>We collect information about you in various ways to provide and improve our services. This information includes:</p>
              <ul className="list-disc ml-6">
                <li><strong>Personal Information:</strong> This includes your name, email address, phone number, job title, organization details, and any other information you provide when you register, contact us, or use our services.</li>
                <li><strong>Technical Data:</strong> We collect information such as your IP address, browser type, device type, operating system, and usage data through cookies and similar tracking technologies when you interact with our website or services.</li>
                <li><strong>Payment Information:</strong> For paid services, we collect payment-related information (e.g., billing address, card details, transaction data). However, payment processing is handled by third-party gateways, and we do not store your card details.</li>
                <li><strong>Usage Data:</strong> We gather data about your interactions with our software solutions, including patient queue display systems and dashboard analytics, to understand usage patterns and improve service quality.</li>
                <li><strong>Communications:</strong> If you contact us, we may collect records of your correspondence and any other data you provide.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
              <p>We may use the information collected from you for the following purposes:</p>
              <ul className="list-disc ml-6">
                <li>To Provide and Improve Services: Deliver, maintain, and improve our software solutions, including patient queue systems and dashboard insights.</li>
                <li>Personalization: Customize your experience, analyze usage patterns, and make recommendations to improve service efficiency.</li>
                <li>Payment Processing: Process payments and transactions securely through third-party payment gateways.</li>
                <li>Communication: Send you updates, respond to inquiries, provide customer support, and inform you about new features, promotions, or policy changes.</li>
                <li>Analytics and Insights: Analyze usage data to improve our software solutions, enhance user experience, and develop new products or services.</li>
                <li>Security and Fraud Prevention: Detect, prevent, and respond to security incidents, fraud, and unauthorized access to our services.</li>
                <li>Compliance: Fulfill our legal obligations and enforce our policies, agreements, and terms of use.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
              <p>We do not sell your personal information to third parties. However, we may share your data under these circumstances:</p>
              <ul className="list-disc ml-6">
                <li><strong>With Service Providers:</strong> We work with trusted service providers who assist in delivering our services, including hosting, payment processing, analytics, marketing, and customer support.</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law, to protect our rights, comply with legal processes, respond to lawful requests from public authorities, or prevent fraud or illegal activities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred to the relevant third party.</li>
                <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us explicit consent to do so.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Security of Your Information</h2>
              <p>
                We take the security of your data seriously and implement various administrative, technical, and physical measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, please note that no method of data transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect data about your interactions with our website and services. Cookies help us improve website functionality, enhance user experience, and analyze website traffic. You can adjust your browser settings to refuse cookies, but this may affect certain features of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc ml-6">
                <li>Access: Request access to the personal information we hold about you.</li>
                <li>Correction: Request correction of any inaccuracies in your data.</li>
                <li>Deletion: Request the deletion of your personal information, subject to legal obligations.</li>
                <li>Opt-out: Opt out of marketing communications or withdraw consent where applicable.</li>
                <li>Data Portability: Request a copy of your data in a structured, machine-readable format.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected or as required by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. International Data Transfers</h2>
              <p>
                If you are located outside the United States, please note that your information may be transferred to and processed in countries where data protection laws may differ from those in your jurisdiction. By using our services, you consent to the transfer of your information to the United States and other countries where we operate.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 18, we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites, services, or applications that are not controlled by us. This Privacy Policy does not apply to those third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We will notify you of any significant changes by posting the updated policy on our website or through other appropriate means. The "Effective Date" at the top of this policy indicates when it was last updated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:</p>
              <ul>
                <li>Email: <a href="mailto:tech@inaara.ai" className="text-blue-500 hover:underline">tech@inaara.ai</a></li>
                <li>Address: Church road, HUDA Colony, Hyderabad, India</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
  );
};

export default PrivacyPolicy;
