'use client';

import { useState } from 'react';
import styles from '../styles/MoodBoardProducts.module.css';

export default function MoodBoardProducts() {
  const [selectedCat, setSelectedCat] = useState('phonecases');

  const categories = {
    phonecases: {
      name: 'Phone Cases',
      color: '#FFE600',
      description: 'A curation of phone cases including transparent layouts.',
      items: [
        { img: '/Eiden 39.png', label: 'Transparent Phone Case PSD Mockup Set' },
        { img: '/Eiden 40.png', label: '17.png Mockup' }
      ]
    },
    hoodies: {
      name: 'Hoodies',
      color: '#00FFD1',
      description: 'Heavyweight custom street fit and printed hoodies.',
      items: [
        { img: '/Eiden 41.png', label: 'TRAPSTAR - TRY TO IGNORE THIS HOODIE' },
        { img: '/Eiden 42.png', label: 'Mens - Fleece - Hoodies' },
        { img: '/Eiden 43.png', label: 'download (5)' },
        { img: '/Eiden 44.png', label: 'CRUEL WORLD HOODIE' },
        { img: '/Eiden 45.png', label: 'Fashion Trends for Men' },
        { img: '/Eiden 46.png', label: '05a0693b-7315-490a-82f1-89f50b2c9c15' },
        { img: '/Eiden 47.png', label: '5babd77e-f884-4cf0-99ab-8bad0845fa59' }
      ]
    },
    tees: {
      name: 'Graphic Tees',
      color: '#00FFD1',
      description: 'Oversized drop shoulder aesthetic graphic tees.',
      items: [
        { img: '/Eiden 48.png', label: 'Oversized Skull Graphic Extended Neck T-shirt' },
        { img: '/Eiden 49.png', label: 'Streetwear - Latest Styles' },
        { img: '/Eiden 50.png', label: 'Plus Official Butterfly Back Print T-shirt' },
        { img: '/Eiden 51.png', label: 'Hope Streetwear Oversized T-shirt' }
      ]
    },
    accessories: {
      name: 'Popsockets & Badges',
      color: '#FA00FF',
      description: 'Acrylic resin popsockets, keychains, and pins.',
      items: [
        { img: '/Eiden 52.png', label: 'NCT 127 UPDATED Pinback Button Badges' },
        { img: '/Eiden 53.png', label: 'MAMABEAR RESIN pop sockets' },
        { img: '/Eiden 54.png', label: 'Enhypen Pinback Button Badges' },
        { img: '/Eiden 55.png', label: 'NCT Dream UPDATED Pinback Button Badges' }
      ]
    },
    deskmats: {
      name: 'Mats & Skins',
      color: '#FF005C',
      description: 'Dragon themed XXL deskmats and laptop skins.',
      items: [
        { img: '/Eiden 56.png', label: 'Create your own HP Laptop Skin' },
        { img: '/Eiden 57.png', label: 'Purple Green Setting' },
        { img: '/Eiden 58.png', label: 'Dragon Desk Mat Japanese Mousepad' },
        { img: '/Eiden 59.png', label: '13_85US Anime Calendar Mouse Pad' }
      ]
    },
    bags: {
      name: 'Bags',
      color: '#00FFF0',
      description: 'Canvas tote bags and custom street backpacks.',
      items: [
        { img: '/Eiden 60.png', label: 'Thank you, Have a Nice Day tote bag' },
        { img: '/Eiden 61.png', label: 'Where I Work Alex Daly' },
        { img: '/Eiden 62.png', label: 'Mini Backpacks' }
      ]
    },
    socks: {
      name: 'Socks',
      color: '#BDFF00',
      description: 'Chibi and knit long socks drops.',
      items: [
        { img: '/Eiden 63.png', label: 'Underground Art & Fashion Magazine' },
        { img: '/Eiden 64.png', label: 'download (6)' },
        { img: '/Eiden 65.png', label: 'Star Wars Baby Yoda Chibi Crew Socks' }
      ]
    }
  };

  return (
    <section className={styles.section} id="moodboard">
      <div className="container">
        <h2 className={styles.mainTitle}>Mood board</h2>
        <p className={styles.subtitle}>
          A curation of products that can be explored for the merchandise
        </p>

        {/* Tab Links */}
        <div className={styles.tabs}>
          {Object.keys(categories).map(key => (
            <button
              key={key}
              onClick={() => setSelectedCat(key)}
              className={`${styles.tabBtn} ${selectedCat === key ? styles.activeTab : ''}`}
              style={{ '--cat-color': categories[key].color }}
            >
              {categories[key].name}
            </button>
          ))}
        </div>

        {/* Selected Category Content */}
        <div 
          className={styles.catalogBlock} 
          style={{ borderColor: categories[selectedCat].color }}
        >
          <div className={styles.catalogMeta}>
            <h3 style={{ color: categories[selectedCat].color }}>{categories[selectedCat].name}</h3>
            <p>{categories[selectedCat].description}</p>
          </div>
          
          <div className={styles.grid}>
            {categories[selectedCat].items.map((item, idx) => (
              <div 
                key={idx} 
                className={styles.card}
                style={{ '--accent': categories[selectedCat].color }}
              >
                <div className={styles.media}>
                  <img src={item.img} alt={item.label} className={styles.mediaImg} />
                </div>
                <div className={styles.labelContainer}>
                  <span className={styles.label}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Segments Exploration */}
        <div className={styles.extraBlock}>
          <div className={styles.diamondDivider}></div>
          <h4 className={styles.extraTitle}>Other Segments for Exploration</h4>
          <p className={styles.extraText}>
            Hats/Caps, Clocks, Book Cover Keychains, Bandana Playing Cards, Magnet Stickers, Lunchables Bands, Tapestry Posters.
          </p>
        </div>

        {/* Video references */}
        <div className={styles.extraBlock}>
          <div className={styles.diamondDivider}></div>
          <h4 className={styles.extraTitle}>Examples of Implementation</h4>
          <div className={styles.links}>
            <a href="https://www.youtube.com/shorts/B8dweXTQ0VM?feature=share" target="_blank" rel="noopener noreferrer">Ref Video 01</a>
            <a href="https://www.youtube.com/shorts/Jb0HfzWterg?feature=share" target="_blank" rel="noopener noreferrer">Ref Video 02</a>
            <a href="https://www.youtube.com/shorts/91Q5zF9MLpA?feature=share" target="_blank" rel="noopener noreferrer">Ref Video 03</a>
          </div>
        </div>
      </div>
    </section>
  );
}
