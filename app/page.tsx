'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { FormField } from '@/components/FormField';
import { ToastProvider, ToastNotification } from '@/components/ToastProvider';
import styles from './page.module.scss';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  'Anxiety',
  'ADHD - Testing & Therapy',
  'Depression',
  'Bipolar Disorder',
  'Work-Life Balance',
  'Grief & Loss',
  'Parenting',
  'Academic Concerns',
  'Self-Esteem',
  'Cross-Cultural Issues',
  'Life Goals',
  'Health Goals',
  'Separation & Divorce',
  'Psychological Testing Service',
  'Career Stress',
];

const therapyIndications = [
  {
    title: 'Persistent Sadness or Anxiety',
    description:
      'Feeling overwhelmed, anxious, or sad for extended periods that interfere with daily life.',
  },
  {
    title: 'Relationship Difficulties',
    description:
      'Struggling with communication, trust, or connection in personal or professional relationships.',
  },
  {
    title: 'Life Transitions',
    description:
      'Navigating major life changes such as career shifts, relocation, or family changes.',
  },
  {
    title: 'Trauma or Loss',
    description:
      'Coping with past trauma, grief, or significant losses that impact your well-being.',
  },
  {
    title: 'Difficulty Coping',
    description:
      'Finding it hard to manage stress, emotions, or daily responsibilities effectively.',
  },
  {
    title: 'Low Self-Esteem',
    description:
      'Struggling with self-worth, confidence, or negative self-perception.',
  },
];

