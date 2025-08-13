import { MenuDataType } from "../modules/SiteHeader/types.js";

type DesktopMenuProps = {
  navItems: MenuDataType[];
};

export function DesktopMenu({ navItems }: DesktopMenuProps = { navItems: [] }) {
  return (
    <div>
      {/* Desktop menu content goes here */}
      <h1>Desktop Menu</h1>
    </div>
  );
}
