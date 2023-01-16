import { IFooterItems } from "../lib";
import { contactInfoData } from "./contactInfoData";

export const footerItemsData: IFooterItems[] = [
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
