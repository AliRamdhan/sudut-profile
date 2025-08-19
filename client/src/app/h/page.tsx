import Hero from "@/components/landing/hero";
import Showcases from "@/components/landing/showcases";
import Explain from "@/components/landing/explain";
import Marquee from "@/components/landing/marquee";
import Faq from "@/components/landing/faq";
import Cta from "@/components/landing/cta";

export default function Home() {
  return (
    <section>
      <Hero />
      <Explain />
      <Showcases />
      <Marquee />
      <Faq />
      <Cta />
    </section>
  );
}
