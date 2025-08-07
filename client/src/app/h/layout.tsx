import type { Metadata } from "next";
import { GsapProvider } from "@/provider/gsap-provider";
import { TransitionProvider } from "@/provider/transition-provider";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "SUDUTPROFILE",
  description: "Showcase your identity with style.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <GsapProvider>
        <TransitionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TransitionProvider>
      </GsapProvider>
    </section>
  );
}
