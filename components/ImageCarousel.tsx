'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ImageCarousel.module.scss';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  interval = 5000,
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoPlay ? [Autoplay({ delay: interval })] : []
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  if (images.length === 0) return null;

  return (
    <div className={styles.carousel}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {images.map((image, index) => (
            <div key={index} className={styles.emblaSlide}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.image}
                priority={index === 0}
                sizes="100vw"
              />
              {image.title && (
                <div className={styles.overlay}>
                  <h3>{image.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            className={styles.prevButton}
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={styles.nextButton}
            onClick={scrollNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className={styles.indicators}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === selectedIndex ? styles.active : ''
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

