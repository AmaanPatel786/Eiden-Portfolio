import styles from '../styles/MoodBoardProducts.module.css';

export default function MoodBoardProducts() {
  return (
    <section className={styles.section} id="moodboard">
      {/* Background Decorative Blue Strokes */}
      <img src="/MoodBoardLeftBlue.png" alt="" className={`${styles.stroke} ${styles.leftStroke}`} />
      <img src="/MoodBoardRightBlue.png" alt="" className={`${styles.stroke} ${styles.rightStroke}`} />
      <div className={styles.topFadeOverlay}></div>

      {/* Mood Board Header + Phone Cases (inside container) */}
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
      </div>

      {/* Hoodies Section — full-bleed black panel outside container */}
      <div className={styles.hoodieSection}>
        {/* Hoodie Grid */}
        <div className={styles.hoodieGrid}>
          {/* Left Large Card */}
          <div className={styles.hoodieMainCard}>
            <img
              src="/Eiden 30.png"
              alt="Eiden Hoodie Tour Edition"
              className={styles.hoodieMainImg}
            />
          </div>

          {/* Right Column */}
          <div className={styles.hoodieRightCol}>
            {/* Top Right Card */}
            <div className={styles.hoodieTopCard}>
              <img
                src="/Eiden 31.png"
                alt="Eiden Hoodies Duo"
                className={styles.hoodieCardImg}
              />
            </div>

            {/* Bottom Right Two Cards */}
            <div className={styles.hoodieBottomPair}>
              <div className={styles.hoodiePairCard}>
                <img
                  src="/Eiden 32.png"
                  alt="Eiden Conquer Hoodie"
                  className={styles.hoodieCardImg}
                />
              </div>
              <div className={styles.hoodiePairCard}>
                <img
                  src="/Eiden 33.png"
                  alt="Eiden Roaring Power Hoodie"
                  className={styles.hoodieCardImg}
                />
              </div>
            </div>
          </div>
        </div>
        {/* New Hoodies & Graphic Tees Grid */}
        <div className={styles.hoodieTeeGrid}>
          {/* Left Column */}
          <div className={styles.hoodieTeeCol}>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden34}`}>
              <img
                src="/Eiden 34.png"
                alt="Eiden Welcome To Cruel World Hoodie"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden36}`}>
              <img
                src="/Eiden 36.png"
                alt="Eiden Winning Hoodie"
                className={styles.hoodieTeeImg}
              />
            </div>
            
            {/* Text Title Card */}
            <div className={styles.hoodieTeeTitleCard}>
              <h2 className={styles.hoodieTeeTitleText}>
                HOODIES<br />
                GRAPHIC TEES
              </h2>
            </div>

            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden38}`}>
              <img
                src="/Eiden 38.png"
                alt="Eiden Limited Edition Skull Tee"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden40}`}>
              <img
                src="/Eiden 40.png"
                alt="Eiden Hope Butterfly Tee"
                className={styles.hoodieTeeImg}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.hoodieTeeCol}>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden35}`}>
              <img
                src="/Eiden 35.png"
                alt="Eiden Streetstyle Graffiti Hoodie"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden37}`}>
              <img
                src="/Eiden 37.png"
                alt="Eiden Dark Side Pink Hoodie"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden39}`}>
              <img
                src="/Eiden 39.png"
                alt="Eiden Dark Side Street Hoodie"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden41}`}>
              <img
                src="/Eiden 41.png"
                alt="Eiden Songs Tee"
                className={styles.hoodieTeeImg}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popsockets & Badges Section — full-bleed black panel outside container */}
      <div className={styles.badgeSection}>
        <div className={styles.badgeGrid}>
          {/* Left Column */}
          <div className={styles.badgeCol}>
            <div className={`${styles.badgeCard} ${styles.cardEiden42}`}>
              <img
                src="/Eiden 42.png"
                alt="Eiden Badges Black"
                className={styles.badgeImg}
              />
            </div>
            <div className={`${styles.badgeCard} ${styles.cardEiden43}`}>
              <img
                src="/Eiden 43.png"
                alt="Eiden Badges Red Purple"
                className={styles.badgeImg}
              />
            </div>
            <div className={`${styles.badgeCard} ${styles.cardEiden44}`}>
              <img
                src="/Eiden 44.png"
                alt="Eiden Badges Green Orange"
                className={styles.badgeImg}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.badgeCol}>
            {/* Title Card */}
            <div className={styles.badgeTitleCard}>
              <h2 className={styles.badgeTitleText}>
                POPSOCKET<br />
                KEYCHAIN<br />
                BADGE
              </h2>
            </div>
            <div className={`${styles.badgeCard} ${styles.cardEiden45}`}>
              <img
                src="/Eiden 45.png"
                alt="Eiden Popsockets"
                className={styles.badgeImg}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Segments + Video References (back inside container) */}
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
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

