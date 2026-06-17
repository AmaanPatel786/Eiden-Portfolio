import styles from '../styles/Lookbook.module.css';

export default function Lookbook() {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        
        <div className={styles.customCollage}>
          {/* Row 1: Evolve Humanity Banner */}
          <div className={`${styles.fullWidthCard} ${styles.aspect1_89} ${styles.fullBleedBanner}`}>
            <img src="/evolve_humanity_banner.webp" alt="Evolve Humanity Banner" className={styles.collageImg} loading="lazy" />
          </div>

          {/* Row 2: Escape the Matrix & Unleash the Beast */}
          <div className={styles.twoColumnRow}>
            <div className={`${styles.halfWidthCard} ${styles.aspect1}`}>
              <img src="/escape_the_matrix.webp" alt="Escape the Matrix" className={styles.collageImg} loading="lazy" />
            </div>
            <div className={`${styles.halfWidthCard} ${styles.aspect1}`}>
              <img src="/unleash_the_beast.webp" alt="Unleash the Beast" className={styles.collageImg} loading="lazy" />
            </div>
          </div>

          {/* Row 3: Pink Money Banner */}
          <div className={`${styles.fullWidthCard} ${styles.aspect1_5}`}>
            <img src="/pink_money_banner.webp" alt="Pink Money Banner" className={styles.collageImg} loading="lazy" />
          </div>

          {/* Row 4: Black Shirts Models */}
          <div className={styles.twoColumnRow}>
            <div className={`${styles.halfWidthCard} ${styles.aspect3_5}`}>
              <img src="/black_shirt_model_back.webp" alt="Black Shirt Model Back" className={styles.collageImg} loading="lazy" />
            </div>
            <div className={`${styles.halfWidthCard} ${styles.aspect3_5}`}>
              <img src="/black_shirt_model_front.webp" alt="Black Shirt Model Front" className={styles.collageImg} loading="lazy" />
            </div>
          </div>

          {/* Row 5: White Shirts Models */}
          <div className={styles.twoColumnRow}>
            <div className={`${styles.halfWidthCard} ${styles.aspect1}`}>
              <img src="/white_shirt_model_back.webp" alt="White Shirt Model Back" className={`${styles.collageImg} ${styles.croppedImg}`} loading="lazy" />
            </div>
            <div className={`${styles.halfWidthCard} ${styles.aspect1}`}>
              <img src="/white_shirt_model_front.webp" alt="White Shirt Model Front" className={`${styles.collageImg} ${styles.croppedImg}`} loading="lazy" />
            </div>
          </div>

          {/* Row 6: Blue Shirt Landscape Banner */}
          <div className={`${styles.fullWidthCard} ${styles.aspect2_58} ${styles.innerWidthBanner}`}>
            <img src="/blue_shirt_landscape_banner.webp" alt="Blue Shirt Landscape Banner" className={styles.collageImg} loading="lazy" />
          </div>

          {/* Row 7: Three Columns Street Collage */}
          <div className={styles.threeColumnRow}>
            <div className={`${styles.thirdWidthCard} ${styles.aspect3_4}`}>
              <img src="/street_model_polaroid_1.webp" alt="Street Model Polaroid 1" className={styles.collageImg} loading="lazy" />
            </div>
            <div className={`${styles.thirdWidthCard} ${styles.aspect3_4}`}>
              <img src="/street_model_polaroid_2.webp" alt="Street Model Polaroid 2" className={styles.collageImg} loading="lazy" />
            </div>
            <div className={`${styles.thirdWidthCard} ${styles.aspect3_4}`}>
              <img src="/street_model_polaroid_3.webp" alt="Street Model Polaroid 3" className={styles.collageImg} loading="lazy" />
            </div>
          </div>

          {/* Row 8: Eiden Eye Banner with Bottom Fade Overlay */}
          <div className={`${styles.bottomBannerCard} ${styles.aspect2_1} ${styles.innerWidthBanner}`}>
            <img src="/eiden_close_up_banner.webp" alt="Eiden Close-Up Banner" className={styles.collageImg} loading="lazy" />
            <div className={styles.gradientOverlayBottom}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
