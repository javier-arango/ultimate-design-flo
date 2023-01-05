import { INavBarItemsData, IFooterItemsData } from "../types";

const navBarItemsData: INavBarItemsData[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const footerItemsData: IFooterItemsData[] = [
  {
    label: "Find Us",
    iconName: "location",
    info: "5051 S State Rd 7 Ste. 505, Davie, FL 33314",
  },
  {
    label: "Call Us Today",
    iconName: "phone",
    info: "(954) 817-0721",
  },
  {
    label: "Email Us Now",
    iconName: "email",
    info: "ultimatedesignflo@gmail.com",
  },
  {
    label: "Buisiness Hours",
    iconName: "office",
    info: "Mon - Fri: 8:00 AM - 4:30 PM",
  },
];

export { navBarItemsData, footerItemsData };
