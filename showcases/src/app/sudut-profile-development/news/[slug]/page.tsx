"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { news } from "../../lib/data"

const findNewsBySlug = (slug: string) => {
  return news.find((article) => article.slug === slug)
}

interface NewsDetailPageProps {
  params: {
    slug: string
  }
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = findNewsBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const otherNews = news.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <header className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight text-balance">
            {article.title}
          </h1>

          {/* Author and Publication */}
          <div className="flex items-center gap-2 text-slate-700 mb-2">
            <span className="font-medium">{article.author}</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-600 font-medium">{article.publication}</span>
          </div>

          {/* Date */}
          <time className="text-slate-500 text-sm">{article.date}</time>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={800}
            height={450}
            className="w-full h-auto rounded-lg object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          {/* Description */}
          <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">{article.description}</p>

          {/* Full Content */}
          <div className="text-lg leading-relaxed text-slate-700 space-y-6">
            {article.fullContent?.split(". ").map((sentence, idx) => (
              <p key={idx} className="mb-4">
                {sentence}
                {sentence.endsWith(".") ? "" : "."}
              </p>
            ))}
          </div>
        </div>

        {/* Article Meta */}
        <footer className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-slate-600">Published on</p>
              <p className="font-semibold text-slate-900">{article.date}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Category</p>
              <span
                className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800"
              >
                {article.category}
              </span>
            </div>
          </div>
        </footer>

        {/* Related News Section */}
        {otherNews.length > 0 && (
          <section className="mt-16 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Berita Lainnya</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherNews.map((newsItem) => (
                <Link
                  key={newsItem.slug}
                  href={`/sudut-profile-development/news/${newsItem.slug}`}
                  className="group block bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-emerald-200"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={newsItem.image || "/placeholder.svg"}
                      alt={newsItem.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span>{newsItem.date}</span>
                      <span>•</span>
                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                      >
                        {newsItem.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
                      {newsItem.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{newsItem.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to News */}
        <div className="mt-12">
          <a
            href="/sudut-profile-development/news"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </a>
        </div>
      </article>
    </div>
  )
}
