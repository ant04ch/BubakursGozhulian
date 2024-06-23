import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isFooterVisible = scrollTop > 100; // Змініть 100 на відстань, яку ви вважаєте за потрібну
      setIsVisible(isFooterVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <p>&copy; 2024 Гожулян. Всі права захищені.</p>
      <a href="https://nupp.edu.ua/" className="footer-link">Партнери</a>
    </footer>
  );
}

export default Footer;
