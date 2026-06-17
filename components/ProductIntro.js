import styles from '../styles/ProductIntro.module.css';

export default function ProductIntro() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Background Neon Green Stroke */}
        <div className={styles.strokeBg}>
          <img src="/Eiden Green Stroke.webp" alt="Neon Green Stroke Background" className={styles.strokeImg} />
        </div>

        {/* Floating Mockup Card overlapping the white card */}
        <div className={styles.mockupContainer}>
          <img src="/eiden_products_showcase.webp" alt="Eiden Products Showcase" className={styles.mockupImg} />
        </div>

        {/* White Card Container */}
        <div className={styles.whiteCard}>
          <h2 className={styles.title}>OUR PRODUCTS ARE HERE TO SPEAK!</h2>
          <p className={styles.description}>
            We have an array of custom products and an array of <br />
            original designs all on our website - www.eiden.in/
          </p>
        </div>

        {/* Paradise Banner Headline below white card */}
        <div className={styles.paradiseText}>
          <span className={styles.yellowText}>COMPLETE YOUR PARADISE</span> <br />
          WITH EIDEN TODAY!
        </div>
      </div>
    </section>
  );
}
