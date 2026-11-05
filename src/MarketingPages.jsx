import { useEffect } from "react";
import { ArrowDown, ArrowUpRight, Check, CheckCircle, Compass, Sparkle } from "@phosphor-icons/react";
import { Header, Footer, FloatingWhatsApp } from "./App.jsx";
import seoRoutes from "./seo-routes.js";

const pages = {
  "/services": {
    ...seoRoutes["/services"], kind: "services",
    eyebrow: "Services / A connected practice", image: "/images/getvout-hero-art.webp", alt: "Getvout’s cobalt glass studio sculpture",
    intro: "The right solution depends on the job. We bring strategy, design, and engineering together so the result feels coherent from the first conversation to launch.",
  },
  "/services/websites-platforms": {
    ...seoRoutes["/services/websites-platforms"], kind: "service",
    eyebrow: "01 / Websites & platforms", image: "/images/jac-creation.jpg", alt: "Architecture and interior design website created by Getvout",
    intro: "A website should help the right people understand what you do, find what they need, and take a useful next step. We make that path clear and build the site to support it.",
    points: [
      ["Business and brand websites", "A clear story, considered visual direction, and a structure that helps people understand the business."],
      ["Landing pages for a focused offer", "One audience, one clear proposition, and a direct path to enquire or take action."],
      ["Content and portfolio platforms", "Flexible ways to publish services, projects, updates, and useful resources."],
      ["Responsive design and development", "Layouts and interactions that feel natural on wide screens, tablets, and phones."],
      ["Technical SEO foundations and analytics setup", "A sound technical base for discovery, plus useful insight into how people find the site."],
    ],
    approach: "We start with your audience, content, and business goal. Then we agree the page structure and visual direction before design and development move into production.",
    projects: ["JAC Creation", "Hira Dhan Builders", "Lavisha Glow & Glam"],
  },
  "/services/products-applications": {
    ...seoRoutes["/services/products-applications"], kind: "service",
    eyebrow: "02 / Products & applications", image: "/images/talscout.webp", alt: "TalScout digital product interface",
    intro: "When a template or off-the-shelf tool no longer fits, a product can bring the important work into one clear experience. We shape the product around its users and everyday tasks.",
    points: [
      ["Product discovery and scope", "Align on users, workflows, priorities, and a useful first release before committing to a build."],
      ["SaaS and web applications", "Purpose-built software shaped around the tasks people need to complete every day."],
      ["Customer portals and dashboards", "Bring important information, actions, and progress into one understandable workspace."],
      ["UX flows, interface design, and prototypes", "Explore the key journeys and test the experience before engineering begins."],
      ["Front-end, back-end, and API integration", "Connect the interface, data, and existing tools into a dependable product foundation."],
    ],
    approach: "We map the core user journey, test the important decisions early, and build in reviewed stages. That keeps the product understandable while its capabilities grow.",
    projects: ["TalScout.ai", "Bloom", "JAC Creation"],
  },
  "/services/ai-automation": {
    ...seoRoutes["/services/ai-automation"], kind: "service",
    eyebrow: "03 / AI & automation", image: "/images/applied-ai-sculpture.webp", alt: "Abstract cobalt glass forms joined around a lime center",
    intro: "AI earns its place when it makes a real task simpler, faster, or newly possible. We look at the workflow first, then choose a practical way to improve it.",
    points: [
      ["AI features inside web products", "Add focused assistance where it makes an existing product experience more useful."],
      ["Workflow automation and integrations", "Reduce repetitive handoffs by connecting the tools and steps a team already uses."],
      ["AI agents for bounded business tasks", "Give an agent a clear task, defined limits, and a person who can review the outcome."],
      ["Knowledge and support experiences", "Help people find relevant answers from information they are allowed to use."],
      ["API and MCP integrations", "Connect models and services through scoped interfaces with clear ownership and access."],
    ],
    approach: "We define the task, the data it needs, and where a person should review or approve the result. The implementation is scoped around those safeguards and the value it needs to deliver.",
    projects: ["TalScout.ai", "Getvout studio tools", "Bloom"],
  },
  "/services/digital-strategy": {
    ...seoRoutes["/services/digital-strategy"], kind: "service",
    eyebrow: "04 / Strategy & experience", image: "/images/process-direction.jpg", alt: "Design direction and interface planning in progress",
    intro: "Good execution starts with a shared view of the problem. We help define who the experience is for, what it needs to do, and how the pieces fit together.",
    points: [
      ["Product and website discovery", "Clarify the opportunity, constraints, and what a successful outcome needs to mean."],
      ["Audience and journey mapping", "Understand who the experience serves and where people need a clearer path."],
      ["Information architecture and content planning", "Give pages, features, and content a structure people can navigate with confidence."],
      ["UX and visual direction", "Set a coherent interaction and visual language before the detailed design work begins."],
      ["Technical scoping and delivery roadmap", "Turn the direction into a realistic sequence of work, dependencies, and decisions."],
    ],
    approach: "The output is a practical direction your team can use: clear priorities, a considered experience, and a scope that links the work to the outcome.",
    projects: ["TalScout.ai", "JAC Creation", "Hira Dhan Builders"],
  },
  "/work": {
    ...seoRoutes["/work"], kind: "work",
    eyebrow: "Work / Selected projects", image: "/images/hiradhan-builders.jpg", alt: "Contemporary residential project by Hira Dhan Builders",
    intro: "A selection of live projects and digital concepts. Each project has a different audience and job, so the work starts with its own context rather than a fixed template.",
  },
  "/work/talscout": {
    ...seoRoutes["/work/talscout"], kind: "case",
    eyebrow: "Project / Digital product", image: "/images/talscout.webp", alt: "TalScout talent intelligence product interface",
    intro: "TalScout is a product experience built around talent discovery. The interface brings search, candidate review, and organization into a single workspace.",
    details: [["The brief", "Make a complex research workflow easier to understand and use."], ["The experience", "A product interface designed to help users move from discovery to a considered shortlist."], ["The work", "Product design and digital experience, shaped around the core workflow." ]],
    external: "https://talscout.rishavkamboj.online/",
  },
  "/work/jac-creation": {
    ...seoRoutes["/work/jac-creation"], kind: "case",
    eyebrow: "Project / Architecture & interiors", image: "/images/jac-creation.jpg", alt: "JAC Creation architecture and interiors website",
    intro: "The project presents architecture and interior work through a composed digital experience, making the visual work easy to explore across screens.",
    details: [["The brief", "Create a more considered digital home for an architecture and interiors practice."], ["The experience", "Editorial imagery, clear sections, and direct paths to the work and conversation."], ["The work", "Website design and development, with responsive layouts and scroll-led details." ]],
    external: "https://jac.getvout.com/",
  },
  "/studio": {
    ...seoRoutes["/studio"], kind: "studio",
    eyebrow: "Studio / Independent by design", image: "/images/getvout-studio-team.png", alt: "Getvout studio team working together around a laptop",
    intro: "Getvout brings product thinking, considered design, and solid engineering together. The people shaping the work stay close to the people building it.",
  },
  "/contact": {
    ...seoRoutes["/contact"], kind: "contact",
    eyebrow: "Contact / Start with a simple hello", image: "/images/getvout-hero-art.webp", alt: "Getvout’s cobalt and lime visual identity",
    intro: "No big pitch needed. A few lines about what you’re working on are enough to start a useful conversation.",
  },
  "/privacy-policy": {
    ...seoRoutes["/privacy-policy"], kind: "legal", eyebrow: "Getvout / Privacy policy", updated: "5 November 2026",
    intro: "This notice explains what information is handled when you browse getvout.com or choose to contact Getvout.",
    sections: [
      { title: "Who this notice covers", paragraphs: ["Getvout is an independent digital studio based in India. This notice applies to getvout.com and to messages you choose to send to the studio through the contact links on this site."] },
      { title: "Information you choose to share", paragraphs: ["If you email or message us, we may receive the name, email address, phone number, business details, project information, and any attachments you include. Please avoid sending sensitive personal information unless it is necessary for your enquiry.", "The website contact form opens a message in your own email application. The form does not send its contents to a Getvout server; information reaches us only if you choose to send that email."] },
      { title: "Information used to operate the site", paragraphs: ["The hosting and security services that deliver this website may process technical request information, such as an IP address, requested page, browser or device details, timestamps, and security diagnostics. This helps deliver the site, prevent abuse, and troubleshoot errors.", "The current site implementation does not install Getvout analytics or advertising pixels, and does not use its own advertising or analytics cookies."] },
      { title: "Why we use information", paragraphs: ["We use messages you send to answer your enquiry, discuss possible work, prepare a proposal when requested, and keep necessary business records. Technical request data is used to operate and protect the website."] },
      { title: "Service providers and external links", paragraphs: ["We share information only where needed to operate the site or respond to you, such as with website hosting, security, email, or communication providers, and where the law requires it. We do not sell personal information submitted to Getvout.", "If you choose the WhatsApp button, you will be taken to WhatsApp. WhatsApp and its related services are provided by Meta and handle information under their own terms and privacy notices. Other linked sites also have their own policies; review them before sharing information there."] },
      { title: "Retention and security", paragraphs: ["We keep correspondence only for as long as reasonably needed to respond, manage a business relationship, maintain necessary records, or meet legal and security needs. Hosting providers may retain technical logs under their own retention practices.", "We use reasonable measures to protect information we control. No internet transmission or storage method can be guaranteed completely secure."] },
      { title: "Your choices and requests", paragraphs: ["Depending on the law that applies to you, you may be able to ask us to access, correct, or erase personal information, or raise a concern about its use. Email helo@getvout.com with the subject “Privacy request”; we may ask for enough information to confirm which correspondence you mean and will respond as required by applicable law."] },
      { title: "Changes and contact", paragraphs: ["We may update this notice when site practices change. The date at the top shows when it was last reviewed. For privacy questions, email helo@getvout.com."] },
    ],
  },
  "/terms-and-conditions": {
    ...seoRoutes["/terms-and-conditions"], kind: "legal", eyebrow: "Getvout / Terms and conditions", updated: "5 November 2026",
    intro: "These terms cover your use of getvout.com. Any project we agree to deliver will have its own scope and written agreement.",
    sections: [
      { title: "Using this website", paragraphs: ["You may browse and use this site for lawful purposes. Do not interfere with its operation, attempt unauthorized access, distribute malicious code, or copy or misuse site content in a way that violates another person’s rights."] },
      { title: "Information about services", paragraphs: ["The site describes Getvout’s capabilities and examples of work. It is general information, not a binding offer, quote, or promise that a particular service, schedule, or outcome is available. Project scope, fees, timing, deliverables, ownership, and support are agreed separately in writing before work begins."] },
      { title: "Projects and illustrative material", paragraphs: ["Some portfolio items or visuals may be concepts or illustrative material; descriptions identify them where relevant. Examples are shown to explain the work and are not a guarantee of results or an endorsement by another party."] },
      { title: "Ownership and permitted use", paragraphs: ["Getvout or its licensors retain rights in the site’s original text, design, graphics, and code. You may view the site and share links to it. Reuse, republication, or commercial use of site materials requires permission from the relevant rights holder.", "Third-party names, marks, images, and project materials remain the property of their respective owners. Nothing on this site transfers ownership of those materials."] },
      { title: "Messages and third-party services", paragraphs: ["When you send an enquiry, you confirm that you are entitled to share the information and files in it. The email and WhatsApp links open services operated by third parties; their availability and terms are outside Getvout’s control."] },
      { title: "Availability and responsibility", paragraphs: ["We aim to keep the site useful and available, but may change, suspend, or remove content without notice. The site is provided for general information. To the extent permitted by law, Getvout is not responsible for indirect loss arising from use of the site or reliance on general website information. Nothing in these terms limits liability that cannot lawfully be limited."] },
      { title: "Applicable law and updates", paragraphs: ["These terms are governed by the laws of India, subject to mandatory protections that apply where you live. Courts with appropriate jurisdiction in India may hear disputes, unless applicable law requires another forum. We may update these terms by publishing a revised version here; the date at the top shows the latest review."] },
      { title: "Contact", paragraphs: ["Questions about these terms? Email helo@getvout.com."] },
    ],
  },
};

