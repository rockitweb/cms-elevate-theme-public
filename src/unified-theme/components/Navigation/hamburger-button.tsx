import { Button } from "../ui/button.js";
import { Menu } from "lucide-react";

type HamburgerButtonProps = {
  onClick: () => void;
  isOpen?: boolean;
};

export default function HamburgerButton({
  onClick,
  isOpen = false,
}: HamburgerButtonProps) {
  return (
    <Button
      aria-description="Toggle navigation menu"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      variant="ghost"
      size="icon"
    >
      <Menu />
      Menu
    </Button>
  );
}
