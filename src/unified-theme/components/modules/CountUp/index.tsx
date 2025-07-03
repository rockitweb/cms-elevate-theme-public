import {
  ModuleFields,
  NumberField,
  RepeatedFieldGroup,
  TextField,
} from "@hubspot/cms-components/fields";
import { ModuleMeta } from "../../types/modules.js";

import "../../../styles/localdev.module.css";
import { IconCard } from "../../Niba/cards/icon-card.js";
import { Card, CardContent } from "../../ui/card.js";

type CountUpProps = {
  fieldValues: {
    countValue: number;
    message: string;
  };
};

//helper function to format the number with commas
function formatNumberWithCommas(num: number): string {
  return num.toLocaleString();
}

export function Component({ fieldValues }: CountUpProps) {
  //console.log("Hero Cards fieldValues", fieldValues);
  const { countValue, message } = fieldValues;
  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardContent>
        <div className="flex flex-col justify-center items-center  gap-5 text-center">
          <div className="text-niba-blue text-7xl font-bold">
            {" "}
            {formatNumberWithCommas(countValue)}
          </div>
          <p className="text-niba-blue-light text-3xl">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export const fields = (
  <ModuleFields>
    <NumberField
      name="countValue"
      label="Number"
      required={true}
      locked={false}
      display="slider"
      min={100}
      max={20000}
      step={100}
      prefix=""
      suffix="+"
      default={1000}
      placeholder="1000"
    />

    <TextField label="Message" name="message" default="Cool Things" required />
  </ModuleFields>
);

export const meta: ModuleMeta = {
  label: "Count Up",
  content_types: ["SITE_PAGE", "LANDING_PAGE"],
  icon: "",
  categories: [],
};
