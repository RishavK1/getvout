import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import seoRoutes from "../src/seo-routes.js";

const root = process.cwd();
const client = path.join(root, "dist", "client");
const template = readFileSync(path.join(client, "index.html"), "utf8");
const content = {
  "/": {
    intro: "Getvout is an independent digital studio in India. We design and build business websites, web applications, and practical AI workflows for teams everywhere.",
    links: [["Website design and development", "/services/websites-platforms"], ["Digital products and applications", "/services/products-applications"], ["AI and workflow automation", "/services/ai-automation"], ["Selected work", "/work"], ["About the studio", "/studio"], ["Start a conversation", "/contact"]],
  },
  "/services": {
    intro: "We bring strategy, design, and engineering together around the job your business needs done.",
    links: [["Websites & platforms", "/services/websites-platforms"], ["Products & applications", "/services/products-applications"], ["AI & automation", "/services/ai-automation"], ["Strategy & experience", "/services/digital-strategy"]],
  },
  "/services/websites-platforms": {
    intro: "A website should help the right people understand what you do, find what they need, and take a useful next step.",
    links: [["JAC Creation project", "/work/jac-creation"], ["Explore all work", "/work"]],
  },
  "/services/products-applications": {
    intro: "When off-the-shelf tools no longer fit, a product can bring important work into one clear experience.",
    links: [["TalScout.ai project", "/work/talscout"], ["Explore all work", "/work"]],
  },
  "/services/ai-automation": {
    intro: "AI earns its place when it makes a real task simpler, faster, or newly possible.",
    links: [["Explore Getvout services", "/services"], ["Start a conversation", "/contact"]],
  },
  "/services/digital-strategy": {
    intro: "Good execution starts with a shared view of the problem, the audience, and what the experience needs to do.",
    links: [["See selected work", "/work"], ["Start a conversation", "/contact"]],
  },
  "/work": {
    intro: "A selection of live projects and digital concepts. Each project has its own audience and job.",
    links: [["TalScout.ai", "/work/talscout"], ["JAC Creation", "/work/jac-creation"]],
  },
  "/work/talscout": {
    intro: "TalScout is a product experience built around talent discovery, search, candidate review, and organization.",
    links: [["Visit TalScout", "https://talscout.rishavkamboj.online/"], ["View more work", "/work"]],
  },
  "/work/jac-creation": {
    intro: "The project presents architecture and interior work through a composed digital experience, making the visual work easy to explore across screens.",
    links: [["Visit JAC Creation", "https://jac.getvout.com/"], ["View more work", "/work"]],
  },
  "/studio": {
    intro: "Getvout brings product thinking, considered design, and solid engineering together. The people shaping the work stay close to the people building it.",
    links: [["Explore selected work", "/work"], ["Contact the studio", "/contact"]],
  },
  "/contact": {
    intro: "No big pitch needed. A few lines about what you’re working on are enough to start a useful conversation.",
    links: [["Email Getvout", "mailto:helo@getvout.com"]],
  },
  "/tools/french-drain-calculator": {
    intro: "An interactive, client-side material takeoff and cost estimation software tool built by GetVout for homeowners, civil excavators, and landscaping contractors.",
    links: [["French Drain Material & Gravel Calculator", "https://frenchdrain.getvout.com/"], ["French Drain Cost Estimator (DIY vs Pro)", "https://frenchdrain.getvout.com/cost-estimator"], ["Yard Drainage Slope & Fall Calculator", "https://frenchdrain.getvout.com/slope-calculator"], ["Drainage Gravel & Geotextile Guide", "https://frenchdrain.getvout.com/materials-guide"], ["French Drain Installation Checklist", "https://frenchdrain.getvout.com/installation-guide"]],
  },
  "/privacy-policy": {
    intro: "A plain-language explanation of what information this site uses when you browse or contact Getvout, and how to reach us about it.",
    links: [["Contact Getvout about privacy", "mailto:helo@getvout.com?subject=Privacy%20request"], ["Terms and conditions", "/terms-and-conditions"]],
  },
  "/terms-and-conditions": {
    intro: "These terms cover your use of getvout.com. A separate written proposal or project agreement applies to any work we agree to deliver.",
    links: [["Contact Getvout", "mailto:helo@getvout.com"], ["Privacy policy", "/privacy-policy"]],
  },
};

const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const safeJson = (value) => JSON.stringify(value).replaceAll("<", "\\u003c");
const labels = {
  "/": "Home",
  "/services": "Services",
  "/services/websites-platforms": "Website Design & Development",
  "/services/products-applications": "Products & Applications",
  "/services/ai-automation": "AI & Automation",
  "/services/digital-strategy": "Digital Strategy",
  "/work": "Selected Work",
  "/work/talscout": "TalScout.ai",
  "/work/jac-creation": "JAC Creation",
  "/studio": "Studio",
  "/contact": "Contact",
  "/tools/french-drain-calculator": "French Drain Pro",
  "/privacy-policy": "Privacy Policy",
  "/terms-and-conditions": "Terms and Conditions",
};

