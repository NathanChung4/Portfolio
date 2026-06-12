import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const contactLinks = [
  {
    title: "Email",
    href: "mailto:nathanwjchung@gmail.com",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/nathan-chung4/",
  },
  {
    title: "GitHub",
    href: "https://github.com/NathanChung4",
  },
];

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s Connect!
              </h2>
              <p className="text-sm mt-2 md:text-base">
                I&apos;m always interested in discussing new opportunities,
                collaborating on projects, or just talking about tech. Feel free
                to reach out at{" "}
                <a
                  href="mailto:nathanwjchung@gmail.com"
                  className="font-semibold underline"
                >
                  nathanwjchung@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full md:w-40 border border-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-800/80"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