const projects = [
  { name: "TalScout.ai", route: "/work/talscout", type: "AI product · Talent intelligence", image: "/images/talscout.webp", alt: "TalScout product experience", text: "A focused product experience for finding, reviewing, and organizing talent." },
  { name: "JAC Creation", route: "/work/jac-creation", type: "Architecture · Digital presence", image: "/images/jac-creation.jpg", alt: "JAC Creation architecture website", text: "An image-led digital home for architecture and interior design work." },
  { name: "Hira Dhan Builders", route: "https://hiradhanbuilders.com/", type: "Real estate · Brand website", image: "/images/hiradhan-builders.jpg", alt: "Hira Dhan Builders residential project", text: "A clear, visual online presence for a residential building business." },
  { name: "Lavisha Glow & Glam", route: "https://lavishaglowandglam.shop/", type: "Beauty · Commerce", image: "/images/lavisha-glow-glam.jpg", alt: "Lavisha Glow & Glam visual identity", text: "A polished digital home for a beauty studio and its services." },
  { name: "Rose Cafe", route: "https://rose-petal-scroll.vercel.app/", type: "Hospitality · Brand experience", image: "/images/rose-cafe-editorial.jpg", alt: "Rose Cafe editorial website concept", text: "An editorial, image-led experience shaped around hospitality." },
  { name: "Rana Academy", route: "https://rana-academy.vercel.app/", type: "Education · Website", image: "/images/rana-academy.jpg", alt: "Rana Academy learning website", text: "A welcoming digital presence for an education brand." },
];

