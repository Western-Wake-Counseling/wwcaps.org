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

