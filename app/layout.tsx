import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PDF Section Extractor Tool | Extract Text from PDF Files",
  description:
    "Easily extract specific sections of text from PDF files using start and end words. Built by Abhijeet Kumar.",
  keywords: [
    "PDF Extractor",
    "PDF Text Extractor",
    "Extract Text from PDF",
    "PDF Section Extractor",
    "PDF Tool",
    "PDF Text Grabber",
    "PDF Content Extractor",
    "Abhijeet Kumar",
  ],
  authors: [
    {
      name: "Abhijeet Kumar",
      url: "https://www.linkedin.com/in/abhijeetkumar29/details/recommendations/",
    },
  ],
  openGraph: {
    title: "PDF Section Extractor Tool",
    description:
      "Extract specific sections of text from PDF files with ease. Built by Abhijeet Kumar.",
    url: "https://www.linkedin.com/in/abhijeetkumar29",
    type: "website",
    images: [
      {
        url: "https://github-production-user-asset-6210df.s3.amazonaws.com/53019674/410917980-9cd35b97-de2d-475c-a79c-e8eac1122558.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250207T125447Z&X-Amz-Expires=300&X-Amz-Signature=7c160eb515969822d2635efd2f4329bbf657e72e3b50fbc6c705785409bafd7b&X-Amz-SignedHeaders=host", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "PDF Section Extractor Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Section Extractor Tool",
    description:
      "Easily extract specific sections of text from PDF files. Built by Abhijeet Kumar.",
    creator: "@AbhijeetParash7",
    images: [
      "https://github-production-user-asset-6210df.s3.amazonaws.com/53019674/410917980-9cd35b97-de2d-475c-a79c-e8eac1122558.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250207T125447Z&X-Amz-Expires=300&X-Amz-Signature=7c160eb515969822d2635efd2f4329bbf657e72e3b50fbc6c705785409bafd7b&X-Amz-SignedHeaders=host",
    ], // Replace with your OG image URL
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
