import Image from "next/image"
import TransitionLink from "@/components/shared/transition-link"
import Cta from "../_components/cta"
import {news} from "../lib/data"

const Page = () => {
  const featured = news.find((n) => n.type === "featured")
  const recent = news.filter((n) => n.type === "recent")
  const moreStories = news.filter((n) => n.type === "more")

  return (
    <div>
      <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container px-6 py-20 lg:py-32 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
              What&apos;s <span className="text-emerald-600">Latest</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto mt-16 text-center">
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed mb-6">
              Things move fast around here, and the most exciting developments are posted right here. Stay tuned for
              updates, stories, and milestones that shape our journey.
            </h2>
          </div>
        </div>

        <div className="container px-6 mx-auto pb-20">
          {/* Featured Article */}
          {featured && ( 
          <div className="relative mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src={ featured.image }
                alt="Featured news"
                fill
                className="object-cover opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
            </div>

            <div className="relative p-8 lg:p-16 text-white">
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 rounded-full text-sm font-medium border border-emerald-400/30">
                    { featured.category }
                  </span>
                  <time className="text-emerald-300 font-medium">{featured.date}</time>
                </div>

                <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                  { featured.title }
                </h2>
                { featured.description && (
                <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                  A groundbreaking achievement in luxury hospitality as we unveil our latest resort destination in one
                  of Indonesia's most pristine locations.
                </p>
                ) }
                {/* Call to Action */}
                <TransitionLink
                  href="/article/kuara-resort-launch"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Read Full Story
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </TransitionLink>
              </div>
            </div>
          </div>
          )}

          {/* Recent News Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Recent News</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="group bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/logistics/templates-logistic1-client2.jpg"
                    alt="Klara Ocean Place"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <time className="text-emerald-600 font-semibold">May 23, 2025</time>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                      Press Release
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors duration-200">
                    <em className="font-serif italic text-emerald-600">Introducing Klara Ocean Place:</em> Batu Belig's
                    Newest Serviced Apartment Landmark
                  </h4>
                  <TransitionLink
                    href="/article/klara-ocean-place"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold group/link"
                  >
                    Read More
                    <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </TransitionLink>
                </div>
              </article>

              <article className="group bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/logistics/templates-logistic1-client2.jpg"
                    alt="FINNS Bali Resort"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <time className="text-emerald-600 font-semibold">May 5, 2025</time>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                      Press Release
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors duration-200">
                    After Record Sell-Out, FINNS Bali Resort Launches Stage 2 Sales
                  </h4>
                  <TransitionLink
                    href="/article/finns-bali-stage-2"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold group/link"
                  >
                    Read More
                    <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </TransitionLink>
                </div>
              </article>

              <article className="group bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/logistics/templates-logistic1-client2.jpg"
                    alt="Cocana Resort Award"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <time className="text-emerald-600 font-semibold">June 17, 2025</time>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                      Award
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors duration-200">
                    Cocana Resort Named Top 10% of Hotels Worldwide – Award Tripadvisor Travelers' Choice Award
                  </h4>
                  <TransitionLink
                    href="/article/cocana-resort-award"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold group/link"
                  >
                    Read More
                    <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </TransitionLink>
                </div>
              </article>
            </div>
          </div>

          {/* Additional News */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">More Stories</h3>
            <div className="space-y-6">
              <article className="group flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300">
                <div className="md:w-48 flex-shrink-0">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/logistics/templates-logistic1-client2.jpg"
                      alt="Cocana Resort Best Earner"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <time className="text-emerald-600 font-semibold">April 14, 2025</time>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                      Award
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors duration-200">
                    Cocana Resort Wins 'Best Earner' Award from Expedia Group
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Recognition for outstanding performance and revenue generation in the competitive hospitality
                    market.
                  </p>
                  <TransitionLink
                    href="/article/cocana-best-earner"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold group/link"
                  >
                    Read Full Article
                    <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </TransitionLink>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <div className="mb-24" />
    </div>
  )
}

export default Page
