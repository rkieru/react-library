import classNames from "classnames";

import type { ButtonProps } from "./models";

import "./_button.css";
import { ChevronIcon } from "../../internal/icons";

function Button({
  color = "primary",
  size = "medium",
  variant = "flat",
  icon,
  iconEnd,
  iconPosition = "start",
  label,

  ...props
}: ButtonProps) {
  const { children, className, style, type, ...rest } = props;
  const _buttonType = type || "button";
  const buttonHasPopover = "popoverTarget" in props;

  const classList = classNames(
    "button",
    `b-color-${color}`,
    `b-size-${size}`,
    `b-variant-${variant}`,
    className
  );

  const trailingIcon =
    !buttonHasPopover && iconPosition === "end" ? icon : iconEnd;

  return (
    <button className={classList} style={style} type={_buttonType} {...rest}>
      {icon && iconPosition === "start" && (
        <span className="button-icon">{icon}</span>
      )}

      {label && <span className="button-label">{label}</span>}

      {trailingIcon && <span className="button-icon">{trailingIcon}</span>}

      {!trailingIcon && buttonHasPopover && (
        <span className={`button-icon button-trigger`}>
          <ChevronIcon />
        </span>
      )}
    </button>
  );
}

Button.displayName = "Button";

export default Button;
