'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>EIDEN</div>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="btn" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem', boxShadow: '4px 4px 0px var(--pure-black)' }}>
          Get in Touch
        </a>
      </div>
    </header>
  );
}