const serviceLinks = [
  ["Websites & platforms", "/services/websites-platforms", "/images/jac-creation.jpg", "Business websites, landing pages, content platforms, and clear paths to action."],
  ["Products & applications", "/services/products-applications", "/images/service-products-applications.png", "Web applications and SaaS experiences built around real user workflows."],
  ["AI & automation", "/services/ai-automation", "/images/applied-ai-sculpture.webp", "Useful AI features and workflow improvements with clear human oversight."],
  ["Strategy & experience", "/services/digital-strategy", "/images/process-direction.jpg", "A focused direction for the audience, experience, scope, and build."],
];

function updateMetadata(page, route) {
  document.title = page.titleTag || `${page.title.replace(/[.!?]$/, "")} | Getvout`;
  const description = page.description;
  let meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", `https://getvout.com${route === "/" ? "/" : route}`);
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", document.title);
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", description);
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", `https://getvout.com${route === "/" ? "/" : route}`);
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute("content", document.title);
  let twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) twitterDescription.setAttribute("content", description);
  let twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) twitterImage.setAttribute("content", "https://getvout.com/images/getvout-social-card.png");
}

function PageHero({ page, route }) {
  if (page.kind === "legal") return <section className="legal-hero page-shell" data-reveal>
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>{page.eyebrow.split(" / ").at(-1)}</span></nav>
    <p className="eyebrow page-eyebrow">{page.eyebrow}</p>
    <div className="legal-hero-grid"><h1>{page.title}</h1><div><p className="inner-hero-intro">{page.intro}</p><span className="legal-updated">Last updated {page.updated}</span></div></div>
  </section>;
  return <section className="inner-hero page-shell" data-reveal>
    <div className="inner-hero-copy"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>{page.eyebrow.split(" / ").at(-1)}</span></nav><p className="eyebrow page-eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="inner-hero-intro">{page.intro}</p><div className="inner-hero-actions"><a className="button button-dark" href="/contact">Start a conversation <ArrowUpRight /></a>{page.kind !== "contact" && <a className="button button-outline" href="#page-content">Explore this page <ArrowDown /></a>}</div></div>
    <figure className="inner-hero-visual"><img src={page.image} alt={page.alt} fetchPriority="high" /><figcaption><span>GETVOUT / {page.kind === "case" ? "PROJECT" : page.kind.toUpperCase()}</span><span>INDEPENDENT DIGITAL STUDIO</span></figcaption></figure>
  </section>;
}

