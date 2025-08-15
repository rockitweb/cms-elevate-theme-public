import clsx from "clsx";
import SanitizedContent from "../../../components/SanitizeHTML/index.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card.js";
import { SemanticCard } from "@/components/Cards/sementic-card.js";

type IconCardProps = {
  icon: string;
  heading: string;
  message: string;
  rightBorder: boolean;
};

export function IconCard({
  icon,
  heading,
  message,
  rightBorder,
}: IconCardProps) {
  const borderCss = clsx(
    "border-r-white border-0",
    rightBorder && "border-r-2",
  );

  return (
    <Card
      className={`gap-2 bg-transparent text-white py-0 text-center p-5 shadow-none rounded-none flex flex-col items-center justify-center ${borderCss}`}
    >
      <CardHeader className="w-full flex flex-col items-center justify-center">
        <div className="w-[80px] ">
          <SanitizedContent content={icon} />
        </div>
        <CardTitle className="text-[20px]">{heading}</CardTitle>
      </CardHeader>
      <CardContent className="text-[15px]">{message}</CardContent>
    </Card>
  );
}
