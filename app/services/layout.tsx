import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Counseling Services in Cary & Apex NC | Western Wake Counseling',
  description:
    'Learn about individual, couple, family, in-person, and telehealth counseling services at Western Wake Counseling in Cary & Apex, North Carolina.',
  openGraph: {
    title: 'Counseling & Psychological Services | Western Wake Counseling',
    description:
      'Comprehensive counseling and psychological services for anxiety, depression, ADHD, trauma, and relationship concerns in Cary & Apex, NC.',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


