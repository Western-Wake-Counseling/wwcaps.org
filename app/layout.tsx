import type { Metadata } from "next";
import { Lora, Lato, Merriweather } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ToastProvider } from "@/components/ToastProvider";

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

const merriweather = Merriweather({
  variable: "--font-hero",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  metadataBase: new URL('https://wwcaps.org'),
  title: {
    default: "Western Wake Counseling | Dr. Tammie Moore, Licensed Psychologist – Cary & Apex NC",
    template: "%s | Western Wake Counseling",
  },
  description: "Western Wake Counseling & Psychological Services, PLLC provides compassionate, holistic counseling and psychological services for individuals, couples, and families in Cary, Apex, and the Triangle area. Dr. Tammie Moore, Ph.D., Licensed Psychologist specializing in anxiety, depression, ADHD, trauma, and relationship counseling.",
  keywords: [
    "counseling cary nc",
    "psychologist apex nc",
    "therapy triangle area",
    "dr tammie moore",
    "western wake counseling",
    "anxiety therapy cary",
    "depression counseling apex",
    "couples therapy nc",
    "family counseling cary",
    "adhd testing nc",
    "trauma therapy",
    "licensed psychologist nc",
    "mental health services cary",
    "psychological services apex",
    "wwcaps",
  ],
  authors: [{ name: "Dr. Tammie D. Moore, Ph.D." }],
  creator: "Western Wake Counseling & Psychological Services, PLLC",
  publisher: "Western Wake Counseling & Psychological Services, PLLC",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Western Wake Counseling & Psychological Services, PLLC",
    description: "Compassionate, holistic care for mind, body, and spirit in Cary & Apex, NC. Dr. Tammie Moore, Licensed Psychologist.",
    url: "https://wwcaps.org",
    siteName: "Western Wake Counseling",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/sunflower.jpg",
        width: 1200,
        height: 630,
        alt: "Sunflower field representing hope and growth at Western Wake Counseling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Wake Counseling | Dr. Tammie Moore, Licensed Psychologist",
    description: "Compassionate, holistic counseling services in Cary & Apex, NC",
    creator: "@drtammie45",
    images: ["/images/sunflower.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://wwcaps.org",
  },
  verification: {
    google: "add-your-google-verification-code-here",
    // yandex: "add-if-needed",
    // bing: "add-if-needed",
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${basePath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${basePath}/favicon.ico`, sizes: "any" },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `${basePath}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${lato.variable} ${merriweather.variable}`}
      >
        <ToastProvider>
          <SEO />
          <a href="#main-content" className="skipToMain">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

