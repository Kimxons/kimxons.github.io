import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://kitonga-meshack.vercel.app/",
  author: "Meshack Kitonga",
  desc: "Internet home of Meshack Kitonga, a software engineer specializing in AI and ML.",
  title: "Meshack Kitonga",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

// TODO: Update Socials
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kimxons",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/meshack-kitonga-94336a121/",
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
    name: "Twitter",
    href: "https://twitter.com/k_kitonga_",
    linkTitle: `${SITE.title} on Twitter`,
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
