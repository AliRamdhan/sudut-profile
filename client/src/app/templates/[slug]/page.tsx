import React from "react";
import TemplateCreative1Wrapper from "@/components/templates-profile/creatives/templates-creative-1/templates-creative1-wrapper";
import TemplatesCreative2Wrapper from "@/components/templates-profile/creatives/templates-creative-2/templates-creative2-wrapper";
import TemplatesProduct1Wrapper from "@/components/templates-profile/products/templates-product-1/templates-product1-wrapper";

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  return (
    <section>
      {slug === "project-cyberscape" && <TemplateCreative1Wrapper />}
      {slug === "ethereal-threads" && <TemplatesCreative2Wrapper />}
      {slug === "quantum-leap" && <TemplatesProduct1Wrapper />}
    </section>
  );
};

export default Page;
