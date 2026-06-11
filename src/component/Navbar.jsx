import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["hero", "about", "skills", "projects", "contact"];

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActive(section);
          }
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const linkClass = (section) =>
    `transition ${
      active === section
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-blue-400"
    }`;

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Zaheer Khan
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10">

          <li>
            <a href="#hero" className={linkClass("hero")}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className={linkClass("about")}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className={linkClass("skills")}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className={linkClass("projects")}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className={linkClass("contact")}>
              Contact
            </a>
          </li>

        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/70 border-t border-white/10">

          <ul className="flex flex-col items-center gap-6 py-8">

            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;