function ServiceCards() {
  return <section className="inner-section page-shell" id="page-content">
    <div className="inner-section-heading service-overview-heading" data-reveal>
      <div className="service-overview-title"><p className="eyebrow">A connected set of capabilities</p><h2>Find the right place<br />to <em>begin.</em></h2></div>
      <p className="service-overview-intro">Start with the need in front of you. We can help shape the rest as the project becomes clearer.</p>
    </div>
    <div className="service-page-grid">{serviceLinks.map(([title, href, image, summary], i) => <a className="service-page-card" href={href} key={title} data-reveal><div className="service-page-image"><img src={image} alt="" loading="lazy" /><span>0{i + 1}</span></div><div className="service-page-card-copy"><p className="eyebrow">Getvout / {title}</p><h3>{title}</h3><p>{summary}</p><span className="text-link">Explore this service <ArrowUpRight /></span></div></a>)}</div>
  </section>;
}

function WorkGrid() {
  return <section className="inner-section page-shell" id="page-content"><div className="inner-section-heading" data-reveal><p className="eyebrow">Selected work / A mix of live projects and concepts</p><h2>Different work.<br /><em>Clear intent.</em></h2><p>Some projects are live websites and products. Concept work is identified as such where relevant.</p></div><div className="work-page-grid">{projects.map((project, i) => <a className="work-page-card" href={project.route} key={project.name} data-reveal><div className="work-page-image"><img src={project.image} alt={project.alt} loading="lazy" /><span><ArrowUpRight /></span></div><p className="eyebrow">{project.type}</p><h3>{project.name}</h3><p>{project.text}</p></a>)}</div><p className="project-note">Project descriptions summarize the work shown here; they do not imply client results or endorsements.</p></section>;
}

