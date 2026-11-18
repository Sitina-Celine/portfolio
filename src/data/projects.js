// Every project on the page comes from this list.
// To add a project, add one entry here and drop its screenshot in public/img.

export const FEATURED = {
  id: "quell",
  label: "Full funnel with analytics",
  name: "Quell",
  title: "Quell: a funnel that measures itself.",
  text: "A one-product earbuds funnel built the way paid-traffic brands sell, with a dashboard that shows where buyers drop off and what lifts the average order.",
  url: "https://quell-nu.vercel.app",
  dashboardUrl: "https://quell-nu.vercel.app/dashboard.html",
  images: [
    { src: "/img/quell-hero.jpg", alt: "Quell sales page", url: "https://quell-nu.vercel.app", position: "center top" },
    { src: "/img/quell-dash.jpg", alt: "Quell analytics dashboard", url: "https://quell-nu.vercel.app/dashboard.html", position: "left top" },
  ],
  steps: ["A/B headline", "Bundles", "Order bump", "Checkout", "One-click upsell", "Dashboard"],
  tech: "React, Stripe, Postgres analytics",
};

export const STANDOUTS = [
  {
    id: "lumen",
    label: "Quiz funnel",
    name: "Lumen Bath",
    text: "Three quick questions match a body wash to your skin, then explain why in your own words.",
    url: "https://lumen-bath.vercel.app",
    img: "/img/lumen.jpg",
    position: "left top",
    steps: ["Quiz", "Optional email", "Personal match", "Checkout"],
    tech: "React, Stripe, lead capture",
  },
  {
    id: "ukili",
    label: "Shopify store",
    name: "Ukili Studio",
    text: "A handwoven basket shop that tells the craft story, offers bundles, and checks out through Shopify.",
    url: "https://ukili-studio.vercel.app",
    img: "/img/ukili.jpg",
    position: "left top",
    steps: ["Story", "Choose a basket", "Bundle", "Shopify checkout"],
    tech: "React, TypeScript, Tailwind, Shopify",
  },
];

export const MORE = [
  {
    id: "kito",
    label: "Sneaker shop",
    name: "Kito",
    text: "Hero carousel, size picker and a bag that checks sizes on the server.",
    url: "https://kito-sneakers.vercel.app",
    img: "/img/kito.jpg",
    position: "left center",
    steps: ["Hero", "Size", "Bag", "Checkout"],
  },
  {
    id: "sola",
    label: "Product launch",
    name: "sola.",
    text: "A drink launch with a live countdown, a waitlist code and a monthly subscription.",
    url: "https://sola-drinks.vercel.app",
    img: "/img/sola.jpg",
    position: "left top",
    steps: ["Countdown", "Waitlist", "Subscribe"],
  },
  {
    id: "sylvae",
    label: "Launch with upsell",
    name: "Sylvae",
    text: "A body wash page with a one-click refill subscription offered after checkout.",
    url: "https://sylvae.vercel.app",
    img: "/img/sylvae.jpg",
    position: "center",
    steps: ["Landing page", "Checkout", "Refill upsell"],
  },
  {
    id: "velour",
    label: "Interactive product page",
    name: "VELOUR",
    text: "A lipstick page where the headline changes with each shade, plus a trio builder.",
    url: "https://velour-lipstick.vercel.app",
    img: "/img/velour.jpg",
    position: "left top",
    steps: ["Shade try-on", "Bundle", "Checkout"],
  },
];

export const TOOLS = ["HTML", "CSS", "JavaScript", "React", "Stripe", "Shopify", "Vercel", "A/B testing", "Funnel analytics"];

export const PROCESS = [
  { title: "Concept", text: "Who is buying, what do they need, and what stops them? I listen first, so the offer and the page answer real questions." },
  { title: "Design", text: "A preview you can react to, with real product photos and short sections that respect the scroll." },
  { title: "Build", text: "Clean HTML, CSS and JavaScript or React, with checkout, bumps and upsells wired to Stripe or Shopify." },
  { title: "Measure", text: "Track every step, find where customers get stuck, and keep improving the page for them." },
];

export const CONTACT = {
  email: "sitinaceline4.0.4@gmail.com",
  phone: "+254721177480",
  phoneLabel: "+254 721 177 480",
  linkedin: "https://www.linkedin.com/in/celine-sitina-80703b379/",
};

export const TEST_CARD = "4242 4242 4242 4242";
