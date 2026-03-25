import FloatingLeaves from "./FloatingLeaves";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-bg"
      style={{
        backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1a2e1e]/80 z-[1]" />

      {/* Floating leaves */}
      <FloatingLeaves />

      {/* Content */}
      <div className="relative z-[3] text-center px-4 max-w-5xl mx-auto">
        {/* Profile avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#4CAF50]/60 shadow-glass animate-pulse-glow">
            <img
              src="/assets/uploads/himapdf-019d1f7e-9034-73e8-8e32-109d4befebbb-1.jpg"
              alt="Himanshu Jaiswar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-widest text-white mb-4 leading-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Himanshu <span className="text-[#4CAF50]">Jaiswar</span>
          </h1>

          <p className="text-[#81D4FA] text-lg md:text-xl font-medium tracking-widest uppercase mb-4">
            Software Developer &bull; Web Designer &bull; Traveler
          </p>

          <p className="text-white/70 text-base md:text-lg italic mb-10 max-w-xl mx-auto">
            &ldquo;Building digital experiences, inspired by nature.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              data-ocid="hero.view_projects.button"
              className="pill-btn bg-[#4CAF50] hover:bg-[#2E7D32] text-white text-base px-8 py-3 shadow-md hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              data-ocid="hero.get_in_touch.button"
              className="pill-btn bg-transparent border-2 border-white/60 hover:border-[#4CAF50] text-white hover:text-[#4CAF50] text-base px-8 py-3 transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
