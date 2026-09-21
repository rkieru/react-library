type ChevronIconProps = {
  direction?: "down" | "right";
  size?: number;
  strokeWidth?: number;
} & React.SVGProps<SVGSVGElement>;

function ChevronIcon({
  direction = "down",
  size = 24,
  strokeWidth = 2,
  ...props
}: ChevronIconProps) {
  const chevronPath = {
    down: "M6 9l6 6 6-6",
    right: "M9 6l6 6-6 6",
  };

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
      <path d={chevronPath[direction]} />
    </svg>
  );
}

export default ChevronIcon;
export type { ChevronIconProps };
