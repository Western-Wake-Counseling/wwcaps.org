import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule an Appointment | Western Wake Counseling',
  description:
    'Schedule an appointment with Western Wake Counseling. Call (919) 467-3831 or request an appointment online.',
  openGraph: {
    title: 'Schedule an Appointment | Western Wake Counseling',
    description: 'Contact us to schedule your counseling appointment in Apex, NC.',
  },
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

