import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code,
  Lightning,
  List,
  Sparkle,
  X,
} from "@phosphor-icons/react";

const projects = [
  {
    number: "01",
    name: "TalScout.ai",
    url: "https://talscout.rishavkamboj.online/",
    category: "AI SaaS · Product design · Engineering",
    description: "Two AI engines that turn prospecting and talent search into one clear workflow.",
    image: "/images/talscout.webp",
    alt: "TalScout AI product homepage showing its outreach and talent intelligence workspace",
    className: "project-card--talscout",
  },
  {
    number: "02",
    name: "Bloom",
    url: "https://bloom.rishavkamboj.online/",
    category: "AI product · SaaS · Next.js",
    description: "A conversational AI app builder that turns an idea into a working application.",
    image: "/images/bloom.webp",
    alt: "Bloom AI app builder product page",
    className: "project-card--bloom",
  },
  {
    number: "03",
    name: "Lavisha Glow & Glam",
    url: "https://lavishaglowandglam.shop/",
    category: "Beauty · Salon website · Brand experience",
    description: "A polished digital home for a beauty studio, bringing its services and bridal packages together in a clear, welcoming experience.",
    image: "/images/lavisha-glow-glam.jpg",
    alt: "Warm editorial beauty portrait with a softly lit salon interior, created as the Lavisha Glow & Glam project preview",
    className: "project-card--lavisha",
  },
  {
    number: "04",
    name: "Jac Creation",
    url: "https://jac-creation-jet.vercel.app/",
    category: "Architecture · Studio website · Editorial design",
    description: "An architecture-focused web experience built around considered imagery, clear project storytelling, and a calm editorial feel.",
    image: "/images/jac-creation.jpg",
    alt: "Contemporary stone residence in a landscaped courtyard, created as the Jac Creation project preview",
    className: "project-card--jac-creation",
  },
  {
    number: "05",
    name: "PixelorCode",
    category: "Digital studio · Strategy · Web development",
    description: "A modern web studio experience built to turn thoughtful strategy and performance-led development into measurable growth.",
    image: "/images/pixelorcode-studio.jpg",
    alt: "Editorial concept of a creative studio website displayed on an ultrawide monitor",
    className: "project-card--pixelorcode",
  },
  {
    number: "06",
    name: "Perpetual Power Services",
    category: "Energy · Corporate website · Growth",
    description: "A sharper online experience for a renewable energy and power solutions company, designed to build trust and attract qualified inquiries.",
    image: "/images/perpetual-renewables.jpg",
    alt: "Solar farm and wind turbines across a green landscape at sunrise",
    className: "project-card--power",
  },
  {
    number: "07",
    name: "Insider Job",
    category: "Recruitment · Full-stack platform · Product engineering",
    description: "A feature-rich hiring platform with separate recruiter and candidate experiences, practical filters, and production-ready foundations.",
    image: "/images/job-portal-professional.jpg",
    alt: "Professional reviewing job listings on a laptop in a bright workspace",
    className: "project-card--job-portal",
  },
  {
    number: "08",
    name: "Rose Cafe",
    url: "https://rose-petal-scroll.vercel.app/",
    category: "Hospitality · Brand website · Reservations",
    description: "A warm, floral-led cafe experience that brings the atmosphere of the space online and makes it easy to plan a visit.",
    image: "/images/rose-cafe-editorial.jpg",
    alt: "Rose Cafe table with latte, pastry, and roses in warm morning light",
    className: "project-card--rose-cafe",
  },
  {
    number: "09",
    name: "Rudra Infocom",
    url: "https://rudrainfo.co.in/",
    category: "B2B · IT & telecom · Lead generation",
    description: "A clearer digital presence for a telecom solutions business, built to improve lead quality.",
    image: "/images/rudra-network.jpg",
    alt: "Blue-lit network operations center with servers and monitoring screens",
    className: "project-card--rudra",
  },
  {
    number: "10",
    name: "Ruvira Atelier",
    category: "Luxury retail · E-commerce · Brand experience",
    description: "A refined jewelry storefront that pairs an elevated visual identity with a considered path from product discovery to inquiry.",
    image: "/images/ruvira-jewelry.jpg",
    alt: "Gold necklace with a deep green gemstone on pale stone",
    className: "project-card--ruvira",
  },
  {
    number: "11",
    name: "Mema Play World",
    category: "Play spaces · Product catalog · Lead generation",
    description: "A playful, informative catalog that helps families explore equipment, understand safety details, and find the right play space.",
    image: "/images/mema-play-world.jpg",
    alt: "Modern timber playground in a landscaped park on a sunny day",
    className: "project-card--mema",
  },
  {
    number: "12",
    name: "Stayfinder",
    category: "Travel · Marketplace · Full-stack development",
    description: "A full-stack rental discovery experience with listing pages and a familiar booking journey for travelers.",
    image: "/images/airbnb-coastal-stay.jpg",
    alt: "Coastal vacation home with a private pool and palms at sunset",
    className: "project-card--airbnb",
  },
  {
    number: "13",
    name: "Car Rental Website",
    category: "Mobility · Booking platform · Full-stack development",
    description: "A car rental experience with focused vehicle discovery, a streamlined booking flow, and tools for managing inventory.",
    image: "/images/car-rental-suv.jpg",
    alt: "Graphite electric SUV on a rain-lit city street at dusk",
    className: "project-card--car-rental",
  },
];

