export const siteConfig = {
  name: "Jomma",
  description:
    "Jomma is a digital investment marketplace for stocks, bonds and mutual funds. Invest now, secure your future.",
  mainNav: [
    {
      title: "Invest",
      href: "/invest",
    },
    {
      title: "Market",
      href: "/market",
    },
    {
      title: "BO Prefund & Withdraw",
      href: "/withdraw",
    },
  ],
  links: {
    twitter: "https://twitter.com/golamrabbiazad",
    github: "https://github.com/golamrabbiazad",
    docs: "https://github.com/golamrabbiazad/jomma-ltd#readme",
  },
};

export type SiteConfig = typeof siteConfig;
