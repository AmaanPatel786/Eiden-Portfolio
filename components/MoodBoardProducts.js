import styles from '../styles/MoodBoardProducts.module.css';

export default function MoodBoardProducts() {
  return (
    <section className={styles.section} id="moodboard">
      {/* Background Decorative Blue Strokes */}
      <img  src="/MoodBoardLeftBlue.webp" alt="" className={`${styles.stroke} ${styles.leftStroke}`} loading="lazy" />
      <img  src="/MoodBoardRightBlue.webp" alt="" className={`${styles.stroke} ${styles.rightStroke}`} loading="lazy" />
      <div className={styles.topFadeOverlay}></div>

      {/* Mood Board Header + Phone Cases (inside container) */}
      <div className={`container ${styles.container}`} style={{ position: 'relative', zIndex: 3 }}>
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
            className={styles.pinkStroke} loading="lazy" />

          {/* Top Card */}
          <div className={styles.topCard}>
            <img  
              src="/eiden_phone_cases_collection.webp" 
              alt="Eiden Phone Cases Collection" 
              className={styles.cardImg} loading="lazy" />
          </div>

          {/* Bottom Row */}
          <div className={styles.bottomRow}>
            {/* Left Vertical Card */}
            <div className={styles.verticalCard}>
              <img  
                src="/eiden_custom_phone_case.webp" 
                alt="Eiden Custom Phone Case" 
                className={styles.verticalImg} loading="lazy" />
            </div>

            {/* Right Column */}
            <div className={styles.rightColumn}>
              <div className={styles.swirlCard}>
                <img  
                  src="/eiden_liquid_swirl_cases.webp" 
                  alt="Eiden Liquid Swirl Cases" 
                  className={styles.swirlImg} loading="lazy" />
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
              src="/eiden_hoodie_tour_edition.webp"
              alt="Eiden Hoodie Tour Edition"
              className={styles.hoodieMainImg} loading="lazy" />
          </div>

          {/* Right Column */}
          <div className={styles.hoodieRightCol}>
            {/* Top Right Card */}
            <div className={styles.hoodieTopCard}>
              <img 
                src="/eiden_hoodies_duo.webp"
                alt="Eiden Hoodies Duo"
                className={styles.hoodieCardImg} loading="lazy" />
            </div>

            {/* Bottom Right Two Cards */}
            <div className={styles.hoodieBottomPair}>
              <div className={styles.hoodiePairCard}>
                <img 
                  src="/eiden_conquer_hoodie.webp"
                  alt="Eiden Conquer Hoodie"
                  className={styles.hoodieCardImg} loading="lazy" />
              </div>
              <div className={styles.hoodiePairCard}>
                <img 
                  src="/eiden_roaring_power_hoodie.webp"
                  alt="Eiden Roaring Power Hoodie"
                  className={styles.hoodieCardImg} loading="lazy" />
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
                src="/eiden_welcome_to_cruel_world_hoodie.webp"
                alt="Eiden Welcome To Cruel World Hoodie"
                className={styles.hoodieTeeImg} loading="lazy" />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden36}`}>
              <img 
                src="/eiden_winning_hoodie.webp"
                alt="Eiden Winning Hoodie"
                className={styles.hoodieTeeImg} loading="lazy" />
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
                src="/eiden_limited_edition_skull_tee.webp"
                alt="Eiden Limited Edition Skull Tee"
                className={styles.hoodieTeeImg} loading="lazy" />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden40}`}>
              <img 
                src="/eiden_hope_butterfly_tee.webp"
                alt="Eiden Hope Butterfly Tee"
                className={styles.hoodieTeeImg} loading="lazy" />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.hoodieTeeCol}>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden35}`}>
              <img 
                src="/eiden_streetstyle_graffiti_hoodie.webp"
                alt="Eiden Streetstyle Graffiti Hoodie"
                className={styles.hoodieTeeImg} loading="lazy" />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden37}`}>
              <img 
                src="/eiden_dark_side_pink_hoodie.webp"
                alt="Eiden Dark Side Pink Hoodie"
                className={styles.hoodieTeeImg} loading="lazy" />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden39}`}>
              <img 
                src="/eiden_dark_side_street_hoodie.webp"
                alt="Eiden Dark Side Street Hoodie"
                className={styles.hoodieTeeImg} loading="lazy" />
            </div>
            <div className={`${styles.hoodieTeeCard} ${styles.cardEiden41}`}>
              <img 
                src="/eiden_songs_tee.webp"
                alt="Eiden Songs Tee"
                className={styles.hoodieTeeImg} loading="lazy" />
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
                src="/eiden_badges_black.webp"
                alt="Eiden Badges Black"
                className={styles.badgeImg} loading="lazy" />
            </div>
            <div className={`${styles.badgeCard} ${styles.cardEiden43}`}>
              <img 
                src="/eiden_badges_red_purple.webp"
                alt="Eiden Badges Red Purple"
                className={styles.badgeImg} loading="lazy" />
            </div>
            <div className={`${styles.badgeCard} ${styles.cardEiden44}`}>
              <img 
                src="/eiden_badges_green_orange.webp"
                alt="Eiden Badges Green Orange"
                className={styles.badgeImg} loading="lazy" />
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
                src="/eiden_popsockets.webp"
                alt="Eiden Popsockets"
                className={styles.badgeImg} loading="lazy" />
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
                src="/eiden_doctor_strange_laptop_skin.webp"
                alt="Eiden Doctor Strange Laptop Skin"
                className={styles.skinMatImg} loading="lazy" />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden48}`}>
              <img 
                src="/eiden_pink_anime_desk_mat.webp"
                alt="Eiden Pink Anime Desk Mat"
                className={styles.skinMatImg} loading="lazy" />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden50}`}>
              <img 
                src="/eiden_rick_and_morty_desk_mat.webp"
                alt="Eiden Rick and Morty Desk Mat"
                className={styles.skinMatImg} loading="lazy" />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden51}`}>
              <img 
                src="/eiden_oni_monster_desk_mat.webp"
                alt="Eiden Oni Monster Desk Mat"
                className={styles.skinMatImg} loading="lazy" />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.skinMatCol}>
            <div className={`${styles.skinMatCard} ${styles.cardEiden47}`}>
              <img 
                src="/eiden_purple_green_keyboard_mat.webp"
                alt="Eiden Purple Green Keyboard Mat"
                className={styles.skinMatImg} loading="lazy" />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden49}`}>
              <img 
                src="/eiden_dragon_desk_mat.webp"
                alt="Eiden Dragon Desk Mat"
                className={styles.skinMatImg} loading="lazy" />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden53}`}>
              <img 
                src="/eiden_yellow_black_laptop_skin.webp"
                alt="Eiden Yellow Black Laptop Skin"
                className={styles.skinMatImg} loading="lazy" />
            </div>
            <div className={`${styles.skinMatCard} ${styles.cardEiden52}`}>
              <img 
                src="/eiden_green_cartoon_laptop_skin.webp"
                alt="Eiden Green Cartoon Laptop Skin"
                className={styles.skinMatImg} loading="lazy" />
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
                  src="/eiden_thank_you_tote.webp"
                  alt="Eiden Thank You Tote"
                  className={styles.bagsImg} loading="lazy" />
              </div>
              <div className={`${styles.bagsCard} ${styles.bagsCardEiden55}`}>
                <img 
                  src="/eiden_mini_backpacks.webp"
                  alt="Eiden Mini Backpacks"
                  className={styles.bagsImg} loading="lazy" />
              </div>
              <div className={`${styles.bagsCard} ${styles.bagsCardEiden57}`}>
                <img 
                  src="/eiden_civilization_tote.webp"
                  alt="Eiden Civilization Tote"
                  className={styles.bagsImg} loading="lazy" />
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.bagsCol}>
              <div className={`${styles.bagsCard} ${styles.bagsCardEiden54}`}>
                <img 
                  src="/eiden_freitag_bags.webp"
                  alt="Eiden Freitag Bags"
                  className={styles.bagsImg} loading="lazy" />
              </div>
              <div className={`${styles.bagsCard} ${styles.bagsCardEiden56}`}>
                <img 
                  src="/eiden_wade_backpack.webp"
                  alt="Eiden Wade Backpack"
                  className={styles.bagsImg} loading="lazy" />
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
                  src="/eiden_tiger_backpack.webp"
                  alt="Eiden Tiger Backpack"
                  className={styles.socksImg} loading="lazy" />
              </div>
              <div className={`${styles.socksCard} ${styles.socksCardEiden59}`}>
                <img 
                  src="/eiden_socks_bowl.webp"
                  alt="Eiden Socks Bowl"
                  className={styles.socksImg} loading="lazy" />
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.socksCol}>
              <div className={`${styles.socksCard} ${styles.socksCardEiden58}`}>
                <img 
                  src="/eiden_yoda_socks.webp"
                  alt="Eiden Yoda Socks"
                  className={styles.socksImg} loading="lazy" />
              </div>
              <div className={`${styles.socksCard} ${styles.socksCardEiden60}`}>
                <img 
                  src="/eiden_guilt_socks.webp"
                  alt="Eiden Guilt Socks"
                  className={styles.socksImg} loading="lazy" />
              </div>
            </div>
          </div>

          {/* Socks Banner */}
          <div className={styles.socksBannerContainer}>
            <div className={`${styles.socksCard} ${styles.socksCardEiden61}`}>
              <img 
                src="/eiden_socks_banner.webp"
                alt="Eiden Socks Banner"
                className={styles.socksImg} loading="lazy" />
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

