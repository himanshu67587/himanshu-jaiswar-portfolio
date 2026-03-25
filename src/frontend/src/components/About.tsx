import { Brain, Code2, Leaf, MapPin } from "lucide-react";

const values = [
  {
    icon: Code2,
    label: "Clean Code",
    desc: "Writing maintainable, readable code",
  },
  {
    icon: Leaf,
    label: "Nature-Inspired",
    desc: "Creativity rooted in the natural world",
  },
  {
    icon: MapPin,
    label: "Explorer",
    desc: "Traveling to discover new perspectives",
  },
  { icon: Brain, label: "Learner", desc: "Passionate about Data Science & AI" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4"
      style={{
        background:
          "linear-gradient(135deg, rgba(46,125,50,0.08) 0%, rgba(129,212,250,0.06) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="section-title text-foreground"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          About Me
        </h2>
        <p className="section-subtitle text-foreground/50">
          Who I am &amp; What I do
        </p>

        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-glass">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-[#4CAF50]/40 shadow-card-hover">
                  <img
                    src="/assets/uploads/himapdf-019d1f7e-9034-73e8-8e32-109d4befebbb-1.jpg"
                    alt="Himanshu Jaiswar"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative leaf badge */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#4CAF50] rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    width="30"
                    height="42"
                    viewBox="0 0 24 34"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 1 C12 1, 22 8, 22 17 C22 26, 16 33, 12 33 C8 33, 2 26, 2 17 C2 8, 12 1, 12 1Z"
                      fill="white"
                    />
                    <line
                      x1="12"
                      y1="33"
                      x2="12"
                      y2="6"
                      stroke="#2E7D32"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="text-white">
              <h3
                className="text-3xl font-extrabold uppercase tracking-wide text-[#4CAF50] mb-6"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                About Me
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-4">
                I am a passionate software developer and web designer from{" "}
                <span className="text-[#81D4FA] font-semibold">Mumbai</span>. I
                love creating clean and user-friendly websites that make a
                lasting impression.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                I enjoy traveling and exploring nature, which deeply inspires my
                creativity and approach to design. Currently diving deep into{" "}
                <span className="text-[#4CAF50] font-semibold">
                  Data Science &amp; AI
                </span>
                .
              </p>

              {/* Values grid */}
              <div className="grid grid-cols-2 gap-3">
                {values.map((v) => (
                  <div
                    key={v.label}
                    className="flex items-start gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors duration-200"
                  >
                    <v.icon className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {v.label}
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <div className="text-center">
                  <p
                    className="text-[#4CAF50] text-2xl font-extrabold"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    4+
                  </p>
                  <p className="text-white/50 text-xs">Projects</p>
                </div>
                <div className="w-px bg-white/20" />
                <div className="text-center">
                  <p
                    className="text-[#4CAF50] text-2xl font-extrabold"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    2+
                  </p>
                  <p className="text-white/50 text-xs">Years Coding</p>
                </div>
                <div className="w-px bg-white/20" />
                <div className="text-center">
                  <p
                    className="text-[#4CAF50] text-2xl font-extrabold"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Mumbai
                  </p>
                  <p className="text-white/50 text-xs">Based in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