function ServiceDetail({ page }) {
  const related = projects.filter((p) => page.projects.includes(p.name));
  return <><section className="service-detail-section page-shell" id="page-content">
    <div className="detail-intro" data-reveal>
      <div className="detail-intro-title"><p className="eyebrow"><b>What this can include</b></p><h2>Thoughtful from<br />first idea to <em>launch.</em></h2></div>
      <aside className="detail-intro-note"><span className="detail-note-label"><Compass /> A considered starting point</span><p>{page.approach}</p></aside>
    </div>
    <div className="service-points-heading"><p className="eyebrow">The capability map</p><span>01 — 05 <i /> BUILT AROUND YOUR BRIEF</span></div>
    <div className="service-points-grid">{page.points.map(([title, description], i) => <article className="service-point" key={title} data-reveal>
      <div className="service-point-top"><span className="service-point-number">0{i + 1}</span><span className="service-point-icon"><CheckCircle /></span></div>
      <h3>{title}</h3><p>{description}</p><span className="service-point-rule" />
    </article>)}</div>
    <div className="detail-principle" data-reveal><span className="principle-icon"><Compass /></span><div><p className="eyebrow">How we approach it</p><h3>Clear choices.<br />A build that fits.</h3><p>{page.approach}</p></div><a className="button button-light" href="/contact">Talk through your project <ArrowUpRight /></a></div>
  </section><RelatedProjects items={related} /></>;
}

function RelatedProjects({ items = projects.slice(0, 3) }) {
  return <section className="related-section page-shell"><div className="related-heading" data-reveal><div><p className="eyebrow">Selected work</p><h2>See it in <em>practice.</em></h2></div><a className="text-link" href="/work">View all work <ArrowUpRight /></a></div><div className="related-grid">{items.map((p) => <a className="related-card" href={p.route} key={p.name} data-reveal><img src={p.image} alt={p.alt} loading="lazy" /><span>{p.type}</span><strong>{p.name}</strong><ArrowUpRight /></a>)}</div></section>;
}

function CaseStudy({ page }) {
  return <><section className="case-overview page-shell" id="page-content"><div className="case-callout" data-reveal><p className="eyebrow">Project overview</p><h2>Good digital work starts with understanding the <em>job.</em></h2><p>{page.intro}</p>{page.external && <a className="text-link" href={page.external} target="_blank" rel="noreferrer">View the live project <ArrowUpRight /></a>}</div><div className="case-detail-list">{page.details.map(([label, text], i) => <article key={label} data-reveal><span>0{i + 1}</span><div><p className="eyebrow">{label}</p><p>{text}</p></div></article>)}</div></section><figure className="case-image page-shell" data-reveal><img src={page.image} alt={page.alt} loading="lazy" /><figcaption>Getvout project imagery · {page.eyebrow.split(" / ").at(-1)}</figcaption></figure><RelatedProjects items={projects.filter((p) => !page.title.startsWith(p.name))} /></>;
}

