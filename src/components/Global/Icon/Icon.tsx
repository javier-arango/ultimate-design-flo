import { IIcon } from "../../../types";
import {
  EmailIcon,
  PhoneIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  FabricIcon,
  FacebookIcon,
  InstagramIcon,
  RibbonStarFilledIcon,
  LocationFillIcon,
  PersonIcon,
  FlagIcon,
  RulerIcon,
  DeliveryTruckIcon,
} from "./Icons";

interface Props extends IIcon {
  name:
    | "email"
    | "phone"
    | "arrowCircleLeft"
    | "arrowCircleRight"
    | "buildingOffice"
    | "calendar"
    | "fabric"
    | "facebook"
    | "instagram"
    | "ribbonStarFilled"
    | "locationFill"
    | "person"
    | "flag"
    | "ruler"
    | "deliveryTruck";
}

const Icon = ({ name, width, height, color }: Props) => {
  // Icons object with all the icons we want to use in the app and their props (width, height, color)
  const icons = {
    email: <EmailIcon width={width} height={height} color={color} />,
    phone: <PhoneIcon width={width} height={height} color={color} />,
    arrowCircleLeft: (
      <ArrowCircleLeftIcon width={width} height={height} color={color} />
    ),
    arrowCircleRight: (
      <ArrowCircleRightIcon width={width} height={height} color={color} />
    ),
    buildingOffice: (
      <BuildingOfficeIcon width={width} height={height} color={color} />
    ),
    calendar: <CalendarIcon width={width} height={height} color={color} />,
    fabric: <FabricIcon width={width} height={height} color={color} />,
    facebook: <FacebookIcon width={width} height={height} color={color} />,
    instagram: <InstagramIcon width={width} height={height} color={color} />,
    ribbonStarFilled: (
      <RibbonStarFilledIcon width={width} height={height} color={color} />
    ),
    locationFill: (
      <LocationFillIcon width={width} height={height} color={color} />
    ),
    person: <PersonIcon width={width} height={height} color={color} />,
    flag: <FlagIcon width={width} height={height} color={color} />,
    ruler: <RulerIcon width={width} height={height} color={color} />,
    deliveryTruck: (
      <DeliveryTruckIcon width={width} height={height} color={color} />
    ),
  };

  // Return the icon
  return <>{icons[name]}</>;
};

export default Icon;
