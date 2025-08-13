import { MenuDataType } from "../modules/SiteHeader/types.js";

type MobileMenuProps = {
  navItems: MenuDataType[];
};

export function MobileMenu({ navItems }: MobileMenuProps = { navItems: [] }) {
  return (
    <div>
      {/* Mobile menu content goes here */}
      <h1>Mobile Menu</h1>
    </div>
  );
}
