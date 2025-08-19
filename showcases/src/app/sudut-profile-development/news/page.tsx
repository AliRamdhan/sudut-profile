import React from "react";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import Cta from "../_components/cta";

const Page = () => {
  return (
    <div>
      <section className="w-full h-full">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium">News</p>

            <h1
              className={`italic text-4xl md:text-6xl font-semibold italic tracking-tighter leading-[130%]`}
            >
              What&apos; Latest
            </h1>
          </div>

          <div className="max-w-5xl mt-10 text-5xl font-medium text-justify px-8">
            <h2 className="text-gray-800 leading-relaxed">
              Things move fast around here, and the most exciting developments
              are posted right here. Stay tuned for updates, stories, and
              milestones that shape our journey.
            </h2>
          </div>
        </div>
        <div className="w-full h-full p-8">
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
          <div className="grid md:grid-cols-3 gap-8 pb-16">
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

          {/* Article Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 pb-8">
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
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-8 py-16">
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
          </div>
        </div>
      </section>
      <Cta />
    </div>
  );
};

export default Page;
