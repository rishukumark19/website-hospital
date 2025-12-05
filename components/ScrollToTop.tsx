import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-secondary hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;