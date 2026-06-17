import styles from '../styles/GalleryShowcase.module.css';

export default function GalleryShowcase() {
  const images = [
    { path: '/mudra.webp', name: 'mudra' },
    { path: '/baronposter.webp', name: 'baronposter' },
    { path: '/mockup_9.webp', name: 'Mockup _9' }
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