const services = [
  {
    number: "01",
    icon: Code,
    title: "Websites that do their job",
    description: "Distinctive, fast websites built around the people you need to reach and the action you want them to take.",
    tags: "Strategy · Design · Development",
  },
  {
    number: "02",
    icon: Sparkle,
    title: "AI that fits the real work",
    description: "Useful AI features, intelligent products, and automations designed around your team’s actual workflow.",
    tags: "AI products · Integrations · Automation",
  },
  {
    number: "03",
    icon: Lightning,
    title: "Products ready to grow",
    description: "Full-stack platforms and SaaS products with the design, architecture, and foundations to keep moving.",
    tags: "Web apps · SaaS · Product engineering",
  },
];

const steps = [
  ["01", "Get clear", "We get close to the problem, the people, and the outcome that matters."],
  ["02", "Shape the idea", "We turn the opportunity into a focused plan, a clear experience, and a practical scope."],
  ["03", "Make it real", "Design and engineering move together, with regular reviews and no mystery handoffs."],
  ["04", "Put it to work", "We launch carefully, learn from real use, and make the next improvement count."],
];

function useScrollEffects() {
  useEffect(() => {
    document.documentElement.classList.add("has-js");
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13, rootMargin: "0px 0px -40px 0px" },
    );
    items.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        document.documentElement.style.setProperty("--page-progress", `${progress * 100}%`);
        frame = 0;
      });
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
}

function OpeningCurtain() {
  const [opening, setOpening] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return undefined;
    }
    const startOpening = window.setTimeout(() => setOpening(false), 160);
    const finishOpening = window.setTimeout(() => setVisible(false), 1320);
    return () => {
      window.clearTimeout(startOpening);
      window.clearTimeout(finishOpening);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`site-intro${opening ? "" : " is-opening"}`}>
      <div className="site-intro-door site-intro-door--left" aria-hidden="true" />
      <div className="site-intro-door site-intro-door--right" aria-hidden="true" />
      <div className="site-intro-brand" aria-hidden="true">
        <span className="site-intro-mark">g</span>
        <span>getvout<span>.</span></span>
        <small>Independent digital studio</small>
      </div>
      <button className="site-intro-skip" type="button" onClick={() => setVisible(false)}>Skip intro</button>
      <span className="site-intro-seam" aria-hidden="true" />
    </div>
  );
}

function ProjectCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });
  const dragStart = useRef(null);
  const indexRailRef = useRef(null);
  const activeIndexRef = useRef(null);
  const activeProject = items[activeIndex];

  useEffect(() => {
    const rail = indexRailRef.current;
    const activeButton = activeIndexRef.current;
    if (!rail || !activeButton) return;
    const left = activeButton.offsetLeft - rail.offsetLeft - (rail.clientWidth - activeButton.clientWidth) / 2;
    rail.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, [activeIndex]);

  const selectProject = (nextIndex) => {
    setActiveIndex((nextIndex + items.length) % items.length);
    setPointer((current) => ({ ...current, active: false }));
  };
  const moveProject = (direction) => selectProject(activeIndex + direction);
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveProject(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveProject(-1);
    }
  };
  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, active: true });
  };
  const handlePointerUp = (event) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    if (Math.abs(distance) > 48) moveProject(distance < 0 ? 1 : -1);
    dragStart.current = null;
  };

  return (
    <div className="project-carousel" role="region" aria-roledescription="carousel" aria-label="Selected projects" tabIndex={0} onKeyDown={handleKeyDown} data-reveal>
      <div className="project-showcase">
        <div
          className={`project-showcase-visual ${activeProject.className}`}
          onPointerDown={(event) => { dragStart.current = event.clientX; }}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { dragStart.current = null; }}
          onPointerLeave={() => setPointer((current) => ({ ...current, active: false }))}
        >
          <img key={activeProject.number} src={activeProject.image} alt={activeProject.alt} draggable="false" fetchPriority={activeIndex === 0 ? "high" : "auto"} />
          <span className="project-showcase-shade" aria-hidden="true" />
          <div className="project-showcase-overline"><span>GETVOUT / SELECTED WORK</span><span>{activeProject.number} — {String(items.length).padStart(2, "0")}</span></div>
          <span className={`project-cursor${pointer.active ? " is-active" : ""}`} style={{ left: pointer.x, top: pointer.y }} aria-hidden="true">DRAG<br />TO EXPLORE</span>
        </div>

        <article className="project-showcase-copy" key={activeProject.number} role="group" aria-roledescription="slide" aria-label={`${activeIndex + 1} of ${items.length}: ${activeProject.name}`} aria-live="polite">
          <p className="eyebrow project-category">{activeProject.category}</p>
          <h3>{activeProject.name}</h3>
          <p className="project-description">{activeProject.description}</p>
          {activeProject.url && <a className="text-link project-link" href={activeProject.url} target="_blank" rel="noreferrer" aria-label={`Visit ${activeProject.name} website (opens in a new tab)`}>Visit live project <ArrowUpRight aria-hidden="true" /></a>}
          <div className="project-showcase-bottom">
            <div className="project-showcase-count"><span>PROJECT</span><strong>{activeProject.number}</strong><span>/ {String(items.length).padStart(2, "0")}</span></div>
            <div className="project-carousel-controls">
              <button type="button" aria-label={`Previous project: ${items[(activeIndex - 1 + items.length) % items.length].name}`} onClick={() => moveProject(-1)}><ArrowRight className="project-arrow-back" aria-hidden="true" /></button>
              <button type="button" aria-label={`Next project: ${items[(activeIndex + 1) % items.length].name}`} onClick={() => moveProject(1)}><ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        </article>
      </div>

      <div className="project-carousel-index">
        <div className="project-carousel-index-heading"><span className="eyebrow">Explore the work</span><span>{String(activeIndex + 1).padStart(2, "0")} <i>/</i> {String(items.length).padStart(2, "0")}</span></div>
        <div className="project-carousel-progress" role="progressbar" aria-label="Project carousel position" aria-valuemin="1" aria-valuemax={items.length} aria-valuenow={activeIndex + 1}>
          <span style={{ transform: `scaleX(${(activeIndex + 1) / items.length})` }} />
        </div>
        <div className="project-index-list" aria-label="Choose a project" ref={indexRailRef}>
          {items.map((project, index) => (
            <button ref={index === activeIndex ? activeIndexRef : null} className={`project-index-item${index === activeIndex ? " is-active" : ""}`} key={project.number} type="button" aria-label={`Show project ${project.number}: ${project.name}`} aria-pressed={index === activeIndex} onClick={() => selectProject(index)}>
              <span>{project.number}</span>{index === activeIndex && <strong>{project.name}</strong>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const technologyItems = ["React", "Next.js", "Vercel", "Node.js", "Python", "OpenAI", "Anthropic", "PostgreSQL", "Supabase", "MCP"];
const capabilityItems = ["Web & app development", "AI-powered solutions", "MCP integrations", "AI agents", "Workflow automation", "API integrations", "SaaS products"];

function MarqueeLane({ items, direction, laneLabel }) {
  return (
    <div className={`marquee-lane marquee-lane--${direction}`} role="group" aria-label={laneLabel}>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="marquee-sequence" key={copy}>
            {items.map((item, index) => <span className="marquee-item" key={`${copy}-${item}`}><i>{String(index + 1).padStart(2, "0")}</i>{item}<b aria-hidden="true">✳</b></span>)}
          </div>
        ))}
      </div>
      <span className="sr-only">{items.join(", ")}</span>
    </div>
  );
}

function TechnologyMarquee() {
  return (
    <div className="technology-marquee" data-reveal>
      <div className="technology-marquee-heading"><p className="eyebrow">One studio. The whole stack.</p><p>Ideas move from first sketch to working software.</p></div>
      <div className="marquee-lanes">
        <MarqueeLane items={technologyItems} direction="forward" laneLabel="Technologies we work with" />
        <MarqueeLane items={capabilityItems} direction="reverse" laneLabel="Our digital capabilities" />
      </div>
    </div>
  );
}

export function App() {
  useScrollEffects();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <OpeningCurtain />
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="wordmark" aria-label="getvout home" onClick={closeMenu}>
            <span className="wordmark-symbol" aria-hidden="true">g</span>
            <span>getvout<span className="wordmark-period">.</span></span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X weight="bold" /> : <List weight="bold" />}
          </button>
          <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#services" onClick={closeMenu}>What we do</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a href="#about" onClick={closeMenu}>Studio</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow hero-kicker"><span className="availability-dot" /> Independent digital studio <span className="kicker-divider">/</span> Working everywhere</p>
            <h1 id="hero-title">Make your<br />next move <span className="headline-accent">matter.</span></h1>
            <p className="hero-description">We build distinctive websites, intelligent products, and digital experiences that move ambitious businesses forward.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
              <a className="button button-quiet" href="#work">Explore our work <ArrowDown aria-hidden="true" /></a>
            </div>
            <div className="hero-capabilities" aria-label="Our capabilities">
              <span>Strategy</span><i /> <span>Design</span><i /> <span>Engineering</span><i /> <span>AI</span>
            </div>
          </div>
          <div className="hero-art-wrap" data-reveal>
            <img className="hero-art" src="/images/getvout-hero-art.webp" alt="A sculptural loop of cobalt glass with a small lime glass sphere, photographed in warm studio light" fetchPriority="high" />
            <div className="hero-art-topline"><span>GETVOUT / DIGITAL STUDIO</span><span>01 — 08</span></div>
            <div className="hero-art-caption"><span className="caption-mark">G.</span><span>Ideas, made<br />real.</span><ArrowUpRight aria-hidden="true" /></div>
            <span className="hero-orbit-label">A better way out.</span>
          </div>
          <a className="hero-scroll" href="#work" aria-label="Scroll to selected work"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></a>
        </section>

        <section className="work-section section-shell section-space" id="work" aria-labelledby="work-title">
          <div className="section-heading work-heading" data-reveal>
            <div>
              <p className="eyebrow section-index">01 <span>/</span> Selected work</p>
              <h2 id="work-title">Built with intent.<br /><span>Made to matter.</span></h2>
            </div>
            <p className="section-intro">A selection of digital products and experiences, each shaped around a real need and built to work in the real world.</p>
          </div>
          <ProjectCarousel items={projects} />
          <TechnologyMarquee />
        </section>

        <section className="services-section section-shell section-space" id="services" aria-labelledby="services-title">
          <div className="section-heading services-heading" data-reveal>
            <div>
              <p className="eyebrow section-index">02 <span>/</span> What we do</p>
              <h2 id="services-title">The right work.<br /><span>Done exceptionally.</span></h2>
            </div>
            <p className="section-intro">From first thought to final launch, we bring strategy, design, and engineering into one considered process.</p>
          </div>
          <div className="service-list">
            {services.map(({ number, icon: Icon, title, description, tags }) => (
              <article className="service-row" key={number} data-reveal>
                <span className="service-number">{number}</span>
                <span className="service-icon"><Icon weight="light" aria-hidden="true" /></span>
                <div className="service-copy"><h3>{title}</h3><p>{description}</p></div>
                <span className="service-tags">{tags}</span>
                <ArrowUpRight className="service-arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title">
          <div className="proof-inner section-shell" data-reveal>
            <div className="proof-heading">
              <p className="eyebrow section-index">03 <span>/</span> The studio, in numbers</p>
              <h2 id="proof-title">A little proof<br />goes a long way.</h2>
              <p>Good work is built on happy clients, clear communication, and a standard we hold ourselves to.</p>
            </div>
            <div className="proof-stats">
              <div className="proof-stat"><span className="stat-value">20<span>+</span></span><span className="stat-label">Happy clients</span></div>
              <div className="proof-stat"><span className="stat-value">24<span>h</span></span><span className="stat-label">Response to new enquiries</span></div>
              <div className="proof-stat"><span className="stat-value">100<span>%</span></span><span className="stat-label">Client satisfaction</span></div>
              <div className="proof-stat"><span className="stat-value">{projects.length}</span><span className="stat-label">Projects featured<br />in selected work</span></div>
            </div>
          </div>
        </section>

        <section className="ai-section section-shell section-space" aria-labelledby="ai-title">
          <div className="ai-copy" data-reveal>
            <p className="eyebrow section-index">04 <span>/</span> Applied AI</p>
            <h2 id="ai-title">AI should earn<br />its place.</h2>
            <p className="ai-description">We bring AI into products when it makes something simpler, faster, or newly possible. Thought through from the first interaction to the last.</p>
            <a className="text-link" href="#work">Explore selected work <ArrowUpRight aria-hidden="true" /></a>
            <div className="ai-detail-list">
              <span><Check aria-hidden="true" /> Useful, human-centered experiences</span>
              <span><Check aria-hidden="true" /> Carefully integrated models and data</span>
              <span><Check aria-hidden="true" /> Clear safeguards and ownership</span>
            </div>
          </div>
          <div className="ai-visual" data-reveal>
            <img src="/images/applied-ai-sculpture.webp" alt="Cobalt glass forms connected around a luminous lime core, representing thoughtful AI systems" loading="lazy" />
            <div className="ai-visual-label"><Sparkle weight="fill" aria-hidden="true" /><span>AI, put to work.</span></div>
            <span className="ai-visual-index">GETVOUT / APPLIED AI</span>
          </div>
        </section>

        <section className="approach-section section-shell section-space" id="approach" aria-labelledby="approach-title">
          <div className="approach-header" data-reveal>
            <div>
              <p className="eyebrow section-index">05 <span>/</span> How we work</p>
              <h2 id="approach-title">Clear thinking.<br /><span>Good things happen.</span></h2>
            </div>
            <p className="section-intro">A calm, collaborative process that keeps the important things in view and the work moving.</p>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, description], index) => (
              <article className="step-card" key={number} data-reveal style={{ "--step-delay": `${index * 80}ms` }}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="step-rule" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-shell section-space" id="about" aria-labelledby="about-title">
          <div className="about-art" data-reveal>
            <img src="/images/getvout-hero-art.webp" alt="Detail of the hand-blown cobalt glass form used as getvout’s visual signature" loading="lazy" />
            <span className="about-art-note">MAKE GOOD<br />THINGS HAPPEN.</span>
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow section-index">06 <span>/</span> The studio</p>
            <h2 id="about-title">Small enough<br />to care. <span>Sharp<br />enough to deliver.</span></h2>
            <p>getvout is an independent digital studio for teams with something meaningful to build. We bring product thinking, considered design, and solid engineering together from the first conversation to launch.</p>
            <p>Based in India. Working with ambitious people everywhere.</p>
            <a className="text-link" href="#work">Explore selected work <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner section-shell" data-reveal>
            <p className="eyebrow section-index">07 <span>/</span> Your move</p>
            <div className="contact-content">
              <h2 id="contact-title">Have a good<br />one in mind?</h2>
              <div className="contact-cta-wrap">
                <p>Tell us what you’re working on. We’ll help you find the right way forward.</p>
                <a className="button button-lime" href="mailto:helo@getvout.com?subject=Project%20enquiry%20for%20getvout.com">Tell us about it <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
            <div className="contact-orbit" aria-hidden="true"><span>GOOD IDEAS</span><ArrowUpRight /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-shell">
          <div className="footer-brand-block">
            <a href="#top" className="wordmark footer-wordmark" aria-label="getvout home"><span className="wordmark-symbol" aria-hidden="true">g</span><span>getvout<span className="wordmark-period">.</span></span></a>
            <p>Digital experiences<br />for what’s next.</p>
          </div>
          <div className="footer-links">
            <div><p className="eyebrow">Explore</p><a href="#work">Work</a><a href="#services">What we do</a><a href="#approach">Approach</a><a href="#about">Studio</a></div>
            <div><p className="eyebrow">Contact</p><a className="footer-email" href="mailto:helo@getvout.com">helo@getvout.com <ArrowUpRight aria-hidden="true" /></a></div>
          </div>
        </div>
        <div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} getvout.com</span><span>Independent by nature. Connected everywhere.</span><a href="#top">Back to top <ArrowUpRight aria-hidden="true" /></a></div>
      </footer>
    </>
  );
}
