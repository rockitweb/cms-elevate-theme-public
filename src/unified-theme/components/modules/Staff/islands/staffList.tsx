import StaffCard from "../components/staff-card.js";
import { Staff } from "../../../types/staff.js";

export function StaffList({ staff }: { staff: Staff[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {staff.map((member, index) => (
        <li key={index} className="staff-member">
          <StaffCard staff={member} />
        </li>
      ))}
    </ul>
  );
}
export default StaffList