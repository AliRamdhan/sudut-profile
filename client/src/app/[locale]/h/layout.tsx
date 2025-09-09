import { GsapProvider } from "@/provider/gsap-provider";
import { TransitionProvider } from "@/provider/transition-provider";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

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
