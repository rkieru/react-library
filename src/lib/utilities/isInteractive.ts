import React from "react";

type NamedComponentType =
  | string
  | {
      displayName?: string;
      name?: string;
    };

function isInteractive<T extends Record<string, unknown>>(
  trigger: React.ReactElement<T> | undefined
) {
  const interactiveElemenents = [
    "Button",
    "button",
    "a",
    "NavLink",
    "Link",
    "input",
    "select",
    "textarea",
  ];

  if (!trigger || !React.isValidElement(trigger)) {
    return false;
  }

  const componentType = trigger.type as NamedComponentType;
  const name =
    typeof componentType === "string"
      ? componentType
      : componentType.displayName ?? componentType.name ?? "Unknown";

  if (interactiveElemenents.includes(name)) {
    return true;
  }

  const props = trigger.props as Record<string, unknown>;

  return (
    props.type === "button" ||
    props.type === "submit" ||
    props.type === "reset" ||
    typeof props.onClick === "function" ||
    typeof props.href === "string" ||
    typeof props.role === "string" ||
    typeof props.tabIndex === "number" ||
    typeof props.value !== "undefined"
  );
}

export default isInteractive;
