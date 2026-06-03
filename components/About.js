import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        {/* Slanted Section Header */}
        <h2 className={styles.sectionHeader}>
          <span className={styles.headerHighlight}>ABOUT ME</span>
        </h2>
        
        <div className={styles.aboutGrid}>
          {/* Portrait Graphic Placeholder */}
          <div className={styles.portraitWrapper}>
            <div className={styles.portraitGraphics}>
              <span className={styles.portraitEmoji}>🎭</span>
            </div>
          </div>
          
          {/* Bio card */}
          <div className={styles.bioCard}>
            <h3 className={styles.bioTitle}>Eiden - The Creator</h3>
            <p className={styles.bioText}>
              I'm an illustrator and graphic designer obsessed with streetwear cultures, pixel-art retro nostalgia, and aggressive pop art. I mix modern underground themes with high-impact color palettes to design premium merchandise, cover art, and posters that demand attention.
            </p>
            <p className={styles.subText}>
              Based in the creative underground, partnering with global clothing brands, indie developers, and musicians to deliver visuals that stand out in a saturated digital landscape.
            </p>
            <hr className={styles.divider} />
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <strong className="text-cyan">LOCATION</strong>
                <span>Tokyo / Remote</span>
              </div>
              <div className={styles.detailItem}>
                <strong className="text-hot-pink">INFLUENCES</strong>
                <span>80s Arcade, Synthwave, Punk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
