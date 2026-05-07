import { useEffect, useRef, useState, type ReactNode } from "react";
import "./App.css";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { name: "React / Next.js", level: 92, themeClass: "theme-sky", widthClass: "w-92" },
  { name: "TypeScript", level: 88, themeClass: "theme-indigo", widthClass: "w-88" },
  { name: "Node.js", level: 80, themeClass: "theme-emerald", widthClass: "w-80" },
  { name: "Tailwind CSS", level: 95, themeClass: "theme-pink", widthClass: "w-95" },
  { name: "PostgreSQL", level: 75, themeClass: "theme-orange", widthClass: "w-75" },
  { name: "Docker", level: 70, themeClass: "theme-blue", widthClass: "w-70" },
];

const PROJECTS = [
  {
    title: "NovaCRM",
    desc: "A full-featured CRM built with Next.js, Prisma, and PostgreSQL. Real-time dashboards, role-based access, and automated email workflows.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    themeClass: "theme-indigo",
    icon: "◇",
    link: "#",
    year: "2024",
  },
  {
    title: "Pulse Analytics",
    desc: "Real-time analytics platform processing millions of events per second with WebSocket streaming and dynamic chart rendering.",
    tags: ["React", "Node.js", "Redis"],
    themeClass: "theme-emerald",
    icon: "⬡",
    link: "#",
    year: "2024",
  },
  {
    title: "Arcadia UI",
    desc: "Open-source design system with 60+ accessible components, dark mode, and Storybook documentation. 2k+ GitHub stars.",
    tags: ["TypeScript", "Storybook", "CSS"],
    themeClass: "theme-pink",
    icon: "◈",
    link: "#",
    year: "2023",
  },
  {
    title: "ShipFast CLI",
    desc: "Developer tool that scaffolds production-ready projects with auth, payments, and CI/CD pipelines in under 60 seconds.",
    tags: ["Node.js", "CLI", "Docker"],
    themeClass: "theme-orange",
    icon: "△",
    link: "#",
    year: "2023",
  },
];

