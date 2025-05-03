import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const linkBaseStyling = "text-gray-300 hover:text-white transition-colors";

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/*<a
            href="#home"
            className="text-center font-mono text-xl font-bold text-white"
          >
            TEMP<span className="text-coral-red-500">LOGO</span>
          </a>*/}
          <a
            href="#home"
            className="text-center font-mono text-xl font-bold text-white"
          >
            <img
              src="/logo.png"
              alt="Terminal Calamity Profile Picture"
              className="h-12 w-auto rounded-2xl"
            />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer md:hidden"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`${linkBaseStyling}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
