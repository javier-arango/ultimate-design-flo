import { TIconName } from "../types";
import IIcon from "./IIcon";

export default interface IIconCard {
  iconName: TIconName;
  iconStyle?: IIcon;
  title: string;
  description: string;
}
