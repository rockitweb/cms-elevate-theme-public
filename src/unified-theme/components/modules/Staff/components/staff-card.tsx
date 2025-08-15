import SanitizedContent from "../../../SanitizeHTML/index.js";
import { Staff } from "../../../types/staff.js";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card.js";

import { StaffCardPopUp } from "./staff-card-popup.js";
export type StaffCardProps = { staff: Staff };

export function StaffCard({ staff }: StaffCardProps) {
  return (
    <div className="relative group">
      <Card className="overflow-hidden rounded-2xl pt-0 border-0 shadow-2xl h-full transition-all duration-300 cursor-pointer">
        <div className="w-full h-full overflow-hidden  flex-grow">
          <img
            src={staff.photo.url}
            alt={staff.photo.alt}
            loading="lazy"
            className="object-cover object-top pos w-full h-full"
          />
        </div>
        <div className=" flex flex-col">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">
              {staff.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xl font-light text-center">
            <SanitizedContent content={staff.job_title} />
          </CardContent>
        </div>
      </Card>

      {staff && (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
          <div className="absolute z-10 rounded-2xl top-0 left-0 h-full w-full bg-white group-hover:opacity-60 cursor-pointer"></div>

          <div className="z-20">
            <StaffCardPopUp staff={staff} />
          </div>
        </div>
      )}
    </div>
  );
}
export default StaffCard;
