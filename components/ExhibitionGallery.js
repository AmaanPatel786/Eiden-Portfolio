'use client';

import { useState } from 'react';
import styles from '../styles/ExhibitionGallery.module.css';

export default function ExhibitionGallery() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'streetwear', type: 'STREETWEAR // MOCKUP', title: 'Neon Samurai Tee', emoji: '👕', desc: 'Screen-printed heavy-weight custom graphic t-shirt.', color: 'var(--neon-green)' },
    { id: 2, category: 'pixel', type: 'PIXEL ART // GRAPHIC', title: 'Pixel Decay Skull', emoji: '💀', desc: 'Handmade 64x64 retro illustration for custom skateboard deck.', color: 'var(--hot-pink)' },
    { id: 3, category: 'illustration', type: 'ILLUSTRATION // MERCH', title: 'Cyber-Rider Skate Deck', emoji: '🛹', desc: 'Limited run illustration series for Tokyo board shop.', color: 'var(--cyan)' },
    { id: 4, category: 'streetwear', type: 'STREETWEAR // JACKET', title: 'Synth Hooded Parka', emoji: '🧥', desc: 'Waterproof techwear windbreaker with embroidery.', color: 'var(--cyber-purple)' },
    { id: 5, category: 'pixel', type: 'PIXEL ART // UI', title: 'Retro HUD Package', emoji: '👾', desc: 'Game assets pack including custom icons and overlays.', color: 'var(--neon-green)' },
    { id: 6, category: 'illustration', type: 'ILLUSTRATION // POSTER', title: 'Like a Dog in Rain', emoji: '🌧️', desc: 'Limited silkscreen poster print on heavy cardstock.', color: 'var(--hot-pink)' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <h2 className={styles.sectionHeader}>
          <span className={styles.headerHighlight}>PORTFOLIO SHOWCASE</span>
        </h2>
        
        {/* Filter Tabs */}
        <div className={styles.filters}>
          {['all', 'streetwear', 'pixel', 'illustration'].map(cat => (
            <button 
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.activeBtn : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className={styles.grid}>
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={styles.card}
              style={{ '--accent-color': item.color }}
            >
              <div className={styles.visualPlaceholder}>
                <span className={styles.emoji}>{item.emoji}</span>
              </div>
              <div className={styles.info}>
                <span className={styles.categoryBadge}>{item.type}</span>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.description}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
