import { ModuleMeta } from "@/components/types/modules.js";
import { ChoiceField, ModuleFields } from "@hubspot/cms-components/fields";
import { HSStaffQueryResult } from "../../types/staff.js";
import { Island } from "@hubspot/cms-components";
// @ts-expect-error -- ?island not typed
import StaffList from "./islands/staffList.js?island";
export type StaffListProps = {
  dataQueryResult: {
    data: HSStaffQueryResult;
    loading: boolean;
    error: any;
  };
  fieldValues: {
    role: string;
  };
};
export function Component({ fieldValues, dataQueryResult }: StaffListProps) {
  const { role } = fieldValues;
  const staffData = dataQueryResult.data?.HUBDB?.staff_collection?.items || [];

  //filter the staff based on the selected role
  const staff = staffData.filter((member) => member.role.value === role);

  return <Island module={StaffList} staff={staff} clientOnly={true} />;
}
export const fields = (
  <ModuleFields>
    <ChoiceField
      label="Role"
      name="role"
      required={true}
      multiple={false}
      display="select"
      choices={[
        ["board_member", "Board Member"],
        ["team", "Team"],
      ]}
      default={"board_member"}
    />
  </ModuleFields>
);
export const meta: ModuleMeta = {
  label: "Staff List",
  content_types: ["SITE_PAGE", "LANDING_PAGE"],
  icon: "",
  categories: [],
};
export const query = `query StaffQuery {
  HUBDB {
    staff_collection(limit: 50) {
      items {
        bio
        job_title
        name
        photo
        role
      }
    }
  }
}`;
