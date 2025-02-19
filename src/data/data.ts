import { EventProps } from "../types/type";

export const navItems = [
  {
    title: "nav.home",
    path: "/",
  },

  {
    title: "nav.about",
    path: "/about",
  },

  {
    title: "nav.products",
    path: "/products",
  },

  {
    title: "nav.technicalSolutions",
    path: "/technical-solutions",
  },

  {
    title: "nav.contactUs",
    path: "/contact",
  },
];

export const homeItems = [
  {
    id: 1,
    path: "/first",
    title: "products.firstTitle",
    pic: "./images/Reverse.jpeg",
  },

  {
    id: 2,
    path: "/second",
    title: "products.secondTitle",
    pic: "./images/Wastewater.jpeg",
  },

  {
    id: 3,
    path: "/third",
    title: "products.thirdTitle",
    pic: "./images/IndustrialCleaning.jpeg",
  },

  {
    id: 4,
    path: "/fourth",
    title: "products.fourthTitle",
    pic: "./images/Bolier water.jpeg",
  },
];

export const firstComponentItems = [
  { path: "/firstCom", title: "Title 1", pic: "./images/Kurumsal.png" },

  {
    path: "/secondCom",
    title: "Title 2",
    pic: "./images/atiksu-aritma02.jpeg",
  },
];

export const aboutText = ["about.aboutText1"];

export const events: EventProps[] = [
  {
    image: "/images/Kurumsal.png",
    title: "Event 1",
    subtitle: "This is the subtitle for Event 1.",
    id: 1,
  },
  {
    image: "/images/Kurumsal.png",
    title: "Event 2",
    subtitle: "This is the subtitle for Event 2.",
    id: 2,
  },
  {
    image: "/images/Kurumsal.png",
    title: "Event 3",
    subtitle: "This is the subtitle for Event 3.",
    id: 3,
  },
];
