/**
 * @component `<Navigation>`
 * @description: A top-level container most often used for navigation and brand identity
 */

import classNames from "classnames";

import type { NavigationMenuProps } from "./models";

function NavigationMenu({ ...props }: NavigationMenuProps) {
  const { className, children, style, id, ...rest } = props;

  const classList = classNames("navigation-menu");

  return (
    <nav role="menu" className={classList} {...rest}>
      {children}
    </nav>
  );
}

export default NavigationMenu;
