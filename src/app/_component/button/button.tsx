import { Size } from "../types/size.type";
import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  default: "",
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  color = "blue",
  size = "normal",
  isDisabled = false,
  isLoading = false,
  isLink = false,
  shape = "default",
  loadingType = "spinner",
  loadingText = "درحال ارسال درخواست ...",
  type = "button",
  animatedIcon = false,
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-90": isLoading },
    { [`btn-${color}`]: color },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape },
  );

  return (
    <button type={type} disabled={isDisabled} {...rest} className={classes}>
      {isLoading ? loadingText : children}
    </button>
  );
};
