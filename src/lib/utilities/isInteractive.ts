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

  return interactiveElemenents.includes(name);
}

export default isInteractive;