function StudioContent() {
  return <><section className="studio-page-content page-shell" id="page-content"><div className="studio-page-copy" data-reveal><p className="eyebrow">Independent digital studio / Working everywhere</p><h2>Small enough<br />to care. <em>Close enough</em><br />to make it real.</h2><p>Getvout is an independent digital studio based in India. We work with ambitious people everywhere to create useful websites, products, and digital experiences.</p><p>Our studio brings product thinking, design, engineering, and practical AI into one collaborative process. The people you speak with stay close to the decisions and the work.</p><a className="text-link" href="/work">Explore selected work <ArrowUpRight /></a></div><div className="studio-values" data-reveal>{[["Clarity", "Make the problem and next step easier to see."], ["Care", "Sweat the details that shape the everyday experience."], ["Useful", "Let technology serve a real need."], ["Ownership", "Keep decisions, access, and handover clear."]].map(([title, text], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Check /></article>)}</div></section><RelatedProjects /></>;
}

function ContactContent() {
  return <section className="contact-page-content page-shell" id="page-content"><div className="contact-page-note" data-reveal><span className="principle-icon"><Sparkle /></span><p className="eyebrow">GETVOUT / CONTACT</p><h2>Start with a<br /><em>simple hello.</em></h2><p>Share a little about your goals, timeline, or the challenge you’re working through. We’ll reply by email and help identify a practical next step.</p><a className="text-link" href="mailto:helo@getvout.com?subject=Project%20conversation%20with%20Getvout">helo@getvout.com <ArrowUpRight /></a></div><form className="contact-page-form" action="mailto:helo@getvout.com" method="post" encType="text/plain" data-reveal><label>Your name<input name="Name" autoComplete="name" placeholder="Name" required /></label><label>Email address<input name="Email" type="email" autoComplete="email" placeholder="you@company.com" required /></label><label>What would you like to make?<textarea name="Project" rows="5" placeholder="A few lines about your project or idea" required /></label><button className="button button-dark" type="submit">Email the studio <ArrowUpRight /></button><small>This opens your email app so you can review the message before sending.</small></form></section>;
}

function LegalContent({ page }) {
  return <article className="legal-content page-shell" id="page-content">
    <div className="legal-content-intro"><span>Plain-language information for visitors to getvout.com</span><a href="mailto:helo@getvout.com">Questions? Email us <ArrowUpRight /></a></div>
    <div className="legal-sections">{page.sections.map((section, index) => <section className="legal-section" key={section.title} data-reveal>
      <span className="legal-section-number">{String(index + 1).padStart(2, "0")}</span>
      <div><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>)}</div>
    <div className="legal-contact"><span>Need to ask us something?</span><a href={`mailto:helo@getvout.com?subject=${encodeURIComponent(page.kind === "legal" && page.eyebrow.includes("Privacy") ? "Privacy request" : "Question about Getvout terms")}`}>Email helo@getvout.com <ArrowUpRight /></a></div>
  </article>;
}

function PageContent({ page }) {
  if (page.kind === "services") return <ServiceCards />;
  if (page.kind === "work") return <WorkGrid />;
  if (page.kind === "service") return <ServiceDetail page={page} />;
  if (page.kind === "case") return <CaseStudy page={page} />;
  if (page.kind === "studio") return <StudioContent />;
  if (page.kind === "contact") return <ContactContent />;
  if (page.kind === "legal") return <LegalContent page={page} />;
  return null;
}

export function MarketingPage({ path }) {
  const page = pages[path] || pages["/services"];
  useEffect(() => {
    updateMetadata(page, path);
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.1, rootMargin: "0px 0px -4% 0px" });
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [page, path]);

  return <><a className="skip-link" href="#page-content">Skip to content</a><div className="scroll-progress" aria-hidden="true" /><Header /><main id="main"><PageHero page={page} route={path} /><PageContent page={page} />{page.kind !== "legal" && <section className="inner-cta page-shell" data-reveal><div><p className="eyebrow">Have something in mind?</p><h2>Let’s make the<br /><em>next step clear.</em></h2></div><a className="button button-lime" href="/contact">Talk to Getvout <ArrowUpRight /></a></section>}</main><Footer /><FloatingWhatsApp /></>;
}

export const marketingRoutes = Object.keys(pages);
