'use client';

import { useState } from 'react';
import styles from './page.module.scss';

export default function SchedulePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const to = ['support@wwcaps.org', 'drtammiemoore@wwcaps.org'].join(',');

    const subject = `New appointment request from ${formData.name || 'website visitor'}`;
    const bodyLines = [
      'a new appointment request was submitted from the schedule appointment page.',
      '',
      `name: ${formData.name || '(not provided)'}`,
      `email: ${formData.email || '(not provided)'}`,
      `phone: ${formData.phone || '(not provided)'}`,
      `preferred date: ${formData.preferredDate || '(not specified)'}`,
      `preferred time: ${formData.preferredTime || '(not specified)'}`,
      '',
      'additional information:',
      formData.message || '(no additional information provided)',
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
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      console.error('schedule page submission error:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          <h1>Schedule an Appointment</h1>
          <p className={styles.subtitle}>
            Contact us to schedule your appointment or request more information
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contactSection}>
            <h2>Call Us Directly</h2>
            <p>
              The quickest way to schedule an appointment is to call us directly.
            </p>
            <a href="tel:9194673831" className={styles.phoneButton}>
              Call (919) 467-3831
            </a>
            <p className={styles.note}>
              Our scheduling coordinator will return your call within 24-48
              hours if you leave a message.
            </p>
          </div>

          <div className={styles.formSection}>
            <h2>Request an Appointment</h2>
            <p>
              Fill out the form below and our scheduling coordinator will contact
              you to confirm your appointment.
            </p>
            {submitted ? (
              <div className={styles.successMessage}>
                Thank you for your request! We will contact you within 24-48
                hours to confirm your appointment.
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

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="preferredDate">Preferred Date</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="preferredTime">Preferred Time</label>
                    <input
                      type="time"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific concerns or questions..."
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Request Appointment
                </button>
                <p className={styles.note}>
                  information submitted through this form is sent via encrypted google business email and handled in line with applicable privacy laws; do not use this form for emergencies.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

