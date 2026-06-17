import styles from '../styles/FruitTwoTees.module.css';

export default function FruitTwoTees() {
  return (
    <section className="container">
      <div className={`${styles.block} figma-section-block`}>
        <div className={styles.textContainer}>
          <h2 className={styles.fruitTitle}>THE SECOND FRUIT</h2>
          <h3 className={styles.subHead}>Graphic Tees</h3>
          <p className={styles.description}>
            This is it flaunt! To become the Centre of attention and to always carry art with you as a piece of your identity! Be the rebel you are!
          </p>
        </div>
        
        <div className={styles.imageContainer}>
          <img src="/eiden_graphic_tees_models.webp" alt="Eiden Graphic Tees - Models" className={styles.teeImg} />
        </div>
      </div>
    </section>
  );
}