const TIMELINE = [
  { year: "2024", title: "Senior Frontend Engineer", company: "Vercel", desc: "Leading the design systems team, building tools used by 1M+ developers." },
  { year: "2022", title: "Full-Stack Developer", company: "Stripe", desc: "Built internal tooling and developer-facing APIs for the payments platform." },
  { year: "2020", title: "Frontend Developer", company: "Freelance", desc: "Delivered 30+ projects for clients across Europe and the Middle East." },
  { year: "2018", title: "CS Graduate", company: "University of Edinburgh", desc: "BSc Computer Science with First Class Honours." },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView();
  const delayClass = delay ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`animated-section ${visible ? "is-visible" : ""} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!menuOpen || !navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 640) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-shell">
      <div className="background-grid" />
      <div className="glow-blob glow-blob-primary" />
      <div className="glow-blob glow-blob-secondary" />

      <nav ref={navRef} className={`portfolio-nav ${menuOpen ? "menu-open" : ""}`}>
        <span className="brand">
          <span className="brand-accent">&lt;</span>Tariq<span className="brand-accent">/&gt;</span>
        </span>
        {menuOpen ? (
          <button
            type="button"
            className="menu-toggle is-open"
            aria-label="Close navigation menu"
            aria-expanded="true"
            onClick={() => setMenuOpen(false)}
          >
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
          </button>
        ) : (
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded="false"
            onClick={() => setMenuOpen(true)}
          >
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
          </button>
        )}
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {NAV_LINKS.map((navItem) => (
            <button
              key={navItem}
              onClick={() => scrollTo(navItem)}
              className={`nav-button ${activeNav === navItem ? "active" : ""}`}
            >
              {navItem}
            </button>
          ))}
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="availability-badge">
            <span className="availability-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-title">
            Building digital
            <br />
            experiences that matter.
          </h1>
          <p className="hero-description">
            Full-stack developer specializing in React, TypeScript, and Node.js. I turn complex problems into elegant, scalable solutions.
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollTo("Projects")} className="button-primary">
              View my work
            </button>
            <button onClick={() => scrollTo("Contact")} className="button-secondary">
              Get in touch
            </button>
          </div>

          <div className="stats-grid">
            {[["5+", "Years experience"], ["30+", "Projects shipped"], ["2k+", "GitHub stars"]].map(([val, label]) => (
              <div key={label} className="stat-item">
                <div className="stat-value">{val}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <div className="content-container about-grid">
          <AnimatedSection>
            <div className="about-visual-wrap">
              <div className="about-visual">
                <span className="about-visual-icon">👤</span>
              </div>
              <div className="current-role-card">
                <div className="eyebrow-subtle">Currently at</div>
                <div className="current-role-company">Vercel</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="section-eyebrow">About me</div>
            <h2 className="section-title section-title-tight">
              Crafting code
              <br />
              with intention.
            </h2>
            <p className="section-copy">
              I&apos;m Tariq, a full-stack developer building fast, polished web products with React, TypeScript, and Node.js.
            </p>
            <p className="section-copy section-copy-spaced">
              Outside work, I contribute to open source and write about web performance.
            </p>

            <div className="timeline">
              {TIMELINE.map((item) => (
                <div key={`${item.year}-${item.company}`} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-meta">
                    {item.year} | {item.company}
                  </div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="content-container">
          <AnimatedSection>
            <div className="section-eyebrow">Skills</div>
            <h2 className="section-title section-title-spaced">Tech I work with</h2>
          </AnimatedSection>

          <div className="cards-grid">
            {SKILLS.map((skill, i) => (
              <AnimatedSection key={skill.name} delay={i * 80}>
                <div className={`skill-card ${skill.themeClass}`}>
                  <div className="skill-card-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-meter">
                    <div className={`skill-meter-fill ${skill.widthClass}`} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="content-container">
          <AnimatedSection>
            <div className="section-eyebrow">Work</div>
            <h2 className="section-title section-title-spaced">Selected projects</h2>
          </AnimatedSection>

          <div className="cards-grid">
            {PROJECTS.map((project, i) => {
              return (
                <AnimatedSection key={project.title} delay={i * 100}>
                  <div className={`project-card ${project.themeClass}`}>
                    <div>
                      <div className="project-card-header">
                        <div className="project-icon">{project.icon}</div>
                        <span className="project-year">{project.year}</span>
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.desc}</p>
                    </div>

                    <div className="project-footer">
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="project-tag">{tag}</span>
                        ))}
                      </div>
                      <span className="project-arrow">→</span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <AnimatedSection>
            <div className="section-eyebrow">Contact</div>
            <h2 className="section-title section-title-small-gap">Let&apos;s work together</h2>
            <p className="section-copy section-copy-large-gap">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>
          </AnimatedSection>

          {sent ? (
            <AnimatedSection>
              <div className="success-card">
                <div className="success-icon">✓</div>
                <div className="success-title">Message sent!</div>
                <div className="success-copy">I&apos;ll get back to you within 24 hours.</div>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection delay={100}>
              <div className="contact-card">
                {(["name", "email"] as const).map((field) => (
                  <div key={field} className="field-group">
                    <label className="field-label">{field}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={(e) => setForm((current) => ({ ...current, [field]: e.target.value }))}
                      placeholder={field === "name" ? "Tariq Ahmed" : "tariq@example.com"}
                      className="field-input"
                    />
                  </div>
                ))}

                <div className="field-group field-group-large">
                  <label className="field-label">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    className="field-input field-textarea"
                  />
                </div>

                <button
                  onClick={() => {
                    if (form.name && form.email && form.message) setSent(true);
                  }}
                  className="submit-button"
                >
                  Send message
                </button>
              </div>

              <div className="social-links">
                {["GitHub", "LinkedIn", "Twitter"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="social-link"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <footer className="portfolio-footer">
        <span className="footer-copy">(c) 2025 Tariq. Built with React + TypeScript.</span>
        <span className="footer-copy">Designed &amp; developed with care.</span>
      </footer>
    </div>
  );
}
