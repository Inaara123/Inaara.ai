'use client';
import Image from 'next/image';
import styles from './Dashboard.module.css'; // Assuming you have corresponding CSS or Tailwind for main styles
import Dashboard from "/public/images/dashboard_ex.jpeg";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const DashboardPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Navbar Section */}
      <Navbar />

      {/* Dashboard Heading Section */}
      <section className={styles.dashboardHeading}>
        <h1 className="text-4xl font-semibold mb-2">Real-time Analytics Dashboard</h1>
        <p className="text-lg">Get deep insights into patient demographics, visit reasons, and optimize your service offerings.</p>
      </section>

      {/* Dashboard Image Section */}
      <section className="flex justify-center mb-10">
        <Image 
          src={Dashboard}
          alt="Dashboard Overview" 
          width={1000} // Adjust width as needed
          height={600} // Adjust height as needed
          className={styles.dashboardImage} // Using CSS module for image styles
        />
      </section>

      {/* Dashboard Explanation Section */}
      <section className={styles.dashboardDescription}>
        <p className="text-lg leading-relaxed">
          This analytics dashboard provides a clear and concise view of important metrics for your clinic or hospital. 
          You can monitor key statistics like:
        </p>
        <ul className={`${styles.dashboardList} text-lg leading-relaxed`}>
          <li className={styles.dashboardListItem}><strong>Visitor Tracking:</strong> Keep track of the number of visits per day and month, and see trends over time.</li>
          <li className={styles.dashboardListItem}><strong>Location Insights:</strong> View where your visitors are coming from, helping you focus on specific regions.</li>
          <li className={styles.dashboardListItem}><strong>Reason for Visit:</strong> Understand the most common reasons for visits, allowing you to adjust your services accordingly.</li>
          <li className={styles.dashboardListItem}><strong>Age Groups & Demographics:</strong> Discover the age distribution of your patients to tailor services more effectively.</li>
          <li className={styles.dashboardListItem}><strong>Discovery Channels:</strong> Find out how patients are discovering your clinic, whether through Google, social media, or other sources.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          With this dashboard, you can optimize patient experience, reduce waiting times, and make data-driven decisions. 
          The data is updated in real-time and displayed both in the app and on your Android TV for better service transparency.
        </p>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default DashboardPage;
