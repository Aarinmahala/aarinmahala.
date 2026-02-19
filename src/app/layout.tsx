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
    default: "Aarin Mahala – Founder of stationerywala.shop",
    template: `%s | Aarin Mahala – Founder of stationerywala.shop`,
  },
  description:
    "Official portfolio of Aarin Mahala – founder of stationerywala.shop and Computer Science (AI & ML) student from Jaipur, Rajasthan, India. Explore projects, work experience, hackathons and contact details.",
  openGraph: {
    title: "Aarin Mahala – Founder of stationerywala.shop",
    description:
      "Discover the work, projects and journey of Aarin Mahala, founder of stationerywala.shop and developer from Jaipur, Rajasthan, India.",
    url: "https://aarinmahala.vercel.app",
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
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
    title: "Aarin Mahala – Founder of stationerywala.shop",
    description:
      "Portfolio of Aarin Mahala – founder of stationerywala.shop, developer and Computer Science student from Jaipur, Rajasthan, India.",
    images: DATA.avatarUrl ? [DATA.avatarUrl] : [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
