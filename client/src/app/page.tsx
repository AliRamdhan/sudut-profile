import Hero from "@/components/landing/hero";
import Templates from "@/components/landing/templates";
import Explain from "@/components/landing/explain";
import Marquee from "@/components/landing/marquee";
import Faq from "@/components/landing/faq";
import Cta from "@/components/landing/cta";

export default function Home() {
  return (
    <section>
      <Hero />
      <Explain />
      <Templates />
      <Marquee />
      <Faq />
      <Cta />
    </section>
  );
}
