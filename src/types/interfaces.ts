import {
  ButtonType,
  ButtonVariant,
  FlexDirection,
  JustifyContent,
  ContainerSize,
  LabelSize,
  IconName,
} from "./types";

export interface INavBarItemsData {
  name: string;
  href: string;
}

export interface IFooterItemsData {
  label: string;
  iconName: IconName;
  info: string;
}

export interface IIcon {
  width: number;
  height: number;
  color: string;
}

export interface IButton {
  label: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  onClick?: () => void;
}

export interface ILInk {
  to?: string;
  external?: boolean;
  className?: string;
}

export interface IContainer {
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  className?: string;
}

export interface IBgImageContainer {
  image: string;
  alt: string;
  containerSize?: ContainerSize;
  className?: string;
}

export interface ILabelAndIcon {
  label: string;
  labelSize?: LabelSize;
  iconName: IconName;
  iconProperties?: IIcon;
}
