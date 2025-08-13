import { useState } from "react";
import { Staff } from "../types/staff.js";
import { Button } from "../ui/button.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.js";
import SanitizedContent from "../SanitizeHTML/index.js";

export function StaffCardPopUp({ staff }: { staff: Staff }) {
  const [open, setOpen] = useState(false);

  if (!staff.bio) {
    return null; // If no bio, do not render the popup
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">Read More</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div>{}</div>
          </DialogTitle>
          <DialogDescription>
            <SanitizedContent content={staff.bio} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
export default StaffCardPopUp;
