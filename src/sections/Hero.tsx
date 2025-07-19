import laptopImage from "@/assets/images/laptop.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import CvIcon from "@/assets/icons/resume.svg";
import LinkedInIcon from "@/assets/icons/linkedIn.svg";
import GithubIcon from "@/assets/icons/github.svg";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image
            src={laptopImage}
            className="w-[100px] h-auto"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hi! I&apos;m Nathan 🚀
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I am a software developer with interest in AI/ML automation and
            quantitative development, focused on building scalable systems and
            impactful applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-300/50">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition duration-200 hover:-translate-y-1">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </a>
        </div>

        <div className="flex justify-center items-center mt-8 gap-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur border border-white/15 rounded-full hover:bg-white/20 transition-colors"
          >
            <CvIcon className="w-6 h-6 fill-[url(#cv-icon-gradient)]" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathan-chung4/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur border border-white/15 rounded-full hover:bg-white/20 transition-colors"
          >
            <LinkedInIcon className="w-6 h-6 fill-[url(#linkedin-hero-icon-gradient)]" />
          </a>
          <a
            href="https://github.com/NathanChung4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur border border-white/15 rounded-full hover:bg-white/20 transition-colors"
          >
            <GithubIcon className="w-6 h-6 [&>g]:fill-[url(#github-icon-gradient)] [&>g>path]:fill-[url(#github-icon-gradient)]" />
          </a>

          {/* SVG Gradients */}
          <svg className="size-0 absolute">
            <linearGradient id="cv-icon-gradient">
              <stop offset="0%" stopColor="rgb(110 231 183)" />
              <stop offset="100%" stopColor="rgb(56 189 248)" />
            </linearGradient>
            <linearGradient id="linkedin-hero-icon-gradient">
              <stop offset="0%" stopColor="rgb(110 231 183)" />
              <stop offset="100%" stopColor="rgb(56 189 248)" />
            </linearGradient>
            <linearGradient id="github-icon-gradient">
              <stop offset="0%" stopColor="rgb(110 231 183)" />
              <stop offset="100%" stopColor="rgb(56 189 248)" />
            </linearGradient>
          </svg>
        </div>
      </div>
    </div>
  );
};
