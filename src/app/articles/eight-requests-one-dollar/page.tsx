import Link from "next/link";
import type { Metadata } from "next";
import BackIcon from "@/assets/icons/back.svg";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Eight Requests, One Dollar — Nathan Chung",
  description:
    "What happens when eight requests race for one dollar? Concurrency bugs in a double-entry ledger, and the safeguards that fix them — in Go and PostgreSQL.",
};

export default function EightRequestsOneDollarPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container py-28">
        {/* Back Button */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-semibold mb-10 transition-colors px-5 py-2.5 rounded-xl"
        >
          <BackIcon className="size-5" />
          <span className="text-lg">Back to Articles</span>
        </Link>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <time className="text-sm text-white/60">June 30, 2026</time>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-medium mb-6">
            Eight Requests, One Dollar: Concurrency Bugs in a Double-Entry Ledger
          </h1>

          <p className="text-xl text-white/80 mb-10">
            A wallet funded for exactly one $7 transfer, hit by eight concurrent
            requests. A naive ledger lets all eight through. Here&apos;s why — and
            the safeguards that turn &ldquo;eight&rdquo; back into &ldquo;one.&rdquo;
          </p>

          {/* Text/gradient hero — the result the whole post is about */}
          <div className="mb-12 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-sky-500/10 to-transparent p-8 md:p-12">
            <div className="font-mono text-sm md:text-lg text-emerald-300">
              <span className="text-white/40">$ </span>8 concurrent transfers{" "}
              <span className="text-white/60">→</span>{" "}
              <span className="text-white">1 success</span>
              <span className="text-white/60"> · </span>7 ×{" "}
              <span className="text-white">422</span>
              <span className="text-white/60"> · </span>
              <span className="text-white">0 errors</span>
            </div>
            <div className="mt-3 font-mono text-xs text-white/40">
              go test -race -count=3 · Go 1.26 · PostgreSQL 16
            </div>
          </div>

          {/* Article Content (MDX) */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-strong:text-white prose-th:text-white">
            <Content />
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
}
