import { MenuDataType } from "../modules/SiteHeader/types.js";

type DesktopMenuProps = {
  navItems: MenuDataType[];
  megaMenuItems?: MenuDataType[];
};

export function DesktopMenu(
  { navItems, megaMenuItems }: DesktopMenuProps = { navItems: [] },
) {
  return (
    <nav className="flex  bg-blue-200">
      {/* Desktop menu content goes here */}
      <div className="flex w-1/3">
        <ul className="flex flex-col ">
          {navItems.map((item) => (
            <li key={item.url} className="px-4">
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mega menu content if available in a 3 column grid */}
      {megaMenuItems && megaMenuItems.length > 0 && (
        <div className="flex w-2/3">
          <ul className="grid grid-cols-3 gap-4">
            {megaMenuItems.map((item) => (
              <div className="flex flex-col" key={item.url}>
                <h2 key={item.url}>{item.label}</h2>
                <SubMenus navItems={item.children} />
              </div>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function SubMenus({ navItems }: { navItems: MenuDataType[] }) {
  return (
    <ul className="flex flex-col ">
      {navItems.map((item) => (
        <li key={item.url} className="px-4">
          <a href={item.url}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}
