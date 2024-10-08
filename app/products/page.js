'use client';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from './Products.module.css'; // Import the CSS for custom styles

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      {/* Navbar Section */}
      <Navbar />

      {/* Products Heading Section */}
      <section className={styles.heading}>
        <h1 className="text-4xl font-semibold mb-2">Our Products</h1>
        <p className={styles.subheading}>Choose the best solution for your business needs</p>
      </section>

      {/* Products List Section */}
      <section className={styles.products}>
        {/* Android TV Product */}
        <div className={styles.productCard}>
          <h2 className={styles.productTitle}>Android TV</h2>
          <p className={styles.price}>₹12,000 / year</p>
          <ul className={styles.features}>
            <li>• Android TV software</li>
            <li>• Simple queue display</li>
            <li>• Easy-to-use interface</li>
          </ul>
         {/* <button className={styles.selectButton}>Choose Plan</button>*/}
        </div>

        {/* TV + Dashboard Analytics Product */}
        <div className={styles.productCard}>
          <h2 className={styles.productTitle}>TV + Dashboard Analytics</h2>
          <p className={styles.price}>₹18,000 / year</p>
          <ul className={styles.features}>
            <li>• Android TV software</li>
            <li>• Detailed analytics dashboard</li>
            <li>• Track patient trends and metrics</li>
          </ul>
         {/* <button className={styles.selectButton}>Choose Plan</button>*/}
        </div>

        {/* TV + Dashboard + AI Product (Recommended) */}
        <div className={`${styles.productCard} ${styles.recommended}`}>
          <h2 className={styles.productTitle}>TV + Dashboard + AI</h2>
          <p className={styles.price}>₹25,000 / year</p>
          <ul className={styles.features}>
            <li>• Android TV software</li>
            <li>• Advanced AI-powered analytics</li>
            <li>• Predictive insights and forecasts</li>
            <li>• Comprehensive dashboard reports</li>
          </ul>
          {/*<button className={`${styles.selectButton} ${styles.recommendedButton}`}>Recommended Plan</button>*/}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
