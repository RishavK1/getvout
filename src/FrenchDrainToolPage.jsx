import { useEffect } from "react";
import { ArrowDown, ArrowUpRight, Check, Compass, Cube, Drop, Ruler, Shovel, Stack } from "@phosphor-icons/react";
import { Header, Footer, FloatingWhatsApp } from "./App.jsx";

const toolLinks = [
  ["01", "French Drain Material & Gravel Calculator", "Plan pipe, gravel, and fabric quantities for a project.", "https://frenchdrain.getvout.com/"],
  ["02", "French Drain Cost Estimator (DIY vs Pro)", "Compare a self-installed project with contractor pricing.", "https://frenchdrain.getvout.com/cost-estimator"],
  ["03", "Yard Drainage Slope & Fall Calculator", "Work out fall and slope across a drainage run.", "https://frenchdrain.getvout.com/slope-calculator"],
  ["04", "Drainage Gravel & Geotextile Guide", "Review material options for a drainage assembly.", "https://frenchdrain.getvout.com/materials-guide"],
  ["05", "French Drain Installation Checklist", "Keep the key installation stages in view.", "https://frenchdrain.getvout.com/installation-guide"],
];

const capabilities = [
  { icon: Ruler, number: "01", title: "Quantities with context", copy: "Estimate a trapezoidal trench volume, then account for pipe displacement to get a clearer gravel takeoff." },
  { icon: Cube, number: "02", title: "A section you can read", copy: "A reactive cross-section makes the trench assembly easier to understand, including pipe-hole orientation at 4 and 8 o’clock." },
  { icon: Compass, number: "03", title: "Two cost paths", copy: "Compare DIY and professional pricing assumptions side by side before settling on a project approach." },
  { icon: Stack, number: "04", title: "A ready-to-use list", copy: "Turn your inputs into a practical quarry material shopping list in one step." },
];

function TrenchDiagram() {
  return <svg className="fd-diagram" viewBox="0 0 760 470" role="img" aria-labelledby="fd-diagram-title fd-diagram-desc">
    <title id="fd-diagram-title">French drain trench cross-section</title>
    <desc id="fd-diagram-desc">Illustrative trench cross-section showing gravel, geotextile, perforated pipe and soil.</desc>
    <defs>
      <linearGradient id="soilFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e8e5db"/><stop offset="1" stopColor="#d9d5ca"/></linearGradient>
      <linearGradient id="gravelFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#d9ff13" stopOpacity=".58"/><stop offset="1" stopColor="#b6ca55" stopOpacity=".24"/></linearGradient>
      <pattern id="gravelDots" width="28" height="26" patternUnits="userSpaceOnUse"><circle cx="5" cy="8" r="3" fill="#6c7659" opacity=".45"/><circle cx="19" cy="17" r="4" fill="#fff" opacity=".62"/><circle cx="26" cy="4" r="2" fill="#8f8c7d" opacity=".5"/></pattern>
    </defs>
    <path d="M35 112H258L328 355H432L502 112H725V427H35Z" fill="url(#soilFill)" />
    <path d="M258 112 328 355H432L502 112" fill="url(#gravelFill)" stroke="#1748ff" strokeWidth="3" strokeDasharray="8 8" />
    <path d="M270 133 332 341H428L490 133" fill="url(#gravelDots)" opacity=".9" />
    <path d="M258 112 328 355H432L502 112" fill="none" stroke="#171817" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M299 241H461" stroke="#1748ff" strokeWidth="2" strokeDasharray="6 7" />
    <circle cx="380" cy="306" r="44" fill="#f4f2ec" stroke="#171817" strokeWidth="5" />
    <circle cx="380" cy="306" r="29" fill="#d8d6ce" stroke="#1748ff" strokeWidth="3" />
    <circle cx="360" cy="288" r="4" fill="#1748ff"/><circle cx="400" cy="288" r="4" fill="#1748ff"/>
    <circle cx="342" cy="306" r="4" fill="#1748ff"/><circle cx="418" cy="306" r="4" fill="#1748ff"/>
    <circle cx="360" cy="324" r="4" fill="#1748ff"/><circle cx="400" cy="324" r="4" fill="#1748ff"/>
    <path d="M360 288 335 259" stroke="#1748ff" strokeWidth="2"/><path d="M400 288 425 259" stroke="#1748ff" strokeWidth="2"/>
    <text x="279" y="247" className="fd-svg-label">4 O’CLOCK</text><text x="427" y="247" className="fd-svg-label">8 O’CLOCK</text>
    <path d="M380 57V105" stroke="#1748ff" strokeWidth="3" markerEnd="url(#none)"/><path d="M367 91 380 106 393 91" fill="none" stroke="#1748ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="380" y="37" textAnchor="middle" className="fd-svg-label">FINISHED GRADE</text>
    <path d="M92 175H238" stroke="#171817" strokeWidth="1.5"/><text x="92" y="160" className="fd-svg-label">NATIVE SOIL</text>
    <path d="M522 201H655" stroke="#171817" strokeWidth="1.5"/><text x="523" y="185" className="fd-svg-label">WASHED DRAIN ROCK</text>
    <path d="M434 350H609" stroke="#171817" strokeWidth="1.5"/><text x="495" y="379" className="fd-svg-label">PERFORATED PIPE</text>
    <path d="M245 113 312 351" stroke="#1748ff" strokeWidth="2"/><path d="M236 115 254 110M303 354 321 349" stroke="#1748ff" strokeWidth="2"/>
    <text x="105" y="269" className="fd-svg-label" transform="rotate(-71 105 269)">TRENCH DEPTH</text>
    <path d="M258 92H502" stroke="#1748ff" strokeWidth="2"/><path d="M258 84V100M502 84V100" stroke="#1748ff" strokeWidth="2"/><text x="380" y="78" textAnchor="middle" className="fd-svg-label">TRENCH WIDTH</text>
  </svg>;
}

