import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aarinmahala.vercel.app"),
  title: {
    default: "Aarin Mahala – Founder of stationerywala.shop & Software Developer",
    template: `%s | Aarin Mahala – Founder of stationerywala.shop`,
  },
  description:
    "Official portfolio of Aarin Mahala – Founder of stationerywala.shop, Indian Army tech collaborator, and Computer Science (AI & ML) student from Jaipur, Rajasthan, India. Explore web apps, defense projects, hackathons, and contact details.",
  keywords: [
    "Aarin Mahala",
    "Aarin Mahala portfolio",
    "Aarin Mahala official website",
    "Aarin Mahala Jaipur",
    "Aarin Mahala Rajasthan",
    "Aarin Mahala India",
    "Aarin Mahala founder",
    "Aarin Mahala entrepreneur",
    "Aarin Mahala stationerywala",
    "Aarin Mahala stationerywala.shop",
    "Founder of stationerywala.shop",
    "Stationerywala founder",
    "Aarin Mahala developer",
    "Aarin Mahala software engineer",
    "Aarin Mahala Indian Army",
    "Aarin Mahala resume",
    "Aarin Mahala projects",
    "Aarin Mahala ecommerce",
    "Aarin Mahala AI ML",
    "Full Stack Developer Jaipur",
    "Next.js developer India",
    "React developer Rajasthan",
    "Govt Engineering College Barmer",
    "Drone tracking GPS GSM",
  ],
  authors: [{ name: "Aarin Mahala", url: "https://aarinmahala.vercel.app" }],
  creator: "Aarin Mahala",
  publisher: "Aarin Mahala",
  alternates: {
    canonical: "https://aarinmahala.vercel.app",
    types: {
      "text/plain": "https://aarinmahala.vercel.app/llms.txt",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Aarin Mahala – Founder of stationerywala.shop & Software Developer",
    description:
      "Discover the work, defense projects, e-commerce startup, and engineering journey of Aarin Mahala from Jaipur, Rajasthan, India.",
    url: "https://aarinmahala.vercel.app",
    siteName: "Aarin Mahala Portfolio",
    locale: "en_US",
    type: "profile",
    images: DATA.avatarUrl
      ? [
          {
            url: DATA.avatarUrl,
            width: 1200,
            height: 630,
            alt: DATA.name,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarin Mahala – Founder of stationerywala.shop & Software Developer",
    description:
      "Portfolio of Aarin Mahala – Founder of stationerywala.shop, Indian Army tech collaborator, and Computer Science (AI & ML) student from Jaipur, India.",
    creator: "@aarinmahala",
    site: "@aarinmahala",
    images: DATA.avatarUrl ? [DATA.avatarUrl] : [],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://aarinmahala.vercel.app/#person",
      name: DATA.name,
      givenName: "Aarin",
      familyName: "Mahala",
      alternateName: ["Aarin", "AM", "Aarin Mahala Jaipur"],
      url: DATA.url,
      image: DATA.avatarUrl,
      description: DATA.description,
      jobTitle: [
        "Founder & Developer",
        "Full Stack Developer",
        "AI & ML Student Researcher",
      ],
      nationality: {
        "@type": "Country",
        name: "India",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "India",
      },
      alumnusOf: {
        "@type": "CollegeOrUniversity",
        name: "Govt. Engineering College Barmer",
        sameAs: "https://gecbarmer.ac.in/",
      },
      worksFor: [
        {
          "@type": "Organization",
          name: "stationerywala.shop",
          url: "https://www.stationerywala.shop/",
        },
        {
          "@type": "Organization",
          name: "Indian Army",
          url: "https://indianarmy.nic.in/",
        },
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Embedded Systems",
        "GSM and GNSS Positioning",
        "IoT Architecture",
        "E-Commerce Development",
        "Tailwind CSS",
        "Python",
        "C++",
      ],
      sameAs: [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
        DATA.contact.social.X.url,
        DATA.contact.social.Instagram.url,
        "https://www.stationerywala.shop/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://aarinmahala.vercel.app/#website",
      url: DATA.url,
      name: "Aarin Mahala Portfolio",
      description:
        "Official personal portfolio and website of Aarin Mahala – founder, software developer, and AI & ML student.",
      publisher: {
        "@id": "https://aarinmahala.vercel.app/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://aarinmahala.vercel.app/#profilepage",
      url: DATA.url,
      name: "Aarin Mahala - Profile",
      isPartOf: {
        "@id": "https://aarinmahala.vercel.app/#website",
      },
      mainEntity: {
        "@id": "https://aarinmahala.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="author" href="https://aarinmahala.vercel.app" />
        <link
          rel="help"
          type="text/plain"
          href="/llms.txt"
          title="LLM and AI Agent Documentation"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-25 overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <footer className="relative z-10 max-w-2xl mx-auto px-6 pb-6 text-xs text-muted-foreground flex flex-col gap-1">
              <p>
                © {new Date().getFullYear()} Aarin Mahala – Founder of{" "}
                <a
                  href="https://www.stationerywala.shop/"
                  className="underline underline-offset-2 hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  stationerywala.shop
                </a>{" "}
                · Jaipur, Rajasthan, India.
              </p>
              <p>
                This site showcases my projects, hackathons and experience as a
                developer and entrepreneur.
              </p>
            </footer>
            <SpeedInsights />
            <Analytics />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