function breadcrumbItems(route) {
  if (route === "/") return [];
  if (route.startsWith("/services/")) return [["Home", "/"], ["Services", "/services"], [labels[route], route]];
  if (route.startsWith("/work/")) return [["Home", "/"], ["Selected Work", "/work"], [labels[route], route]];
  return [["Home", "/"], [labels[route], route]];
}

for (const [route, data] of Object.entries(content)) {
  const seo = seoRoutes[route];
  const canonical = `https://getvout.com${route}`;
  const breadcrumbs = breadcrumbItems(route);
  const breadcrumbNav = breadcrumbs.length > 1 ? `<nav aria-label="Breadcrumb">${breadcrumbs.map(([label, href]) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`).join("<span aria-hidden=\"true\"> / </span>")}</nav>` : "";
  const linkList = data.links.map(([label, href]) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`).join("");
  const organization = {
    "@type": "Organization",
    "@id": "https://getvout.com/#organization",
    name: "getvout",
    url: "https://getvout.com/",
    logo: { "@type": "ImageObject", url: "https://getvout.com/getvout-icon-512.png", width: 512, height: 512 },
    email: "helo@getvout.com",
    description: "An independent digital studio building websites, AI-powered products, and digital experiences.",
    hasPart: {
      "@type": "WebApplication",
      name: "French Drain Pro Calculator",
      url: "https://frenchdrain.getvout.com/",
      applicationCategory: "UtilitiesApplication",
      creator: { "@id": "https://getvout.com/#organization" },
    },
  };
  const website = {
    "@type": "WebSite",
    "@id": "https://getvout.com/#website",
    url: "https://getvout.com/",
    name: "getvout",
    publisher: { "@id": "https://getvout.com/#organization" },
    inLanguage: "en",
  };
  const schemaGraph = [
    organization,
    website,
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: seo.titleTag,
      description: seo.description,
      inLanguage: "en",
      isPartOf: { "@id": "https://getvout.com/#website" },
      about: { "@id": "https://getvout.com/#organization" },
      primaryImageOfPage: { "@type": "ImageObject", url: "https://getvout.com/images/getvout-social-card.png" },
    },
    ...(breadcrumbs.length > 1 ? [{
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://getvout.com${url === "/" ? "/" : url}` })),
    }] : []),
  ];
  if (route.startsWith("/services/")) {
    const serviceType = {
      "/services/websites-platforms": "Website design and development",
      "/services/products-applications": "Web application and SaaS product development",
      "/services/ai-automation": "AI integration and workflow automation",
      "/services/digital-strategy": "Digital strategy and user experience design",
    }[route];
    schemaGraph.find((item) => item["@type"] === "WebPage").mainEntity = { "@type": "Service", name: labels[route], serviceType, provider: { "@id": "https://getvout.com/#organization" }, url: canonical, description: seo.description };
  }
  if (route === "/tools/french-drain-calculator") {
    schemaGraph.find((item) => item["@type"] === "WebPage").mainEntity = {
      "@type": "WebApplication",
      name: "French Drain Pro Calculator",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      url: "https://frenchdrain.getvout.com/",
      creator: { "@id": "https://getvout.com/#organization" },
      description: seo.description,
    };
  }
  const schema = { "@context": "https://schema.org", "@graph": schemaGraph };
  const snapshot = `<main class="page-prerender" id="main">${breadcrumbNav}<article><p>Independent digital studio · Working everywhere</p><h1>${escapeHtml(seo.title)}</h1><p>${escapeHtml(data.intro)}</p><p>${escapeHtml(seo.description)}</p><h2>${route === "/" ? "Explore Getvout" : "Explore more"}</h2><ul>${linkList}</ul></article></main>`;
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.titleTag)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(seo.description)}" />`)
    .replace(/<meta name="robots" content="[^"]*"\s*\/>/, `<meta name="robots" content="${escapeHtml(seo.robots || "index, follow, max-image-preview:large")}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(seo.titleTag)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(seo.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(seo.titleTag)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${safeJson(schema)}</script>`)
    .replace("</body>", `<noscript>${snapshot}</noscript></body>`);
  const destination = route === "/" ? path.join(client, "index.html") : path.join(client, route.slice(1), "index.html");
  mkdirSync(path.dirname(destination), { recursive: true });
  writeFileSync(destination, html);
}

console.log(`Created ${Object.keys(content).length} static, metadata-specific route documents.`);
