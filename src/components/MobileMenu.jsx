export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const containerBaseStyling =
    "fixed top-16 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out";

  const containerStateStyling = menuOpen
    ? "h-screen opacity-100 pointer-events-auto"
    : "h-0 opacity-0 pointer-events-none";

  const linkBaseStyling =
    "text-2xl font-semibold text-white my-4 transform transition-transform duration-300";
  const linkStateStyling = menuOpen
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-5";

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <div className={`${containerBaseStyling} ${containerStateStyling}`}>
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={() => setMenuOpen(false)}
          className={`${linkBaseStyling} ${linkStateStyling}`}
        >
          {label}
        </a>
      ))}
    </div>
  );
};