function ProductHeader() {
  return <div className="fd-product-topline"><span><i /> BUILT BY GETVOUT <b>/</b> FIELD TOOL SERIES</span><span>01 — 05 <span className="fd-topline-dash">/</span> DRAINAGE</span></div>;
}

export function FrenchDrainToolPage() {
  useEffect(() => {
    const title = "French Drain Pro | Precision Civil & Yard Drainage Engineering Engine";
    const description = "An interactive, client-side material takeoff and cost estimation software tool built by GetVout for homeowners, civil excavators, and landscaping contractors.";
    const canonical = "https://getvout.com/tools/french-drain-calculator";
    document.title = title;
    const setMeta = (selector, value, attribute = "content") => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('link[rel="canonical"]', canonical, "href");
    const schemaElement = document.querySelector('script[type="application/ld+json"]');
    if (schemaElement) {
      try {
        const schema = JSON.parse(schemaElement.textContent);
        const graph = schema["@graph"] || [];
        let page = graph.find((entry) => entry["@type"] === "WebPage");
        if (!page) { page = { "@type": "WebPage" }; graph.push(page); schema["@graph"] = graph; }
        Object.assign(page, {
          "@id": `${canonical}#webpage`, url: canonical, name: title, description,
          inLanguage: "en", isPartOf: { "@id": "https://getvout.com/#website" },
          about: { "@id": "https://getvout.com/#organization" },
          mainEntity: { "@type": "WebApplication", name: "French Drain Pro Calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", url: "https://frenchdrain.getvout.com/", creator: { "@id": "https://getvout.com/#organization" }, description },
        });
        schemaElement.textContent = JSON.stringify(schema);
      } catch { /* Keep the prerendered schema intact if it cannot be parsed. */ }
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = [...document.querySelectorAll(".fd-reveal")];
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <div className="fd-page"><Header /><main id="main" className="fd-main">
    <section className="fd-hero section-shell" aria-labelledby="fd-title">
      <ProductHeader />
      <div className="fd-hero-grid">
        <div className="fd-hero-copy fd-reveal is-visible">
          <p className="eyebrow"><b>ENGINEERING UTILITY / 001</b></p>
          <h1 id="fd-title">French Drain <em>Pro.</em><br /><span>Measure before<br />you move earth.</span></h1>
          <p className="fd-lede">A practical drainage planning engine for clearer material takeoffs, cost comparisons, and installation decisions.</p>
          <div className="fd-actions"><a className="button button-dark" href="https://frenchdrain.getvout.com/" target="_blank" rel="noopener">Launch Live Calculator Engine <ArrowUpRight /></a><a className="fd-text-link" href="#toolkit">Explore the toolkit <ArrowDown /></a></div>
          <div className="fd-hero-meta"><span><Drop /> Yard drainage planning</span><span><Shovel /> Homeowners · installers · contractors</span></div>
        </div>
        <div className="fd-hero-art fd-reveal is-visible" aria-label="Illustrative French drain engineering section">
          <div className="fd-art-head"><span>FIELD STUDY / SECTION A—A</span><span>NOT TO SCALE</span></div>
          <TrenchDiagram />
          <div className="fd-art-foot"><span>01 <b>GRAVEL ENVELOPE</b></span><span>02 <b>PERFORATED PIPE</b></span><span>03 <b>GEOTEXTILE WRAP</b></span></div>
          <span className="fd-art-stamp">PLAN<br />WITH<br /><em>CLARITY</em></span>
        </div>
      </div>
      <div className="fd-scroll-note"><span>SCROLL TO EXPLORE</span><span className="fd-scroll-line" /></div>
    </section>

    <section className="fd-intro section-shell fd-reveal" aria-labelledby="fd-intro-title">
      <div className="fd-section-index"><span>01 / THE TOOL</span><span>DESIGNED FOR THE GROUNDWORK</span></div>
      <div className="fd-intro-grid"><h2 id="fd-intro-title">Good drainage starts with <em>the right numbers.</em></h2><div><p>French Drain Pro brings the first planning decisions into one focused workspace. Enter project dimensions, understand the assembly, and turn a rough idea into a more useful materials list.</p><p className="fd-small-note">Planning estimates are a starting point. Site conditions and local requirements should always be confirmed before construction.</p></div></div>
    </section>

    <section className="fd-capabilities" aria-labelledby="fd-cap-title">
      <div className="section-shell fd-cap-inner"><div className="fd-section-index fd-section-index--light"><span>02 / BUILT FOR THE DECISIONS</span><span>FOUR USEFUL MOVES</span></div>
        <div className="fd-cap-heading fd-reveal"><h2 id="fd-cap-title">From dimensions<br />to <em>next steps.</em></h2><p>Less guesswork across the details that shape a French drain plan.</p></div>
        <div className="fd-cap-grid">{capabilities.map(({ icon: Icon, number, title, copy }) => <article className="fd-capability fd-reveal" key={number}><div className="fd-cap-top"><span>{number}</span><Icon weight="regular" /></div><h3>{title}</h3><p>{copy}</p><span className="fd-cap-mark" aria-hidden="true">{number}</span></article>)}</div>
      </div>
    </section>

    <section className="fd-cross-section section-shell" aria-labelledby="fd-cross-title">
      <div className="fd-cross-copy fd-reveal"><div className="fd-section-index"><span>03 / SEE THE ASSEMBLY</span><span>DETAIL, MADE VISIBLE</span></div><h2 id="fd-cross-title">A section view that makes the <em>layers make sense.</em></h2><p>Understand how trench dimensions, drainage rock, fabric, and perforated pipe relate before materials reach the site.</p><a className="fd-text-link" href="https://frenchdrain.getvout.com/" target="_blank" rel="noopener">Open the live calculator <ArrowUpRight /></a></div>
      <div className="fd-cross-art fd-reveal"><div className="fd-cross-label"><span>ILLUSTRATIVE CROSS-SECTION</span><span>PIPE ORIENTATION / 4 &amp; 8 O’CLOCK</span></div><TrenchDiagram /><div className="fd-cross-caption"><span>GRAVEL · FILTER FABRIC · PERFORATED PIPE</span><span>SCHEMATIC / FIELD CONDITIONS VARY</span></div></div>
    </section>

    <section className="fd-method section-shell fd-reveal" aria-labelledby="fd-method-title"><div className="fd-method-head"><div className="fd-section-index"><span>04 / A SIMPLE WORKFLOW</span><span>PLAN → COMPARE → PREPARE</span></div><h2 id="fd-method-title">A clearer route from rough idea to <em>ready list.</em></h2></div><div className="fd-method-steps"><article><span>01</span><h3>Set the dimensions</h3><p>Describe the trench run and its profile.</p></article><article><span>02</span><h3>Review the assembly</h3><p>See how the pipe and drainage materials fit.</p></article><article><span>03</span><h3>Compare the plan</h3><p>Check DIY and professional cost assumptions.</p></article><article><span>04</span><h3>Take the list to market</h3><p>Export a quarry shopping list for your next step.</p></article></div></section>

    <section id="toolkit" className="fd-toolkit" aria-labelledby="fd-toolkit-title"><div className="section-shell"><div className="fd-section-index fd-reveal"><span>05 / THE TOOLKIT</span><span>ONE TOOL HUB · FIVE WAYS IN</span></div><div className="fd-toolkit-heading fd-reveal"><h2 id="fd-toolkit-title">Start with the question <em>you have.</em></h2><p>Open the calculator or jump straight to a focused guide.</p></div><div className="fd-tool-list">{toolLinks.map(([number, title, copy, href]) => <a className="fd-tool-row fd-reveal" href={href} target="_blank" rel="noopener" key={number}><span className="fd-tool-num">{number}</span><span className="fd-tool-copy"><strong>{title}</strong><small>{copy}</small></span><span className="fd-tool-open" aria-hidden="true"><ArrowUpRight /></span></a>)}</div></div></section>

    <section className="fd-cta section-shell fd-reveal"><div className="fd-cta-copy"><p className="eyebrow"><b>FRENCH DRAIN PRO / GETVOUT</b></p><h2>Bring a more considered plan <em>to the ground.</em></h2><p>Open the live tool to estimate materials, compare costs, and prepare your project list.</p><a className="button button-lime" href="https://frenchdrain.getvout.com/" target="_blank" rel="noopener">Launch Live Calculator Engine <ArrowUpRight /></a></div><div className="fd-cta-aside"><span className="fd-cta-number">FDP<br />001</span><div><Check /><span>Client-side planning tool</span></div><div><Check /><span>Built for practical estimates</span></div><div><Check /><span>Made by Getvout</span></div></div><span className="fd-cta-orbit" aria-hidden="true" /></section>
  </main><Footer /><FloatingWhatsApp /></div>;
}
