import Image from "next/image";
import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <Image
        src="/images/construction/construction-hero.jpg"
        alt="Building construction site"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-500/80 to-transparent flex items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-wide text-gray-900 leading-tight">
            Building Your Vision with Precision
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            We are Struktura, your trusted partner in the world of construction.
            With a legacy of excellence and a commitment to quality, we turn
            your visions into reality.
          </p>
          <TransitionLink href={"#why-choose-us"}>
            <Button className="px-8 py-3 text-lg rounded-full bg-gray-900 text-white hover:bg-gray-800 mt-8">
              Learn more
            </Button>
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
