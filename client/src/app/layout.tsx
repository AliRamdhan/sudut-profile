import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUDUT PROFILE",
  description: "Showcase your brand with style.",
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  verification: {
    google: "VLSHYEXJQh8FpQ0nynod2CiahmoHNrDpqSl3kgltF-w",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
