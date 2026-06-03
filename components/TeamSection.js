import styles from '../styles/TeamSection.module.css';

export default function TeamSection() {
  const creatives = [
    { name: 'Anirudh Yanambaka', title: 'Co Founder, Eiden', edu: 'ISDI, Parsons', img: '/Eiden 66.png', bio: 'Here to create your perfect vibe by channeling in our strengths and skills honed from our education at Parsons (ISDI)' },
    { name: 'Abraham Mathew', title: 'Co Founder, Eiden', edu: 'ISDI, Parsons', img: '/Eiden 67.png', bio: 'Creative visionary aligning art and product lines.' }
  ];

  const execs = [
    { name: 'Brij Parekh', title: 'Co Founder, Eiden', edu: 'MICA Grad', img: '/Eiden 68.png', bio: 'Here to grow business and execute all the designs made by the creative team all while making sure the creative team doesn’t get out of hand and make stuff that no one understands!' },
    { name: 'Divij Shah', title: 'Co Founder, Eiden', edu: 'Engineer', img: '/Eiden 69.png', bio: 'Systemizing production pipelines and web implementations.' }
  ];

  return (
    <section className={styles.section} id="team">
      <div className="container">
        <h2 className={styles.mainTitle}>Meet the team</h2>
        <p className={styles.subtitle}>
          Coming from different fields to unite and pull off the best designs that can cater to all types of target audiences!
        </p>

        {/* The Creatives Category */}
        <div className={styles.categoryBlock}>
          <h3 className={styles.catTitle}>The Creatives!</h3>
          <div className={styles.grid}>
            {creatives.map((member, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.avatar}>
                  <img src={member.img} alt={member.name} className={styles.avatarImg} />
                </div>
                <div className={styles.info}>
                  <h4 className={styles.name}>{member.name}</h4>
                  <span className={styles.titleText}>{member.title}</span>
                  <span className={styles.eduText}>{member.edu}</span>
                  <p className={styles.bioText}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Execs Category */}
        <div className={styles.categoryBlock}>
          <h3 className={styles.catTitle}>The execs!</h3>
          <div className={styles.grid}>
            {execs.map((member, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.avatar}>
                  <img src={member.img} alt={member.name} className={styles.avatarImg} />
                </div>
                <div className={styles.info}>
                  <h4 className={styles.name}>{member.name}</h4>
                  <span className={styles.titleText}>{member.title}</span>
                  <span className={styles.eduText}>{member.edu}</span>
                  <p className={styles.bioText}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
