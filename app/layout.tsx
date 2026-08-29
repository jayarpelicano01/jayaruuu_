import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import { site } from "@/data/site";
import WelcomeIntro from "@/components/ui/welcome-intro";
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

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  alternates: {
    canonical: site.domain,
  },
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F5" },
    { media: "(prefers-color-scheme: dark)", color: "#101010" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var t=(s==="light"||s==="dark")?s:"dark";document.documentElement.classList.toggle("dark",t==="dark");}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${cormorant.variable} h-full antialiased`}
      >
        <WelcomeIntro />
        {children}
      </body>
    </html>
  );
}
