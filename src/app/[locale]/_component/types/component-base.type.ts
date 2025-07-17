import { Size } from "./size.type";
import { Color } from "./color.type";

export type ComponentBase = {
  isDisabled?: boolean;
  className?: string;
  color?: Color;
  size?: Size;
};
