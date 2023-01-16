import { TContainerSize } from "../types";

export default interface IBgImageContainer {
  image: string;
  alt: string;
  containerSize?: TContainerSize;
  className?: string;
}
