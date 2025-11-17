'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

const serviceTypes = [
  {
    name: 'Individual Counseling',
    description:
      'One-on-one therapy sessions tailored to your unique needs and goals. We work together to address personal challenges, develop coping strategies, and promote personal growth.',
    icon: '👤',
  },
  {
    name: 'Couple Counseling',
    description:
      'Strengthen your relationship through improved communication, conflict resolution, and deeper connection. We help couples navigate challenges and build a stronger partnership.',
    icon: '👫🏾',
  },
  {
    name: 'Family Counseling',
    description:
      'Support for families facing transitions, communication difficulties, or other challenges. We help families work together to create healthier dynamics and stronger bonds.',
    icon: '👨🏾‍👩🏾‍👧🏾‍👦🏾',
  },
  {
    name: 'In-Person Sessions',
    description:
      'Traditional face-to-face counseling sessions in our comfortable office located in Apex, North Carolina. Experience the benefits of in-person connection and support.',
    icon: '🏢',
  },
  {
    name: 'Telehealth Sessions',
    description:
      'Convenient online counseling sessions via SecureVideo. Access quality mental health care from the comfort of your home. Research shows telehealth is as effective as in-person therapy.',
    icon: '💻',
    link: '/telehealth',
  },
];

const services = [
  {
    name: 'Anxiety',
    description:
      'Comprehensive treatment for anxiety disorders, panic attacks, and stress management.',
  },
  {
    name: 'ADHD - Testing & Therapy',
    description:
      'Professional ADHD assessment and evidence-based therapy for children and adults.',
  },
  {
    name: 'Depression',
    description:
      'Supportive treatment for depression, including major depressive disorder and seasonal affective disorder.',
  },
  {
    name: 'Bipolar Disorder',
    description:
      'Specialized care for individuals managing bipolar disorder and mood stabilization.',
  },
  {
    name: 'Work-Life Balance',
    description:
      'Guidance on managing professional responsibilities while maintaining personal well-being.',
  },
  {
    name: 'Grief & Loss',
    description:
      'Compassionate support through the grieving process and coping with loss.',
  },
  {
    name: 'Parenting',
    description:
      'Parenting support and strategies for families navigating challenges and transitions.',
  },
  {
    name: 'Academic Concerns',
    description:
      'Support for students facing academic challenges, test anxiety, and educational planning.',
  },
  {
    name: 'Self-Esteem',
    description:
      'Building confidence and self-worth through therapeutic interventions.',
  },
  {
    name: 'Cross-Cultural Issues',
    description:
      'Understanding and navigating cultural differences and identity challenges.',
  },
  {
    name: 'Life Goals',
    description:
      'Clarifying values and creating actionable plans to achieve personal and professional goals.',
  },
  {
    name: 'Health Goals',
    description:
      'Integrating physical and mental health for overall well-being.',
  },
  {
    name: 'Separation & Divorce',
    description:
      'Support for individuals and families navigating separation and divorce.',
  },
  {
    name: 'Psychological Testing Service',
    description:
      'Comprehensive psychological assessments and evaluations.',
  },
  {
    name: 'Career Stress',
    description:
      'Managing workplace stress, career transitions, and professional development.',
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Our Services</h1>
          <p className={styles.subtitle}>
            Comprehensive counseling and psychological services for individuals,
            couples, and families
          </p>
        </div>
      </section>

      <section className={styles.serviceTypes}>
        <div className={styles.container}>
          <h2>Types of Counseling Services</h2>
          <p className={styles.sectionIntro}>
            We offer a variety of counseling formats to meet your needs and
            preferences. Whether you prefer individual, couple, or family
            sessions, or need the flexibility of telehealth, we're here to help.
          </p>
          <div className={styles.serviceTypesGrid}>
            {serviceTypes.map((type, index) => {
              const content = (
                <motion.div
                  className={styles.serviceTypeCard}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 12
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={styles.serviceIcon}>{type.icon}</div>
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                  {type.link && (
                    <Link href={type.link} className={styles.learnMoreLink}>
                      Learn More →
                    </Link>
                  )}
                </motion.div>
              );

              return type.link ? (
                <Link key={type.name} href={type.link}>
                  {content}
                </Link>
              ) : (
                <div key={type.name}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <h2>Areas We Specialize In</h2>
          <p className={styles.sectionIntro}>
            Our practice addresses a wide range of mental health concerns and
            life challenges. Here are some of the areas we specialize in:
          </p>
          <div className={styles.servicesGridWrapper}>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.03,
                    type: 'spring',
                    stiffness: 100,
                    damping: 12
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>
              Take the first step towards better mental health and well-being.
              Contact us today to schedule an appointment or learn more about our
              services.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/schedule" className={styles.primaryButton}>
                Schedule Appointment
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

