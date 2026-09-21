type HamburgerMenuIconProps = {
  direction?: "down" | "right";
  size?: number;
  strokeWidth?: number;
} & React.SVGProps<SVGSVGElement>;

function HamburgerMenuIcon({
  direction = "down",
  size = 24,
  strokeWidth = 2,
  ...props
}: HamburgerMenuIconProps) {
  const HamburgerMenuX1 = 4.041;
  const HamburgerMenuX2 = 19.959;

  const HamburgerMenuPath = [
    { y1: 7.384, y2: 7.384 },
    { y1: 12, y2: 12 },
    { y1: 16.616, y2: 16.616 },
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {HamburgerMenuPath.map((coord) => (
        <line
          key={String(coord.y1 + coord.y2)}
          x1={HamburgerMenuX1}
          y1={coord.y1}
          x2={HamburgerMenuX2}
          y2={coord.y2}
        />
      ))}
    </svg>
  );
}

export default HamburgerMenuIcon;
export type { HamburgerMenuIconProps };
