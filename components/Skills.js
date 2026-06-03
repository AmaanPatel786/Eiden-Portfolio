import styles from '../styles/Skills.module.css';

export default function Skills() {
  const list = [
    { id: 1, icon: '🖊️', title: 'Illustration', desc: 'High-contrast vector and pixel art compositions optimized for prints, posters, and stickers.', shadow: 'var(--shadow-cyan)', color: 'var(--cyan)' },
    { id: 2, icon: '🎨', title: 'Streetwear Design', desc: 'Full print layouts, apparel mockups, embroidery files, and manufacturer-ready tech packs.', shadow: 'var(--shadow-hot-pink)', color: 'var(--hot-pink)' },
    { id: 3, icon: '⚡', title: 'Visual Identity', desc: 'Aggressive retro logos, color palette direction, and brand guidelines for streetwear & game brands.', shadow: 'var(--shadow-neon-green)', color: 'var(--neon-green)' }
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <div className="container">
        <h2 className={styles.sectionHeader}>
          <span className={styles.headerHighlight}>WHAT I DO</span>
        </h2>
        
        <div className={styles.grid}>
          {list.map(skill => (
            <div 
              key={skill.id} 
              className={styles.card}
              style={{ boxShadow: skill.shadow, '--accent-color': skill.color }}
            >
              <div className={styles.icon}>{skill.icon}</div>
              <h3 className={styles.title}>{skill.title}</h3>
              <p className={styles.desc}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
