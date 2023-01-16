import { TContainerSize } from "../types";
import IImage from "./IImage";
import IInfoBlock from "./IInfoBlock";

export default interface IHero {
  image: IImage;
  containerSize?: TContainerSize;
  infoBlock: IInfoBlock;
}
