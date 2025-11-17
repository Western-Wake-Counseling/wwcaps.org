import type { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Contact Us | Western Wake Counseling',
  description:
    'Contact Western Wake Counseling & Psychological Services in Apex, NC. Physical address: 2205 Candun Dr., Suite A, Apex, NC 27523.',
  openGraph: {
    title: 'Contact Western Wake Counseling',
    description: 'Get in touch with our office in Apex, NC.',
  },
};

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/DrTammieMoore/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/westernwakecounseling/',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dr-tammie-moore-3bb3529/',
  },
  {
    name: 'X',
    url: 'https://twitter.com/drtammie45',
  },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.mapSection}>
              <h2>Find Us</h2>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.1234567890!2d-78.8500000!3d35.7300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQzJzQ4LjAiTiA3OMKwNTEnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Western Wake Counseling Location"
                />
              </div>
              <p className={styles.mapLink}>
                <a
                  href="https://maps.google.com/?q=2205+Candun+Dr+Suite+A+Apex+NC+27523"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
            </div>

            <div className={styles.infoSection}>
              <h2>Office Information</h2>
              <div className={styles.addressBlock}>
                <h3>Physical Address</h3>
                <address>
                  2205 Candun Dr., Suite A
                  <br />
                  Apex, NC 27523
                </address>
              </div>

              <div className={styles.addressBlock}>
                <h3>Mailing Address</h3>
                <address>
                  2054 Kildarie Farm, #162
                  <br />
                  Cary, North Carolina 27518
                </address>
              </div>

              <div className={styles.contactBlock}>
                <h3>Phone</h3>
                <p>
                  <a href="tel:9194673831">(919) 467-3831</a>
                </p>
              </div>

              <div className={styles.contactBlock}>
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@wwcaps.org">info@wwcaps.org</a>
                </p>
              </div>

              <div className={styles.socialBlock}>
                <h3>Connect With Us</h3>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

