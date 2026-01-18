import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <h1
            className={`text-2xl font-extrabold tracking-wide ${
              scrolled ? "text-green-600" : "text-white"
            }`}
          >
            Provash
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative text-sm font-medium capitalize transition ${
                  scrolled
                    ? "text-gray-700 hover:text-green-600"
                    : "text-white hover:text-green-300"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700 hover:scale-105"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-1 px-4 py-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full rounded-md px-3 py-2 text-left text-gray-700 font-medium hover:bg-green-50 hover:text-green-600"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 w-full rounded-md bg-green-600 px-3 py-2 text-white font-semibold hover:bg-green-700"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
