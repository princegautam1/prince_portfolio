import type { Metadata } from "next";
import { Orbitron, Syne } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Prince Gautam | Front-end Developer & UI Specialist",
  description: "Front-end Developer specializing in React, Next.js & TypeScript | Creating futuristic and immersive digital experiences",
  keywords: [
    "Front-end Developer", 
    "React", 
    "Next.js", 
    "TypeScript", 
    "Portfolio", 
    "Prince Gautam", 
    "UI Specialist", 
    "3D Web",
    "Immersive Experiences",
    "Web Development"
  ],
  authors: [{ name: "Prince Gautam" }],
  creator: "Prince Gautam",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Prince Gautam | Front-end Developer & UI Specialist",
    description: "Front-end Developer specializing in React, Next.js & TypeScript | Creating futuristic and immersive digital experiences",
    siteName: "Prince Gautam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Gautam | Front-end Developer & UI Specialist",
    description: "Front-end Developer specializing in React, Next.js & TypeScript | Creating futuristic and immersive digital experiences",
    creator: "@princegautam",
  },
  metadataBase: new URL("https://princegautam.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${syne.variable} antialiased dark selection:bg-orange-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
