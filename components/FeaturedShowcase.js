import styles from '../styles/FeaturedShowcase.module.css';

export default function FeaturedShowcase() {
  const booklets = [
    { id: 1, title: 'CYBER ARCHIVE // 01', color: 'var(--hot-pink)' },
    { id: 2, title: 'STREET WEAR // 02', color: 'var(--neon-green)' },
    { id: 3, title: 'PIXEL LABS // 03', color: 'var(--cyan)' },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {booklets.map(booklet => (
          <div 
            key={booklet.id} 
            className={styles.card} 
            style={{ '--accent-color': booklet.color }}
          >
            <div className={styles.cover}>
              <span className={styles.icon}>📚</span>
            </div>
            <div className={styles.info}>
              <span className={styles.number}>VOL.{booklet.id}</span>
              <h4 className={styles.title}>{booklet.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
