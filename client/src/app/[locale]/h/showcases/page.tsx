import Cta from "@/components/landing/cta";
import Hero from "@/components/showcases/showcase-hero";
import ShowcasesWrapper from "@/components/showcases/showcases-wrapper";
import React from "react";

const Page = () => {
  return (
    <section>
      <Hero />
      <ShowcasesWrapper />
      <Cta />
    </section>
  );
};

export default Page;
