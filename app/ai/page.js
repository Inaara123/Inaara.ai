'use client';
import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from './AIInsights.module.css'; // Make sure this path is correct

const AIInsightsPage = () => {
  return (
    <div className={styles.container}>
      {/* Navbar Section */}
      <Navbar />

      {/* AI Insights Heading Section */}
      <section className={styles.heading}>
        <h1 className="text-4xl font-semibold mb-2">AI Insights</h1>
        <p className={styles.subheading}>
          Harness the power of data to enhance patient experience and operational efficiency.
        </p>
      </section>

      {/* AI Insights Image Section */}
      <section className={styles.imageSection}>
        <Image 
          src="/images/artificial-intelligence.svg" 
          alt="AI Insights" 
          width={600} 
          height={400} 
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* AI Insights Explanation Section */}
      <section className={styles.explanation}>
        <p className="text-lg leading-relaxed">
          Our AI Insights platform provides comprehensive data-driven intelligence to optimize healthcare services. 
          With real-time data analysis, you can enhance decision-making and improve patient satisfaction.
        </p>
        <ul className="list-disc list-inside my-6 mx-auto text-lg leading-relaxed">
          <li className={styles.listItem}>
            <strong>Patient Demographics:</strong> Analyze in-depth data to understand key demographics such as age, location, and gender distribution.
          </li>
          <li className={styles.listItem}>
            <strong>Service Optimization:</strong> Leverage insights into patient trends, visit frequencies, and reasons to better align your services.
          </li>
          <li className={styles.listItem}>
            <strong>Marketing Insights:</strong> Discover where your patients are coming from to focus your outreach efforts more effectively.
          </li>
          <li className={styles.listItem}>
            <strong>Predictive Analytics:</strong> Use AI to forecast patient volumes and resource needs, streamlining your operations.
          </li>
          <li className={styles.listItem}>
            <strong>Actionable Intelligence:</strong> Make data-driven decisions to enhance patient experience, satisfaction, and overall performance.
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          With AI Insights, transform your healthcare facility with advanced analytics, real-time updates, and predictive modeling, helping you 
          stay ahead of trends and ensure optimal patient care.
        </p>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AIInsightsPage;
