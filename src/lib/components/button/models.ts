import React from "react";

type ButtonProps = Exclude<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  variant?: "flat" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  color?: "primary" | "support" | "accent" | "neutral";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconEnd?: React.ReactNode;
  label?: React.ReactNode;
  iconPosition?: "start" | "end";
  iconOnly?: boolean;
};

export type { ButtonProps };
