/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Cta from "../_components/cta";
import TransitionLink from "@/components/shared/transition-link";

const Page = () => {
  return (
    <div>
      {/* Projects Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">
            INSIGHTS
          </h1>
          <p className="text-sm text-gray-600">BROADCAST TV</p>
        </div>

        {/* Projects Grid */}
        <div className="w-full h-full">
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
                  href="articles/kuara-resort-launch"
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
              <article className="space-y-8">
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
                    href="articles/klara-ocean-place-full"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Read Article →
                  </TransitionLink>
                </div>
              </article>

              {/* Article 2 */}
              <article className="space-y-8">
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
                    href="articles/finns-bali-stage-2"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Read Article →
                  </TransitionLink>
                </div>
              </article>

              <article className="space-y-8">
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
                    href="articles/cocana-resort-award"
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
                  href="articles/cocana-best-earner"
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
                  href="articles/klara-ocean-place"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Read Article →
                </TransitionLink>
              </div>
            </article>
          </div>

          {/* Article Grid */}
          <div className="container py-10 mx-auto">
            <div className="lg:flex lg:-mx-6">
              <div className="lg:w-3/4 lg:px-6">
                <img
                  className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Design Insight"
                />

                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-4 text-sm">
                    <time className="text-blue-600">June 24, 2025</time>
                    <span className="text-blue-600">Press Release</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 leading-tight">
                    Mirah Investment & Development Achieves Key Milestone with
                    the Soft Launch of Kuara Resort in Southern Lombok.
                  </h2>
                  <TransitionLink
                    href="articles/kuara-resort-launch"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Read Article →
                  </TransitionLink>
                </div>
              </div>

              <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 space-y-8">
                <article className="space-y-8">
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
                      href="articles/cocana-resort-award"
                      className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Read Article →
                    </TransitionLink>
                  </div>
                </article>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <article className="space-y-8">
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
                      href="articles/cocana-resort-award"
                      className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Read Article →
                    </TransitionLink>
                  </div>
                </article>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <article className="space-y-8">
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
                      href="articles/cocana-resort-award"
                      className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Read Article →
                    </TransitionLink>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cta Section */}
      <Cta />
    </div>
  );
};

export default Page;
