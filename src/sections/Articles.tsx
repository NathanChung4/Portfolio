import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const articles = [
  {
    title: "Building Scalable AI Systems",
    description: "Learn how to design and implement AI systems that can handle large-scale production workloads with reliability and efficiency.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["AI/ML", "Architecture", "Scalability"],
    link: "#"
  },
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
                    <span className="text-white/60">•</span>
                    <span className="text-sm text-white/60">{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl font-medium mb-4">
                    {article.title}
                  </h3>
                  <p className="text-white/60 mb-6 text-sm md:text-base">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={article.link}
                    className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:mt-0"
                  >
                    <span>Read Article</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 h-48 md:h-64 lg:h-80 rounded-lg mb-8 flex items-center justify-center">
                    <div className="text-gray-900 text-lg font-medium">
                      Article Preview
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
