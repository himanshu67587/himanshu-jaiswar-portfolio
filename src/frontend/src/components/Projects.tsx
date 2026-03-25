import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Clothing Shop",
    desc: "A modern e-commerce platform for fashion with a clean, minimalist UI and seamless shopping experience.",
    image: "/assets/generated/project-clothing.dim_600x400.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://goodluckfashionshop-64j.caffeine.xyz/",
  },
  {
    title: "Gym Website",
    desc: "High-energy fitness center website with membership management, class schedules, and trainer profiles.",
    image: "/assets/generated/project-gym.dim_600x400.jpg",
    tags: ["React", "CSS", "Responsive"],
    link: "https://focusfitness-7p0.caffeine.xyz/",
  },
  {
    title: "Medical Website",
    desc: "A trusted healthcare platform connecting patients with doctors, featuring appointment booking and health resources.",
    image: "/assets/generated/project-medical.dim_600x400.jpg",
    tags: ["HTML", "JavaScript", "UI/UX"],
    link: null,
  },
  {
    title: "EV Ride Service",
    desc: "Eco-friendly electric vehicle ride-hailing app UI with real-time tracking and sustainable transport focus.",
    image: "/assets/generated/project-ev.dim_600x400.jpg",
    tags: ["React", "TypeScript", "Green Tech"],
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="section-title text-foreground"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Projects
        </h2>
        <p className="section-subtitle text-foreground/50">
          Some things I&rsquo;ve built
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-3 hover:shadow-card-hover transition-all duration-400 shadow-glass"
              data-ocid={`projects.item.${i + 1}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#4CAF50]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-white">
                <h3
                  className="text-xl font-extrabold uppercase tracking-wide mb-2 text-[#4CAF50] group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#4CAF50]/15 text-[#4CAF50] border border-[#4CAF50]/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#81D4FA]/15 text-[#81D4FA] border border-[#81D4FA]/30 hover:bg-[#81D4FA]/30 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
