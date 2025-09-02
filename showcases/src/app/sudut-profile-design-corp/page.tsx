import Hero from "./_components/hero";
import Timeline from "./_components/timeline";
import Aboutus from "./_components/about";
import Works from "./_components/selected-works";
import Services from "./_components/services";
import Insights from "./_components/insights";
import Cta from "./_components/cta";

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Selected Works */}
      <Works />

      {/* About Section */}
      <Aboutus />

      {/* Services Section */}
      <Services />

      {/* Timeline Section */}
      <Timeline />

      {/* Insights */}
      <Insights />

      {/* CTA Section */}
      <Cta />
    </div>
  );
};

export default Page;
