import React, { useEffect } from "react";
import { FaLaptopCode, FaCalculator, FaLightbulb } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS
        "YOUR_TEMPLATE_ID", // from EmailJS
        e.target,
        "YOUR_PUBLIC_KEY"   // from EmailJS
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white fixed w-full z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tuitupou Solutions</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#services" className="hover:text-gray-200">Services</a>
            <a href="#about" className="hover:text-gray-200">About</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </div>
          <a href="#contact" className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <header
        className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-4 relative"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Tech & Accounting Solutions</h2>
          <p className="max-w-2xl mb-6 text-lg">
            Bridging technology and finance to empower your business with innovative solutions and accurate financial strategies.
          </p>
          <a
            href="#services"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100"
          >
            Explore Services
          </a>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-12" data-aos="fade-down">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition" data-aos="fade-up">
            <FaLaptopCode className="text-blue-600 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Tech Solutions</h4>
            <p>Full-stack development, QA automation, cloud solutions, and AI integration tailored for your growth.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="100">
            <FaCalculator className="text-green-600 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Accounting Services</h4>
            <p>Bookkeeping, payroll, tax preparation, and compliance-focused financial management.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="200">
            <FaLightbulb className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Consulting</h4>
            <p>Custom strategies combining tech innovation with financial expertise to future-proof your business.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 max-w-5xl mx-auto px-4 text-center" data-aos="fade-right">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Tuitupou’s Tech & Accounting Solutions, we believe success comes from the right combination of innovation and precision. Our team is dedicated to helping businesses thrive by implementing efficient technology systems while keeping your financials accurate and compliant.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-50">
        <h3 className="text-3xl font-bold text-center mb-12" data-aos="fade-down">Contact Us</h3>
        <form
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow space-y-4"
          onSubmit={sendEmail}
          data-aos="zoom-in"
        >
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded" required />
          <textarea name="message" placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 rounded" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Tuitupou's Tech & Accounting Solutions. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;