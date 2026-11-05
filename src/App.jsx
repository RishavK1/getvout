import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BracketsCurly, Check,
  CheckCircle, Code, CursorClick, EnvelopeSimple, List, MagnifyingGlass,
  Play, Sparkle, X,
} from "@phosphor-icons/react";

const projects = [
  { name: "TalScout.ai", type: "AI product · Talent intelligence", image: "/images/talscout.webp", href: "https://talscout.rishavkamboj.online/", alt: "TalScout product experience for discovering and organizing talent" },
  { name: "JAC Creation", type: "Architecture · Digital presence", image: "/images/jac-creation.jpg", href: "https://jac.getvout.com", alt: "JAC Creation architecture and interiors website" },
  { name: "Hira Dhan Builders", type: "Real estate · Brand website", image: "/images/hiradhan-builders.jpg", href: "https://hiradhanbuilders.com/", alt: "Contemporary home and landscape for Hira Dhan Builders" },
  { name: "Bloom", type: "Digital product · Lifestyle", image: "/images/bloom.webp", href: "https://bloom.rishavkamboj.online/", alt: "Bloom lifestyle product website" },
  { name: "Rose Cafe", type: "Hospitality · Brand experience", image: "/images/rose-cafe-editorial.jpg", href: "https://rose-petal-scroll.vercel.app/", alt: "Editorial visual direction for Rose Cafe" },
  { name: "Lavisha Glow & Glam", type: "Beauty · Commerce", image: "/images/lavisha-glow-glam.jpg", href: "https://lavishaglowandglam.shop/", alt: "Lavisha Glow and Glam beauty commerce experience" },
  { name: "Rana Academy", type: "Education · Website", image: "/images/rana-academy.jpg", href: "https://rana-academy.vercel.app/", alt: "Rana Academy learning website" },
];

const services = [
  {
    id: "01", title: "Websites & platforms", href: "/services/websites-platforms", icon: Code,
    summary: "A distinctive digital home that makes your offer easy to understand and act on.",
    details: ["Brand and marketing websites", "Landing pages and campaign sites", "E-commerce and content platforms", "Responsive design and development", "Ongoing improvements after launch"],
    tools: ["Strategy", "UX / UI", "Next.js", "React", "Content systems"], image: "/images/service-websites-platforms.png", imageAlt: "A refined contemporary residence used as a visual study for website design",
  },
  {
    id: "02", title: "Products & applications", href: "/services/products-applications", icon: CursorClick,
    summary: "Useful software shaped around the people who use it and the work they need to do.",
    details: ["Product direction and discovery", "SaaS and web applications", "Customer and internal portals", "Product design and prototyping", "Front-end and back-end engineering"],
    tools: ["Product design", "React", "Node.js", "APIs", "AI workflows"], image: "/images/service-products-applications.png", imageAlt: "Digital product planning boards and an application interface",
  },
  {
    id: "03", title: "Strategy, design & AI", href: "/services/ai-automation", icon: Sparkle,
    summary: "Clearer decisions, better digital journeys, and practical AI where it helps.",
    details: ["Digital strategy and planning", "Brand and experience direction", "Workflow automation", "AI-enabled product features", "Search-ready content foundations"],
    tools: ["Research", "Figma", "Automation", "AI", "Analytics"], image: "/images/service-strategy-design-ai.png", imageAlt: "Visual research board combining interface, color, and material references",
  },
];

const stories = [
  { eyebrow: "A product for ambitious teams", title: "TalScout brings discovery into focus.", text: "A focused product experience for finding, reviewing, and organizing talent in one place.", image: "/images/talscout.webp", tag: "Product design & build", href: projects[0].href },
  { eyebrow: "A clearer digital front door", title: "JAC Creation makes the work easier to explore.", text: "A considered home for architecture and interior projects, with a direct path from inspiration to conversation.", image: "/images/jac-creation.jpg", tag: "Website & experience", href: projects[1].href },
  { eyebrow: "A more expressive brand experience", title: "Rose Cafe turns a visit into a story.", text: "An editorial, image-led experience built around a memorable hospitality brand.", image: "/images/rose-cafe-editorial.jpg", tag: "Brand & web experience", href: projects[4].href },
];

