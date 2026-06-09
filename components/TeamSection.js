import styles from '../styles/TeamSection.module.css';

export default function TeamSection() {
  const creatives = [
    { 
      name: 'Anirudh Yanambaka', 
      title: 'Co Founder, Eiden', 
      edu: 'ISDI, Parsons', 
      img: '/Eiden 63.png' 
    },
    { 
      name: 'Abraham Mathew', 
      title: 'Co Founder, Eiden', 
      edu: 'ISDI, Parsons', 
      img: '/Eiden 64.png' 
    }
  ];

  const execs = [
    { 
      name: 'Brij Parekh', 
      title: 'Co Founder, Eiden', 
      edu: 'MICA Grad', 
      img: '/Eiden 65.png' 
    },
    { 
      name: 'Divij Shah', 
      title: 'Co Founder, Eiden', 
      edu: 'Engineer', 
      img: '/Eiden 66.png' 
    }
  ];

  return (
    <section className={styles.section} id="team">
      <div className="container">
        <h2 className={styles.mainTitle}>MEET THE TEAM</h2>
        
        {/* Diamond Divider */}
        <div className={styles.diamondDivider}></div>
        
        <p className={styles.subtitle}>
          Coming from different fields to unite and pull off the best designs that can cater to all types of target audiences!
        </p>

        {/* The Creatives Category */}
        <div className={styles.categoryBlock}>
          <h3 className={styles.catTitle}>THE CREATIVES!</h3>
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
                </div>
              </div>
            ))}
          </div>
          <p className={styles.bioParagraph}>
            Here to create your perfect vibe by channeling in our strengthens and skills honed from our education at Parsons (ISDI)
          </p>
        </div>

        {/* The Execs Category */}
        <div className={styles.categoryBlock}>
          <h3 className={styles.catTitle}>THE EXECS!</h3>
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
                </div>
              </div>
            ))}
          </div>
          <p className={styles.bioParagraph}>
            Here to grow business and execute all the designs made by the creative team all while making sure the creative team doesn't get out of hand and make stuff that no one understands!
          </p>
        </div>
      </div>
    </section>
  );
}
