import IButton from "./IButton";

export default interface IInfoBlock {
  title?: string;
  headline: string;
  paragraph?: string;
  button?: IButton;
}
