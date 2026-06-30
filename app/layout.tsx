import type { Metadata } from "next";
import {
  Space_Grotesk,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://berger-digital-service.com"),

  verification: {
    google: "szdj4su7Ec8fr4QbD9V2NViEynjKRLt3OCaAV1RjmqI",
  },

  title: {
    default: "Berger Digital Service – Webentwicklung & SEO",
    template: "%s | Berger Digital Service",
  },

  description:
    "Professionelle Webentwicklung, SEO-Optimierung und digitale Lösungen für Unternehmen. Moderne Websites mit hoher Performance.",

  keywords: [
    "Webentwicklung",
    "Webdesign",
    "SEO",
    "Google Optimierung",
    "Next.js",
    "IT-Beratung",
  ],

  authors: [{ name: "Berger Digital Service" }],
  creator: "Berger Digital Service",

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://berger-digital-service.com",
    siteName: "Berger Digital Service",
    title: "Berger Digital Service – Webentwicklung & SEO",
    description:
      "Professionelle Webentwicklung und SEO für Unternehmen.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Berger Digital Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Berger Digital Service – Webentwicklung & SEO",
    description:
      "Professionelle Webentwicklung und SEO für Unternehmen.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
