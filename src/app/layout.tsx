import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/provider/ThemeProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyperloom",
  description: "A website by anjuman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light" >
          <Nav />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
