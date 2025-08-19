import { ImageFieldType } from "@hubspot/cms-components/fields";
import { MenuDataType } from "../MenuComponent/types.js";
import { Button } from "../ui/button.js";

export type TopBarProps = {
  menuItems: MenuDataType[];
  images: { logoImage: ImageFieldType["default"] }[];
};
export function TopBar({ menuItems, images }: TopBarProps) {
  console.log("TopBar props:", { images });
  return (
    <div className="w-full  bg-gradient-to-r from-niba-blue-gradient to-niba-blue-gradient-light relative   ">
      <div className="max-w-[1400px] mx-auto flex justify-between">
        <div className="flex justify-start items-center  w-1/2">
          {images?.map((image) => (
            <div
              key={image.logoImage.src}
              className="h-full first:pl-0  py-2 px-8 flex items-center justify-center border-r-[1px]  border-b-blue-200"
            >
              <img
                src={image.logoImage.src}
                alt={image.logoImage.alt}
                className="h-7  object-contain"
              />
            </div>
          ))}
        </div>

        <ul className="flex items-center justify-between gap-4">
          {menuItems?.map((item) => (
            <li key={item.url} className="text-white font-semibold">
              <Button
                asChild
                variant="link"
                className=" text-white font-normal"
              >
                <a href={item.url} target={item.linkTarget || "_self"}>
                  {item.label}
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="blueGradient" className="absolute right-0 top-0 m-0 h-[120%] rounded-t-none rounded-b-sm">
        Member Login
      </Button>
    </div>
  );
}
