import styles from '../styles/MixedReality.module.css';

export default function MixedReality() {
  return (
    <section className="container">
      <div className={`${styles.block} figma-section-block`}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>MIXED REALITY</h2>
          <h3 className={styles.subHead}>Wow Factor</h3>
          <p className={styles.description}>
            Expand the boundaries of merch, by adding the factor of<br />
            augmented reality.
          </p>
          <p className={styles.description}>
            The direct integration with Instagram's spark AR<br />
            leads to seamless implementation by the customer
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/Eiden 62.webp" alt="Mixed Reality VR Headsets" className={styles.mrImg} />
        </div>
      </div>

      {/* Diamond Divider */}
      <div className={styles.diamondDivider}></div>

      {/* Examples of Implementation */}
      <div className={styles.examplesContainer}>
        <h4 className={styles.examplesTitle}>Examples of Implementation</h4>
        <div className={styles.linksList}>
          <a href="https://www.youtube.com/shorts/B8dweXTQOVM?feature=share" target="_blank" rel="noopener noreferrer">
            https://www.youtube.com/shorts/B8dweXTQOVM?feature=share
          </a>
          <a href="https://www.youtube.com/shorts/Jb0HfzWterg?feature=share" target="_blank" rel="noopener noreferrer">
            https://www.youtube.com/shorts/Jb0HfzWterg?feature=share
          </a>
          <a href="https://www.youtube.com/shorts/91Q5zF9MLpA?feature=share" target="_blank" rel="noopener noreferrer">
            https://www.youtube.com/shorts/91Q5zF9MLpA?feature=share
          </a>
        </div>
      </div>
    </section>
  );
}
