import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EduStart — A World to Explore",
    template: "%s | EduStart",
  },
  description:
    "A safe, age-adaptive digital world where children can think, discover, create, make, ask, and explore — powered by curiosity, not screens.",
  keywords: [
    "children learning",
    "curiosity",
    "age-adaptive",
    "safe AI for kids",
    "creative learning",
    "exploration",
    "STEM for children",
    "India education",
  ],
  authors: [{ name: "EduStart" }],
  creator: "EduStart",
  robots: {
    index: false, // private product — do not index until launch
    follow: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "EduStart — A World to Explore",
    description:
      "A safe, age-adaptive digital world where children can think, discover, create, make, ask, and explore.",
    siteName: "EduStart",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c1e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`}>
      <body className="min-h-dvh flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
