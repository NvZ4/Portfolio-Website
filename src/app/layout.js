import { Geist, Geist_Mono, Exo_2, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-exo", // Ini akan membuat CSS variable --font-exo
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-jet", // Ini akan membuat CSS variable --font-jet
});

export const metadata = {
  title: "Haris M. Shofar - Portfolio",
  description: "Portfolio website of Haris Muhyidin Shofar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${exo2.variable} ${jetbrainsMono.variable} font-jet bg-[#0a0a0a] text-white`}
        suppressHydrationWarning={true} // <-- Add this line
      >
        {children}
      </body>
    </html>
  );
}
