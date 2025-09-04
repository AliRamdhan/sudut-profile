import TransitionLink from "@/components/shared/transition-link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { news } from "../lib/data"

const News = () => {
  const featured = news.find((n) => n.type === "featured")
  const recent = news.filter((n) => n.type === "recent")
  const moreStories = news.filter((n) => n.type === "more")

  return (
    <div className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 text-balance">
            Latest News & Updates
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-700 mb-8 text-center leading-relaxed">
            Stay informed with the latest news, project launches, and investment insights from Sudut Profile as we
            continue shaping the future of property development in Indonesia.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto rounded-full"></div>
        </div>

        <div className="w-full pb-16">
          {/* Featured */}
          {featured && (
            <div className="mb-20">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                <div className="relative grid lg:grid-cols-2 min-h-[500px]">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image src={featured.image} alt={featured.title} fill className="object-cover" priority />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {featured.category}
                      </span>
                      <time className="text-emerald-200 font-medium">{featured.date}</time>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">{featured.title}</h2>
                    {featured.description && (
                      <p className="text-slate-200 mb-8 text-lg leading-relaxed">{featured.description}</p>
                    )}
                    <TransitionLink href={`/article/${featured.id}`} className="inline-flex items-center group">
                      <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 py-3 rounded-full">
                        Read Full Story
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </TransitionLink>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recent News */}
          {recent.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Recent Updates</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recent.map((item) => (
                  <article
                    key={item.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <time className="text-emerald-600 font-medium text-sm">{item.date}</time>
                      <h4 className="text-xl font-semibold text-slate-900 mt-2 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-slate-600 mb-4 line-clamp-2">{item.description}</p>
                      )}
                      <TransitionLink
                        href={`/article/${item.id}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </TransitionLink>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* More News */}
          {moreStories.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">More News</h3>
              <div className="space-y-6">
                {moreStories.map((item) => (
                  <article
                    key={item.id}
                    className="flex gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                        <span className="text-emerald-600 font-bold text-lg">
                          {new Date(item.date).toLocaleString("en-US", { month: "short" })}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <time className="text-emerald-600 font-medium text-sm">{item.date}</time>
                        <span className="text-slate-500 text-sm">•</span>
                        <span className="text-slate-600 text-sm">{item.category}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {item.title}
                      </h4>
                      <TransitionLink
                        href={`/article/${item.id}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </TransitionLink>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default News
