import docagentImage from "@/assets/images/docagent.png";
import telemetryBenchImage from "@/assets/images/telemetry-bench.png";
import imageTwo from "@/assets/images/imageDos.png";
import Image, { type StaticImageData } from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

type PortfolioProject = {
  company: string;
  title: string;
  results: { title: string }[];
  link: string;
  buttonText: string;
  repoLink?: string;
  image: StaticImageData;
};

const portfolioProjects: PortfolioProject[] = [
  {
    company: "Personal Project",
    title: "DocAgent",
    results: [
      {
        title:
          "Full-stack RAG system on async FastAPI + Postgres/pgvector with streaming answers, source citations, and validated agentic tool use",
      },
      {
        title:
          "239 tests running against real Postgres in CI, with a 50-question eval suite gating PRs on quality regression (93% answer correctness)",
      },
      {
        title:
          "Dockerized and deployed as a public live demo on Hugging Face Spaces with sub-500ms first-token latency",
      },
    ],
    link: "https://huggingface.co/spaces/nathanwjchung/docagent",
    buttonText: "Try Live Demo",
    repoLink: "https://github.com/NathanChung4/docagent",
    image: docagentImage,
  },
  {
    company: "Personal Project",
    title: "TelemetryBench",
    results: [
      {
        title:
          "Containerized full-stack app (FastAPI + Streamlit + SQLAlchemy/SQLite) that ingests raw DAQ CSVs from hardware parameter sweeps",
      },
      {
        title:
          "8 REST endpoints for sweep ingestion, multi-run comparison, time-series queries, and anomaly scoring",
      },
      {
        title:
          "ML-based run-quality scoring with a scikit-learn Isolation Forest that catches drift cases static thresholds miss",
      },
    ],
    link: "https://github.com/NathanChung4/telemetry-bench",
    buttonText: "View on GitHub",
    image: telemetryBenchImage,
  },
  {
    company: "Arkane Digital",
    title: "Arkane Digital Website",
    results: [
      { title: "Helped build the official Arkane Digital website" },
      {
        title:
          "Shipped during my software engineering internship using the Raikoo design-to-code platform",
      },
    ],
    link: "https://www.arkanedigital.com/",
    buttonText: "Visit Live Site",
    image: imageTwo,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-20">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="Real-world Results"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={index}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row gap-4 mt-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-300/50">
                        <span>{project.buttonText}</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="border border-white/15 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-300/50">
                          <span>View Code</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
