import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-coral-red-500 to-coral-red-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Terminal Calamity
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a University student and developer that enjoys making things to
            make my life easier.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-coral-red-600 text-xl font-bold text-white py-3 px-6 rounded transition relative overflow-hidden hover:-translate-y-0.5
                            hover:shadow-[0_0_15px_rgba(136, 20, 21, 0.4)]"
            >
              View Projects
            </a>

            {            <a
              href="#contact"
              className="border border-coral-red-500/50 text-coral-red-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5
                            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-coral-red-500/10"
            >
              Contact Me
            </a>}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
