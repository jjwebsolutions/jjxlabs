import { IBM_Plex_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

const fontHeading = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "700"],
});

const fontBody = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "jjx",
    template: "%s | jjx",
  },
  description:
    "From static websites to complex web applications, jjx delivers tailored solutions to help your business thrive online.",
  keywords: [
    "Web Development",
    "Static Websites",
    "Web Applications",
    "Full-Stack Development",
    "SEO-friendly",
    "Custom Solutions",
  ],
  authors: [{ name: "jjx" }],
  creator: "jjx",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jjxlabs.com/",
    siteName: "jjx Web Development",
    title: "Web Development Solutions for Your Business",
    description:
      "From static websites to complex web applications, jjx delivers tailored solutions to help your business thrive online.",
    images: [
      {
        url: "https://your-website.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "jjx Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "jjx Web Development",
    description: "Tailored web solutions to help your business thrive online",
    creator: "@jjxrider",
    images: ["https://your-website.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <main> {children}</main>
        <Toaster />
      </body>
    </html>
  );
}
