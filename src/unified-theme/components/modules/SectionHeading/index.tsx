import SanitizedContent from "../../SanitizeHTML/index.js";
import { ModuleMeta } from "../../types/modules.js";
import {
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
} from "@hubspot/cms-components/fields";
import "../../../assets/_hs/css/tailwind.hubl.css";
export type SectionHeadingProps = {
  fieldValues: {
    title: string;
    message: string;
  };
};

export function Component({ fieldValues }: SectionHeadingProps) {
  //console.log('Section Heading fieldValues', fieldValues);
  return (
    <div className="flex flex-col items-center  text-center gap-2 font-display">
      <h2 className="text-[24px]/[24px]! m-0! text-niba-blue font-black line">
        <SanitizedContent content={fieldValues.title} />
      </h2>
      <p className="text-[20px]! font-light!">
        <SanitizedContent content={fieldValues.message} />
      </p>
    </div>
  );
}
export const fields = (
  <ModuleFields>
    <RichTextField
      name="title"
      label="Title"
      required={true}
      locked={false}
      default={"Section Heading"}
    />
    <RichTextField
      name="message"
      label="Message"
      required={false}
      locked={false}
      default={"Add a subheading or message here."}
    />
  </ModuleFields>
);

export const meta: ModuleMeta = {
  label: "NIBA Heading",
  content_types: ["SITE_PAGE", "LANDING_PAGE"],
  icon: "",
  categories: [],
};
