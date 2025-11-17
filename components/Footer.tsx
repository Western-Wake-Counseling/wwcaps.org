import Link from 'next/link';
import styles from './Footer.module.scss';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/DrTammieMoore/',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/westernwakecounseling/',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dr-tammie-moore-3bb3529/',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/drtammie45',
    icon: 'twitter',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Contact Information</h3>
            <address className={styles.address}>
              <p>
                <strong>Physical Address:</strong>
                2205 Candun Dr., Suite A
                <br />
                Apex, NC 27523
              </p>
              <p>
                <strong>Mailing Address:</strong>
                2054 Kildarie Farm, #162
                <br />
                Cary, North Carolina 27518
              </p>
              <p>
                <strong>Phone:</strong>
                <a href="tel:9194673831" className={styles.phoneLink}>(919) 467-3831</a>
                <span className={styles.phoneCallText}>Call to schedule an appointment</span>
              </p>
            </address>
          </div>

          <div className={styles.section}>
            <h3>Quick Links</h3>
            <nav className={styles.footerNav}>
              <Link href="/">Home</Link>
              <Link href="/about">About Dr. Moore</Link>
              <Link href="/services">Services</Link>
              <Link href="/forms">New Client Forms</Link>
              <Link href="/schedule">Schedule Appointment</Link>
              <Link href="/payment">Payment & Insurance</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h3>Connect With Us</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className={styles.socialLink}
                >
                  {social.name}
                </a>
              ))}
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
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Western Wake Counseling & Psychological Services,
            PLLC. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            This website is for informational purposes only. It is not intended
            to be a substitute for professional medical advice, diagnosis, or
            treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}

