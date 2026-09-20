import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://rohaanhussain.com';
const title = 'Syed Rohaan Hussain | Full-Stack Software Engineer';
const description =
  'Rohaan Hussain (Syed Rohaan Hussain) is a senior full-stack software engineer and team lead in Pakistan. Hire Rohaan for React, Next.js, Node.js, TypeScript, and AI-enabled product work.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    'Rohaan',
    'Rohaan Hussain',
    'Syed Rohaan Hussain',
    'full stack engineer',
    'full-stack software engineer',
    'software engineer',
    'hire software engineer',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Syed Rohaan Hussain',
    title,
    description,
    locale: 'en_US',
    images: [
      {
        url: '/og.png',
        width: 1376,
        height: 768,
        alt: 'Rohaan Hussain (Syed Rohaan Hussain), senior full-stack software engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Syed Rohaan Hussain',
  givenName: 'Rohaan',
  familyName: 'Hussain',
  additionalName: 'Syed',
  alternateName: ['Rohaan', 'Rohaan Hussain', 'Syed Rohaan Hussain'],
  jobTitle: 'Senior Full-Stack Software Engineer & Team Lead',
  description,
  url: siteUrl,
  email: 'mailto:syedrohaanhussain@gmail.com',
  telephone: '+92-333-4333896',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
  },
  image: `${siteUrl}/og.png`,
  knowsAbout: [
    'Full-stack software engineering',
    'Software engineering',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
  ],
  sameAs: [
    'https://www.linkedin.com/in/syed-rohaan-hussain-36a589b9',
    'https://github.com/rohaan-hussain',
    'https://www.toptal.com/developers/resume/syed-rohaan-hussain',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Syed Rohaan Hussain',
  alternateName: ['Rohaan Hussain', 'Rohaan'],
  url: siteUrl,
  description,
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Rohaan Hussain — Full-Stack Software Engineer',
  url: siteUrl,
  description:
    'Hire Syed Rohaan Hussain, a full-stack software engineer, for product engineering, APIs, and AI-enabled web applications.',
  areaServed: 'Worldwide',
  serviceType: [
    'Full-stack software engineer',
    'Software engineer',
    'Team lead',
  ],
  provider: {
    '@type': 'Person',
    name: 'Syed Rohaan Hussain',
    alternateName: ['Rohaan', 'Rohaan Hussain'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/kmj5qkr.css" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:url" content={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
