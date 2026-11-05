import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import seoRoutes from "../src/seo-routes.js";

const root = process.cwd();
const client = path.join(root, "dist", "client");
const template = readFileSync(path.join(client, "index.html"), "utf8");
const content = {
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
};

const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const safeJson = (value) => JSON.stringify(value).replaceAll("<", "\\u003c");
const labels = {
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
};

function breadcrumbItems(route) {
  if (route.startsWith("/services/")) return [["Home", "/"], ["Services", "/services"], [labels[route], route]];
  if (route.startsWith("/work/")) return [["Home", "/"], ["Selected Work", "/work"], [labels[route], route]];
  return [["Home", "/"], [labels[route], route]];
}

for (const [route, data] of Object.entries(content)) {
  const seo = seoRoutes[route];
  const canonical = `https://getvout.com${route}`;
  const breadcrumbs = breadcrumbItems(route);
  const breadcrumbNav = breadcrumbs.map(([label, href]) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`).join("<span aria-hidden=\"true\"> / </span>");
  const linkList = data.links.map(([label, href]) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`).join("");
  const schemaGraph = [
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
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://getvout.com${url === "/" ? "/" : url}` })),
    },
  ];
  if (route.startsWith("/services/")) {
    const serviceType = {
      "/services/websites-platforms": "Website design and development",
      "/services/products-applications": "Web application and SaaS product development",
      "/services/ai-automation": "AI integration and workflow automation",
      "/services/digital-strategy": "Digital strategy and user experience design",
    }[route];
    schemaGraph[0].mainEntity = { "@type": "Service", name: labels[route], serviceType, provider: { "@id": "https://getvout.com/#organization" }, url: canonical, description: seo.description };
  }
  const schema = { "@context": "https://schema.org", "@graph": schemaGraph };
  const snapshot = `<main class="page-prerender" id="main"><nav aria-label="Breadcrumb">${breadcrumbNav}</nav><article><p>Independent digital studio · Working everywhere</p><h1>${escapeHtml(seo.title)}</h1><p>${escapeHtml(data.intro)}</p><p>${escapeHtml(seo.description)}</p><h2>Explore more</h2><ul>${linkList}</ul></article></main>`;
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.titleTag)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(seo.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(seo.titleTag)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(seo.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(seo.titleTag)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${safeJson(schema)}</script>`)
    .replace('<div id="root"></div>', `<div id="root"></div>${snapshot}`);
  const destination = path.join(client, route.slice(1), "index.html");
  mkdirSync(path.dirname(destination), { recursive: true });
  writeFileSync(destination, html);
}

console.log(`Created ${Object.keys(content).length} static, metadata-specific route documents.`);
