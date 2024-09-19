import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beautiful Product Catalog",
  description: "A stunning product catalog built with Next.js, Radix UI, and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} flex flex-col bg-gray-50 dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme  accentColor="cyan" grayColor="slate" radius="medium">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8  min-h-[90vh]" >
              <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
              {children}
            </main>
            <Footer />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
