export interface INavBarItemsData {
  name: string;
  href: string;
}

export interface IIcon {
  width: number;
  height: number;
  color: string;
}

export interface IButton {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  onClick?: () => void;
}
