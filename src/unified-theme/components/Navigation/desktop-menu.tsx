import { MenuDataType } from "../modules/SiteHeader/types.js";
import { Button } from "../ui/button.js";

type DesktopMenuProps = {
  navItems: MenuDataType[];
  megaMenuItems?: MenuDataType[];
};

export function DesktopMenu(
  { navItems, megaMenuItems }: DesktopMenuProps = { navItems: [] },
) {
  return (
    <nav className="flex ">
      {/* Desktop menu content goes here */}
      <div className="flex w-1/3">
        <ul className="flex flex-col h-full justify-between align-start ">
          {navItems.map((item) => (
            <li key={item.url} className=" font-bold">
              <Button
                key={item.url}
                variant="link"
                size="sm"
                asChild
                className="text-black p-0 w-fit text-lg"
              >
                <a href={item.url}>{item.label}</a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      {/* Mega menu content if available in a 3 column grid */}
      {megaMenuItems && megaMenuItems.length > 0 && (
        <div className="flex w-2/3">
          <ul className="grid grid-cols-3 gap-4 gap-y-8 ">
            {megaMenuItems.map((item) => (
              <li className="flex flex-col" key={item.url}>
                <div
                  className="text-lg! font-semibold text-niba-blue"
                  key={item.url}
                >
                  {item.label}
                </div>
                <SubMenus navItems={item.children} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function SubMenus({ navItems }: { navItems: MenuDataType[] }) {
  return (
    <ul className="flex flex-col items-start, justify-center">
      {navItems.map((item) => (
        <Button
          key={item.url}
          variant="link"
          size="sm"
          asChild
          className="text-black p-0 w-fit font-normal"
        >
          <a href={item.url}>{item.label}</a>
        </Button>
      ))}
    </ul>
  );
}
