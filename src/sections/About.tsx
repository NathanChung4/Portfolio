"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import atomicHabitsBook from "@/assets/images/atomicHabits.jpg";
import mereBook from "@/assets/images/mereChristianity.jpg";
import toolsBook from "@/assets/images/tools.jpg";
import nextArrow from "@/assets/icons/next.svg";
import backArrow from "@/assets/icons/back.svg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import pythonIcon from "@/assets/icons/python-gradient.svg";
import cPlusPlusIcon from "@/assets/icons/cPlusPlus-gradient.svg";
import javaIcon from "@/assets/icons/java-gradient.svg";
import gitIcon from "@/assets/icons/git-gradient.svg";
import cSharpIcon from "@/assets/icons/cSharp-gradient.svg";
import typeScriptIcon from "@/assets/icons/typescript-gradient.svg";
import nextjsIcon from "@/assets/icons/nextjs.svg";
import Keller from "@/assets/images/mapOne.png"
import smileImage from "@/assets/images/smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Python",
    iconType: pythonIcon,
  },
  {
    title: "C++",
    iconType: cPlusPlusIcon,
  },
  {
    title: "Next.js",
    iconType: nextjsIcon,
  },
  {
    title: "Java",
    iconType: javaIcon,
  },
  {
    title: "Git",
    iconType: gitIcon,
  },
  {
    title: "C#",
    iconType: cSharpIcon,
  },
  {
    title: "TypeScript",
    iconType: typeScriptIcon,
  },
];

const books = [
  {
    title: "Mere Christianity",
    author: "C.S. Lewis",
    image: mereBook,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: atomicHabitsBook,
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferriss",
    image: toolsBook,
  },
];

const hobbies = [
  {
    title: "Basketball",
    emoji: "🏀",
    left: "5%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
  {
    title: "Fishing",
    emoji: "🎣",
    left: "75%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const nextBook = () => {
    setCurrentBookIndex((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentBookIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (constraintRef.current) {
        const { width, height } = constraintRef.current.getBoundingClientRect();
        setContainerDimensions({ width, height });
        
        if (width > 0 && height > 0 && !isInitialized) {
          setIsInitialized(true);
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [isInitialized]);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into My World"
          subtitle="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                className="pt-0 -mb-2 -mt-3.5 items-center md:items-start"
              />
              <div className="relative flex-1 flex flex-col items-center justify-center mt-4">
                <div className="relative flex items-center justify-center gap-4">
                  <button
                    onClick={prevBook}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/20"
                    aria-label="Previous book"
                  >
                    <span className="text-white text-xl font-bold">←</span>
                  </button>
                  <div className="w-32 h-40 relative flex items-center justify-center">
                    <Image 
                      src={books[currentBookIndex].image} 
                      alt={`${books[currentBookIndex].title} book cover`}
                      className="rounded-2xl shadow-lg max-w-full max-h-full object-contain"
                      priority
                    />
                  </div>
                  <button
                    onClick={nextBook}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/20"
                    aria-label="Next book"
                  >
                    <span className="text-white text-xl font-bold">→</span>
                  </button>
                </div>
                <div className="mt-2 text-center">
                  <h4 className="font-medium text-sm text-white/90">
                    {books[currentBookIndex].title}
                  </h4>
                  <p className="text-xs text-white/60 mt-1">
                    by {books[currentBookIndex].author}
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  {books.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBookIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentBookIndex 
                          ? 'bg-white' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to book ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 overflow-hidden lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="md:py-0"
              />
              <div className="mt-6 -mx-8 md:-mx-10 lg:-mx-20">
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="sm:px-4 px-2 py-6 md:py-0"
              />
              <div className="relative flex-1 pl-4 pr-8 lg:pl-2" ref={constraintRef}>
                {hobbies.map((hobby, index) => {
                  const maxX = Math.max(0, containerDimensions.width - 160); // Even more buffer
                  const maxY = Math.max(0, containerDimensions.height - 60); // Even more buffer
                  
                  return (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      initial={{
                        x: (index * 50) % maxX,
                        y: (index * 30) % maxY,
                      }}
                      animate={
                        isInitialized && containerDimensions.width > 0
                          ? {
                              x: [
                                (index * 50) % maxX,
                                (index * 80 + 100) % maxX,
                                (index * 120 + 200) % maxX,
                                (index * 90 + 150) % maxX,
                                (index * 60 + 80) % maxX,
                                (index * 50) % maxX,
                              ],
                              y: [
                                (index * 30) % maxY,
                                (index * 60 + 80) % maxY,
                                (index * 40 + 120) % maxY,
                                (index * 70 + 30) % maxY,
                                (index * 50 + 90) % maxY,
                                (index * 30) % maxY,
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 10 + index * 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
            <Card className="h-[320px] !p-0 relative md:col-span-2 overflow-hidden lg:col-span-1">
              <Image
                src={Keller}
                alt="Map"
                className="h-full w-full object-cover object-center"
                quality={100}
                priority
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileImage}
                  alt="Smiling Memoji"
                  className="w-16 h-17 pb-2.5 pl-0.5 object-contain rounded-full relative z-10"
                  quality={100}
                  priority
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
