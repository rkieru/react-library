import NavigationContainer from "./navigation-container";
import NavigationMenu from "./navigation-menu";

import type { NavigationProps, NavigationMenuProps } from "./models";

const Navigation = Object.assign(NavigationContainer, {
  Menu: NavigationMenu,
});

(Navigation as React.FC<NavigationProps>).displayName = "Navigation";
(Navigation.Menu as React.FC<NavigationMenuProps>).displayName =
  "Navigation.Menu";

export default Navigation;
export type { NavigationProps };
