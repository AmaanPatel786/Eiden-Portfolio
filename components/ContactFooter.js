import styles from '../styles/ContactFooter.module.css';

export default function ContactFooter() {
  return (
    <section className={styles.contactSection} id="contact">
      {/* Top Left Arc */}
      <div className={`${styles.arcContainer} ${styles.topArcLeft}`}>
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arcSvg}>
          <circle cx="0" cy="0" r="160" stroke="url(#bluePurpleGrad)" strokeWidth="18" />
          <circle cx="0" cy="0" r="200" stroke="url(#bluePurpleGrad)" strokeWidth="8" />
          <circle cx="0" cy="0" r="230" stroke="url(#bluePurpleGrad)" strokeWidth="14" />
          <circle cx="0" cy="0" r="260" stroke="url(#bluePurpleGrad)" strokeWidth="6" />
          <circle cx="0" cy="0" r="290" stroke="url(#bluePurpleGrad)" strokeWidth="24" />
          <circle cx="0" cy="0" r="330" stroke="url(#bluePurpleGrad)" strokeWidth="12" />
          <defs>
            <linearGradient id="bluePurpleGrad" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7f00ff" />
              <stop offset="100%" stopColor="#00e5ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top Right Arc */}
      <div className={`${styles.arcContainer} ${styles.topArcRight}`}>
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arcSvg}>
          <circle cx="400" cy="0" r="160" stroke="url(#bluePurpleGrad)" strokeWidth="18" />
          <circle cx="400" cy="0" r="200" stroke="url(#bluePurpleGrad)" strokeWidth="8" />
          <circle cx="400" cy="0" r="230" stroke="url(#bluePurpleGrad)" strokeWidth="14" />
          <circle cx="400" cy="0" r="260" stroke="url(#bluePurpleGrad)" strokeWidth="6" />
          <circle cx="400" cy="0" r="290" stroke="url(#bluePurpleGrad)" strokeWidth="24" />
          <circle cx="400" cy="0" r="330" stroke="url(#bluePurpleGrad)" strokeWidth="12" />
        </svg>
      </div>

      {/* Bottom Left Arc */}
      <div className={`${styles.arcContainer} ${styles.bottomArcLeft}`}>
        <img src="/Eiden Stroke Bottom Left.png" alt="Stroke Graphic Bottom Left" className={styles.arcImg} />
      </div>

      {/* Bottom Right Arc */}
      <div className={`${styles.arcContainer} ${styles.bottomArcRight}`}>
        <img src="/Eiden Stroke Bottom Right.png" alt="Stroke Graphic Bottom Right" className={styles.arcImg} />
      </div>

      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>LIKE WHAT YOU SEE?</h2>
        
        {/* Diamond Symbol */}
        <div className={styles.diamond}></div>
        
        {/* Contact Buttons */}
        <div className={styles.buttonRow}>
          {/* WhatsApp Button */}
          <a href="https://wa.me/919741500851" target="_blank" rel="noopener noreferrer" className={styles.btnWrapper}>
            <div className={styles.btnTab}>
              <svg className={styles.brandIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <div className={styles.btnPill}>
              <span>+91 974 150 0851</span>
            </div>
          </a>

          {/* Instagram Button */}
          <a href="https://instagram.com/eiden.in" target="_blank" rel="noopener noreferrer" className={styles.btnWrapper}>
            <div className={styles.btnTab}>
              <svg className={styles.brandIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <div className={styles.btnPill}>
              <span>@eiden.in</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
