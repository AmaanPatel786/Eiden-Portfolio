import styles from '../styles/TeamCollab.module.css';

export default function TeamCollab() {
  return (
    <section className={styles.collabSection} id="collab">
      <div className="container">
        <h2 className={styles.sectionHeader}>
          <span className={styles.headerHighlight}>COLLABS & STREETWEAR</span>
        </h2>

        <div className={styles.collabGrid}>
          <div className={styles.leftCol}>
            <div className={styles.collabVisual}>
              <span className={styles.emoji}>🔥</span>
            </div>
          </div>
          <div className={styles.rightCol}>
            <h3 className={styles.title}>Underground Collaborations</h3>
            <p className={styles.text}>
              I partner with premium streetwear labels, indie bands, skate shops, and design collectivities to drop limited graphic capsules, sticker drops, and skate deck prints.
            </p>
            <p className={styles.subtext}>
              If your label represents rebel cultures, pixel-art retro nostalgia, or experimental design directions—let&apos;s create a custom collab series.
            </p>
            <div className={styles.features}>
              <div className={styles.feat}>
                <span className={styles.featIcon}>👕</span>
                <span>Custom Apparel Graphics</span>
              </div>
              <div className={styles.feat}>
                <span className={styles.featIcon}>🛹</span>
                <span>Skateboard Deck Silkscreens</span>
              </div>
              <div className={styles.feat}>
                <span className={styles.featIcon}>🎒</span>
                <span>Merch & Sticker Packs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
