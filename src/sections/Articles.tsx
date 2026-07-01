import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import zachImage from "@/assets/images/zach.jpg";
import Image, { StaticImageData } from "next/image";

type Article = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
  // Optional preview image. Articles without one render a gradient panel
  // instead (see the card markup below).
  image?: StaticImageData;
};

const articles: Article[] = [
  {
    title: "Eight Requests, One Dollar: Concurrency Bugs in a Double-Entry Ledger",
    description:
      "A wallet funded for one $7 transfer, hit by eight concurrent requests. Why a naive ledger lets all eight through — and the safeguards that fix it, in Go and PostgreSQL.",
    date: "6/30/2026",
    readTime: "11 min read",
    tags: ["Go", "PostgreSQL", "Concurrency"],
    link: "/articles/eight-requests-one-dollar",
  },
  {
    title: "How I ETAMed into the Texas A&M Computer Science Program WITHOUT the Auto Admit G.P.A.",
    description: "How I got into CS without the 3.75 GPA requirement.",
    date: "7/1/2025",
    readTime: "8 min read",
    tags: ["AI/ML", "Architecture", "Scalability"],
    link: "/articles/etam-guide",
    image: zachImage,
  },
  /*
  {
    title: "Quantitative Development Best Practices",
    description: "Explore the fundamental principles and methodologies for developing robust quantitative trading systems and financial applications.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["FinTech", "Algorithms", "Data Science"],
    link: "#"
  },
  {
    title: "Modern React Patterns with TypeScript",
    description: "Discover advanced React patterns and TypeScript techniques that improve code maintainability and developer experience.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["React", "TypeScript", "Frontend"],
    link: "#"
  }
    */
];

export const ArticlesSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          subtitle="Latest Articles"
          title="Insights & Knowledge Sharing"
          description="Thoughts on software development, AI/ML, and building impactful technology solutions."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex items-center gap-4 mb-4">
                    <time className="text-sm text-white/60">{article.date}</time>
                    <span className="text-sm text-white/40">{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl font-medium mb-4">
                    {article.title}
                  </h3>
                  <p className="text-white/60 mb-6 text-sm md:text-base">
                    {article.description}
                  </p>
                  <a
                    href={article.link}
                    className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:mt-0"
                  >
                    <span>Read Article</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
                <div className="relative mt-8 lg:mt-0">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt="Article preview"
                      className="w-full h-64 md:h-80 lg:h-96 rounded-lg object-cover mb-8"
                    />
                  ) : (
                    // Text/gradient preview for code-heavy posts without a photo.
                    <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg mb-8 border border-white/10 bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-transparent flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <span className="font-mono text-base md:text-lg text-emerald-300">
                        1 success · 7 × 422 · 0 errors
                      </span>
                      <span className="font-mono text-xs text-white/40">
                        under -race
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
