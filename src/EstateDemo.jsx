import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Bed, CaretDown, Check,
  Compass, HouseLine, List, MapPin, Minus, Phone, Ruler, Sparkle, X,
} from "@phosphor-icons/react";

const homes = [
  {
    id: "palm-court", name: "Palm Court Villa", area: "Sector 54 · Gurugram", category: "Villas",
    price: "₹ 8.4 Cr", beds: 5, baths: 6, size: "5,200 sq. ft.",
    image: "/images/hiradhan-builders.jpg", imagePosition: "center 56%", imageAlt: "A contemporary stone-and-glass villa surrounded by mature trees at dusk", tag: "Private collection", number: "01",
  },
  {
    id: "the-willow", name: "The Willow House", area: "Golf Course Road · Gurugram", category: "Homes",
    price: "₹ 5.2 Cr", beds: 4, baths: 5, size: "3,850 sq. ft.",
    image: "/images/jac-creation.jpg", imagePosition: "center 60%", imageAlt: "A garden residence with a reflecting pool and a quiet courtyard", tag: "A quieter kind of luxury", number: "02",
  },
  {
    id: "garden-residence", name: "Garden Residence", area: "DLF Phase V · Gurugram", category: "Apartments",
    price: "₹ 3.6 Cr", beds: 3, baths: 4, size: "2,640 sq. ft.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", imagePosition: "center 58%", imageAlt: "Sunlit, considered interiors at Garden Residence", tag: "Thoughtfully restored", number: "03",
  },
];

const questions = [
  ["How do you choose the homes you represent?", "Every home is considered for its setting, quality and the way it feels to live in. We keep the collection intentionally selective, then listen closely to what matters to you."],
  ["Can you help me find a home before it is listed?", "Yes. We build relationships with owners and local partners, so some opportunities can be shared privately. Tell us what you are looking for and we will see what fits."],
  ["Do you work with first-time buyers?", "Of course. We can help you understand the search, compare options and feel confident about each next step, from the first viewing through the paperwork."],
  ["Can I arrange a private viewing?", "Absolutely. Send us a note with a property in mind and a time that suits you. We will coordinate a thoughtful, unhurried visit."],
];

function Wordmark({ light = false }) {
  return <a className={`estate-wordmark${light ? " is-light" : ""}`} href="#top" aria-label="Aurelia Estates home">
    <span className="estate-monogram">A</span><span>AURELIA<small>ESTATES · GURUGRAM</small></span>
  </a>;
}

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  return <Tag className={`estate-reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` }} data-reveal>{children}</Tag>;
}

function PropertyCard({ home, onEnquire }) {
  return <article className="estate-property-card" data-reveal>
    <button className="estate-card-image" onClick={() => onEnquire(home.name)} aria-label={`Enquire about ${home.name}`}>
    <img src={home.image} alt={home.imageAlt} style={{ objectPosition: home.imagePosition }} loading="lazy" />
      <span className="estate-image-tag"><Sparkle size={13} weight="fill" /> {home.tag}</span>
      <span className="estate-image-arrow"><ArrowUpRight size={18} /></span>
    </button>
    <div className="estate-card-meta"><span>{home.area}</span><span>RESIDENCE {home.number}</span></div>
    <div className="estate-card-title"><h3>{home.name}</h3><span>{home.price}</span></div>
    <div className="estate-card-specs"><span><Bed size={15} /> {home.beds} beds</span><span><HouseLine size={15} /> {home.baths} baths</span><span><Ruler size={15} /> {home.size}</span></div>
  </article>;
}

