import {
  INavBarItemsData,
  IFooterItemsData,
  IImageCard,
  IIconCard,
  IServiceAreaLocation,
} from "../types";

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

const contactInfoData = {
  address: "5051 S State Rd 7 Ste. 505, Davie, FL 33314",
  phone: "(954) 817-0721",
  email: "ultimatedesignflo@gmail.com",
  hours: "Mon - Fri: 8:00 AM - 4:30 PM",
};

const footerItemsData: IFooterItemsData[] = [
  {
    label: "Find Us",
    iconName: "location",
    info: contactInfoData.address,
  },
  {
    label: "Call Us Today",
    iconName: "phone",
    info: contactInfoData.phone,
  },
  {
    label: "Email Us Now",
    iconName: "email",
    info: contactInfoData.email,
  },
  {
    label: "Buisiness Hours",
    iconName: "office",
    info: contactInfoData.hours,
  },
];

const servicesData: IImageCard[] = [
  {
    image: {
      src: "/assets/service-images/upholstery.webp",
      alt: "Upolstery Service Image",
    },
    serviceName: "Upholstery",
    serviceDescription:
      "Breathe new life into your furniture with our expert upholstery services.",
  },
  {
    image: {
      src: "/assets/service-images/custom-draperies.webp",
      alt: "Custom Draperies Service Image",
    },
    serviceName: "Custom Draperies",
    serviceDescription:
      "Enhance your home's decor with one-of-a-kind custom draperies.",
  },
  {
    image: {
      src: "/assets/service-images/furniture-touch-ups.webp",
      alt: "Furniture Touch-Ups Service Image",
    },
    serviceName: "Furniture Touch-Ups",
    serviceDescription:
      "Preserve the beauty of your furniture with our touch-up expertise.",
  },
  {
    image: {
      src: "/assets/service-images/general-repairs.webp",
      alt: "General Repairs Service Image",
    },
    serviceName: "General Repairs",
    serviceDescription:
      "Don't throw out your favorite furniture - let us fix it up for you!",
  },
  {
    image: {
      src: "/assets/service-images/remodeling.webp",
      alt: "Remodeling Service Image",
    },
    serviceName: "Remodeling",
    serviceDescription:
      "Transform your furniture into a brand new masterpiece with our professional remodeling services!",
  },
  {
    image: {
      src: "/assets/service-images/restoration.webp",
      alt: "Restoration Service Image",
    },
    serviceName: "Restoration",
    serviceDescription:
      "Don't let your antique furniture fade into history - bring it back to life with our restoration services.",
  },
];

const companyQualities: IIconCard[] = [
  {
    iconName: "calendar",
    title: "Experience",
    description:
      "8+ Years of Upholstery Expertise and Trusted Client Relationships",
  },
  {
    iconName: "ribbonStarFilled",
    title: "Quality",
    description:
      "We pride ourselves on delivering exceptional quality results for our clients",
  },
  {
    iconName: "ruler",
    title: "Details Matter",
    description:
      "Our attention to detail and dedication to quality ensures that you'll love the results of our services",
  },
  {
    iconName: "person",
    title: "Support",
    description:
      "Our commitment to customer satisfaction is evident in every aspect of our business",
  },
  {
    iconName: "fabric",
    title: "Material",
    description:
      "We only uses the highest quality fabrics to ensure that your furniture looks and feels its best",
  },
  {
    iconName: "deliveryTruck",
    title: "Delivery",
    description:
      "We stand behind our work and offer a satisfaction guarantee for our delivery and installation services",
  },
];

const serviceAreaLocation: IServiceAreaLocation[] = [
  {
    name: "PALM BEACH, FL",
    coordinates: {
      lat: 26.7056,
      lng: -80.0364,
    },
  },
  {
    name: "FORT MYERS, FL",
    coordinates: {
      lat: 26.6406,
      lng: -81.8723,
    },
  },
  {
    name: "NAPLES, FL",
    coordinates: {
      lat: 26.142,
      lng: -81.7948,
    },
  },
  {
    name: "DAVIE, FL",
    coordinates: {
      lat: 26.0765,
      lng: -80.2521,
    },
  },
  {
    name: "FORT LAUDERDALE, FL",
    coordinates: {
      lat: 26.1224,
      lng: -80.1373,
    },
  },
  {
    name: "MIAMI, FL",
    coordinates: {
      lat: 25.7617,
      lng: -80.1918,
    },
  },
];

export {
  navBarItemsData,
  contactInfoData,
  footerItemsData,
  servicesData,
  companyQualities,
  serviceAreaLocation,
};