const process = [
  ["01", "Listen & learn", "We get close to the business, the audience, and what a good outcome needs to look like.", "/images/process-discovery.jpg"],
  ["02", "Find the opportunity", "We make sense of the brief, the context, and the decisions that will move the work forward.", "/images/process-research.jpg"],
  ["03", "Set a direction", "We align on the experience, structure, and visual language before production begins.", "/images/process-direction.jpg"],
  ["04", "Shape the experience", "We turn the direction into clear screens, content, and interactions to review together.", "/images/process-design.jpg"],
  ["05", "Make it real", "We build the approved design into a responsive, usable digital experience.", "/images/process-build.jpg"],
  ["06", "Refine the details", "We check the whole journey, polish the details, and resolve issues across devices.", "/images/process-refine.jpg"],
  ["07", "Launch with care", "We prepare the final handoff and help the new experience go live smoothly.", "/images/process-launch.jpg"],
  ["08", "Keep improving", "After launch, we can continue evolving the product as the business learns and grows.", "/images/process-support.jpg"],
];

const journal = [
  { category: "Design", title: "A good first screen gives people somewhere to go.", image: "/images/journal-design.jpg", target: "#solutions" },
  { category: "Process", title: "The clearest build starts with the right questions.", image: "/images/journal-process.jpg", target: "#approach" },
  { category: "Perspective", title: "Useful technology should feel simple to use.", image: "/images/journal-perspective.jpg", target: "#contact" },
];

function usePageMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = [...document.querySelectorAll("[data-reveal]")];
    if (reduced || !("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
    reveals.forEach((element) => observer.observe(element));
    let raf = 0;
    const update = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty("--scroll-progress", `${max > 0 ? window.scrollY / max * 100 : 0}%`);
        document.querySelectorAll("[data-parallax]").forEach((node) => {
          const rect = node.getBoundingClientRect();
          const travel = Math.max(-16, Math.min(16, (rect.top + rect.height / 2 - window.innerHeight / 2) * -0.025));
          node.style.setProperty("--parallax-y", `${travel.toFixed(1)}px`);
        });
        raf = 0;
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

function Wordmark({ footer = false, onClick }) {
  return <a className={`wordmark${footer ? " wordmark--footer" : ""}`} href="/" onClick={onClick} aria-label="Getvout home"><span className="wordmark-symbol">g</span><span>getvout<span className="wordmark-period">.</span></span></a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <div className="header-inner">
      <Wordmark onClick={close} />
      <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <List />}<span>{open ? "Close" : "Menu"}</span></button>
      <nav className={`primary-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
        <a href="/services" onClick={close}>Services</a><a href="/work" onClick={close}>Work</a><a href="/#approach" onClick={close}>Process</a><a href="/#why" onClick={close}>Why Getvout</a><a href="/studio" onClick={close}>Studio</a><a href="/#journal" onClick={close}>Journal</a><a className="nav-cta" href="/contact" onClick={close}>Let’s talk <ArrowUpRight /></a>
      </nav>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero section-shell" id="top">
    <div className="hero-copy" data-reveal>
      <p className="eyebrow hero-kicker"><span className="status-dot" /> Independent digital studio <i>/</i> Working everywhere</p>
      <h1>Make your next move <em>matter.</em></h1>
      <p className="hero-lede">We build distinctive websites, intelligent products, and digital experiences that move ambitious businesses forward.</p>
      <div className="hero-actions"><a className="button button-dark" href="#contact">Start a conversation <ArrowUpRight /></a><a className="button button-outline" href="#portfolio">See our work <ArrowDown /></a></div>
      <div className="hero-capabilities"><span>Strategy</span><i /><span>Design</span><i /><span>Engineering</span><i /><span>AI</span></div>
    </div>
    <div className="hero-stage" data-reveal>
      <div className="hero-art-frame" data-parallax><img src="/images/getvout-hero-art.webp" alt="Cobalt glass sculpture with a lime sphere in warm natural light" fetchPriority="high" /><div className="hero-art-label"><span>GETVOUT / DIGITAL STUDIO</span><span>01 — 07</span></div><div className="hero-art-caption"><span className="hero-monogram">G.</span><span>Ideas,<br />made real.</span><i>A better way out.</i></div></div>
      <div className="hero-note"><span className="hero-note-icon"><Sparkle weight="fill" /></span><div><strong>Have something in mind?</strong><span>Let’s make the next step clear.</span></div><a href="#contact" aria-label="Start a conversation"><ArrowUpRight /></a></div>
      <span className="hero-index">Independent by design · Built around what’s next</span>
    </div>
  </section>;
}

function WorkRibbon() {
  const names = ["TalScout.ai", "JAC Creation", "Hira Dhan Builders", "Bloom", "Rose Cafe", "Lavisha Glow & Glam", "Rana Academy"];
  return <section className="work-ribbon" aria-label="Selected work and project categories"><div className="ribbon-inner section-shell"><div className="ribbon-title"><span className="eyebrow">01 / A few things we’ve made</span><strong>Work across ideas and industries.</strong></div><div className="ribbon-track">{names.map((name, i) => <span className="ribbon-name" key={name}><b>{String(i + 1).padStart(2, "0")}</b>{name}</span>)}</div><a className="ribbon-link" href="#portfolio">Explore projects <ArrowUpRight /></a></div></section>;
}

function Solutions() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = current.icon;
  return <section className="solutions section-shell" id="solutions">
    <div className="section-heading" data-reveal><div><p className="eyebrow"><b>02 / What we do</b></p><h2>Digital work built<br />for <em>what’s next.</em></h2></div><p>From the first question to the final detail, we bring strategy, design, and technology together around your goals.</p></div>
    <div className="solutions-layout">
      <div className="solution-list" role="tablist" aria-label="Getvout capabilities" data-reveal>
        {services.map((service, index) => { const ServiceIcon = service.icon; return <button className={`solution-tab${active === index ? " is-active" : ""}`} key={service.id} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}><span className="solution-tab-number">[{service.id}]</span><span className="solution-tab-title">{service.title}</span><ServiceIcon className="solution-tab-icon" /><span className="solution-tab-arrow"><ArrowUpRight /></span></button>; })}
      </div>
      <article className="solution-detail" role="tabpanel" key={current.id} data-reveal>
        <div className="solution-detail-copy"><span className="solution-detail-mark"><Icon weight="fill" /></span><h3>{current.title}</h3><p>{current.summary}</p><a className="text-link" href={current.href}>Explore this capability <ArrowUpRight /></a>
          <div className="solution-detail-columns"><div><p className="eyebrow">What we do</p><ul>{current.details.map((item) => <li key={item}><Check />{item}</li>)}</ul></div><div><p className="eyebrow">Tools & thinking</p><div className="tool-pills">{current.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></div>
        </div>
        <figure className="solution-image"><img src={current.image} alt={current.imageAlt} loading="lazy" /><figcaption>Thoughtful design, made useful.</figcaption><span className="image-corner" aria-hidden="true"><ArrowUpRight /></span></figure>
      </article>
    </div>
  </section>;
}

function Portfolio() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const change = (delta) => setActive((current) => (current + delta + projects.length) % projects.length);
  return <section className="portfolio" id="portfolio">
    <div className="portfolio-inner section-shell">
      <div className="portfolio-head" data-reveal><div><p className="eyebrow"><b>03 / Selected work</b></p><h2>Good work should<br />make you <em>look twice.</em></h2></div><p>A selection of digital experiences and identities made with care, each shaped around a different ambition.</p></div>
      <div className="portfolio-feature" data-reveal>
        <a className="portfolio-image" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} key={project.name}><img src={project.image} alt={project.alt} loading="lazy" /><span className="portfolio-image-index">{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><span className="portfolio-open"><ArrowUpRight /></span></a>
        <div className="portfolio-meta"><div><p className="eyebrow">{project.type}</p><h3>{project.name}</h3><p>Designed to give the work a clear, memorable place to live online.</p><a className="text-link" href={project.href} target="_blank" rel="noreferrer">Visit project <ArrowUpRight /></a></div><div className="portfolio-controls"><button type="button" aria-label="Previous project" onClick={() => change(-1)}><ArrowLeft /></button><button type="button" aria-label="Next project" onClick={() => change(1)}><ArrowRight /></button></div></div>
      </div>
      <div className="portfolio-thumbnails" role="tablist" aria-label="Choose a project">{projects.map((item, index) => <button type="button" role="tab" aria-selected={index === active} className={index === active ? "is-active" : ""} key={item.name} onClick={() => setActive(index)}><img src={item.image} alt="" loading="lazy" /><span>{item.name}</span></button>)}</div>
    </div>
  </section>;
}

function Stories() {
  const [active, setActive] = useState(0);
  const story = stories[active];
  const change = (delta) => setActive((current) => (current + delta + stories.length) % stories.length);
  return <section className="stories section-shell" id="stories">
    <div className="stories-heading" data-reveal><div><p className="eyebrow"><b>04 / Work in focus</b></p><h2>Made to do more<br />than <em>look good.</em></h2></div><p>Different goals call for different answers. Here are a few real projects, and the problem each experience helps solve.</p></div>
    <div className="story-feature" data-reveal key={story.title}>
      <a className="story-photo" href={story.href} target="_blank" rel="noreferrer"><img src={story.image} alt="" loading="lazy" /><span><Play weight="fill" /> Explore the project</span></a>
      <div className="story-copy"><span className="eyebrow">{story.eyebrow}</span><h3>{story.title}</h3><p>{story.text}</p><span className="story-tag"><CheckCircle /> {story.tag}</span><div className="story-controls"><div className="story-dots" aria-label={`Project ${active + 1} of ${stories.length}`}>{stories.map((item, index) => <button type="button" key={item.title} className={index === active ? "is-active" : ""} aria-label={`Show story ${index + 1}`} onClick={() => setActive(index)} />)}</div><div><button type="button" aria-label="Previous story" onClick={() => change(-1)}><ArrowLeft /></button><button type="button" aria-label="Next story" onClick={() => change(1)}><ArrowRight /></button></div></div></div>
    </div>
    <div className="proof-row" data-reveal><div><span className="proof-number">01</span><p>Real work</p><small>Live projects across products, services, and commerce.</small></div><div><span className="proof-number">02</span><p>Close collaboration</p><small>Shared decisions, clear checkpoints, and room to refine.</small></div><div><span className="proof-number">03</span><p>Built to keep moving</p><small>Responsive foundations that can grow with the business.</small></div></div>
  </section>;
}

function Approach() {
  const [active, setActive] = useState(0);
  const step = process[active];
  return <section className="approach" id="approach">
    <div className="approach-inner section-shell">
      <div className="approach-heading" data-reveal><div><p className="eyebrow"><b>05 / From first thought to launch</b></p><h2>A process with<br />room to <em>think.</em></h2></div><p>Eight practical steps. One shared direction. We keep the work visible so you always know where it stands.</p></div>
      <div className="process-experience" data-reveal>
        <div className="process-visual"><img key={step[3]} src={step[3]} alt={`Illustration of the ${step[1].toLowerCase()} stage`} loading="lazy" /><div className="process-visual-shade" /><div className="process-visual-caption"><span className="eyebrow">THE GETVOUT APPROACH</span><strong>{step[1]}</strong><span>{step[0]} / 08</span></div><div className="process-progress"><span style={{ width: `${(active + 1) / process.length * 100}%` }} /></div></div>
        <div className="process-side"><div className="process-side-intro"><span className="eyebrow">{step[0]} / 08</span><h3>{step[1]}</h3><p>{step[2]}</p></div><div className="process-list" role="tablist" aria-label="Eight project steps">{process.map(([number, title], index) => <button type="button" role="tab" aria-selected={active === index} className={active === index ? "is-active" : ""} key={number} onClick={() => setActive(index)}><span>{number}</span><strong>{title}</strong><span className="process-check">{active === index ? <Check /> : <ArrowUpRight />}</span></button>)}</div></div>
      </div>
    </div>
  </section>;
}

function WhyGetvout() {
  const rows = [
    ["Clear direction before production", "We agree on the audience, the goal, and the shape of the work."],
    ["The people doing the work stay close", "Questions and decisions reach the designers and builders directly."],
    ["Progress stays visible", "You see the work in stages and have space to give thoughtful feedback."],
    ["Built for real use", "We consider content, devices, and the everyday tasks the experience must support."],
    ["Support beyond launch", "The relationship can continue as your needs and priorities change."],
  ];
  return <section className="why section-shell" id="why">
    <div className="why-heading" data-reveal><div><p className="eyebrow"><b>06 / A thoughtful partnership</b></p><h2>Why Getvout over<br /><em>other agencies?</em></h2></div><p>A straightforward view of our approach and what it can mean for your project.</p></div>
    <div className="comparison" data-reveal><div className="comparison-head"><span>How we work</span><span>What that means for you</span><span className="comparison-brand"><span className="mini-g">g.</span> Getvout</span></div>{rows.map(([title, detail], index) => <div className="comparison-row" key={title}><span className="comparison-number">0{index + 1}</span><strong>{title}</strong><span className="comparison-detail">{detail}</span><span className="comparison-check"><Check /></span></div>)}</div>
    <div className="founder-note" data-reveal><span className="founder-mark">G.</span><div><span className="eyebrow">A note from the studio</span><p>“The best digital work starts by understanding what matters to the people behind it.”</p><small>Getvout · Independent digital studio</small></div><a href="#contact" aria-label="Talk to Getvout"><ArrowUpRight /></a></div>
  </section>;
}

function Studio() {
  const collage = [projects[2], projects[4], projects[0], projects[5]];
  return <section className="studio" id="studio">
    <div className="studio-inner section-shell">
      <div className="studio-copy" data-reveal><p className="eyebrow"><b>07 / The studio</b></p><h2>A small studio<br />with a <em>bigger focus.</em></h2><p>Getvout brings strategy, design, engineering, and AI together to make useful things for what’s next. You work closely with the people shaping and building your project.</p><a className="button button-light" href="#contact">Meet us in a conversation <ArrowUpRight /></a></div>
      <div className="studio-collage" data-reveal aria-label="A selection of Getvout project imagery">{collage.map((item, index) => <a href={item.href} target="_blank" rel="noreferrer" key={item.name} className={`collage-shot collage-shot--${index + 1}`}><img src={item.image} alt={item.alt} loading="lazy" /><span>{item.name}</span></a>)}<span className="collage-note">Work made with care<br />and a close eye on detail.</span></div>
    </div>
  </section>;
}

function Journal() {
  return <section className="journal section-shell" id="journal">
    <div className="journal-heading" data-reveal><div><p className="eyebrow"><b>08 / Notes from the studio</b></p><h2>Ideas, process,<br />and <em>perspective.</em></h2></div><p>A few things we keep coming back to while making digital work.</p></div>
    <div className="journal-grid">{journal.map((entry, index) => <a className="journal-card" href={entry.target} key={entry.title} data-reveal style={{ "--delay": `${index * 80}ms` }}><div className="journal-image"><img src={entry.image} alt="" loading="lazy" /><span><ArrowUpRight /></span></div><p className="eyebrow">{entry.category}</p><h3>{entry.title}</h3><span className="journal-read">A thought from Getvout <ArrowUpRight /></span></a>)}</div>
    <div className="media-note" data-reveal><span className="media-note-label"><MagnifyingGlass /> A note on the work</span><p>Our portfolio is the best place to see what we make. We share each project as a piece of work, not as a borrowed endorsement.</p><a href="#portfolio">Browse selected work <ArrowUpRight /></a></div>
  </section>;
}

function Contact() {
  const [mode, setMode] = useState("conversation");
  const [sent, setSent] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project conversation: ${form.get("name") || "New enquiry"}`);
    const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\nWhat I'm working on:\n${form.get("brief")}`);
    window.location.href = `mailto:helo@getvout.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return <section className="contact section-shell" id="contact">
    <div className="contact-heading" data-reveal><div><p className="eyebrow"><b>09 / Start a conversation</b></p><h2>Pick a path.<br /><em>We’ll take it from there.</em></h2></div><p>No big pitch needed. Tell us a little about what you’re making, or simply say hello.</p></div>
    <div className="contact-panel" data-reveal>
      <div className="contact-panel-head"><div><span className="eyebrow">GETVOUT / CONTACT</span><h3>What would you like to do?</h3></div><div className="contact-tabs" role="tablist" aria-label="Contact options"><button type="button" role="tab" aria-selected={mode === "conversation"} className={mode === "conversation" ? "is-active" : ""} onClick={() => setMode("conversation")}>Talk to the studio</button><button type="button" role="tab" aria-selected={mode === "email"} className={mode === "email" ? "is-active" : ""} onClick={() => setMode("email")}>Send a brief</button></div></div>
      <div className="contact-content"><div className="contact-guidance"><span className="contact-guidance-icon">{mode === "conversation" ? <EnvelopeSimple /> : <BracketsCurly />}</span><h4>{mode === "conversation" ? "Start with a simple hello." : "Share what you’re working on."}</h4><p>{mode === "conversation" ? "We’ll learn a little about your goals and figure out the right next step together." : "A few details are enough. We’ll read through them and get back to you by email."}</p><a href="mailto:helo@getvout.com">helo@getvout.com <ArrowUpRight /></a></div>
        <form className="contact-form" onSubmit={submit}><div className="form-fields"><label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label></div><label>A little about the project<textarea name="brief" rows="3" placeholder="What would you like to make?" required /></label><div className="form-footer"><span><CheckCircle /> No commitment. Just a first conversation.</span><button className="button button-dark" type="submit">{mode === "conversation" ? "Start a conversation" : "Send project details"}<ArrowUpRight /></button></div>{sent && <p className="form-feedback" role="status">Your email app is opening with the details. You can review and send it there.</p>}</form>
      </div>
    </div>
  </section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-cta section-shell" data-reveal><div><p className="eyebrow">10 / Here for what’s next</p><h2>Got something<br />to <em>make?</em></h2></div><div><p>Websites, products, and digital experiences with a little more thought behind them.</p><a className="button button-lime" href="/contact">Tell us about it <ArrowUpRight /></a></div><span className="footer-orbit footer-orbit--one" /><span className="footer-orbit footer-orbit--two" /></div>
    <div className="footer-main section-shell"><div className="footer-brand"><Wordmark footer /><p>Independent digital studio<br />Working everywhere.</p><a href="mailto:helo@getvout.com">helo@getvout.com <ArrowUpRight /></a></div><div className="footer-columns"><div><span className="eyebrow">Explore</span><a href="/services">All services</a><a href="/work">Selected work</a><a href="/#approach">Our approach</a><a href="/studio">The studio</a></div><div><span className="eyebrow">Capabilities</span><a href="/services/websites-platforms">Websites & platforms</a><a href="/services/products-applications">Products & applications</a><a href="/services/ai-automation">AI & automation</a><a href="/services/digital-strategy">Strategy & experience</a></div><div><span className="eyebrow">Say hello</span><a href="mailto:helo@getvout.com">Email the studio <ArrowUpRight /></a><a href="/contact">Start a conversation <ArrowUpRight /></a></div></div></div>
    <div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} Getvout</span><span>Thoughtful work, made real.</span><a href="/">Back to home <ArrowUpRight /></a></div></footer>;
}

export function App() {
  usePageMotion();
  return <><a className="skip-link" href="#main">Skip to content</a><div className="scroll-progress" aria-hidden="true" /><Header /><main id="main"><Hero /><WorkRibbon /><Solutions /><Portfolio /><Stories /><Approach /><WhyGetvout /><Studio /><Journal /><Contact /></main><Footer /></>;
}
