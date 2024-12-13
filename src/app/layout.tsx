import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge"

// Configure Plus Jakarta Sans font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

// Configure Poppins font
const poppinsSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins-sans",
});

// Metadata for the app
export const metadata: Metadata = {
  title: "Landing Page",
  description: "Testing",
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body
        className={twMerge(`${plusJakartaSans.variable} ${poppinsSans.variable} antialiased bg-[#F9F9F9]`)}
      >
        {children}
      </body>
    </html>
  );
}