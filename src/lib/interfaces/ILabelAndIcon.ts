import { TIconName, TLabelSize } from "../types";
import IIcon from "./IIcon";

export default interface ILabelAndIcon {
  label: string;
  labelSize?: TLabelSize;
  iconName: TIconName;
  iconProperties?: IIcon;
}
