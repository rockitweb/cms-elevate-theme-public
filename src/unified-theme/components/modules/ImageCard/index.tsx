import {
  BackgroundImageField,
  BooleanField,
  ChoiceField,
  ModuleFields,
  PageField,
  RepeatedFieldGroup,
  RichTextField,
  TextField,
} from "@hubspot/cms-components/fields";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card.js";
import { HsBackgroundImageField } from "../../types/hs-field-types.js";

import { Button } from "../../ui/button.js";
import SanitizeHtml from "../../SanitizeHTML/index.js";

export type ImageCardModuleProps = {
  image: HsBackgroundImageField;
  title: string;
  message: any;
  buttons?: {
    buttonLabel: string;
    page: any;
    variant:
      | "link"
      | "default"
      | "secondary"
      | "outline"
      | "destructive"
      | "ghost"
      | null
      | undefined;
  }[];
};
export function Component({
  image,
  title,
  message,
  buttons,
}: ImageCardModuleProps) {
  //console.log("ImageCardModuleProps", buttons);
  return (
    <Card className="relative overflow-hidden rounded-2xl  justify-end text-white min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image.src})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-white/0"
        aria-hidden="true"
      />

      <div className="relative z-10  h-full flex flex-col justify-between">
        <CardHeader className="">
          <CardTitle className="text-3xl font-bold ">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <SanitizeHtml content={message} />
        </CardContent>
        <CardFooter className="mt-5">
          {buttons &&
            buttons.map((button) => {
              return (
                <Button key={button.buttonLabel} variant={button.variant}>
                  {button.buttonLabel}
                </Button>
              );
            })}
        </CardFooter>
      </div>
    </Card>
  );
}
export const meta = {
  label: "Image Card",
};
export const fields = (
  <ModuleFields>
    <BackgroundImageField
      label="Image"
      name="image"
      required={true}
      default={{
        src: "https://picsum.photos/seed/picsum/200/300",
        background_position: "MIDDLE_CENTER",
        background_size: "COVER",
      }}
    />
    <TextField
      name="title"
      label="Title"
      required={true}
      locked={false}
      default="Brokers"
    />
    <RichTextField
      name="message"
      label="Message"
      required={true}
      locked={false}
      default="We are here to support you and your business,
which is why we deliver a range of services
including mentoring, professional development,
networking opportunities and representation."
    />
    <RepeatedFieldGroup
      name="buttons"
      label="Buttons"
      occurrence={{
        min: 0,
        max: 2,
        default: 1,
      }}
      default={[
        {
          label: "Button Label",
          page: undefined,
          variant: "default",
        },
      ]}
    >
      <TextField
        label="Button Label"
        name="buttonLabel"
        default="Button Label"
        required
      />
      <PageField
        name="page_field"
        label="Page"
        helpText="Pulls data from the selected page."
        required={true}
        locked={false}
        placeholder="Page to pull from"
      />
      <ChoiceField
        name="variant"
        label="Button Variant"
        required={true}
        locked={false}
        multiple={false}
        display="select"
        choices={[
          ["default", "Default"],
          ["primary", "Primary"],
          ["secondary", "Secondary"],
          ["outline", "Outline"],
          ["destructive", "Destructive"],
          ["ghost", "Ghost"],
          ["link", "Link"],
        ]}
        default="default"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);
