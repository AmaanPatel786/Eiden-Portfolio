import styles from '../styles/MixedReality.module.css';

export default function MixedReality() {
  return (
    <section className="container">
      <div className={`${styles.block} figma-section-block`}>
        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <div className={styles.mrMock}>
              <div className={styles.imageWrapper}>
                <img src="/Eiden 25.png" alt="Box Mockup Vol 05" className={styles.mockImg} />
              </div>
            </div>
          </div>
          
          <div className={styles.textColumn}>
            <h2 className={styles.fruitTitle}>MIXED REALITY</h2>
            <h3 className={styles.subHead}>wow factor</h3>
            <p className={styles.description}>
              Expand the boundaries of merch, by adding the factor of augmented reality. The direct integration with Instagram's spark AR leads to seamless implementation by the customer
            </p>
          </div>
        </div>
      </div>
      {/* Background/Banner Image at the bottom */}
      <div className={styles.mrBanner}>
        <img src="/Eiden 27.png" alt="Michelangelo MR Background" className={styles.bannerImg} />
      </div>
    </section>
  );
}
