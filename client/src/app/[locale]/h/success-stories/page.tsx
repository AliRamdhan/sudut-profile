import React from "react";
import ClientLogo from "@/components/success-stories/success-stories-client-logo";
import TestimonialsSection from "@/components/success-stories/success-stories-client-testimonials";
import Hero from "@/components/success-stories/success-stories-hero";

const Page = () => {
  return (
    <section>
      <Hero />
      <ClientLogo />
      <TestimonialsSection />
    </section>
  );
};

export default Page;
