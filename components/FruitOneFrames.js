import styles from '../styles/FruitOneFrames.module.css';

export default function FruitOneFrames() {
  return (
    <section className="container">
      <div className={`${styles.block} figma-section-block`}>
        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <img src="/eiden_graphic_frame_john_wick.webp" alt="Eiden Graphic Frame - John Wick" className={styles.frameImg} />
          </div>
          
          <div className={styles.textColumn}>
            <h2 className={styles.fruitTitle}>THE FIRST <br /> FRUIT</h2>
            <h3 className={styles.subHead}>Graphic Art Frames</h3>
            <div className={styles.description}>
              <p className={styles.paragraph}>
                We all associate our <br />
                identity with something or <br />
                the other and our graphic <br />
                art frames are perfect for <br />
                you to express yourself in <br />
                your space!
              </p>
              <p className={styles.paragraph}>
                Hang this frame up and claim the space around it for yourself!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
