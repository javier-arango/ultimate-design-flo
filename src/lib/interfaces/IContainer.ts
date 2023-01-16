import { TFlexDirection, TJustifyContent } from "../types";

export default interface IContainer {
  flexDirection?: TFlexDirection;
  justifyContent?: TJustifyContent;
  className?: string;
}
