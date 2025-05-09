export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "carolyn's carrot farm",
  description: "in-browser browser-type portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    // {
    //   label: "Docs",
    //   href: "/docs",
    // },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/catfeeshing",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "ahyjie",
    sponsor: "https://patreon.com/jrgarciadev",
    linkedin: "https://linkedin.com/in/carolyncui",
    emailPersonal: "carolyn.cui@gmail.com",
    emailSchool: "ccui3@ucmerced.edu",
  },
};
