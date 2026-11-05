# Getvout SEO: 95-point working checklist

This is a practical implementation and maintenance list for getvout.com. A check means the item is present in the repository or was confirmed during the current review. A half-check means the code foundation exists but needs a live-data check or account access. An empty box needs additional facts, content, access, or ongoing work. No checklist can guarantee a ranking position.

Status: **✓ in place / verified** · **◐ partly in place or needs live measurement** · **□ outstanding**

## 1. Crawling, indexing, and URLs

1. ✓ Serve the site over HTTPS.
2. ◐ Keep one preferred host (`https://getvout.com`) and redirect alternate host/protocol variants to it; verify every redirect path.
3. ✓ Give each indexable route one self-referencing canonical URL.
4. ✓ Keep canonical URLs, internal navigation, and sitemap URLs on the same preferred host.
5. ✓ Keep the sitemap limited to the 11 intended, canonical marketing routes.
6. ✓ Keep the XML sitemap at `/sitemap.xml` and reference it in `robots.txt`.
7. ✓ Keep `robots.txt` available and allow public marketing pages to be crawled.
8. ✓ Pre-render route-specific HTML so route titles, descriptions, headings, and links are available before client JavaScript runs.
9. ✓ Use readable, stable route paths for service, case-study, studio, and contact pages.
10. ✓ Avoid sitemap `priority` and `changefreq` hints that do not provide useful Google guidance.
11. ◐ Confirm all public pages return the intended 200 response and unknown paths return a genuine 404.
12. □ Add deliberate 301 redirects before changing any established URL.
13. ✓ Keep non-canonical query-string variants out of the sitemap.
14. ◐ Review any preview or lead-demo routes and set an explicit indexing policy for each.
15. ◐ Confirm Googlebot can fetch the page assets needed to render the site.

## 2. Page titles, descriptions, and headings

16. ✓ Give all 11 routes a distinct title tag.
17. ✓ Give all 11 routes a distinct meta description written for the page intent.
18. ✓ Put the service or page subject in the title where it helps a searcher identify the page.
19. ✓ Keep titles and descriptions readable, accurate, and free of repeated keyword lists.
20. ✓ Give the homepage a clear title about website design, development, and the Getvout studio.
21. ✓ Keep one clear H1 in each rendered page snapshot and React page.
22. ✓ Organize section headings beneath the H1 in a sensible H2/H3 order.
23. ✓ Use visible page copy to explain the service instead of relying on image text or animation.
24. ✓ Make service pages distinct, with separate copy for websites, products, AI automation, and strategy.
25. ✓ Keep case-study titles and summaries specific to the work presented.
26. ◐ Review titles and snippets in Search Console after Google recrawls the pushed version.
27. □ Refine title wording using actual query impressions and clicks, not assumptions alone.
28. ✓ Keep the studio and contact pages discoverable from navigation and footer links.
29. ✓ Give pages concise, readable breadcrumb labels in the page markup.
30. ◐ Check the rendered experience and HTML for duplicate or missing headings after future edits.

## 3. Structured data and search appearance

31. ✓ Describe the studio as an `Organization`; do not invent a storefront or public office address.
32. ✓ Describe the website with a `WebSite` entity.
33. ✓ Add route-specific `WebPage` structured data to the static route HTML.
34. ✓ Add `BreadcrumbList` structured data to nested marketing routes.
35. ✓ Add `Service` structured data only to the service detail pages.
36. ✓ Link page and service entities to the studio entity with stable `@id` values.
37. ✓ Keep structured-data names and descriptions aligned with visible page content.
38. ◐ Validate the JSON-LD with Google’s Rich Results Test and Schema Markup Validator after deployment.
39. □ Add `sameAs` only for official social profiles that Getvout controls.
40. □ Add staff, review, rating, address, or award markup only when the facts are real, current, and eligible.
41. ✓ Do not mark up fabricated testimonials or performance results.
42. ◐ Recheck eligible search enhancements after changing page content or schema.
43. ✓ Keep a social-sharing image declared for Open Graph.
44. ✓ Keep Open Graph title, description, URL, and image aligned with the canonical page metadata.
45. ✓ Keep an X/Twitter large-image card declaration for link previews.

## 4. Images, links, and accessibility

