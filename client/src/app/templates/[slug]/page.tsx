import React from "react";
import TemplateCreative1Wrapper from "@/components/templates-profile/creatives/templates-creative-1/templates-creative1-wrapper";
import TemplatesCreative2Wrapper from "@/components/templates-profile/creatives/templates-creative-2/templates-creative2-wrapper";

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  return (
    <section>
      {slug === "project-cyberscape" && <TemplateCreative1Wrapper />}
      {slug === "ethereal-threads" && <TemplatesCreative2Wrapper />}
    </section>
  );
};

export default Page;
