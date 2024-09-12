import classNames from "classnames";
import { Size } from "../types/size.type";
import { TextboxProps } from "./input.types";
import { forwardRef } from "react";

const sizeClasses: Record<Size, string> = {
  tiny: "textbox-xs",
  small: "textbox-sm",
  normal: "textbox-md",
  large: "textbox-lg",
};

// eslint-disable-next-line react/display-name
export const Input: React.FC<TextboxProps> = forwardRef<
  HTMLInputElement,
  TextboxProps
>(
  (
    { color = "primary", type = "text", className, size = "normal", ...rest },
    ref,
  ) => {
    const classes = classNames(
      "input",
      "w-full",
      className,
      { [`input-${color}`]: color },
      { [`${sizeClasses[size]}`]: size },
    );

    return <input ref={ref} type={type} className={classes} {...rest} />;
  },
);
