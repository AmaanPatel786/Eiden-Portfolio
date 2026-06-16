import styles from '../styles/Lookbook.module.css';

export default function Lookbook() {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        
        <div className={styles.customCollage}>
          {/* Row 1: Evolve Humanity Banner */}
          <div className={`${styles.fullWidthCard} ${styles.aspect1_89}`}>
            <img src="/Eiden 8.webp" alt="Evolve Humanity Banner" className={styles.collageImg} />
          </div>

          {/* Row 2: Escape the Matrix & Unleash the Beast */}
          <div className={styles.twoColumnRow}>
            <div className={`${styles.halfWidthCard} ${styles.aspect1}`}>
              <img src="/Eiden 9.webp" alt="Escape the Matrix" className={styles.collageImg} />
            </div>
            <div className={`${styles.halfWidthCard} ${styles.aspect1}`}>
              <img src="/Eiden 10.webp" alt="Unleash the Beast" className={styles.collageImg} />
            </div>
          </div>

          {/* Row 3: Pink Money Banner */}
          <div className={`${styles.fullWidthCard} ${styles.aspect1_5}`}>
            <img src="/Eiden 11.webp" alt="Pink Money Banner" className={styles.collageImg} />
          </div>

          {/* Row 4: Black Shirts Models */}
          <div className={styles.twoColumnRow}>
            <div className={`${styles.halfWidthCard} ${styles.aspect3_5}`}>
              <img src="/Eiden 12.webp" alt="Black Shirt Model Back" className={styles.collageImg} />
            </div>
            <div className={`${styles.halfWidthCard} ${styles.aspect3_5}`}>
              <img src="/Eiden 13.webp" alt="Black Shirt Model Front" className={styles.collageImg} />
            </div>
          </div>

          {/* Row 5: White Shirts Models */}
          <div className={styles.twoColumnRow}>
            <div className={`${styles.halfWidthCard} ${styles.aspect1}`}>
              <img src="/Eiden 14.webp" alt="White Shirt Model Back" className={`${styles.collageImg} ${styles.croppedImg}`} />
            </div>
            <div className={`${styles.halfWidthCard} ${styles.aspect1}`}>
              <img src="/Eiden 15.webp" alt="White Shirt Model Front" className={`${styles.collageImg} ${styles.croppedImg}`} />
            </div>
          </div>

          {/* Row 6: Blue Shirt Landscape Banner */}
          <div className={`${styles.fullWidthCard} ${styles.aspect2_58} ${styles.innerWidthBanner}`}>
            <img src="/Eiden 16.webp" alt="Blue Shirt Landscape Banner" className={styles.collageImg} />
          </div>

          {/* Row 7: Three Columns Street Collage */}
          <div className={styles.threeColumnRow}>
            <div className={`${styles.thirdWidthCard} ${styles.aspect3_4}`}>
              <img src="/Eiden 17.webp" alt="Street Model Polaroid 1" className={styles.collageImg} />
            </div>
            <div className={`${styles.thirdWidthCard} ${styles.aspect3_4}`}>
              <img src="/Eiden 18.webp" alt="Street Model Polaroid 2" className={styles.collageImg} />
            </div>
            <div className={`${styles.thirdWidthCard} ${styles.aspect3_4}`}>
              <img src="/Eiden 19.webp" alt="Street Model Polaroid 3" className={styles.collageImg} />
            </div>
          </div>

          {/* Row 8: Eiden Eye Banner with Bottom Fade Overlay */}
          <div className={`${styles.bottomBannerCard} ${styles.aspect2_1} ${styles.innerWidthBanner}`}>
            <img src="/Eiden 20.webp" alt="Eiden Close-Up Banner" className={styles.collageImg} />
            <div className={styles.gradientOverlayBottom}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
