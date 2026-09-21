/**
 * @component `<Navigation>`
 * @description: A top-level container most often used for navigation and brand identity
 */

import classNames from "classnames";

import type { NavigationContainerProps } from "./models";

import { HamburgerMenuIcon } from "../../internal/icons";

import "./_navigation.css";

function NavigationContainer({
  variant = "full",
  color = "primary",
  size = "default",
  sticky = false,
  menu = true,
  ...props
}: NavigationContainerProps) {
  const { className, children, style, id, ...rest } = props;

  const classList = classNames(
    "navigation",
    `n-color-${color}`,
    `n-variant-${variant}`,
    `n-size-${size}`,
    {
      "is-sticky": sticky,
    }
  );

  return (
    <div className={classList} {...rest}>
      {menu && (
        <button className="navigation-toggle" type="button">
          <HamburgerMenuIcon />
        </button>
      )}
      {children}
    </div>
  );
}

export default NavigationContainer;
