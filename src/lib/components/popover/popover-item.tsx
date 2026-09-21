/**
 * @component `<Popover.Item>`
 * @description A menu item within the Popover component
 */

import classNames from "classnames";

import "./_popover.css";
import type { PopoverItemProps } from "./models";

function PopoverItem({
  iconStart,
  iconEnd,
  href,
  to,
  value,
  ...props
}: PopoverItemProps) {
  /**
   * Properties & Static Variables
   */
  const { className, children, id, ...rest } = props;

  /**
   * Styles
   */
  const classList = classNames("popover-item", className);

  return (
    <li className={classList} {...rest}>
      {href || to ? (
        <a tabIndex={0} href={href}>
          {iconStart && <div className="item-icon">{iconStart}</div>}
          <div className="item-text">{children}</div>
          {iconEnd && <div className="item-icon">{iconEnd}</div>}
        </a>
      ) : value ? (
        <button tabIndex={0} type="button" value={value}>
          {iconStart && <div className="item-icon">{iconStart}</div>}
          <div className="item-text">{children}</div>
          {iconEnd && <div className="item-icon">{iconEnd}</div>}
        </button>
      ) : (
        <div>
          {iconStart && <div className="item-icon">{iconStart}</div>}
          <div className="item-text">{children}</div>
          {iconEnd && <div className="item-icon">{iconEnd}</div>}
        </div>
      )}
    </li>
  );
}

export default PopoverItem;
