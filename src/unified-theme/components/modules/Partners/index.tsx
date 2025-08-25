import { ModuleMeta } from "../../types/modules.js";
import {
  ChoiceField,
  ImageField,
  ImageFieldType,
  ModuleFields,
  RepeatedFieldGroup,
} from "@hubspot/cms-components/fields";

export type PartnersModuleProps = {
  fieldValues: {
    type: "platinum" | "gold" | "silver" | "bronze";
    partners: {
      logo: ImageFieldType["default"];
    }[];
  };
};

export function Component({ fieldValues }: PartnersModuleProps) {
  const { type, partners } = fieldValues;
  return (
    <div className="partners flex flex-col items-center gap-4">
      <h3 className="text-lg font-semibold">{type}</h3>
      <div className=" flex flex-wrap gap-4 justify-center items-center">
        {partners.map((partner, index) => (
          <div key={index} className=" bg-white rounded-lg p-4">
            <img
              src={partner.logo.src}
              alt={partner.logo.alt}
              width={partner.logo.width}
              height={partner.logo.height}
              loading={
                partner.logo.loading !== "disabled"
                  ? partner.logo.loading
                  : "eager"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <ChoiceField
      label={"Partner Type"}
      name={"type"}
      choices={[
        ["Platinum", "Platinum"],
        ["Gold", "Gold"],
        ["Silver", "Silver"],
        ["Bronze", "Bronze"],
      ]}
    />
    <RepeatedFieldGroup
      name="partners"
      label="Partners"
      occurrence={{
        min: 1,
        max: 20,
        default: 1,
      }}
    >
      <ImageField
        label={"Partner Logo"}
        name={"logo"}
        required={false}
        locked={false}
        responsive={true}
        resizable={true}
        showLoading={false}
        default={{
          size_type: "exact",
          src: "",
          alt: "image-alt-text",
          loading: "lazy",
          width: 128,
          height: 128,
          max_width: 128,
          max_height: 128,
        }}
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);
export const meta: ModuleMeta = {
  label: "Partners Section",
  content_types: ["SITE_PAGE", "LANDING_PAGE"],
  icon: "",
  categories: [],
};
