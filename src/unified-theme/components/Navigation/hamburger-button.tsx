import { Button } from "../ui/button.js";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <path d="M4 6h16" />
      </svg>
      Menu
    </Button>
  );
}
