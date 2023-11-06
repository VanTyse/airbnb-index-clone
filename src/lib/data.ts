import { VisitType, month, region } from "./types";

export const VISIT_OPTIONS: VisitType[] = [
  "stays",
  "experiences",
  "online experiences",
];

export const regions: { region: region; image: string; label: string }[] = [
  {
    region: "flexible",
    image: "/assets/images/flexible-region.png",
    label: "I'm flexible",
  },
  {
    region: "africa",
    image: "/assets/images/africa-region.png",
    label: "Africa",
  },
  {
    region: "canada",
    image: "/assets/images/canada-region.png",
    label: "Canada",
  },
  {
    region: "us",
    image: "/assets/images/us-region.png",
    label: "United States",
  },
  {
    region: "uk",
    image: "/assets/images/uk-region.png",
    label: "United Kingdom",
  },
  {
    region: "middle-east",
    image: "/assets/images/middle-east-region.png",
    label: "Middle East",
  },
];

export const supportLinks = [
  "Help center",
  "Air cover",
  "Anti-discrimination",
  "Disability support",
  "Cancellation options",
  "Report neighbourhood concern",
];

export const hostingLinks = [
  "Airbnb your home",
  "Aircover for hosts",
  "Hosting rresources",
  "Community forum",
  "Hosting responsibility",
  "Airbnb-friendly apartments",
];

export const airbnbLinks = [
  "Newsroom",
  "new feautres",
  "Careers",
  "Investors",
  "Gift cards",
  "Airbnb.org emergency stays",
];

export const footerNavs = [
  "Popular",
  "Arts & Culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique Stays",
  "Categories",
  "Things to do",
  "Airbnb friendly apartments",
];

export const months: month[] = [
  "november",
  "december",
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
];

export const headerNavs = [
  {
    name: "",
    icon: "",
  },
];
