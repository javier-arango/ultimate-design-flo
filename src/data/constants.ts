import { INavBarItemsData, IFooterItemsData, IImageCard } from "../types";

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

const servicesData: IImageCard[] = [
  {
    image: {
      src: "/assets/service-images/upholstery.png",
      alt: "Upolstery Service Image",
    },
    serviceName: "Upholstery",
    serviceDescription:
      "Breathe new life into your furniture with our expert upholstery services.",
  },
  {
    image: {
      src: "/assets/service-images/custom-draperies.png",
      alt: "Custom Draperies Service Image",
    },
    serviceName: "Custom Draperies",
    serviceDescription:
      "Enhance your home's decor with one-of-a-kind custom draperies.",
  },
  {
    image: {
      src: "/assets/service-images/furniture-touch-ups.png",
      alt: "Furniture Touch-Ups Service Image",
    },
    serviceName: "Furniture Touch-Ups",
    serviceDescription:
      "Preserve the beauty of your furniture with our touch-up expertise.",
  },
  {
    image: {
      src: "/assets/service-images/general-repairs.png",
      alt: "General Repairs Service Image",
    },
    serviceName: "General Repairs",
    serviceDescription:
      "Don't throw out your favorite furniture - let us fix it up for you!",
  },
  {
    image: {
      src: "/assets/service-images/remodeling.png",
      alt: "Remodeling Service Image",
    },
    serviceName: "Remodeling",
    serviceDescription:
      "Transform your furniture into a brand new masterpiece with our professional remodeling services!",
  },
  {
    image: {
      src: "/assets/service-images/restoration.png",
      alt: "Restoration Service Image",
    },
    serviceName: "Restoration",
    serviceDescription:
      "Don't let your antique furniture fade into history - bring it back to life with our restoration services.",
  },
];

export { navBarItemsData, footerItemsData, servicesData };
