import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { site } from "@/data/site";
import WelcomeIntro from "@/components/ui/welcome-intro";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  alternates: {
    canonical: site.domain,
  },
  title: {
    default: "Agustin Pelicano Jr | Junior Software Developer",
    template: "%s | Agustin Pelicano Jr",
  },
  description:
    "Portfolio of Agustin Pelicano Jr, a Full-Stack Developer building practical digital systems.",
  keywords: [
    "Agustin Pelicano Jr",
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
    title: "Agustin Pelicano Jr | Junior Software Developer",
    description:
      "Portfolio of Agustin Pelicano Jr, a Junior Software Developer and Full-Stack Developer building practical digital systems.",
    url: site.domain,
    siteName: "Agustin Pelicano Jr",
    type: "website",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustin Pelicano Jr | Junior Software Developer",
    description:
      "Portfolio of Agustin Pelicano Jr , a Junior Software Developer and Full-Stack Developer.",
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
        className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:border focus:border-ink focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:uppercase focus:tracking-widest focus:text-ink"
        >
          Skip to content
        </a>
        <WelcomeIntro />
        {children}
      </body>
    </html>
  );
}
