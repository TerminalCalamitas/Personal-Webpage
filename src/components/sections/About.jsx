import { RevealOnScroll } from "../RevealOnScroll.jsx";
import {
  h2Style,
  h3Style,
  h4Style,
  experienceSection,
  skillStyle,
} from "../../styles.js";

export const About = () => {
  const frontendSkills = ["CSS", "HTML", "React", "TailwindCSS"];
  const backendSkills = [
    "Docker",
    "FastAPI",
    "Next.js",
    "Node.js",
    "PostreSQL",
    "Prisma",
    "Python",
  ];

  const otherSkills = ["Java", "Linux", "Git", "APIs", "Neovim"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className={h2Style}>{"About Me"}</h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a developer with experience in both frontend and backend. A
              lot of the projects I work on are for things I actively use and
              enjoy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className={h3Style}> Frontend </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span key={key} className={skillStyle}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className={h3Style}> Backend </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span key={key} className={skillStyle}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 col-span-2 hover:-translate-y-1 transition-all">
              <h3 className={h3Style}> Other Skills </h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((tech, key) => (
                  <span key={key} className={skillStyle}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-8">
              <div className={experienceSection}>
                <h3 className={h3Style}> Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {/*                  <li>
                    <strong>B.S. in Computer Science</strong> - University (2023
                    - 2026)
                  </li>*/}
                  <li>
                    Relevant Coursework: Data Structures, Advanced Web
                    Development, Software Engineering
                  </li>
                </ul>
              </div>

              <div className={experienceSection}>
                <h3 className={h3Style}> Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className={h4Style}>
                      {"Position title at company (year - year)"}
                    </h4>
                    <p>didn't leak government data</p>
                  </div>

                  <div>
                    <h4 className={h4Style}>
                      {"Position title at company (year - year)"}
                    </h4>
                    <p>didn't leak government data</p>
                  </div>
                </div>
              </div>
              <div className={`col-span-2 ${experienceSection}`}>
                <h3 className={h3Style}> Awards and Training </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>ITS Python Certification - 2022</li>
                  <li>Scouts BSA Eagle Scout Rank - 2022</li>
                  <li>Scouts BSA Dr. Bernard Harris Supernova award - 2021</li>
                  <li>NC State Science Fair finalist - 2020</li>
                </ul>
              </div>
            </div>

            <div className="text-4xl">
              <a
                href="https://github.com/TerminalCalamitas"
                className="mr-5"
                target="_blank"
                aria-label="Terminal Calamity GitHub"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github hover:-translate-y-1 transition-all"></i>
              </a>
              <a
                href="https://www.twitch.tv/terminalcalamity/"
                className="mr-5"
                target="_blank"
                aria-label="Terminal Calamity Twitch"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitch hover:-translate-y-1 transition-all"></i>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
