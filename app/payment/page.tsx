'use client';

import * as Accordion from '@radix-ui/react-accordion';
import styles from './page.module.scss';

export default function PaymentPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Payment & Insurance</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h2>Insurance</h2>
            <p>
              We accept most major insurance plans. Please contact our office at{' '}
              <a href="tel:9194673831">(919) 467-3831</a> to verify your
              insurance coverage and benefits before your first appointment.
            </p>
            <p>
              It is important to understand your insurance benefits, including
              copayments, deductibles, and any limitations on the number of
              sessions covered per year.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Payment Methods</h2>
            <p>We accept the following payment methods:</p>
            <ul>
              <li>Cash</li>
              <li>Check</li>
              <li>Credit Cards (Visa, MasterCard, American Express)</li>
              <li>Debit Cards</li>
              <li>Health Savings Account (HSA) cards</li>
            </ul>
            <p>
              Payment is due at the time of service unless other arrangements
              have been made in advance.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <Accordion.Root type="single" collapsible className={styles.accordion}>
              <Accordion.Item value="item-1" className={styles.accordionItem}>
                <Accordion.Header>
                  <Accordion.Trigger className={styles.accordionTrigger}>
                    What insurance plans do you accept?
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.accordionContent}>
                  <p>
                    We accept most major insurance plans. Please call our office
                    to verify your specific insurance coverage and benefits. We
                    will work with you to understand your coverage and any
                    out-of-pocket expenses.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2" className={styles.accordionItem}>
                <Accordion.Header>
                  <Accordion.Trigger className={styles.accordionTrigger}>
                    What if I don't have insurance?
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.accordionContent}>
                  <p>
                    We offer self-pay options for clients without insurance
                    coverage. Please contact our office to discuss payment
                    options and rates.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-3" className={styles.accordionItem}>
                <Accordion.Header>
                  <Accordion.Trigger className={styles.accordionTrigger}>
                    Do you offer a sliding scale?
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.accordionContent}>
                  <p>
                    We understand that financial circumstances vary. Please
                    contact our office to discuss your situation and explore
                    available options.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-4" className={styles.accordionItem}>
                <Accordion.Header>
                  <Accordion.Trigger className={styles.accordionTrigger}>
                    What is your cancellation policy?
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.accordionContent}>
                  <p>
                    We require 24-hour notice for appointment cancellations. Late
                    cancellations or no-shows may be subject to a fee. Please
                    contact our office as soon as possible if you need to
                    reschedule or cancel your appointment.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-5" className={styles.accordionItem}>
                <Accordion.Header>
                  <Accordion.Trigger className={styles.accordionTrigger}>
                    Can I use my HSA or FSA?
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.accordionContent}>
                  <p>
                    Yes, we accept Health Savings Account (HSA) and Flexible
                    Spending Account (FSA) cards. Mental health services are
                    typically eligible expenses under these accounts.
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>

          <div className={styles.section}>
            <h2>Questions?</h2>
            <p>
              If you have any questions about payment, insurance, or billing,
              please don't hesitate to contact our office at{' '}
              <a href="tel:9194673831">(919) 467-3831</a>. We're here to help
              and will work with you to ensure you understand your options.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

