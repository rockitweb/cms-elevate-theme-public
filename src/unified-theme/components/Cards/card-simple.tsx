import { title } from "process";
import { Button } from "../ui/button.js";
import {
  Card,
} from "../ui/card.js";

export function CardSimple({ children }: { children: React.ReactNode }) {
  return (
    <Card className="relative overflow-hidden rounded-2xl  justify-end text-white min-h-[500px]">
      {children}
    </Card>
  );
}
