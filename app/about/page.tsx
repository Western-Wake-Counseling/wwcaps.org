import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'About Dr. Moore | Western Wake Counseling',
  description:
    'Dr. Tammie Ducre\' Moore, a licensed psychologist & North Carolina Board Certified Health Services Provider, Founder and CEO of Western Wake Counseling, PLLC.',
  openGraph: {
    title: 'About Dr. Tammie Moore | Western Wake Counseling',
    description:
      'Learn about Dr. Tammie Moore, a licensed psychologist with over 20 years of experience in the Triangle area.',
  },
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>About Dr. Moore</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/dr-tammie.jpg`}
                alt="Dr. Tammie Ducre' Moore"
                width={300}
                height={400}
                sizes="(max-width: 768px) 80vw, 300px"
                priority
              />
            </div>
            <div className={styles.profileContent}>
              <h2>Dr. Tammie Ducre' Moore</h2>
              <p className={styles.credentials}>
                Licensed Psychologist & North Carolina Board Certified Health
                Services Provider
              </p>
              <p className={styles.role}>Founder and CEO of Western Wake Counseling, PLLC</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Biography</h2>
            <p>
              Dr. Tammie Ducre' Moore, a licensed psychologist & North Carolina
              Board Certified Health Services Provider is the Founder and CEO of
              Western Wake Counseling, PLLC. A Louisiana native, she has been
              practicing in the Triangle for over 20 years. She earned a
              bachelor's degree from Louisiana State University, a Master's
              degree from Xavier University in New Orleans, and a Doctorate in
              Counseling Psychology from Loyola University Chicago. She
              completed her psychology internship at Duke University. She also
              served as a Clinical Faculty member in the School Counseling
              graduate program at UNC-Chapel Hill for over ten years.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Professional Roles</h2>
            <ul>
              <li>Clinical Faculty member in the School Counseling graduate program at UNC-Chapel Hill (over 10 years)</li>
              <li>CEO of Western Wake Counseling & Psychological Services, PLLC</li>
              <li>Licensed Psychologist & North Carolina Board Certified Health Services Provider</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Community Involvement</h2>
            <p>
              Dr. Moore is passionate about community services. She is very
              involved serving as an Executive Board Member for NAMI-NC; past
              Board Member of Easter Seals UCP of North Carolina and Virginia,
              and the Advisory Board Member for her local YMCA in Cary. She is
              also a Charter Member the Western Wake Alumnae Chapter of Delta
              Sigma Theta Sorority, Incorporated. She is a member of Saint Paul
              AME Church in Downtown Raleigh.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Personal Note</h2>
            <p>
              She is very passionate about her professional and personal
              endeavors. She and her husband Jeff have been married over 35
              years. Together, they have four adult children, a son-in-law, and
              four grandchildren.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Resources</h2>
            <ul className={styles.resources}>
              <li>
                <a
                  href="https://www.psychologytoday.com/us/therapists/tammie-ducre-moore-cary-nc/284931"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Psychology Today Profile
                </a>
              </li>
              <li>
                <a
                  href="https://naminc.org/about-nami-north-carolina/board-of-directors/dr-tammie-moore/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NAMI NC Board Page
                </a>
              </li>
              <li>
                <a
                  href="https://naminc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NAMI NC
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1D8b4hAv5S/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Feature: Community Mental Health Advocacy
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/westernwakecounseling?utm_source=linktree_profile_share&ltsid=09f36719-8618-4128-9e58-a13fe9fd721e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Western Wake Counseling Linktree
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