46. ✓ Give the homepage hero image a useful, concise alt description.
47. ✓ Give service-detail hero images and case-study images descriptive alt text.
48. ✓ Use empty alt text for decorative images whose meaning is already supplied by adjacent link text.
49. ✓ Keep the social card at a declared 1200 × 630 size and provide image alt text in social metadata.
50. ◐ Check every referenced local image path and confirm no broken images on the live routes.
51. ◐ Convert oversized PNG photos to an appropriate modern or compressed format while visually checking quality.
52. ✓ Prioritize the hero image and lazy-load below-the-fold images.
53. ◐ Verify image dimensions/aspect ratios reserve layout space and prevent layout shifts.
54. ◐ Confirm important images remain clear and crop well at mobile widths.
55. ✓ Use descriptive link text for service, project, and contact links.
56. ✓ Keep links crawlable as standard anchors with real `href` destinations.
57. ✓ Include an accessible skip link and labelled navigation.
58. ✓ Use form labels, descriptive button labels, and useful alt text where an image conveys content.
59. ◐ Check keyboard access, focus visibility, contrast, and reduced-motion behavior after the next visual update.
60. ◐ Check internal links for 404s and unintended external-domain destinations during each content release.

## 5. Mobile experience and performance

61. ✓ Set the responsive viewport for mobile browsers.
62. ✓ Keep key content and links in the HTML available at mobile sizes.
63. ◐ Review the home, service, work, and contact routes on narrow mobile screens.
64. ◐ Measure LCP, INP, and CLS from field data; use the good thresholds of LCP ≤ 2.5 s, INP < 200 ms, and CLS < 0.1 at the 75th percentile as targets.
65. ◐ Use PageSpeed Insights and Chrome DevTools to find the largest real bottleneck before optimizing.
66. ✓ Preconnect to the font provider used by the site.
67. ◐ Prefer self-hosted or tightly scoped font files if external font requests materially delay text rendering.
68. ◐ Measure JavaScript and CSS transfer/execution costs on a mid-range mobile device.
69. ◐ Keep animation work from blocking the main thread or delaying the largest visible content.
70. ◐ Confirm the hero image can be discovered and loaded early without competing with unnecessary assets.
71. ◐ Check caching, compression, and CDN delivery for HTML, image, font, and script assets.
72. ◐ Review accessibility and performance after adding any third-party analytics or embeds.
73. ◐ Use real-user data where available; a lab score alone does not describe field experience.
74. ◐ Recheck page experience after significant design or media changes.
75. □ Document a mobile performance budget once current production measurements are available.

## 6. Content, service relevance, and trust

76. ✓ Give the main service pages enough distinct explanation to match their purpose.
77. ✓ Link service pages to relevant work and to a clear contact path.
78. ✓ Describe projects honestly as live work or concepts where appropriate.
79. ✓ Avoid implying client endorsements or results that have not been provided.
80. ◐ Confirm every client/project description and permission to display it before expanding case-study claims.
81. □ Add original, useful articles only when Getvout can provide real expertise and a clear reader benefit.
82. □ Create individual case studies only when there is verified project context, contribution, and outcome information.
83. □ Add FAQs only when they answer real prospect questions; do not add filler for keywords.
84. ◐ Check that the image and copy for each service page accurately represent that service.
85. ◐ Review the portfolio for current links, attribution, and concept labels.
86. ◐ Keep studio name, description, and contact details consistent wherever Getvout is listed.
87. □ Add clear ownership, privacy, and contact policies appropriate to Getvout’s actual operations.
88. □ Add language or regional pages only if the business can support genuinely localized content and service.
89. ✓ Do not add fake locations, fabricated client counts, or unsupported “best” claims.
90. ◐ Keep the contact route usable, labelled, and connected to a monitored inbox.

## 7. Search Console, authority, and ongoing review

91. ◐ Verify the domain property in Google Search Console; a verification tag exists in the site head, but the account state was not available in this code review.
92. ◐ Submit `https://getvout.com/sitemap.xml` in Search Console and monitor any fetch or parsing errors.
93. ◐ Inspect the homepage and each important service URL in Search Console after deployment; submission is a discovery signal, not an indexing guarantee.
94. □ Review impressions, clicks, queries, CTR, and landing-page changes monthly and revise pages using observed evidence.
95. □ Re-audit index coverage, backlinks, Core Web Vitals, broken links, titles, and content at least quarterly.

## References

- [Google Search Essentials and SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google crawling and indexing overview](https://developers.google.com/search/docs/crawling-indexing)
- [Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google sitemaps overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google title links and snippets](https://developers.google.com/search/docs/appearance)
- [Google structured data overview](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google image SEO guidance](https://developers.google.com/search/docs/appearance/google-images)
- [Google page experience guidance](https://developers.google.com/search/docs/appearance/page-experience)
- [web.dev: optimize LCP](https://web.dev/articles/optimize-lcp/)
- [web.dev: Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)
