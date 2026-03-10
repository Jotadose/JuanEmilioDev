"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function shows the button when the user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // This function scrolls the page back to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // This sets up an event listener to check the scroll position
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // This cleans up the event listener when the component is removed
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="Volver arriba"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;
