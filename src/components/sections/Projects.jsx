import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { h2Style, projectStyle } from "../../styles.js";

export const Projects = () => {
  const projects = [
    {
      title: "Minecraft DJ Bot",
      description: "Updated and extended existing Minecraft DJ bot",
      skills: ["Node.js"],
      href: "https://github.com/TerminalCalamitas/Minecraft-DJ-Bot",
    },
    {
      title: "Project Title",
      description: "project description",
      skills: ["React", "Node.js", "Docker"],
      href: "https://www.github.com",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className={h2Style}>Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, description, skills, href }, index) => (
              <div
                key={title + index}
                className={`p-6 rounded-xl border border-white/10 hover:-translate-y-1 ${projectStyle}`}
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((tech, key) => (
                    <span
                      key={key}
                      className={`bg-coral-red-500/10 text-coral-red-500 py-1 px-3 rounded-full text-sm ${projectStyle}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={href}
                    className="text-coral-red-400 hover:text-coral-red-300 transition-colors my-4"
                  >
                    {"View Project ->"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
