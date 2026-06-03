import styles from '../styles/ScopeOfWork.module.css';

export default function ScopeOfWork() {
  const images = [
    { path: '/Eiden 28.png', name: 'WhatsApp Image 2023-10-12 at 12.45.jpg' },
    { path: '/Eiden 29.png', name: 'WhatsApp Image 2023-10-12 at 12.44.jpg' },
    { path: '/Eiden 30.png', name: 'OIP.jpg' }
  ];

  return (
    <section className="container">
      <div className={`${styles.block} figma-section-block`}>
        <div className={styles.header}>
          <h2 className={styles.bebasTitle}>eiden You</h2>
          <div className={styles.cross}>x</div>
          <h3 className={styles.scopeTitle}>scope Of work</h3>
        </div>

        <p className={styles.introText}>
          In the realm where your brand meets merchandise, our team delves deep, forming an unbreakable bond with the brand’s essence.
        </p>

        {/* Media Collage */}
        <div className={styles.collageGrid}>
          {images.map((img, idx) => (
            <div key={idx} className={styles.imageCard}>
              <div className={styles.media}>
                <img src={img.path} alt={img.name} className={styles.collageImg} />
              </div>
            </div>
          ))}
        </div>

        <p className={styles.bodyText}>
          No cringe, just finesse. We're crafting more than merchandise—an emblematic experience, a refined saga. An odyssey into the brand’s cosmos awaits.
        </p>
      </div>
    </section>
  );
}
