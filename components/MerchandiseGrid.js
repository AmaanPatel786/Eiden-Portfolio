import styles from '../styles/MerchandiseGrid.module.css';

export default function MerchandiseGrid() {
  const products = [
    { id: 1, title: 'PIXEL DECAY TEE', price: '$35.00', emoji: '👕', color: 'var(--neon-green)' },
    { id: 2, title: 'CYBER SAMURAI HOODIE', price: '$65.00', emoji: '🧥', color: 'var(--hot-pink)' },
    { id: 3, title: 'STREET GRAFFITI SOCKS', price: '$12.00', emoji: '🧦', color: 'var(--cyan)' },
    { id: 4, title: 'CUSTOM SPRAY CAN ART', price: '$80.00', emoji: '🥫', color: 'var(--cyber-purple)' },
  ];

  return (
    <section className={styles.section} id="merch">
      <div className="container">
        <h2 className={styles.sectionHeader}>
          <span className={styles.headerHighlight}>MERCHANDISE DROP</span>
        </h2>
        
        <div className={styles.grid}>
          {products.map(prod => (
            <div 
              key={prod.id} 
              className={styles.card}
              style={{ '--accent-color': prod.color }}
            >
              <div className={styles.mediaContainer}>
                <span className={styles.emoji}>{prod.emoji}</span>
              </div>
              <div className={styles.meta}>
                <h4 className={styles.title}>{prod.title}</h4>
                <div className={styles.footerRow}>
                  <span className={styles.price}>{prod.price}</span>
                  <button className={styles.buyBtn}>ADD</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
