import styles from '../styles/MoodBoardProducts.module.css';

export default function MoodBoardProducts() {
  return (
    <section className={styles.section} id="moodboard">
      {/* Background Decorative Blue Strokes */}
      <img src="/MoodBoardLeftBlue.webp" alt="" className={`${styles.stroke} ${styles.leftStroke}`} />
      <img src="/MoodBoardRightBlue.webp" alt="" className={`${styles.stroke} ${styles.rightStroke}`} />
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
            src="/PhoneCaseStroke.webp" 
            alt="" 
            className={styles.pinkStroke} 
          />

          {/* Top Card */}
          <div className={styles.topCard}>
            <img 
              src="/Eiden 27.webp" 
              alt="Eiden Phone Cases Collection" 
              className={styles.cardImg} 
            />
          </div>

          {/* Bottom Row */}
          <div className={styles.bottomRow}>
            {/* Left Vertical Card */}
            <div className={styles.verticalCard}>
              <img 
                src="/Eiden 28.webp" 
                alt="Eiden Custom Phone Case" 
                className={styles.verticalImg} 
              />
            </div>

            {/* Right Column */}
            <div className={styles.rightColumn}>
              <div className={styles.swirlCard}>
                <img 
                  src="/Eiden 29.webp" 
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
              src="/Eiden 30.webp"
              alt="Eiden Hoodie Tour Edition"
              className={styles.hoodieMainImg}
            />
          </div>

          {/* Right Column */}
          <div className={styles.hoodieRightCol}>
            {/* Top Right Card */}
            <div className={styles.hoodieTopCard}>
              <img
                src="/Eiden 31.webp"
                alt="Eiden Hoodies Duo"
                className={styles.hoodieCardImg}
              />
            </div>

            {/* Bottom Right Two Cards */}
            <div className={styles.hoodieBottomPair}>
              <div className={styles.hoodiePairCard}>
                <img
                  src="/Eiden 32.webp"
                  alt="Eiden Conquer Hoodie"
                  className={styles.hoodieCardImg}
                />
              </div>
              <div className={styles.hoodiePairCard}>
                <img
                  src="/Eiden 33.webp"
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
                src="/Eiden 34.webp"
                alt="Eiden Welcome To Cruel World Hoodie"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden36}`}>
              <img
                src="/Eiden 36.webp"
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
                src="/Eiden 38.webp"
                alt="Eiden Limited Edition Skull Tee"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden40}`}>
              <img
                src="/Eiden 40.webp"
                alt="Eiden Hope Butterfly Tee"
                className={styles.hoodieTeeImg}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.hoodieTeeCol}>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden35}`}>
              <img
                src="/Eiden 35.webp"
                alt="Eiden Streetstyle Graffiti Hoodie"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden37}`}>
              <img
                src="/Eiden 37.webp"
                alt="Eiden Dark Side Pink Hoodie"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden39}`}>
              <img
                src="/Eiden 39.webp"
                alt="Eiden Dark Side Street Hoodie"
                className={styles.hoodieTeeImg}
              />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden41}`}>
              <img
                src="/Eiden 41.webp"
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
                src="/Eiden 42.webp"
                alt="Eiden Badges Black"
                className={styles.badgeImg}
              />
            </div>
            <div className={`${styles.badgeCard} ${styles.cardEiden43}`}>
              <img
                src="/Eiden 43.webp"
                alt="Eiden Badges Red Purple"
                className={styles.badgeImg}
              />
            </div>
            <div className={`${styles.badgeCard} ${styles.cardEiden44}`}>
              <img
                src="/Eiden 44.webp"
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
                src="/Eiden 45.webp"
                alt="Eiden Popsockets"
                className={styles.badgeImg}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Skins & Desk Mats Section — full-bleed black panel outside container */}
      <div className={styles.skinMatSection}>
        <h2 className={styles.skinMatTitle}>LAPTOP SKINS DESK MATS</h2>
        <div className={styles.skinMatGrid}>
          {/* Left Column */}
          <div className={styles.skinMatCol}>
            <div className={`${styles.skinMatCard} ${styles.cardEiden46}`}>
              <img
                src="/Eiden 46.webp"
                alt="Eiden Doctor Strange Laptop Skin"
                className={styles.skinMatImg}
              />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden48}`}>
              <img
                src="/Eiden 48.webp"
                alt="Eiden Pink Anime Desk Mat"
                className={styles.skinMatImg}
              />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden50}`}>
              <img
                src="/Eiden 50.webp"
                alt="Eiden Rick and Morty Desk Mat"
                className={styles.skinMatImg}
              />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden51}`}>
              <img
                src="/Eiden 51.webp"
                alt="Eiden Oni Monster Desk Mat"
                className={styles.skinMatImg}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.skinMatCol}>
            <div className={`${styles.skinMatCard} ${styles.cardEiden47}`}>
              <img
                src="/Eiden 47.webp"
                alt="Eiden Purple Green Keyboard Mat"
                className={styles.skinMatImg}
              />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden49}`}>
              <img
                src="/Eiden 49.webp"
                alt="Eiden Dragon Desk Mat"
                className={styles.skinMatImg}
              />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden53}`}>
              <img
                src="/Eiden 70.webp"
                alt="Eiden Yellow Black Laptop Skin"
                className={styles.skinMatImg}
              />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden52}`}>
              <img
                src="/Eiden 52.webp"
                alt="Eiden Green Cartoon Laptop Skin"
                className={styles.skinMatImg}
              />
            </div>
          </div>
        </div>

        {/* Bags Section — full-bleed black panel outside container */}
        <div className={styles.bagsSection}>
          <h2 className={styles.bagsTitle}>BAGS</h2>
          <div className={styles.bagsGrid}>
            {/* Left Column */}
            <div className={styles.bagsCol}>
              <div className={`${styles.bagsCard} ${styles.bagsCardEiden53}`}>
                <img
                  src="/Eiden 53.webp"
                  alt="Eiden Thank You Tote"
                  className={styles.bagsImg}
                />
              </div>
              <div className={`${styles.bagsCard} ${styles.bagsCardEiden55}`}>
                <img
                  src="/Eiden 55.webp"
                  alt="Eiden Mini Backpacks"
                  className={styles.bagsImg}
                />
              </div>
              <div className={`${styles.bagsCard} ${styles.bagsCardEiden57}`}>
                <img
                  src="/Eiden 71.webp"
                  alt="Eiden Civilization Tote"
                  className={styles.bagsImg}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.bagsCol}>
              <div className={`${styles.bagsCard} ${styles.bagsCardEiden54}`}>
                <img
                  src="/Eiden 54.webp"
                  alt="Eiden Freitag Bags"
                  className={styles.bagsImg}
                />
              </div>
              <div className={`${styles.bagsCard} ${styles.bagsCardEiden56}`}>
                <img
                  src="/Eiden 56.webp"
                  alt="Eiden Wade Backpack"
                  className={styles.bagsImg}
                />
              </div>
            </div>
          </div>

          {/* Section title placeholder for the next socks section */}
          <h2 className={styles.socksTitle}>SOCKS</h2>

          {/* Socks Grid */}
          <div className={styles.socksGrid}>
            {/* Left Column */}
            <div className={styles.socksCol}>
              <div className={`${styles.socksCard} ${styles.socksCardEiden57}`}>
                <img
                  src="/Eiden 57.webp"
                  alt="Eiden Tiger Backpack"
                  className={styles.socksImg}
                />
              </div>
              <div className={`${styles.socksCard} ${styles.socksCardEiden59}`}>
                <img
                  src="/Eiden 59.webp"
                  alt="Eiden Socks Bowl"
                  className={styles.socksImg}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.socksCol}>
              <div className={`${styles.socksCard} ${styles.socksCardEiden58}`}>
                <img
                  src="/Eiden 58.webp"
                  alt="Eiden Yoda Socks"
                  className={styles.socksImg}
                />
              </div>
              <div className={`${styles.socksCard} ${styles.socksCardEiden60}`}>
                <img
                  src="/Eiden 60.webp"
                  alt="Eiden Guilt Socks"
                  className={styles.socksImg}
                />
              </div>
            </div>
          </div>

          {/* Socks Banner */}
          <div className={styles.socksBannerContainer}>
            <div className={`${styles.socksCard} ${styles.socksCardEiden61}`}>
              <img
                src="/Eiden 61.webp"
                alt="Eiden Socks Banner"
                className={styles.socksImg}
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
          <div className={styles.extraTitleText}>
            Other Segments that can be explored
          </div>
          <div className={styles.extraListText}>
            HATS/CAPS , CLOCKS , BOOK COVER<br />
            KEY CHAINS , BANDANA<br />
            PLAYING CARDS , MAGNETS<br />
            STICKERS , LUNCHABLES<br />
            BANDS , TAPESTRY<br />
            POSTERS
          </div>
        </div>
      </div>
    </section>
  );
}

