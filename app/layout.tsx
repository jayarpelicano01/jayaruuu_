import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Jay Ar Pelicano | Junior Software Developer",
    template: "%s | Jay Ar Pelicano",
  },
  description:
    "Portfolio of Jay Ar Pelicano, a Junior Software Developer and Full-Stack Developer building practical digital systems.",
  keywords: [
    "Jay Ar Pelicano",
    "Full-Stack Developer",
    "Junior Software Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "Portfolio",
  ],
  authors: [{ name: site.fullName }],
  creator: site.handle,
  openGraph: {
    title: "Jay Ar Pelicano | Junior Software Developer",
    description:
      "Portfolio of Jay Ar Pelicano, a Junior Software Developer and Full-Stack Developer building practical digital systems.",
    url: site.domain,
    siteName: "Jay Ar Pelicano",
    type: "website",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Ar Pelicano | Junior Software Developer",
    description:
      "Portfolio of Jay Ar Pelicano, a Junior Software Developer and Full-Stack Developer.",
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#F7F7F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}