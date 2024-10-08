'use client';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import TVImage from "/public/images/tv-display.png"; // Replace with your image path
import styles from "./queue.module.css"; // Assuming custom CSS

export default function QueueManagement() {

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Seamless Queue Management</h1>
        <p>Experience real-time patient updates with our integrated Queue Management System, leveraging Android TV for an enhanced waiting room experience.</p>
        <Image src={TVImage} alt="Queue Display" className={styles.tvImage}/>
      </section>

      {/* How it Works */}
      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <p>Our Queue Management System connects your app to an Android TV, providing real-time updates on patient numbers and assigned doctors. This ensures that patients in the waiting room are always aware of their queue status, eliminating confusion and improving efficiency.</p>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2>Features</h2>
        <ul>
          <li>Real-time queue updates displayed on large screens.</li>
          <li>Automatic synchronization between app and Android TV.</li>
          <li>Improved patient experience with minimal wait-time uncertainty.</li>
          <li>Clear visibility of patient numbers and their assigned doctors.</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}
