import styles from '../styles/ContactFooter.module.css';

export default function ContactFooter() {
  return (
    <section className={styles.contactSection} id="contact">
      {/* Top Black Fade Transition */}
      <div className={styles.topFade}></div>

      {/* Top Left Blue Stroke */}
      <div className={`${styles.arcBase} ${styles.topArcLeft}`}>
        <img  
          src="/TeamBlueUpperLeftStroke.webp" 
          alt="Blue Stroke Upper Left" 
          className={styles.arcImg} loading="lazy" />
      </div>

      {/* Top Right Blue Stroke */}
      <div className={`${styles.arcBase} ${styles.topArcRight}`}>
        <img  
          src="/TeamBlueUpperRightStroke.webp" 
          alt="Blue Stroke Upper Right" 
          className={styles.arcImg} loading="lazy" />
      </div>

      {/* Bottom Left Pink Stroke */}
      <div className={`${styles.arcBase} ${styles.bottomArcLeft}`}>
        <img  
          src="/TeamPinkLowerLeftStroke.webp" 
          alt="Pink Stroke Lower Left" 
          className={styles.arcImg} loading="lazy" />
      </div>

      {/* Bottom Right Pink Stroke */}
      <div className={`${styles.arcBase} ${styles.bottomArcRight}`}>
        <img  
          src="/TeamPinkLowerRightStroke.webp" 
          alt="Pink Stroke Lower Right" 
          className={styles.arcImg} loading="lazy" />
      </div>

      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>LIKE WHAT YOU SEE?</h2>
        
        {/* Diamond Symbol */}
        <div className={styles.diamond}></div>
        
        {/* Contact Buttons */}
        <div className={styles.buttonRow}>
          {/* WhatsApp Button */}
          <a href="https://wa.me/919741500851" target="_blank" rel="noopener noreferrer" className={styles.btnWrapper}>
            <div className={styles.btnTab}></div>
            <div className={styles.btnPill}>
              <span>+91 974 150 0851</span>
            </div>
            <img  
              src="/Whatsapp.webp" 
              alt="WhatsApp" 
              className={`${styles.brandIcon} ${styles.whatsappIcon}`} loading="lazy" />
          </a>

          {/* Instagram Button */}
          <a href="https://instagram.com/eiden.in" target="_blank" rel="noopener noreferrer" className={styles.btnWrapper}>
            <div className={styles.btnTab}></div>
            <div className={styles.btnPill}>
              <span>@eiden.in</span>
            </div>
            <img  
              src="/Instagram.webp" 
              alt="Instagram" 
              className={styles.brandIcon} loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
}
