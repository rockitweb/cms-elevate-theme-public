import { PropsWithChildren, useState } from "react";
import { GroupButton, MenuDataType } from "../modules/SiteHeader/types.js";
import { DesktopMenu } from "./desktop-menu.js";
import HamburgerButton from "./hamburger-button.js";
import { MobileMenu } from "./mobile-menu.js";
import { TopBar } from "./top-bar.js";
import { ImageFieldType } from "@hubspot/cms-components/fields";
import { Button } from "../ui/button.js";
import {
  getLinkFieldRel,
  getLinkFieldTarget,
  getLinkFieldHref,
} from "../utils/content-fields.js";

type MainMenuProps = {
  navItems: MenuDataType[];
  megaMenuItems?: MenuDataType[];
  topBarMenuItems?: MenuDataType[];
  logo: any;
  topBarImages: { logoImage: ImageFieldType["default"] }[];
  buttonGroup: GroupButton;
};

export function MainMenu({
  navItems,
  megaMenuItems,
  topBarMenuItems,
  logo,
  topBarImages,
  buttonGroup,
}: MainMenuProps) {
  const [open, setOpen] = useState(false);
  console.log("MainMenu props:", buttonGroup);
  const {
    showButton,
    buttonContentText: buttonText,
    buttonContentLink: buttonLink,
    buttonContentShowIcon: showIcon,
    buttonContentIconPosition: iconPosition,
  } = buttonGroup;
  return (
    <div className="flex flex-col bg-none relative">
      <TopBar menuItems={topBarMenuItems} images={topBarImages} />
      <div className="flex items-center justify-between bg-white py-6 ">
        <div className="flex items-center justify-between  bg-white max-w-[1400px] w-full mx-auto  ">
          <img src={logo.src} alt={logo.alt} className=" h-[50px]" />
          <div className="flex gap-5 items-center">
            <HamburgerButton onClick={() => setOpen(!open)} isOpen={open} />
            <div>
              {showButton && (
                <Button variant="orange" asChild>
                  <a
                    rel={getLinkFieldRel(buttonLink)}
                    target={getLinkFieldTarget(buttonLink)}
                    href={getLinkFieldHref(buttonLink)}
                  >
                    {buttonText}
                  </a>
                </Button>
              )}
            </div>
          </div>
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
        <div className=" px-10 py-10 hidden md:block w-full max-w-[1400px] mx-auto absolute left-1/2 -translate-x-1/2 top-[100%] z-[10000] bg-white/70 backdrop-blur-sm">
          <DesktopMenu navItems={navItems} megaMenuItems={megaMenuItems} />
        </div>
      )}
    </div>
  );
}

export default MainMenu;
