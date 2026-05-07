import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SK Landscaping | Caledon, Brampton & Peel Region | 5★ Rated",
  description:
    "SK Landscaping serves Caledon, Brampton, and the Peel Region with professional lawn care, landscaping, snow removal, and power washing. 5 stars across 32 Google reviews. Call 437-265-4770.",
  openGraph: {
    title: "SK Landscaping | Caledon, Brampton & Peel Region",
    description:
      "Lawn care, backyard transformations, snow removal, and power washing — done right, at fair prices. 5★/32 reviews.",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGNYvvAW-2UKth3SHxRMQc99xWc2GX8s397v3zP8uUZxa8R7A2Sn9PNgxJVTi1raESet9p_ZeE-n_O7hrq8p94hB9kz_O8AOIc5FdAVPtMtZHz-XXttVc8HBnvxG8nhxYWElwtbSOMJ5xEC=w800-h600-k-no",
        width: 800,
        height: 600,
        alt: "SK Landscaping — project photo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SK Landscaping",
    description:
      "Professional lawn care, landscaping, snow removal, and power washing serving Caledon, Brampton, and Peel Region.",
    telephone: "437-265-4770",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 Lipscott Dr",
      addressLocality: "Caledon",
      addressRegion: "ON",
      postalCode: "L7C 4K7",
      addressCountry: "CA",
    },
    areaServed: ["Caledon", "Brampton", "Peel Region"],
    openingHours: "Mo-Su 09:00-19:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "32",
      bestRating: "5",
    },
    url: "https://sk-landscaping.vercel.app",
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  );
}
