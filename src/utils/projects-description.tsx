import { AIIcon, DesktopIcon, ExcelIcon, OpenSourceIcon } from "./icons";

export const PROJECTS = [
  {
    name: "Geolysis Python Pkg",
    description:
      "Open-source python package for geotechnical analysis and modeling.",
    link: "https://github.com/patrickboateng/geolysis",
    label: "Learn More",
    icon: OpenSourceIcon,
  },
  {
    name: "Geolysis for Excel",
    description:
      "Microsoft Excel addin that provides geotechnical functions (available) and data entry capabilities. (in development)",
    link: "https://appsource.microsoft.com/en-us/product/Office365/WA200009428",
    label: "Learn More",
    icon: ExcelIcon,
  },
  {
    name: "Geolysis for Desktop",
    description:
      "Desktop application for graphically modeling geotechnical simulation.",
    link: "",
    label: "In development",
    icon: DesktopIcon,
  },
  {
    name: "Geolysis AI",
    description:
      "Offers machine learning models that are trained using geotechnical data.",
    link: "",
    label: "In development",
    icon: AIIcon,
  },
];
