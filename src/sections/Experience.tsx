import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const workExperience = [
  {
    company: "AMD (Advanced Micro Devices)",
    role: "Software Engineer Intern",
    location: "Austin, TX",
    dates: "Jan 2026 – Present",
    highlights: [
      {
        title:
          "Building Python feature-validation tooling for CPU power management on AMD's next-generation EPYC server platform (Venice), enabling repeatable regression testing across 10+ silicon features",
      },
      {
        title:
          "Built dual-socket, multi-IOD support from scratch, expanding the team's validation coverage across system topologies",
      },
      {
        title:
          "Built AI-powered tools that auto-generate test configurations from specifications, reducing manual setup for a team spanning the US, Malaysia, and India",
      },
    ],
  },
  {
    company: "Arkane Digital",
    role: "Software Engineer Intern",
    location: "Remote",
    dates: "Jun 2025 – Aug 2025",
    highlights: [
      {
        title:
          "Developed and deployed 10+ AI-powered workflows on the Raikoo platform to automate the front-end design-to-code pipeline",
      },
      {
        title:
          "Built multi-component generation logic with text-preprocessing pipelines, supporting 20+ UI configurations across internal product teams",
      },
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="pb-16 lg:py-20">
      <div className="container">
        <SectionHeader
          title="Where I've Worked"
          subtitle="Experience"
          description="Building real systems on real teams, from silicon validation to AI tooling."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-8">
          {workExperience.map((job) => (
            <Card key={job.company} className="pb-8 md:pb-12 lg:pb-16">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <div>
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{job.company}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-3xl">
                    {job.role}
                  </h3>
                </div>
                <div className="text-sm md:text-base text-white/50 md:text-right">
                  <div>{job.dates}</div>
                  <div>{job.location}</div>
                </div>
              </div>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {job.highlights.map((highlight, index) => (
                  <li
                    className="flex gap-2 text-sm md:text-base text-white/50"
                    key={index}
                  >
                    <CheckCircleIcon className="size-5 md:size-6 shrink-0" />
                    <span>{highlight.title}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
