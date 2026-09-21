type NavigationContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "full" | "inset";
  color?: "primary" | "support" | "accent" | "neutral";
  size?: "default" | "small" | "large";
  sticky?: boolean;
  menu?: boolean;
};

type NavigationMenuProps = React.HTMLAttributes<HTMLElement> & {};

export type {
  NavigationContainerProps,
  NavigationMenuProps,
  NavigationContainerProps as NavigationProps,
};
