import Image from "next/image"
import TransitionLink from "@/components/shared/transition-link"
import Cta from "../_components/cta"
import { news } from "../lib/data"

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
            <div className="relative mb-16 rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featured.image || "/placeholder.svg"}
                  alt="Featured news"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8 lg:p-12">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {featured.category}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-slate-900">{featured.title}</h2>

                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
                    <span className="font-medium text-slate-900">{featured.author}</span>
                    <span className="text-emerald-600">{featured.publication}</span>
                    <span>•</span>
                    <time>{featured.date}</time>
                  </div>

                  {featured.description && (
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl">{featured.description}</p>
                  )}
                  <TransitionLink
                    href={`/sudut-profile-development/news/${featured.slug}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </TransitionLink>
                </div>
              </div>
            </div>
          )}

          {/* Recent News Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Recent Updates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recent.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors duration-200">
                      {article.title}
                    </h4>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-slate-900">{article.author}</span>
                      <span className="text-emerald-600 ml-1">{article.publication}</span>
                      <div className="mt-1">
                        <time>{article.date}</time>
                      </div>
                    </div>
                    <TransitionLink
                      href={`/sudut-profile-development/news/${article.slug}`}
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold group/link"
                    >
                      Read More
                      <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                    </TransitionLink>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Additional News */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">More News</h3>
            <div className="space-y-6">
              {moreStories.map((article) => (
                <article
                  key={article.id}
                  className="group flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="md:w-48 flex-shrink-0">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors duration-200">
                      {article.title}
                    </h4>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-slate-900">{article.author}</span>
                      <span className="text-emerald-600 ml-1">{article.publication}</span>
                      <span className="mx-2">•</span>
                      <time>{article.date}</time>
                    </div>
                    {article.description && <p className="text-slate-600 leading-relaxed">{article.description}</p>}
                    <TransitionLink
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold group/link"
                    >
                      Read More
                      <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                    </TransitionLink>
                  </div>
                </article>
              ))}
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
