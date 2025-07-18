export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: "GitHub" | "LinkedIn" | "X" | "Mail" | "YouTube" | "Skype";
  href: string;
  linkTitle: string;
  active: boolean;
}[];

export const SITE: Site = {
  website: "https://kitonga-meshack.vercel.app/",
  author: "Meshack Kitonga",
  desc: "Internet home of Meshack Kitonga, a software engineer specializing in AI and ML.",
  title: "Meshack Kitonga",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "GitHub",
    href: "https://github.com/kimxons",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kimwele-meshack/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:kitongameshack9@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "X",
    href: "https://twitter.com/k_kitonga_",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TechHowTo_with_Kimxons",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Skype",
    href: "live:kimwelemeshack01",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
];