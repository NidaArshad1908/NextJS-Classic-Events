import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, Playfair_Display, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import AppPage from "./page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({   //For headings
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({  //For body text
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({  //For Button/Navigation 
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Classic Events - Professional Event Management",
  description: "Premium wedding planning and event management services",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} ${playfair.variable} ${poppins.variable} ${montserrat.variable} antialiased`}>
        <AppPage>{children}</AppPage>
      </body>
    </html>
  );
}