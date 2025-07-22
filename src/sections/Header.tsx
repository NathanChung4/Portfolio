"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LinkedInIcon from "@/assets/icons/linkedIn.svg";

export const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: pathname.startsWith('/articles') ? "/" : "#home", isInternal: !pathname.startsWith('/articles') },
    { name: "Projects", href: pathname.startsWith('/articles') ? "/#projects" : "#projects", isInternal: !pathname.startsWith('/articles') },
    { name: "About", href: pathname.startsWith('/articles') ? "/#about" : "#about", isInternal: !pathname.startsWith('/articles') },
    { name: "Contact", href: pathname.startsWith('/articles') ? "/#contact" : "#contact", isInternal: !pathname.startsWith('/articles') },
    { name: "Articles", href: "/articles", isInternal: false },
  ];

  useEffect(() => {
    // Set active item based on current pathname
    if (pathname.startsWith('/articles')) {
      setActiveItem("Articles");
      return;
    }
    
    // Only set up scroll listener on home page
    if (pathname !== '/') {
      return;
    }

    const handleScroll = () => {
      const sections = navItems.filter(item => item.isInternal).map(item => ({
        name: item.name,
        element: document.getElementById(item.href.substring(1))
      }));

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page (Contact section)
      if (window.scrollY + windowHeight >= documentHeight - 200) {
        setActiveItem("Contact");
        return;
      }

      // Find the section that's currently most visible
      let maxVisibleArea = 0;
      let mostVisibleSection = "Home";

      for (const section of sections) {
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionBottom = sectionTop + section.element.offsetHeight;
          const viewportTop = scrollPosition + 100; // Header offset
          const viewportBottom = scrollPosition + windowHeight;

          // Calculate visible area of this section
          const visibleTop = Math.max(sectionTop, viewportTop);
          const visibleBottom = Math.min(sectionBottom, viewportBottom);
          const visibleArea = Math.max(0, visibleBottom - visibleTop);

          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            mostVisibleSection = section.name;
          }
        }
      }

      setActiveItem(mostVisibleSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, navItems]);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => {
          const isActive = activeItem === item.name;
          const baseClasses = `nav-item transition-none ${
            isActive
              ? "bg-white text-gray-900"
              : "text-white"
          }`;

          if (item.isInternal) {
            return (
              <a
                key={item.name}
                href={item.href}
                className={baseClasses}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.name);
                  
                  // Smooth scroll to the section
                  const targetId = item.href.substring(1); // Remove the #
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                {item.name}
              </a>
            );
          } else {
            return (
              <Link
                key={item.name}
                href={item.href}
                className={baseClasses}
              >
                {item.name}
              </Link>
            );
          }
        })}
      </nav>
      
      <div className="fixed top-3 right-3">
        <a
          href="https://www.linkedin.com/in/nathan-chung4/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur border border-white/15 rounded-full hover:bg-white/20 transition-colors"
        >
          <LinkedInIcon className="w-5 h-5 fill-[url(#linkedin-icon-gradient)]" />
          <svg className="size-0 absolute">
            <linearGradient id="linkedin-icon-gradient">
              <stop offset="0%" stopColor="rgb(110 231 183)" />
              <stop offset="100%" stopColor="rgb(56 189 248)" />
            </linearGradient>
          </svg>
        </a>
      </div>
    </div>
  );
};
