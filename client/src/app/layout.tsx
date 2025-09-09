import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUDUT PROFILE",
  description: "Showcase your brand with style.",
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
