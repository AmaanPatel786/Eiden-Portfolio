import styles from '../styles/OurProcess.module.css';

export default function OurProcess() {
  const steps = [
    { 
      title: 'Ideation', 
      desc: (
        <>
          We dig deep! we think about what every emotion means to us, and<br />
          see the world in its properties...Our recent themes have been in the 4<br />
          verities of the world - Our Cardinal Sensations, the Hustle Culture, a<br />
          person’s Inner Peace, and our modern day emotions!
        </>
      )
    },
    { 
      title: 'Creation', 
      desc: (
        <>
          We’re here to illustrate! We dabble into 3d software and the adobe<br />
          suite to produce designs that artistic brains conjured and then set<br />
          that into the test print process!
        </>
      )
    },
    { 
      title: 'Testing', 
      desc: (
        <>
          We now have to test our design and take 2 rounds of test prints:<br />
          <br />
          1. With the original design<br />
          2. With the design modified to make the print look better
        </>
      )
    },
    { 
      title: 'Production!', 
      desc: (
        <>
          Products now go into complete production and are taken live on the<br />
          site and are marketed for on demand prints!
        </>
      )
    }
  ];

  return (
    <section className={styles.section} id="process">
      <div className="container">
        {/* Transitional Banners */}
        <div className={styles.bannerContainer}>
          <img src="/Eiden 22.webp" alt="Eiden Creative Process" className={styles.processBannerImg} />
        </div>
      </div>

      {/* stickersRow (full-bleed, outside container to span 100% viewport width) */}
      <div className={styles.stickersRow}>
        <div className={styles.stickerCard}>
          <img src="/Eiden 23.webp" alt="Creative Sticker Left" className={styles.stickerCardImg} />
        </div>
        <div className={styles.stickerCard}>
          <img src="/Eiden 24.webp" alt="Creative Sticker Right" className={styles.stickerCardImg} />
        </div>
      </div>

      {/* Full-width wrapper for the process content and background strokes */}
      <div className={styles.contentContainer}>
        {/* Background Decorative Strokes */}
        <img src="/LLPStroke.webp" alt="" className={`${styles.stroke} ${styles.ulp}`} />
        <img src="/LRPStroke.webp" alt="" className={`${styles.stroke} ${styles.urp}`} />
        <img src="/ULPStroke.webp" alt="" className={`${styles.stroke} ${styles.llp}`} />
        <img src="/URPStroke.webp" alt="" className={`${styles.stroke} ${styles.lrp}`} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className={styles.mainTitle}>Our Process!</h2>
          
          <div className={styles.diamondSeparator}></div>

          <div className={styles.timeline}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.stepContainer}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {idx < steps.length - 1 && <div className={styles.diamondSeparator}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottomBanner}>
        <img src="/Eiden 25.webp" alt="Box Mockup" className={styles.bottomBannerImg} />
      </div>
    </section>
  );
}
