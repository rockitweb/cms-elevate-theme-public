import { useState } from "react";
import { MenuDataType } from "../modules/SiteHeader/types.js";
import { DesktopMenu } from "./desktop-menu.js";
import HamburgerButton from "./hamburger-button.js";
import { MobileMenu } from "./mobile-menu.js";

type MainMenuProps = {
  navItems: MenuDataType[];
};

export function MainMenu({ navItems }: MainMenuProps = { navItems: [] }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <HamburgerButton onClick={() => setOpen(!open)} isOpen={open} />

      {/* Mobile menu visible only on small screens and only if open */}
      {open && (
        <div className="md:hidden">
          <MobileMenu navItems={navItems} />
        </div>
      )}

      {/* Desktop menu visible only on md+ screens and only if open */}
      {open && (
        <div className="hidden md:block">
          <DesktopMenu navItems={navItems} />
        </div>
      )}
    </div>
  );
}

export default MainMenu;
