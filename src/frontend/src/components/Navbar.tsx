import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { threshold: 0.4 },
    );
    const ids = ["about", "skills", "projects", "gallery", "contact"];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card shadow-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#4CAF50]/60 shadow-md">
              <img
                src="/assets/uploads/himapdf-019d1f7e-9034-73e8-8e32-109d4befebbb-1.jpg"
                alt="Himanshu"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-white font-display font-extrabold text-sm tracking-widest uppercase hidden sm:block"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Himanshu Jaiswar
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === link.href
                      ? "bg-[#4CAF50]/20 text-[#4CAF50]"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleDark}
              data-ocid="nav.darkmode.toggle"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-[#4CAF50] hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <a
              href="#contact"
              data-ocid="nav.hireme.button"
              className="hidden sm:block pill-btn bg-[#4CAF50] hover:bg-[#2E7D32] text-white text-sm shadow-md"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10 transition"
              data-ocid="nav.menu.button"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: overlay click to close
        <div
          className="lg:hidden glass-card border-t border-white/10 px-4 py-4"
          onClick={closeMobile}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
              className="block py-2.5 px-4 rounded-lg text-white/80 hover:text-white hover:bg-white/10 font-medium transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-ocid="nav.mobile.hireme.button"
            className="mt-3 block text-center pill-btn bg-[#4CAF50] hover:bg-[#2E7D32] text-white text-sm"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
