import SanitizedContent from "../../../components/SanitizeHTML/index.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card.js";

type IconCardProps = { icon: string; heading: string; message: string };

export function IconCard({ icon, heading, message }: IconCardProps) {
  return (
    <Card className="bg-transparent border-0 text-white text-center shadow-none rounded-lg flex flex-col items-center justify-center">
      <div className="w-[150px] "><SanitizedContent content={icon} /></div>
      <CardHeader className="w-full">
        <CardTitle className="text-4xl">{heading}</CardTitle>
      </CardHeader>
      <CardContent className="text-lg">{message}</CardContent>
    </Card>
  );
}
