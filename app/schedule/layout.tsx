import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule an Appointment | Western Wake Counseling',
  description:
    'Request an appointment or call Western Wake Counseling to schedule therapy in Cary & Apex, North Carolina.',
  openGraph: {
    title: 'Schedule Counseling | Western Wake Counseling',
    description:
      'Schedule a counseling appointment or request more information about services at Western Wake Counseling in Apex, NC.',
  },
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

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

