import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/nathan-chung4/",
  },
  {
    title: "GitHub",
    href: "https://github.com/NathanChung4",
  },
  {
    title: "Resume",
    href: "/resume.pdf",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="border-t border-white/15"></div>
      <div className="max-w-full px-11 relative z-10">
        <div className="py-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="text-white/40">
            &copy; 2025 Nathan Chung. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
