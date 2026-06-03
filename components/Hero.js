import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        {/* Banner Graphic representing yoni mudra above text */}
        <div className={styles.bannerImgContainer}>
          <img src="/Eiden 1.png" alt="Eiden Illustration Banner" className={styles.bannerImg} />
        </div>

        <h1 className={styles.title}>
          THE ALL <span className={styles.highlight}>AESTHETIC BRAND</span> YOU’VE BEEN <br />
          WAITING FOR
        </h1>
        
        <p className={styles.tagline}>
          Eiden is a design centric brand that focuses on all your printable needs to provide top quality designs and prints.
        </p>

        {/* Diamond Spacer */}
        <div className={styles.diamond}></div>
        
        <p className={styles.subTagline}>
          Making it an end to end aesthetic solution based model for all the needs of your brand
        </p>
        
      </div>
    </section>
  );
}
