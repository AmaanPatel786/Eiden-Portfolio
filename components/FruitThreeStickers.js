import styles from '../styles/FruitThreeStickers.module.css';

export default function FruitThreeStickers() {
  return (
    <section className="container">
      <div className={styles.block}>
        <img 
          src="/Eiden 21.webp" 
          alt="The Third Fruit - Sticker Packs" 
          className={styles.fullSectionImg} 
        />
      </div>
    </section>
  );
}
