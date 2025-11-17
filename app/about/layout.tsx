import SEO from '@/components/SEO';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Tammie D. Moore, Ph.D.',
    jobTitle: 'Licensed Psychologist',
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Western Wake Counseling & Psychological Services, PLLC',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Louisiana State University',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Xavier University',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Loyola University Chicago',
      },
    ],
    url: 'https://wwcaps.org/about',
    sameAs: [
      'https://www.psychologytoday.com/us/therapists/tammie-ducre-moore-cary-nc/284931',
      'https://naminc.org/about-nami-north-carolina/board-of-directors/dr-tammie-moore/',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  );
}

