import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Intersection Observer setup to trigger animations when the component is in view
  useEffect(() => {
    const currentHeroRef = heroRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 } // 30% of the Hero component must be visible to trigger animation
    );

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      {/* Fade-in and upward motion for the heading */}
      <motion.h2
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Ofonime Nsikak eno
      </motion.h2>

      {/* Text with subtle animation */}
      <motion.p
        className="text-xl max-w-2xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate and skilled Frontend Developer with experience in building
        responsive, user-centric web applications using modern technologies such
        as React, Typescript, Tailwind CSS, and Bootstrap. Strong attention to
        detail, keen problem-solving skills, and a commitment to creating clean,
        maintainable code.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.button
        className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-md hover:bg-gray-300 transition-all"
        initial={{ scale: 0.8 }}
        animate={{ scale: isInView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        onClick={handleShow} // used for opening the modal
      >
        Get in Touch
      </motion.button>
      <ContactModal show={showModal} handleClose={handleClose} />

      {/* Adding animated scrolling arrow */}
      <motion.div
        className="mt-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
