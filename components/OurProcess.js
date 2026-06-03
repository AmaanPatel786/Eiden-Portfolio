import styles from '../styles/OurProcess.module.css';

export default function OurProcess() {
  const steps = [
    { title: 'Ideation', desc: 'We dig deep! we think about what every emotion means to us, and see the world in its properties... Our recent themes have been in the 4 verities of the world - Our Cardinal Sensations, the Hustle Culture, a person’s Inner Peace, and our modern day emotions!' },
    { title: 'Creation', desc: 'We’re here to illustrate! We dabble into 3d software and the adobe suite to produce designs that artistic brains conjured and then set that into the test print process!' },
    { title: 'Testing', desc: 'We now have to test our design and take 2 rounds of test prints:\n1. With the original design\n2. With the design modified to make the print look better' },
    { title: 'Production!', desc: 'Products now go into complete production and are taken live on the site and are marketed for on demand prints!' }
  ];

  return (
    <section className={styles.section} id="process">
      <div className="container">
        {/* Transitional Banners */}
        <div className={styles.bannerContainer}>
          <img src="/Eiden 22.png" alt="Eiden Creative Process" className={styles.processBannerImg} />
        </div>

        {/* stickersRow (wider, aligns with the container body) */}
        <div className={styles.stickersRow}>
          <div className={styles.stickerCard}>
            <img src="/Eiden 23.png" alt="Creative Sticker Left" className={styles.stickerCardImg} />
          </div>
          <div className={styles.stickerCard}>
            <img src="/Eiden 24.png" alt="Creative Sticker Right" className={styles.stickerCardImg} />
          </div>
        </div>

        <h2 className={styles.mainTitle}>Our Process!</h2>
        
        <div className={styles.timeline}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepContainer}>
              <div className={styles.markerContainer}>
                <div className={styles.diamondMarker}></div>
                {idx < steps.length - 1 && <div className={styles.line}></div>}
              </div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
