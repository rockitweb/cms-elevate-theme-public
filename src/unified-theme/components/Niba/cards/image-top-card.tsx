import { PropsWithChildren } from "react";
import { Card } from "../../ui/card.js";

export type ImageTopCardProps = {
  image: string;
  imageAlt: string;
} & PropsWithChildren;

export function ImageTopCard({ image, imageAlt, children }: ImageTopCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl pt-0 border-0 shadow-2xl">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className=" flex flex-col justify-evenly flex-grow"> {children}</div>
    </Card>
  );
}
