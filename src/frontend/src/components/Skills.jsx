const skillCategories = [
  {
    title: "Programming",
    desc: "Writing scalable and efficient code across multiple languages and frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "React", "TypeScript"],
    color: "#4CAF50",
  },
  {
    title: "Design",
    desc: "Crafting intuitive interfaces with a focus on user experience and accessibility.",
    tags: [
      "UI/UX Design",
      "Responsive Design",
      "Figma",
      "Glassmorphism",
      "Animations",
    ],
    color: "#81D4FA",
  },
  {
    title: "Tools",
    desc: "Leveraging modern tools and workflows to build and deploy projects efficiently.",
    tags: ["Git & GitHub", "VS Code", "Chrome DevTools", "Vite", "Node.js"],
    color: "#A5D6A7",
  },
];

function LeafIcon({ color }) {
  return (
    <svg
      width="36"
      height="50"
      viewBox="0 0 24 34"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 1 C12 1, 22 8, 22 17 C22 26, 16 33, 12 33 C8 33, 2 26, 2 17 C2 8, 12 1, 12 1Z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M12 4 C12 4, 19 10, 19 17 C19 24, 15 30, 12 30"
        fill="rgba(0,0,0,0.15)"
      />
      <line
        x1="12"
        y1="33"
        x2="12"
        y2="6"
        stroke="rgba(0,0,0,0.3)"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gradient-to-b from-transparent to-[rgba(46,125,50,0.05)]"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="section-title text-foreground"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          My Skills
        </h2>
        <p className="section-subtitle text-foreground/50">
          Technologies &amp; Tools I work with
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="glass-card rounded-2xl p-8 text-white shadow-glass group hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300"
              data-ocid={`skills.item.${i + 1}`}
            >
              <div className="flex justify-center mb-5">
                <LeafIcon color={cat.color} />
              </div>
              <h3
                className="text-xl font-extrabold uppercase tracking-widest text-center mb-3"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  color: cat.color,
                }}
              >
                {cat.title}
              </h3>
              <p className="text-white/60 text-sm text-center mb-6 leading-relaxed">
                {cat.desc}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: `${cat.color}22`,
                      border: `1px solid ${cat.color}44`,
                      color: cat.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
