'use client';

import { useState } from 'react';
import styles from './page.module.scss';

export default function FormsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const to = ['support@wwcaps.org', 'drtammiemoore@wwcaps.org'].join(',');

    const subject = `New online referral form submission from ${formData.name || 'website visitor'}`;
    const bodyLines = [
      'a new online referral form was submitted from the new client forms page.',
      '',
      `name: ${formData.name || '(not provided)'}`,
      `email: ${formData.email || '(not provided)'}`,
      `phone: ${formData.phone || '(not provided)'}`,
      `preferred contact: ${formData.preferredContact || '(not specified)'}`,
      '',
      'message / reason for referral:',
      formData.message || '(no message provided)',
    ];

    const params = new URLSearchParams({
      subject,
      body: bodyLines.join('\n'),
    });

    const mailtoHref = `mailto:${to}?${params.toString()}`;

    try {
      window.location.href = mailtoHref;
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredContact: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      console.error('forms page submission error:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>New Client Forms</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <p>
              Feel free to use the "Online Referral Form" to make a referral or
              to initiate your request for services. The Scheduling Coordinator
              will return your call within 24-48 hours. You may also call the
              main office at{' '}
              <a href="tel:9194673831">(919) 467-3831</a> in order to get more
              information or to schedule an appointment.
            </p>
          </div>

          <div className={styles.formSection}>
            <h2>Online Referral Form</h2>
            {submitted ? (
              <div className={styles.successMessage}>
                Thank you for your submission! We will contact you within 24-48
                hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="preferredContact">
                    Preferred Method of Contact
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message / Reason for Referral</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Submit Form
                </button>
                <p className={styles.note}>
                  information submitted through this form is sent via encrypted google business email and handled in line with applicable privacy laws; do not use this form for emergencies.
                </p>
              </form>
            )}
          </div>

          <div className={styles.downloadSection}>
            <h2>Downloadable Forms</h2>
            <p>
              Access all of our forms for new clients by clicking on the files
              listed below. The files listed are in Microsoft Word format, and
              contain the intake forms and questionnaires that you will be asked
              to complete when you come for your first appointment. You may print
              out the forms in advance, complete them, and bring them with you to
              your first appointment. Otherwise, plan to arrive 20-30 minutes
              prior to your scheduled appointment time to complete all necessary
              forms.
            </p>
            <div className={styles.formLinks}>
              <p className={styles.note}>
                Form files will be available here soon. Please contact us at{' '}
                <a href="tel:9194673831">(919) 467-3831</a> for more
                information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

