import { IIcon, TIconName } from "lib";
import {
  EmailIcon,
  PhoneIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  OfficeIcon,
  CalendarIcon,
  FabricIcon,
  FacebookIcon,
  InstagramIcon,
  RibbonStarFilledIcon,
  LocationIcon,
  PersonIcon,
  FlagIcon,
  RulerIcon,
  DeliveryTruckIcon,
  CompareIcon,
  SofaIcon,
} from "./Icons";

interface Props extends IIcon {
  name: TIconName;
}

export const Icon = ({ name, width, height, color }: Props) => {
  // Icons object with all the icons we want to use in the app and their props (width, height, color)
  const icons = {
    email: <EmailIcon width={width} height={height} color={color} />,
    phone: <PhoneIcon width={width} height={height} color={color} />,
    compare: <CompareIcon width={width} height={height} color={color} />,
    arrowCircleLeft: (
      <ArrowCircleLeftIcon width={width} height={height} color={color} />
    ),
    arrowCircleRight: (
      <ArrowCircleRightIcon width={width} height={height} color={color} />
    ),
    office: <OfficeIcon width={width} height={height} color={color} />,
    calendar: <CalendarIcon width={width} height={height} color={color} />,
    fabric: <FabricIcon width={width} height={height} color={color} />,
    facebook: <FacebookIcon width={width} height={height} color={color} />,
    instagram: <InstagramIcon width={width} height={height} color={color} />,
    ribbonStarFilled: (
      <RibbonStarFilledIcon width={width} height={height} color={color} />
    ),
    location: <LocationIcon width={width} height={height} color={color} />,
    person: <PersonIcon width={width} height={height} color={color} />,
    flag: <FlagIcon width={width} height={height} color={color} />,
    ruler: <RulerIcon width={width} height={height} color={color} />,
    deliveryTruck: (
      <DeliveryTruckIcon width={width} height={height} color={color} />
    ),
    sofa: <SofaIcon width={width} height={height} color={color} />,
  };

  // Return the icon
  return <>{icons[name]}</>;
};
