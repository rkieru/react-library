import PopoverContainer from "./popover-container";
import PopoverItem from "./popover-item";

import type { PopoverProps, PopoverItemProps } from "./models";

const Popover = Object.assign(PopoverContainer, {
  Item: PopoverItem,
});

(Popover as React.FC<PopoverProps>).displayName = "Popover";
(Popover.Item as React.FC<PopoverItemProps>).displayName = "Popover.Item";

export default Popover;
