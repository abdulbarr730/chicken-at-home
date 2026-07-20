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
  metadataBase: new URL("https://chickenathome.in"), // Change if needed

  title: {
    default: "ChickenAtHome | Fresh Chicken Delivered in Muzaffarpur",
    template: "%s | ChickenAtHome",
  },

  description:
    "Order fresh, hygienically prepared chicken online in Muzaffarpur. Freshly cut after order confirmation with fast home delivery. Order now on WhatsApp.",

  keywords: [
    "ChickenAtHome",
    "Fresh Chicken",
    "Chicken Delivery",
    "Chicken Delivery Muzaffarpur",
    "Fresh Chicken Muzaffarpur",
    "Chicken Online",
    "Buy Chicken Online",
    "Hygienic Chicken",
    "Raw Chicken",
    "Fresh Meat",
    "Chicken Home Delivery Bihar",
    "Muzaffarpur Chicken",
  ],

  authors: [
    {
      name: "ChickenAtHome",
    },
  ],

  creator: "ChickenAtHome",

  publisher: "ChickenAtHome",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "ChickenAtHome | Fresh Chicken Delivered in Muzaffarpur",
    description:
      "Freshly cut, hygienically prepared chicken delivered to your doorstep across Muzaffarpur.",

    url: "https://chickenathome.in",

    siteName: "ChickenAtHome",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ChickenAtHome",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ChickenAtHome",
    description:
      "Fresh chicken delivered across Muzaffarpur. Order now on WhatsApp.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://chickenathome.in",
  },

  category: "Food",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}