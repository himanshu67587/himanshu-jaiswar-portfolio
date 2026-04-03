import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const socialLinks = [
  { icon: SiGithub, href: "https://github.com", label: "GitHub" },
  { icon: SiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: SiInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: SiX, href: "https://x.com", label: "X / Twitter" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0d1a0f] text-white overflow-hidden">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
          aria-hidden="true"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="#2E7D32"
            opacity="0.4"
          />
          <path
            d="M0,40 C200,80 400,10 720,50 C1040,90 1240,15 1440,45 L1440,0 L0,0 Z"
            fill="#1B5E20"
            opacity="0.6"
          />
          <path
            d="M0,20 C300,60 600,5 900,35 C1200,65 1350,10 1440,25 L1440,0 L0,0 Z"
            fill="#0d1a0f"
            opacity="0.9"
          />
        </svg>
      </div>

      <div className="relative pt-32 md:pt-40 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-3xl font-extrabold uppercase tracking-widest text-[#4CAF50] mb-2"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Himanshu Jaiswar
            </p>
            <p className="text-white/50 text-sm">
              Software Developer &bull; Web Designer &bull; Traveler
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`footer.${link.label.toLowerCase()}.link`}
                className="text-white/50 hover:text-[#4CAF50] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4 mb-10">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`footer.${s.label.toLowerCase().replace(" / ", "-")}.link`}
                aria-label={s.label}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#4CAF50] hover:bg-[#4CAF50]/20 hover:border-[#4CAF50]/50 transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-white/10 mb-6" />

          <div className="text-center text-white/30 text-xs">
            <p>
              &copy; {year} Himanshu Jaiswar. Built with{" "}
              <span className="text-[#e57373]">♥</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4CAF50] hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
