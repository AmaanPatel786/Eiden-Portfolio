import styles from '../styles/ScopeOfWork.module.css';

export default function ScopeOfWork() {
  return (
    <section className={`${styles.section} container`}>
      <div className={styles.block}>
        <img 
          src="/Eiden 26.webp" 
          alt="Scope of Work - Eiden x You" 
          className={styles.fullSectionImg} 
        />
        <div className={styles.blackDiamond}></div>
      </div>
    </section>
  );
}

