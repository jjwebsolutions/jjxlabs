import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jjxlabs",
  description:
    " Web agency specializing in providing creative and effective web solutions for businesses. Contact us for stunning websites, e-commerce development, and digital marketing services.",
  keywords:
    "web agency, web solutions, website development, e-commerce development, digital marketing,agence web, solutions web, développerment de sites web, développement d'e-commerce, marketing numérique ",
  author: "jjxlabs",
  creator: "Julien A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
