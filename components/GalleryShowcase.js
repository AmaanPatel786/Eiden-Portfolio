import styles from '../styles/GalleryShowcase.module.css';

export default function GalleryShowcase() {
  const images = [
    { path: '/Eiden 4.webp', name: 'mudra' },
    { path: '/Eiden 5.webp', name: 'baronposter' },
    { path: '/Eiden 6.webp', name: 'Mockup _9' }
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
