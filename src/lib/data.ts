import { VisitType, region } from "./types";

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
