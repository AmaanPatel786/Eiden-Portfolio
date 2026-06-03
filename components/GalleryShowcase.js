import styles from '../styles/GalleryShowcase.module.css';

export default function GalleryShowcase() {
  const images = [
    { path: '/Eiden 4.png', name: 'mudra' },
    { path: '/Eiden 5.png', name: 'baronposter' },
    { path: '/Eiden 6.png', name: 'Mockup _9' }
  ];

  return (
    <section className={styles.sectionWrapper}>
      {images.map((img, idx) => (
        <div key={idx} className={styles.imageContainer}>
          <img src={img.path} alt={img.name} className={styles.showcaseImg} />
        </div>
      ))}
    </section>
  );
}
