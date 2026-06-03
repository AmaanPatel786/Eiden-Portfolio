'use client';

import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [btnText, setBtnText] = useState('SEND ENQUIRY 🔥');
  const [btnColor, setBtnColor] = useState('var(--neon-green)');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setBtnText('SENDING...');

    setTimeout(() => {
      setBtnText('SENT SUCCESSFULLY! 🔥');
      setBtnColor('var(--cyan)');
      e.target.reset();

      setTimeout(() => {
        setBtnText('SEND ENQUIRY 🔥');
        setBtnColor('var(--neon-green)');
        setIsDisabled(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.containerLimit}`}>
        <h2 className={styles.sectionHeader}>
          <span className={styles.headerHighlight}>CONTACT</span>
        </h2>
        
        <div className={styles.card}>
          <form id="contactForm" className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" id="name" required className={styles.input} />
            </div>
            <div>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" required className={styles.input} />
            </div>
            <div>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" rows="5" required className={styles.textarea}></textarea>
            </div>
            <button 
              type="submit" 
              className="btn" 
              disabled={isDisabled} 
              style={{ width: '100%', marginTop: 'var(--space-xs)', backgroundColor: btnColor }}
            >
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