export default function Home() {
  const [toastOpen, setToastOpen] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    // check if device supports hover (not touch devices)
    if (window.matchMedia('(hover: hover)').matches) {
      setSupportsHover(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const to = ['support@wwcaps.org', 'drtammiemoore@wwcaps.org'].join(',');

    const subject = `New website contact request from ${data.name}`;
    const bodyLines = [
      'a new contact request was submitted from the homepage quick contact form.',
      '',
      `name: ${data.name}`,
      `email: ${data.email}`,
      `phone: ${data.phone}`,
      '',
      `message: ${data.message || '(no message provided)'}`,
    ];

    const params = new URLSearchParams({
      subject,
      body: bodyLines.join('\n'),
    });

    const mailtoHref = `mailto:${to}?${params.toString()}`;

    try {
      window.location.href = mailtoHref;
      setToastOpen(true);
      reset();
      setTimeout(() => setToastOpen(false), 5000);
    } catch (error) {
      console.error('form submission error:', error);
    }
  };

  return (
    <>
      <Hero />

      <section className={styles.overview}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>About Western Wake Counseling & Psychological Services, PLLC</h2>
            <p>
              At Western Wake Counseling & Psychological Services, PLLC, we
              provide compassionate and comprehensive care for individuals,
              couples, and families. We emphasize the "mind-body-spirit"
              relationship. Specifically, we focus on how biological,
              psychological, and social factors affect health and overall
              emotional well-being. We help clients to clarify their feelings,
              develop goals, and to create a plan of action to achieve those
              goals. We strive to integrate services by collaborating with a
              diverse group of health care professionals and other socio-cultural
              entities important to our clients' well-being.
            </p>
            <p>
              Located in downtown Cary, North Carolina, our practice offers both
              in-person and telehealth services to meet your needs and
              preferences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.quickContact}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.quickContactContent}
          >
            <div className={styles.quickContactText}>
              <h2>Get Started Today</h2>
              <p>
                Have questions or ready to schedule an appointment? call us directly to speak with our team and we will be happy to help.
              </p>
              <div className={styles.phoneCallout}>
                <a href="tel:9194673831" className={styles.phoneButton}>
                  <span className={styles.phoneIcon}>📞</span>
                  <span className={styles.phoneNumber}>(919) 467-3831</span>
                </a>
                <p className={styles.phoneNote}>Call us Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className={styles.quickContactForm}>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <FormField
                  label="Your Name"
                  error={errors.name?.message}
                  required
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register('name')}
                    className={errors.name ? styles.inputError : ''}
                  />
                </FormField>
                <FormField
                  label="Email Address"
                  error={errors.email?.message}
                  required
                >
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register('email')}
                    className={errors.email ? styles.inputError : ''}
                  />
                </FormField>
                <FormField
                  label="Phone Number"
                  error={errors.phone?.message}
                  required
                >
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register('phone')}
                    className={errors.phone ? styles.inputError : ''}
                  />
                </FormField>
                <FormField label="How can we help you?" error={errors.message?.message}>
                  <textarea
                    placeholder="How can we help you?"
                    rows={3}
                    {...register('message')}
                    className={errors.message ? styles.inputError : ''}
                  />
                </FormField>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.indications}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Signs You Might Benefit from Therapy</h2>
            <p className={styles.sectionIntro}>
              Therapy can be beneficial at any stage of life. Here are some
              indications that counseling might be helpful for you:
            </p>
            <div className={styles.indicationsGrid}>
              {therapyIndications.map((indication, index) => (
                <motion.div
                  key={indication.title}
                  className={styles.indicationCard}
                  initial={{ opacity: 0, x: -20, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08,
                    type: 'spring',
                    stiffness: 100,
                    damping: 12
                  }}
                  // disable hover/tap effects on mobile (touch devices)
                  whileHover={supportsHover ? { 
                    x: 4,
                    y: -4,
                    transition: { duration: 0.2 }
                  } : undefined}
                  whileTap={supportsHover ? { scale: 0.98 } : undefined}
                >
                  <h3>{indication.title}</h3>
                  <p>{indication.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>People Seek Counseling for a Variety of Needs…</h2>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.03,
                    type: 'spring',
                    stiffness: 100,
                    damping: 12
                  }}
                  // disable hover/tap effects on mobile (touch devices)
                  whileHover={supportsHover ? { 
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  } : undefined}
                  whileTap={supportsHover ? { scale: 0.98 } : undefined}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.meetDoctor}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.meetDoctorContent}
          >
            <div className={styles.meetDoctorImage}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/dr-tammie.jpg`}
                alt="Dr. Tammie Ducre' Moore"
                width={300}
                height={400}
                sizes="(max-width: 768px) 80vw, 300px"
                className={styles.doctorImage}
              />
            </div>
            <div className={styles.meetDoctorText}>
              <h2>Meet Dr. Tammie Moore</h2>
              <p className={styles.credentials}>
                Licensed Psychologist & North Carolina Board Certified Health
                Services Provider
              </p>
              <p>
                Dr. Tammie Ducre' Moore is the Founder and CEO of Western Wake
                Counseling, PLLC. A Louisiana native, she has been practicing in
                the Triangle for over 20 years. She earned a bachelor's degree
                from Louisiana State University, a Master's degree from Xavier
                University in New Orleans, and a Doctorate in Counseling
                Psychology from Loyola University Chicago.
              </p>
              <p>
                Dr. Moore completed her psychology internship at Duke University
                and served as a Clinical Faculty member in the School Counseling
                graduate program at UNC-Chapel Hill for over ten years.
              </p>
              <Link href="/about" className={styles.learnMoreButton}>
                Learn More About Dr. Moore
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.communityHighlight}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.communityContent}
          >
            <div className={styles.communityImage}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/dr-tammie-and-deborah-ross.JPG`}
                alt="Dr. Tammie Moore with Congresswoman Deborah Ross"
                width={640}
                height={720}
                sizes="(max-width: 768px) 100vw, 640px"
                className={styles.communityPhoto}
                priority
              />
            </div>
            <div className={styles.communityText}>
              <h2>Community Engagement & Advocacy</h2>
              <p>
                Dr. Moore collaborates with community leaders across North Carolina to
                advance access to mental health resources. She proudly serves on the
                NAMI North Carolina Board of Directors and regularly partners with
                organizations, legislators, and faith communities to address the
                holistic needs of families across the Triangle.
              </p>
              <ul className={styles.resourceLinks}>
                <li>
                  <a
                    href="https://naminc.org/about-nami-north-carolina/board-of-directors/dr-tammie-moore/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Dr. Moore&apos;s NAMI NC Board Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.psychologytoday.com/us/therapists/tammie-ducre-moore-cary-nc/284931"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Psychology Today: Western Wake Counseling Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/share/1D8b4hAv5S/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook Spotlight: Community Mental Health Advocacy
                  </a>
                </li>
                <li>
                  <a
                    href="https://linktr.ee/westernwakecounseling?utm_source=linktree_profile_share&ltsid=09f36719-8618-4128-9e58-a13fe9fd721e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore All Western Wake Counseling Links
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.contactHours}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.contactHoursContent}
          >
            <div className={styles.contactInfo}>
              <h2>Contact Information</h2>
              <div className={styles.contactItem}>
                <strong>Phone:</strong>
                <a href="tel:9194673831" className={styles.phoneLink}>(919) 467-3831</a>
                <span className={styles.phoneLabel}>Call us to schedule an appointment</span>
              </div>
              <div className={styles.contactItem}>
                <strong>Fax:</strong>
                <span>(919) 467-1611</span>
              </div>
              <div className={styles.contactItem}>
                <strong>Email:</strong>
                <a href="mailto:info@wwcaps.org">info@wwcaps.org</a>
              </div>
              <div className={styles.contactItem}>
                <strong>Physical Address:</strong>
                <address>
                  2205 Candun Dr., Suite A
                  <br />
                  Apex, NC 27523
                </address>
              </div>
            </div>
            <div className={styles.hoursInfo}>
              <h2>Hours of Operation</h2>
              <div className={styles.hoursList}>
                <div className={styles.hoursItem}>
                  <strong>Monday - Friday:</strong>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className={styles.hoursItem}>
                  <strong>Saturday - Sunday:</strong>
                  <span>Closed</span>
                </div>
              </div>
              <p className={styles.hoursNote}>
                Telehealth services are available for established clients. Call
                our office to schedule a telehealth session via SecureVideo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <ToastNotification
        open={toastOpen}
        onOpenChange={setToastOpen}
        title="Message Sent!"
        description="We'll contact you within 24-48 hours."
        variant="success"
      />
    </>
  );
}
