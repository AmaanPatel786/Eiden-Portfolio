import styles from '../styles/FruitThreeStickers.module.css';

export default function FruitThreeStickers() {
  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.block}>
        <img 
          src="/the_third_fruit_sticker_packs.webp" 
          alt="The Third Fruit - Sticker Packs" 
          className={styles.fullSectionImg} 
          loading="lazy"
        />
      </div>
    </section>
  );
}
