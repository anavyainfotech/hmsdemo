import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anavya Hospital | World-Class Premium Healthcare",
  description: "Anavya Hospital combines world-class medical expertise with luxurious comfort and cutting-edge technology to provide the best healthcare experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${spaceGrotesk.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
