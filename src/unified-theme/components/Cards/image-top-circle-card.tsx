import { PropsWithChildren } from "react";
import { Card } from "../ui/card.js";
import { cn } from "../../lib/utils.js";
import SanitizedContent from "../SanitizeHTML/index.js";

export type ImageTopCardProps = {
  image: string;
  imageAlt: string;
  svgIcon?: string; // Optional SVG icon
  className?: string;
  iconStyle?: React.CSSProperties; // Optional style prop
} & PropsWithChildren;

export function ImageTopCirlceCard({
  image,
  imageAlt,
  children,
  className = "",
  iconStyle,
  svgIcon,
}: ImageTopCardProps) {
  return (
    <Card className=" relative  rounded-2xl mt-16 pt-16 border-0 shadow-2xl h-full">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        {svgIcon && svgIcon !== "" ? (
          <div
            className={cn(
              "object-cover rounded-full h-24 w-24 border-4 border-white shadow-lg",
              className
            )}
            style={iconStyle}
          >
            <SanitizedContent content={svgIcon} />
          </div>
        ) : (
          <img
            src={image}
            alt={imageAlt}
            className={cn(
              "object-cover rounded-full h-24 w-24 border-4 border-white shadow-lg",
              className
            )}
            style={iconStyle}
          />
        )}
      </div>

      <div className=" flex flex-col  flex-grow"> {children}</div>
    </Card>
  );
}
