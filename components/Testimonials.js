import styles from '../styles/Testimonials.module.css';

export default function Testimonials() {
  const reviews = [
    { id: 1, text: '"Eiden delivered absolute fire! The t-shirt designs sold out in under 24 hours. Incredible style, fast updates, and extremely professional tech sheets."', author: 'DECAY CLOTHING CO.', stars: '★★★★★' },
    { id: 2, text: '"Perfect match for our indie game\'s pixel marketing materials. Eiden understood the aesthetic immediately and delivered top-tier retro graphics."', author: 'RETRO BITE GAMES', stars: '★★★★★' }
  ];

  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <h2 className={styles.sectionHeader}>
          <span className={styles.headerHighlight}>CLIENT REVIEWS</span>
        </h2>
        
        <div className={styles.grid}>
          {reviews.map(rev => (
            <div key={rev.id} className={styles.card}>
              <div className={styles.stars}>{rev.stars}</div>
              <p className={styles.text}>{rev.text}</p>
              <strong className={styles.author}>- {rev.author}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
