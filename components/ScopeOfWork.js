import styles from '../styles/ScopeOfWork.module.css';

export default function ScopeOfWork() {
  return (
    <section className={`${styles.section} container ${styles.container}`}>
      <div className={styles.block}>
        <img 
          src="/scope_of_work_eiden_x_you.webp" 
          alt="Scope of Work - Eiden x You" 
          className={styles.fullSectionImg} 
          loading="lazy"
        />
        <div className={styles.blackDiamond}></div>
      </div>
    </section>
  );
}

