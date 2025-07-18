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
  name: "Github" | "LinkedIn" | "X" | "Mail" | "YouTube" | "Skype";
  href: string;
  linkTitle: string;
  active: boolean;
}[];