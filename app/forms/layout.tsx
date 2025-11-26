import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Client Forms | Western Wake Counseling',
  description:
    'Access new client forms and the online referral form for Western Wake Counseling in Apex, North Carolina.',
  openGraph: {
    title: 'New Client Forms & Online Referral | Western Wake Counseling',
    description:
      'Complete new client paperwork and submit an online referral to get started with counseling services at Western Wake Counseling.',
  },
};

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Client Forms | Western Wake Counseling',
  description:
    'Access new client forms and online referral form for Western Wake Counseling & Psychological Services.',
  openGraph: {
    title: 'New Client Forms | Western Wake Counseling',
    description: 'Complete your new client forms online or download them to bring to your first appointment.',
  },
};

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

