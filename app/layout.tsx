import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarBackground from "../src/components/effects/StarBackground";
import ClientLayout from '../src/components/ClientLayout'
import BackToTop from "../components/BackToTop";
import ClientLoadingScreen from "../components/ClientLoadingScreen";
import ReadingProgress from "../components/ReadingProgress";
import Footer from "../components/Footer";
import Breadcrumb from "../src/components/navigation/Breadcrumb";
import { Providers } from "./providers";
import { AnimatePresence } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Physics Atlas - Learn Physics, Astronomy & Mathematics",
  description: "Explore physics and astronomy through interactive lessons, simulations, and AI tutoring. Master calculus, mechanics, relativity, and more.",
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
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (prefersDark ? 'dark' : 'light');
            document.documentElement.classList.remove('light', 'dark');
            document.documentElement.classList.add(theme);
          } catch (e) {}
        `}} />
      </head>
      <body className="relative z-10 min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300" suppressHydrationWarning>
        <StarBackground />
        <Providers>
          <ClientLoadingScreen />
          <ReadingProgress />
          <ClientLayout>
            <Breadcrumb />
            <AnimatePresence mode="wait">
              <main className="relative z-10 flex-1">
                {children}
              </main>
            </AnimatePresence>
            <BackToTop />
            <Footer />
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
