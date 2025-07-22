import Image from "next/image";
import Link from "next/link";
import BackIcon from "@/assets/icons/back.svg";
import zachImage from "@/assets/images/zach.jpg";
import etamImage from "@/assets/images/ETAM.png";
import { Header } from "@/sections/Header";

export default function EtamGuidePage() {
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
            <time className="text-sm text-white/60">July 1, 2025</time>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-medium mb-6">
            How I ETAMed into the Texas A&M Computer Science Program WITHOUT the
            Auto Admit G.P.A.
          </h1>

          <p className="text-xl text-white/80 mb-12">
            How I got into CS without the 3.75 GPA requirement.
          </p>

          {/* Article Image */}
          <div className="mb-12">
            <Image
              src={zachImage}
              alt="Article hero image"
              className="w-full h-96 rounded-lg object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl md:text-2xl font-bold mb-6">
              How I Made It Into Texas A&M Computer Science with a 3.6 GPA
            </h2>
            <p>
              Getting into Texas A&M&apos;s Computer Science program through the ETAM
              process is no easy feat—especially when, like me, you don&apos;t reach
              the 3.75 GPA for automatic admission. If you&apos;re reading this as a
              student feeling discouraged or overwhelmed, I hope sharing my real
              journey will offer you hope, practical strategies, and a sense of
              community.
            </p>

            <div className="my-8"></div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Understanding the Odds: CS Is Competitive
            </h1>
            <div className="mb-12">
              <Image
                src={etamImage}
                alt="Etam statistics"
                className="w-full object-cover"
              />
            </div>
            <p>
              Let&apos;s start with some context. In 2024, 517 students selected
              Computer Science as their first-choice major for ETAM. Only 351
              were placed through auto-admit (GPA ≥ 3.75). The other 92 holistic
              review spots (across all choices) were highly competitive, showing
              just how crucial your entire application becomes if you&apos;re not in
              the auto-admit group.
            </p>

            <div className="my-8"></div>

            <table className="w-full border-collapse border border-white/30">
              <thead>
                <tr className="bg-white/10">
                  <th className="border border-white/30 p-3 text-left">
                    Application Path
                  </th>
                  <th className="border border-white/30 p-3 text-left">
                    Number Placed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white/30 p-3">
                    1st Choice (Auto-Admit ≥3.75)
                  </td>
                  <td className="border border-white/30 p-3">351</td>
                </tr>
                <tr>
                  <td className="border border-white/30 p-3">
                    1st/2nd/3rd Choice (Holistic)
                  </td>
                  <td className="border border-white/30 p-3">92</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="border border-white/30 p-3 font-semibold">
                    Total CS Placements
                  </td>
                  <td className="border border-white/30 p-3 font-semibold">
                    443
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="my-10"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My Story: The Real Highs and Lows
            </h2>

            <h3 className="text-2xl font-bold mb-4">Highs</h3>
            <p>
              <strong>Building a Community:</strong> Finding organizations like
              Aggie Coding Club and Aggie AI Society gave me a sense of
              belonging and tons of relevant experience—both for my essays and
              my personal growth.
            </p>
            <div className="my-1.5"></div>
            <p>
              <strong>Internships Matter:</strong> Internships at Edikt Studios
              and Arkane Digital provided me with rich, specific stories and
              experiences that shaped my essays and interviews.
            </p>
            <div className="my-1.5"></div>
            <p>
              <strong>Projects Make a Difference:</strong> If you don&apos;t land an
              internship, don&apos;t worry! Personal projects, hackathons, or
              anything you&apos;ve built counts. These show real-world application
              and self-motivation.
            </p>
            <div className="my-1.5"></div>
            <p>
              <strong>Support from Others:</strong> Reaching out to friends who
              had ETAM&apos;d before was absolutely crucial. Their advice on essays,
              what they wished they&apos;d done differently, and tips for specific
              classes made a huge difference in my preparation and confidence.
            </p>

            <div className="my-6"></div>

            <h3 className="text-2xl font-bold mb-4">Lows</h3>
            <p>
              <strong>Missing Auto-Admit:</strong> Seeing my 3.6 GPA meant I&apos;d
              have to compete holistically, which was daunting.
            </p>
            <div className="my-1.5"></div>
            <p>
              <strong>Comparison & Self-Doubt:</strong> Watching friends seem to
              cruise through while I stressed over every detail sometimes made
              me doubt my own path.
            </p>
            <div className="my-1.5"></div>
            <p>
              <strong>Juggling Commitments:</strong> Trying to do
              everything, join every club, ace every exam, keep up with
              friends, led me to the brink of burnout. I had to learn what to
              prioritize, and that it&apos;s okay to ask for help.
            </p>

            <div className="my-10"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Mattered Most in My Application
            </h2>

            <div className="my-4"></div>
            <h3 className="text-2xl font-bold mb-4">
              1. Essays: Your Personal Pitch
            </h3>
            <p>
              Internships provided great content, but if you don&apos;t have one,
              highlight independent projects, hackathon work, or even class
              assignments that challenged you. Be specific about what you
              learned and how it fuels your goals. Don&apos;t just say you love
              coding—show how you&apos;ve demonstrated that passion, learned from
              challenges, and grown over time.{" "}
              <a
                href="/etamessays.pdf"
                className="text-emerald-400 hover:text-emerald-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out my actual ETAM essays here
              </a>{" "}
              to see these strategies in action.
            </p>
            <div className="my-3"></div>
            <p><strong>Use the essay to:</strong></p>
            <ul className="list-disc list-outside ml-6 space-y-2 pl-0">
              <li>Show genuine passion for computer science and learning.</li>
              <li>
                Make your future ambitions clear—mentioning things like grad
                school or research involvement at TAMU shows you&apos;ve thought
                ahead.
              </li>
              <li>
                Authentically praise TAMU: reference programs, faculty, or
                organizations that attract you and how you&apos;d contribute.
              </li>
              <li>
                Use the additional information essay to share context about your
                journey, any obstacles overcome, or lessons learned outside the
                classroom. These insights can be just as impactful as your grades.
              </li>
            </ul>

            <div className="my-6"></div>

            <h3 className="text-2xl font-bold mb-4">
              2. Strategic Involvement
            </h3>
            <p>
              Select 2-3 organizations that excite you and go deep—seek
              leadership, pitch project ideas, or help plan events. Depth beats
              breadth. Hackathons and coding competitions help you gain skills and create
              mini-projects for your portfolio (and essays!).
            </p>

            <div className="my-6"></div>

            <h3 className="text-2xl font-bold mb-4">
              3. Network and Seek Advice
            </h3>
            <p>
              Don&apos;t underestimate the power of friends who&apos;ve been through ETAM.
              Ask about:
            </p>
            <div className="my-1"></div>
            <ul className="list-disc list-outside ml-6 space-y-2 pl-0">
              <li>What worked in their essays and what didn&apos;t.</li>
              <li>Study tips for tougher weed-out classes.</li>
              <li>
                Advice on managing time and sanity during stressful times.
              </li>
            </ul>
            <div className="my-1"></div>
            <p>
              Their insights helped me catch common pitfalls, strengthen my
              essays, and make smarter class choices.
            </p>

            <div className="my-6"></div>

            <h3 className="text-2xl font-bold mb-4">4. Academic Performance</h3>
            <p>
              Aim for as high a GPA as you can, but know you&apos;re more than a
              number. Constantly seek help—whether from friends, tutors, or
              professors if you&apos;re struggling.
            </p>

            <div className="my-6"></div>

            <h3 className="text-2xl font-bold mb-4">
              5. Balance and Self-Care
            </h3>
            <p>
              Don&apos;t try to do it all at once. Balancing academics with a social
              life and self-care leads to better performance and less burnout.
              It&apos;s easy to forget this, but it truly matters.
            </p>

            <div className="my-10"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              If You Don&apos;t Get In: It&apos;s Not the End
            </h2>
            <p>
              If you don&apos;t make it into Computer Science, it doesn&apos;t close the
              door on a tech career or a fulfilling college experience. Texas
              A&M has excellent departments in Data Engineering, Computer
              Engineering, Electrical Engineering, and more, where you can
              develop strong technical skills.
            </p>
            <div className="my-3"></div>
            <p>Other options:</p>
            <div className="my-1"></div>
            <ul className="list-disc list-outside ml-6 space-y-2 pl-0">
              <li>Transfer at a later date.</li>
              <li>Add a CS minor.</li>
              <li>Discover a new passion in adjacent fields.</li>
            </ul>
            <div className="my-3"></div>
            <p>
              Life often works out in unexpected and rewarding ways, and your
              choice of major won&apos;t define your entire future.
            </p>

            <div className="my-9"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Honest Advice for Aspiring ETAM Students
            </h2>
            <ul>
              <li>
                <strong>Start connecting early:</strong> Join clubs, make
                friends, introduce yourself to peers ahead in the process, and
                don&apos;t be shy about asking for help or mentorship.
              </li>
              <div className="my-1"></div>
              <li>
                <strong>Be real in your essays:</strong> Share your true story,
                your challenges, and your ambitions. Honest vulnerability is
                powerful.
              </li>
              <div className="my-1"></div>
              <li>
                <strong>Focus on quality:</strong> Deep involvement and
                meaningful contributions trump a laundry list of shallow
                activities.
              </li>
              <div className="my-1"></div>
              <li>
                <strong>Prioritize well-being:</strong> Take care of yourself so
                you have the energy to persist and grow.
              </li>
              <div className="my-1"></div>
              <li>
                <strong>Keep perspective:</strong> There are many ways to a
                great tech career and a fulfilling college experience.
              </li>
            </ul>

            <div className="my-8"></div>

            <p>
              If you&apos;re trying for ETAM, keep going. Reach out, ask for advice,
              do the work, and trust in your journey. You&apos;ve absolutely got
              this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
