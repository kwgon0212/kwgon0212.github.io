"use client";

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(800);
  return (
    <section
      ref={ref}
      data-title="Contact"
      className={`min-h-screen flex items-center justify-center transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
          Contact
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">연락처</p>
      </div>
    </section>
  );
};

export default Contact;
