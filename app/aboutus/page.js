// About.js
import React from 'react';
import './About.css'; // Optional CSS file for styling
const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src= "images/diagnostics.jpg"
          alt="Hospital AI Solutions"
          className="hero-image"
          style={{ width: '1500px', height: '600px' }}
        />
        <div className="hero-text">
          <h1>Revolutionizing Healthcare with AI</h1>
          <p>
            At Inaara.ai, we are focused on enhancing patient management systems, optimizing workflows, and empowering hospitals with AI-powered insights.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          At <strong>Inaara.ai</strong>, we are dedicated to providing cutting-edge software solutions for hospitals. Our aim is to enhance the efficiency of patient management and provide insights to improve healthcare operations. 
        </p>
        <p>
          Our name, "Inaara," symbolizes bringing light into the world of digital healthcare transformation. We offer intelligent solutions to help hospitals improve patient care, reduce administrative tasks, and optimize performance.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          We leverage technology to streamline patient management processes, allowing hospitals to focus on delivering high-quality patient care. Our mission is to provide solutions that simplify workflows, automate tasks, and offer data-driven insights for better decision-making.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>
          Inaara.ai provides software solutions to hospitals that focus on:
        </p>
        <ul>
          <li><strong>Automating Patient Workflows:</strong> Streamlining administrative tasks like appointment scheduling, freeing up time for healthcare staff.</li>
          <li><strong>Optimizing Patient Data Management:</strong> Handling large volumes of data securely, ensuring fast access, and improving decision-making.</li>
          <li><strong>Providing Operational Insights:</strong> Using AI analytics to deliver actionable insights for optimizing hospital operations.</li>
        </ul>
        <img
          src="images/iStock.jpg" // Replace with actual image
          alt="AI-driven healthcare solutions"
          className="section-image"
        />
      </section>

      {/* Values Section */}
      <section className="values">
        <h2>Our Values</h2>
        <p>
          At <strong>Inaara.ai</strong>, we hold the following values:
        </p>
        <ul>
          <li><strong>Efficiency:</strong> Focusing on making healthcare management smoother and faster.</li>
          <li><strong>Reliability:</strong> Delivering solutions that provide consistent and dependable performance.</li>
          <li><strong>Innovation:</strong> Continuously innovating to bring new advancements to healthcare.</li>
          <li><strong>Compassion:</strong> Developing tools with the patient’s well-being as the priority.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join Us on This Journey</h2>
        <p>
          If you're a hospital looking to improve patient management and optimize your operations, Inaara.ai is here to provide the solutions you need. Let’s shape the future of healthcare together.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:tech@inaara.ai">tech@inaara.ai</a></p>
        <p>Phone: +91-8106134951</p>
        <p>Address: Church road, HUDA Colony,Hyderabad,India</p>
      </section>
    </div>
  );
};

export default About;
