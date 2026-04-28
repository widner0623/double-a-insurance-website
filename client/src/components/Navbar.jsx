import { useState } from "react";
import { FiShield } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-900">
            <FiShield className="text-2xl text-gray-900" />
          </div>

          <span className="text-xl font-semibold tracking-tight text-gray-950 sm:text-2xl">
            Double A Insurance Agency<sup>LLC</sup>
          </span>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xl font-medium text-gray-800 transition hover:text-gray-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-lg bg-[#050514] px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black lg:inline-block"
        >
          Get a Quote
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-black transition duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-black transition duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-black transition duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE SLIDE MENU */}
      <aside
        className={`fixed right-0 top-0 z-[60] h-screen w-[82%] max-w-sm bg-white px-6 py-7 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-900">
            <FiShield className="text-xl text-gray-900" />
          </div>

          <span className="text-xl font-semibold text-gray-950">
            Double A Insurance
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-gray-100 pb-4 text-lg font-medium text-gray-800 transition hover:text-gray-500"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 rounded-lg bg-[#050514] px-6 py-4 text-center font-semibold text-white transition hover:bg-black"
          >
            Get a Quote
          </a>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;