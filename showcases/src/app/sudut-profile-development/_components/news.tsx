import TransitionLink from "@/components/shared/transition-link";
import Image from "next/image";
import React from "react";

const News = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 text-center">
          Latest News & Updates
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-12 text-center">
          Stay informed with the latest news, project launches, and investment
          insights from Sudut Profile as we continue shaping the future of
          property development in Indonesia.
        </p>

        {/* News Content */}
        <div className="w-full pb-16">
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
    </div>
  );
};

export default News;
