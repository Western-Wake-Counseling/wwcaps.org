import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment & Insurance | Western Wake Counseling',
  description:
    'Learn about payment options, insurance, and self-pay policies at Western Wake Counseling & Psychological Services in Apex, NC.',
  openGraph: {
    title: 'Payment, Insurance, and Fees | Western Wake Counseling',
    description:
      'Review accepted insurance plans, payment methods, and billing policies for counseling services at Western Wake Counseling.',
  },
};

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


