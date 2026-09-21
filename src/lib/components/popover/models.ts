import type React from "react";

type PopoverItemProps = React.HTMLAttributes<HTMLLIElement> & {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  to?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  value?: React.ButtonHTMLAttributes<HTMLButtonElement>["value"];
};

type PopoverItemElement = React.ReactElement<PopoverItemProps>;

type PopoverProps = React.HTMLAttributes<HTMLDivElement | HTMLLIElement> & {
  trigger: React.ReactElement<any>;
  children: PopoverItemElement | Array<PopoverItemElement>;
  nested?: boolean;
};

type PopoverTriggerElementProps = {
  popoverTarget?: string;
  popoverTargetAction?: string;
  "aria-haspopup"?: boolean | "dialog" | "menu" | "listbox" | "tree" | "grid";
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
  style?: React.CSSProperties;
};

export type { PopoverItemProps, PopoverProps, PopoverTriggerElementProps };
