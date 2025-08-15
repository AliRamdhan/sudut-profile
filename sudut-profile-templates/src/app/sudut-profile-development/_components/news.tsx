import TransitionLink from "@/components/shared/transition-link";
import Image from "next/image";
import React from "react";

const News = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-normal text-gray-800">
          Apa yang <em className="font-serif italic">Baru</em>
        </h1>
        <TransitionLink
          href="/news"
          className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          News →
        </TransitionLink>
      </div>

      {/* News Content */}
      <div className="w-full mx-auto px-6 pb-16">
        {/* Hero Article */}
        <article className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/logistics/templates-logistic1-client2.jpg"
                alt="Aerial view of Kuara Resort in Southern Lombok"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <time className="text-blue-600">June 24, 2025</time>
                <span className="text-blue-600">Press Release</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 leading-tight">
                Mirah Investment & Development Achieves Key Milestone with the
                Soft Launch of Kuara Resort in Southern Lombok.
              </h2>
              <TransitionLink
                href="/article/kuara-resort-launch"
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Read Article →
              </TransitionLink>
            </div>
          </div>
        </article>

        {/* Article Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Articles */}
          <div className="grid grid-cols-1 justify-between items-center gap-8">
            {/* Article 1*/}
            <article className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm">
                  <time className="text-blue-600">May 23, 2025</time>
                  <span className="text-blue-600">Press Release</span>
                </div>
                <h3 className="text-xl font-normal text-gray-800 leading-tight">
                  <em className="font-serif italic">
                    Introducing Klara Ocean Place:
                  </em>{" "}
                  Batu Belig&apos;s Newest Serviced Apartment Landmark
                </h3>
                <TransitionLink
                  href="/article/klara-ocean-place-full"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Read Article →
                </TransitionLink>
              </div>
            </article>

            {/* Article 2 */}
            <article className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm">
                  <time className="text-blue-600">May 5, 2025</time>
                  <span className="text-blue-600">Press Release</span>
                </div>
                <h3 className="text-xl font-normal text-gray-800 leading-tight">
                  After Record Sell-Out, FINNS Bali Resort Launches Stage 2
                  Sales
                </h3>
                <TransitionLink
                  href="/article/finns-bali-stage-2"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Read Article →
                </TransitionLink>
              </div>
            </article>

            <article className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm">
                  <time className="text-blue-600">June 17, 2025</time>
                  <span className="text-blue-600">Press Release</span>
                </div>
                <h3 className="text-xl font-normal text-gray-800 leading-tight">
                  Cocana Resort Named Top 10% of Hotels Worldwide – Award
                  Tripadvisor Travelers&apos; Choice Award
                </h3>
                <TransitionLink
                  href="/article/cocana-resort-award"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Read Article →
                </TransitionLink>
              </div>
            </article>
          </div>

          {/* Article 2 */}
          <article className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/logistics/templates-logistic1-client2.jpg"
                alt="Klara Ocean Place interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm">
                <time className="text-blue-600">April 14, 2025</time>
                <span className="text-blue-600">Press Release</span>
              </div>
              <h3 className="text-xl font-normal text-gray-800 leading-tight">
                Cocana Resort Wins &apos;Best Earner&lsquo; Award from Expedia
                Group
              </h3>
              <TransitionLink
                href="/article/cocana-best-earner"
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Read Article →
              </TransitionLink>
            </div>
          </article>

          {/* Article 3 */}
          <article className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/logistics/templates-logistic1-client2.jpg"
                alt="FINNS Bali Resort Stage 2 Sales"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm">
                <time className="text-blue-600">May 23, 2025</time>
                <span className="text-blue-600">Press Release</span>
              </div>
              <h3 className="text-xl font-normal text-gray-800 leading-tight">
                <em className="font-serif italic">
                  Introducing Klara Ocean Place:
                </em>{" "}
                Batu Belig&apos;s Newest Serviced Apartment Landmark
              </h3>
              <TransitionLink
                href="/article/klara-ocean-place"
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Read Article →
              </TransitionLink>
            </div>
          </article>
        </div>

        {/* Bottom Articles */}
      </div>
    </div>
  );
};

export default News;
