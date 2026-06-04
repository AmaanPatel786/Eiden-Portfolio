import styles from '../styles/MoodBoardProducts.module.css';

export default function MoodBoardProducts() {
  return (
    <section className={styles.section} id="moodboard">
      {/* Background Decorative Blue Strokes */}
      <img src="/MoodBoardLeftBlue.png" alt="" className={`${styles.stroke} ${styles.leftStroke}`} />
      <img src="/MoodBoardRightBlue.png" alt="" className={`${styles.stroke} ${styles.rightStroke}`} />
      <div className={styles.topFadeOverlay}></div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <h2 className={styles.mainTitle}>Mood Board</h2>
        <div className={styles.diamondSeparator}></div>
        <p className={styles.subtitle}>
          A curation of products that<br />
          can be explored for the jawan merchandise
        </p>

        {/* Phone Cases Grid */}
        <div className={styles.phoneGrid}>
          {/* Background Pink Stroke */}
          <img 
            src="/PhoneCaseStroke.png" 
            alt="" 
            className={styles.pinkStroke} 
          />

          {/* Top Card */}
          <div className={styles.topCard}>
            <img 
              src="/Eiden 27.png" 
              alt="Eiden Phone Cases Collection" 
              className={styles.cardImg} 
            />
          </div>

          {/* Bottom Row */}
          <div className={styles.bottomRow}>
            {/* Left Vertical Card */}
            <div className={styles.verticalCard}>
              <img 
                src="/Eiden 28.png" 
                alt="Eiden Custom Phone Case" 
                className={styles.verticalImg} 
              />
            </div>

            {/* Right Column */}
            <div className={styles.rightColumn}>
              <div className={styles.swirlCard}>
                <img 
                  src="/Eiden 29.png" 
                  alt="Eiden Liquid Swirl Cases" 
                  className={styles.swirlImg} 
                />
              </div>
              <h2 className={styles.phoneTitle}>Phone Cases</h2>
            </div>
          </div>
        </div>

        {/* Other Segments Exploration */}
        <div className={styles.extraBlock}>
          <div className={styles.diamondDivider}></div>
          <h4 className={styles.extraTitle}>Other Segments for Exploration</h4>
          <p className={styles.extraText}>
            Hats/Caps, Clocks, Book Cover Keychains, Bandana Playing Cards, Magnet Stickers, Lunchables Bands, Tapestry Posters.
          </p>
        </div>

        {/* Video references */}
        <div className={styles.extraBlock}>
          <div className={styles.diamondDivider}></div>
          <h4 className={styles.extraTitle}>Examples of Implementation</h4>
          <div className={styles.links}>
            <a href="https://www.youtube.com/shorts/B8dweXTQ0VM?feature=share" target="_blank" rel="noopener noreferrer">Ref Video 01</a>
            <a href="https://www.youtube.com/shorts/Jb0HfzWterg?feature=share" target="_blank" rel="noopener noreferrer">Ref Video 02</a>
            <a href="https://www.youtube.com/shorts/91Q5zF9MLpA?feature=share" target="_blank" rel="noopener noreferrer">Ref Video 03</a>
          </div>
        </div>
      </div>
    </section>
  );
}
