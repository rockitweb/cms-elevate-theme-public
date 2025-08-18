import { useState } from "react";
import { MenuDataType } from "../modules/SiteHeader/types.js";
import { DesktopMenu } from "./desktop-menu.js";
import HamburgerButton from "./hamburger-button.js";
import { MobileMenu } from "./mobile-menu.js";

type MainMenuProps = {
  navItems: MenuDataType[];
  megaMenuItems?: MenuDataType[];
  logo: any;
};

export function MainMenu({ navItems, megaMenuItems, logo }: MainMenuProps) {
  const [open, setOpen] = useState(false);
  console.log("MainMenu props:", { navItems, megaMenuItems });
  return (
    <div className="flex flex-col bg-none">
      <div className="flex items-center justify-between relative bg-white ">
        <div className="flex items-center justify-between relative bg-white max-w-[1400px] w-full mx-auto  ">
          <img src={logo.src} alt={logo.alt} className=" h-[50px]" />
          <HamburgerButton onClick={() => setOpen(!open)} isOpen={open} />
        </div>
      </div>
      {/* Mobile menu visible only on small screens and only if open */}
      {open && (
        <div className="md:hidden">
          <MobileMenu navItems={navItems} />
        </div>
      )}

      {/* Desktop menu visible only on md+ screens and only if open */}
      {open && (
        <div className="hidden md:block w-full max-w-[1400px] mx-auto">
          <DesktopMenu navItems={navItems} megaMenuItems={megaMenuItems} />
        </div>
      )}
    </div>
  );
}

export default MainMenu;
