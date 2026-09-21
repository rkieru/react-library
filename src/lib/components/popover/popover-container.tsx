/**
 * @component `<Popover>`
 * @description Wraps a trigger element in a Popover API component to support displaying a menu.
 */

import React, { useRef, useEffect, useState, useId } from "react";
import classNames from "classnames";

import "./_popover.css";
import type { PopoverProps } from "./models";

import { isInteractive } from "../../utilities";

type TriggerInteractionProps = Pick<
  React.HTMLAttributes<HTMLElement>,
  "onClick" | "onPointerDown" | "onKeyDown" | "role" | "tabIndex" | "style"
>;

function PopoverContainer({
  children,
  trigger,
  nested = false,
  ...props
}: PopoverProps) {
  /**
   * Properties & Static Variables
   */
  const { className, style, id, ...rest } = props;
  const uniqueId = useId();
  const _id = id ?? uniqueId;
  const anchorName = `--anchor-${_id}`;
  const popoverTarget = `popover-${_id}`;

  /**
   * State Management
   *
   * - `isOpen`: Tracks the Popover API state
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Refs
   *
   * - `popoverContainerRef`: The element that opens via the Popover API
   * - `popoverTriggerRef`: The container for the element that triggers the popover
   */
  const popoverContainerRef = useRef<HTMLDivElement>(null);
  const popoverWrapperRef = useRef<HTMLDivElement>(null);

  /**
   * Effects
   */
  useEffect(() => {
    const popover = popoverContainerRef.current;

    // EXIT: No Popover element was found.
    if (!popover) {
      return;
    }

    // Listens for the Popover opening or closing and updates `isOpen` accordingly.
    const handleToggle = (event: ToggleEvent) => {
      setIsOpen(event.newState === "open");
    };

    popover.addEventListener("toggle", handleToggle);

    return () => {
      popover.removeEventListener("toggle", handleToggle);
    };
  }, []);

  const handleTriggerClick = (event: React.MouseEvent) => {
    trigger.props.onClick?.(event);

    const popover = popoverContainerRef.current;
    if (!popover) {
      return;
    }

    if (popover.matches(":popover-open")) {
      popover.hidePopover();
    } else {
      popover.showPopover();
    }

    setIsOpen((prev) => !prev);
  };

  /**
   * Styles
   */
  const classList = classNames("popover", className);

  const fallbackTriggerProps: TriggerInteractionProps = {
    role: trigger?.props.role ?? "button",
    tabIndex: trigger?.props.tabIndex ?? 0,
    onClick: handleTriggerClick,
  };

  return (
    <div className={classList} {...rest} ref={popoverWrapperRef}>
      <div className="popover-trigger">
        {React.cloneElement(trigger, {
          popoverTarget,
          popoverTargetAction: "toggle",
          "aria-haspopup": "menu",
          "aria-expanded": isOpen,
          "aria-controls": popoverTarget,
          style: { ...trigger?.props?.style, anchorName },
          ...(!isInteractive(trigger) ? fallbackTriggerProps : undefined),
        })}
      </div>

      <div
        id={popoverTarget}
        className="popover-container"
        popover="manual"
        ref={popoverContainerRef}
        style={{ positionAnchor: anchorName }}
      >
        <ul className="popover-item-list">{children}</ul>
      </div>
    </div>
  );
}

export default PopoverContainer;