export function EstateDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [location, setLocation] = useState("");
  const [kind, setKind] = useState("All homes");
  const [submitted, setSubmitted] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Aurelia Estates — A more considered way home";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "160px 0px 160px 0px" });
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    let frame = 0;
    const revealPassed = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((node) => {
          if (node.getBoundingClientRect().top < window.innerHeight + 160) node.classList.add("is-visible");
        });
      });
    };
    revealPassed();
    window.addEventListener("scroll", revealPassed, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", revealPassed); if (frame) cancelAnimationFrame(frame); };
  }, []);

  const visibleHomes = useMemo(() => homes.filter((home) => {
    const matchesKind = kind === "All homes" || home.category === kind;
    const matchesLocation = !location.trim() || home.area.toLowerCase().includes(location.toLowerCase());
    const matchesQuery = !query || `${home.name} ${home.area} ${home.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesKind && matchesLocation && matchesQuery;
  }), [kind, location, query]);

  const showEnquiry = (name = "") => {
    setSubmitted(false);
    setQuery(name);
    document.querySelector("#enquire")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Aurelia Estates enquiry${form.get("interest") ? ` — ${form.get("interest")}` : ""}`);
    const body = encodeURIComponent(`Hello Aurelia Estates,\n\n${form.get("message")}\n\nName: ${form.get("name")}\nPhone: ${form.get("phone")}`);
    window.location.href = `mailto:hello@getvout.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return <main className="estate-site" id="top">
    <div className="estate-topline"><span>AURELIA ESTATES · WEBSITE CONCEPT</span><span>GURUGRAM, INDIA <span className="estate-top-dot">●</span> BY APPOINTMENT</span></div>
    <header className="estate-header">
      <Wordmark />
      <nav className={menuOpen ? "estate-nav is-open" : "estate-nav"} aria-label="Main navigation">
        <a href="#collection" onClick={() => setMenuOpen(false)}>The collection</a>
        <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
        <a href="#neighbourhoods" onClick={() => setMenuOpen(false)}>Neighbourhoods</a>
        <a className="estate-nav-cta" href="#enquire" onClick={() => setMenuOpen(false)}>Find your place <ArrowUpRight size={15} /></a>
      </nav>
      <button className="estate-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <List />}</button>
    </header>

    <section className="estate-hero" aria-labelledby="estate-title">
      <div className="estate-hero-copy">
        <Reveal className="estate-eyebrow"><span className="estate-eyebrow-mark" /> A MORE CONSIDERED WAY HOME <span>01 / 06</span></Reveal>
        <Reveal delay={30}><h1 id="estate-title">Room to live<br />a little <em>more.</em></h1></Reveal>
        <Reveal delay={60}><p className="estate-hero-description">Exceptional homes, found with care. A personal property search for the way you want to live in Gurugram.</p></Reveal>
        <Reveal delay={90} className="estate-hero-actions">
          <a className="estate-button estate-button-dark" href="#collection">Explore the collection <ArrowRight size={16} /></a>
          <a className="estate-text-link" href="#approach">How we work <ArrowDown size={15} /></a>
        </Reveal>
        <Reveal delay={120} className="estate-hero-note"><span className="estate-note-stars">✳ ✳ ✳</span><span>Homes chosen for their character.<br />Guidance shaped around you.</span></Reveal>
      </div>
      <div className="estate-hero-visual" data-reveal>
        <img className="estate-hero-photo" src="/images/hiradhan-builders.jpg" alt="Warmly lit modern villa surrounded by mature trees at dusk" />
        <div className="estate-hero-image-top"><span>GURUGRAM, HARYANA</span><span>28°27′N 77°02′E</span></div>
        <div className="estate-hero-image-bottom"><span>THE ART OF COMING HOME</span><ArrowUpRight size={17} /></div>
        <div className="estate-floating-card"><span className="estate-floating-icon"><Compass size={17} /></span><span><b>A more personal search</b><small>Local insight. Thoughtful advice.</small></span><ArrowUpRight size={15} /></div>
        <div className="estate-vertical-label">AURELIA ESTATES — GURUGRAM</div>
      </div>
      <a className="estate-scroll-cue" href="#collection"><span>SCROLL TO DISCOVER</span><span className="estate-scroll-line" /></a>
      <div className="estate-hero-index">01 <span>—</span> 06</div>
    </section>

    <section className="estate-intro-strip" aria-label="Our promise">
      <div className="estate-intro-lead"><span className="estate-section-label">A NOTE ON THE SEARCH</span><p>Finding a home should feel <em>as good</em> as living in one.</p></div>
      <div className="estate-intro-detail"><span className="estate-intro-ornament">✳</span><p>We bring a local eye, a considered collection and a little more care to every move.</p></div>
      <div className="estate-intro-coordinate">EST. IN GURUGRAM<br />HERE FOR WHAT'S NEXT</div>
    </section>

    <section className="estate-collection estate-section" id="collection">
      <div className="estate-section-heading">
        <Reveal><span className="estate-section-label">A FEW PLACES TO BEGIN <span>02 / 06</span></span><h2>Homes with a<br /><em>sense of place.</em></h2></Reveal>
        <Reveal delay={50} className="estate-heading-aside"><p>Considered residences in Gurugram, each with its own way of feeling like home.</p><a className="estate-text-link" href="#enquire">Ask about a home <ArrowUpRight size={14} /></a></Reveal>
      </div>
      <Reveal className="estate-filter-bar" delay={60}>
        <div className="estate-filter-brand"><span className="estate-filter-symbol">A</span><span>THE AURELIA EDIT<small>Thoughtfully selected</small></span></div>
        <label className="estate-filter-field"><MapPin size={16} /><span><small>NEIGHBOURHOOD</small><input aria-label="Filter by neighbourhood" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Anywhere in Gurugram" /></span><CaretDown size={14} /></label>
        <label className="estate-filter-field"><HouseLine size={17} /><span><small>HOME TYPE</small><select aria-label="Choose home type" value={kind} onChange={(e) => setKind(e.target.value)}><option>All homes</option><option>Villas</option><option>Homes</option><option>Apartments</option></select></span><CaretDown size={14} /></label>
        <a href="#collection" className="estate-filter-submit" onClick={(e) => { e.preventDefault(); document.querySelector("#estate-listings")?.scrollIntoView({ behavior: "smooth" }); }}>View homes <ArrowRight size={16} /></a>
      </Reveal>
      <div className="estate-listings" id="estate-listings">
        {visibleHomes.length ? visibleHomes.map((home, index) => <PropertyCard key={home.id} home={home} onEnquire={showEnquiry} />) : <div className="estate-empty"><span>No homes match those filters just yet.</span><button onClick={() => { setLocation(""); setKind("All homes"); setQuery(""); }}>Clear filters <ArrowRight size={14} /></button></div>}
      </div>
      <Reveal className="estate-collection-footnote"><span>AN EVER-CHANGING COLLECTION</span><span>MORE HOMES, SHARED PERSONALLY <ArrowUpRight size={14} /></span></Reveal>
    </section>

    <section className="estate-feature">
      <div className="estate-feature-image" data-reveal><img src="/images/jac-creation.jpg" alt="Quiet courtyard and reflecting pool at a contemporary residence" loading="lazy" /><span className="estate-feature-image-caption">A PLACE TO EXHALE · GURUGRAM</span><span className="estate-image-index">FIG. 01</span></div>
      <div className="estate-feature-copy">
        <Reveal><span className="estate-section-label">BEYOND THE FLOOR PLAN <span>03 / 06</span></span><h2>It’s not just<br />where you live.<br />It’s <em>how you feel.</em></h2><p>Morning light across the breakfast table. A garden that makes room for one more. We look for the details that turn a property into your place.</p><a className="estate-button estate-button-light" href="#approach">What matters to us <ArrowRight size={16} /></a></Reveal>
        <Reveal delay={50} className="estate-feature-aside"><span>THE AURELIA PRINCIPLE</span><p>Space for your life,<br /><em>not just your things.</em></p><span className="estate-feature-aside-mark">A.</span></Reveal>
      </div>
    </section>

    <section className="estate-neighbourhoods estate-section" id="neighbourhoods">
      <div className="estate-section-heading">
        <Reveal><span className="estate-section-label">A FEEL FOR THE AREA <span>04 / 06</span></span><h2>Find your corner<br />of <em>Gurugram.</em></h2></Reveal>
        <Reveal delay={50} className="estate-heading-aside"><p>Each neighbourhood has a rhythm of its own. We’ll help you find the one that feels like yours.</p></Reveal>
      </div>
      <div className="estate-neighbourhood-grid">
        <Reveal className="estate-neighbourhood-card estate-neighbourhood-card-tall"><img src="/images/hiradhan-builders.jpg" alt="Leafy modern home in a quiet Gurugram neighbourhood" loading="lazy" /><div className="estate-neighbourhood-overlay"><span>01 — GREEN & CONNECTED</span><h3>Golf Course<br /><em>Extension.</em></h3><button onClick={() => { setLocation("Golf Course"); document.querySelector("#collection")?.scrollIntoView({ behavior: "smooth" }); }}>Explore this area <ArrowUpRight size={15} /></button></div></Reveal>
        <Reveal className="estate-neighbourhood-card" delay={50}><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85" alt="Sunlit contemporary residence with warm wood and stone" loading="lazy" /><div className="estate-neighbourhood-overlay"><span>02 — ESTABLISHED & EASY</span><h3>DLF <em>Phase V.</em></h3><button onClick={() => { setLocation("DLF Phase V"); document.querySelector("#collection")?.scrollIntoView({ behavior: "smooth" }); }}>Explore this area <ArrowUpRight size={15} /></button></div></Reveal>
        <Reveal className="estate-neighbourhood-note" delay={100}><span className="estate-note-star">✳</span><span>OUR LOCAL PROMISE</span><p>Honest perspective on the streets, schools, little rituals and everyday things that make a neighbourhood yours.</p><a href="#enquire">Tell us what you’re looking for <ArrowRight size={14} /></a></Reveal>
      </div>
    </section>

    <section className="estate-approach estate-section" id="approach">
      <div className="estate-approach-heading"><Reveal><span className="estate-section-label">THOUGHTFUL FROM THE FIRST HELLO <span>05 / 06</span></span><h2>A little more<br /><em>human.</em> At every step.</h2></Reveal><Reveal delay={50}><p>Good advice is personal. We start with a conversation, then make every next step feel clear.</p></Reveal></div>
      <div className="estate-approach-cards">
        {[["01", "Listen first", "The life you’re moving toward matters more than a list of boxes to tick."], ["02", "Look closer", "Local insight and a thoughtful shortlist, with the details explained plainly."], ["03", "Move with ease", "From first viewing to final signatures, you have a steady partner beside you."]].map(([n, title, desc], i) => <Reveal key={n} delay={i * 45} className="estate-approach-card"><span className="estate-approach-number">{n}</span><span className="estate-approach-icon">{[<Compass key="c" />, <HouseLine key="h" />, <Check key="k" />][i]}</span><h3>{title}</h3><p>{desc}</p><span className="estate-approach-line" /></Reveal>)}
      </div>
    </section>

    <section className="estate-faq estate-section" id="faq">
      <div className="estate-faq-intro"><Reveal><span className="estate-section-label">A FEW THINGS WORTH KNOWING <span>06 / 06</span></span><h2>Good to<br /><em>know.</em></h2><p>A thoughtful move starts with the right questions. Here are a few we hear often.</p><a href="#enquire">Ask us something else <ArrowUpRight size={15} /></a></Reveal></div>
      <div className="estate-faq-list">
        {questions.map(([question, answer], index) => <Reveal key={question} delay={index * 35} className={`estate-faq-item${openFaq === index ? " is-open" : ""}`}>
          <button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span className="estate-faq-number">0{index + 1}</span><span>{question}</span><span className="estate-faq-toggle">{openFaq === index ? <Minus size={16} /> : <ArrowRight size={16} />}</span></button>
          <div className="estate-faq-answer"><p>{answer}</p></div>
        </Reveal>)}
      </div>
    </section>

    <section className="estate-contact" id="enquire">
      <div className="estate-contact-backdrop"><img src="/images/hiradhan-builders.jpg" alt="" loading="lazy" /></div>
      <div className="estate-contact-inner">
        <Reveal className="estate-contact-copy"><span className="estate-section-label">YOUR NEXT CHAPTER STARTS HERE</span><h2>Let’s find a place<br />that feels like <em>you.</em></h2><p>Share a little about your search. We’ll take it from there, one thoughtful conversation at a time.</p><a className="estate-contact-phone" href="mailto:hello@getvout.com"><Phone size={15} /> hello@getvout.com <ArrowUpRight size={14} /></a></Reveal>
        <Reveal className="estate-contact-form" delay={60}><form onSubmit={handleSubmit}>
          <label>Your name<input name="name" placeholder="How should we address you?" required /></label>
          <label>Phone number<input name="phone" type="tel" placeholder="+91" required /></label>
          <label>What are you looking for?<select name="interest"><option value="">Choose one</option><option>A home to buy</option><option>A home to rent</option><option>Property advice</option></select></label>
          <label>A little about your search<textarea name="message" placeholder="Neighbourhood, timing, what matters to you…" rows="2" required /></label>
          <button className="estate-button estate-button-dark" type="submit">Start a conversation <ArrowRight size={16} /></button>
          {submitted && <p className="estate-form-status" role="status">Your email app should open with the enquiry ready to send.</p>}
          <span className="estate-form-note">A real person will be in touch. No pressure, just a good conversation.</span>
        </form></Reveal>
      </div>
    </section>

    <footer className="estate-footer">
      <div className="estate-footer-main"><Wordmark light /><p>Good homes. Good counsel.<br />A more considered move.</p><a className="estate-footer-top" href="#top">Back to the beginning <ArrowUpRight size={14} /></a></div>
      <div className="estate-footer-bottom"><span>© 2026 AURELIA ESTATES · A DESIGN CONCEPT BY GETVOUT</span><span>GURUGRAM, HARYANA · INDIA</span><a href="https://getvout.com/" target="_blank" rel="noreferrer">DESIGNED WITH CARE <ArrowUpRight size={13} /></a></div>
    </footer>
    <a className="estate-mobile-call" href="#enquire"><Phone size={15} /> Let’s talk <ArrowUpRight size={14} /></a>
  </main>;
}
