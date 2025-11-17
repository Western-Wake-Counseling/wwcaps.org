export default function SEO() {
  // comprehensive organization schema for medical practice
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://wwcaps.org/#organization',
    name: 'Western Wake Counseling & Psychological Services, PLLC',
    alternateName: 'WWCAPS',
    url: 'https://wwcaps.org',
    logo: 'https://wwcaps.org/images/logo.png',
    image: 'https://wwcaps.org/images/dr-tammie.jpg',
    description: 'Compassionate, holistic counseling and psychological services for individuals, couples, and families in Cary, Apex, and the Triangle area of North Carolina.',
    founder: {
      '@type': 'Person',
      '@id': 'https://wwcaps.org/#person',
      name: 'Dr. Tammie D. Moore',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'Ph.D., HSP-P',
      jobTitle: 'Licensed Psychologist',
      description: 'Licensed Psychologist specializing in individual, couple, and family therapy with expertise in anxiety, depression, ADHD, and trauma treatment.',
      image: 'https://wwcaps.org/images/dr-tammie.jpg',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2205 Candun Dr., Suite A',
      addressLocality: 'Apex',
      addressRegion: 'NC',
      postalCode: '27523',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '35.7324',
      longitude: '-78.8503',
    },
    telephone: '(919) 467-3831',
    email: 'info@wwcaps.org',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Cary',
        '@id': 'https://en.wikipedia.org/wiki/Cary,_North_Carolina',
      },
      {
        '@type': 'City',
        name: 'Apex',
        '@id': 'https://en.wikipedia.org/wiki/Apex,_North_Carolina',
      },
      {
        '@type': 'City',
        name: 'Raleigh',
        '@id': 'https://en.wikipedia.org/wiki/Raleigh,_North_Carolina',
      },
      {
        '@type': 'State',
        name: 'North Carolina',
      },
    ],
    medicalSpecialty: [
      'Clinical Psychology',
      'Marriage and Family Therapy',
      'Cognitive Behavioral Therapy',
      'Trauma Therapy',
      'ADHD Assessment and Treatment',
    ],
    sameAs: [
      'https://www.facebook.com/DrTammieMoore/',
      'https://www.instagram.com/westernwakecounseling/',
      'https://www.linkedin.com/in/dr-tammie-moore-3bb3529/',
      'https://twitter.com/drtammie45',
    ],
  };

  // local business schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://wwcaps.org/#localbusiness',
    name: 'Western Wake Counseling & Psychological Services, PLLC',
    image: 'https://wwcaps.org/images/dr-tammie.jpg',
    telephone: '(919) 467-3831',
    email: 'info@wwcaps.org',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2205 Candun Dr., Suite A',
      addressLocality: 'Apex',
      addressRegion: 'NC',
      postalCode: '27523',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '35.7324',
      longitude: '-78.8503',
    },
    url: 'https://wwcaps.org',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
  };

  // breadcrumb schema for site navigation
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://wwcaps.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Dr. Moore',
        item: 'https://wwcaps.org/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Services',
        item: 'https://wwcaps.org/services',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://wwcaps.org/contact',
      },
    ],
  };

  // website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://wwcaps.org/#website',
    url: 'https://wwcaps.org',
    name: 'Western Wake Counseling & Psychological Services, PLLC',
    description: 'Compassionate, holistic counseling and psychological services in Cary and Apex, NC',
    publisher: {
      '@id': 'https://wwcaps.org/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://wwcaps.org/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

