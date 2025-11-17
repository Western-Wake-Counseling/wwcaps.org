'use client';

import Link from 'next/link';
import styles from './Hero.module.scss';

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const backgroundImageUrl = `${basePath}/images/sunflower.jpg`;
  
  return (
    <section className={styles.hero}>
      <div 
        className={styles.backgroundImage} 
        aria-hidden="true"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      />
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Compassionate and Comprehensive Care for Mind, Body, and Spirit
          </h1>
          <p className={styles.subheading}>
            Helping individuals, couples, and families clarify goals and achieve
            emotional well-being
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:9194673831" className={styles.primaryButton}>
              Call (919) 467-3831
            </a>
            <Link href="/about" className={styles.secondaryButton}>
              About Dr. Moore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

