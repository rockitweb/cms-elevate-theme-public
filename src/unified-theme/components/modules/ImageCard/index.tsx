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
  fieldValues: {
    image: HsBackgroundImageField;
    title: string;
    message: any;
    buttons?: {
      buttonLabel: string;
      buttonPage: any;
      buttonVariant:
        | "link"
        | "default"
        | "secondary"
        | "outline"
        | "destructive"
        | "ghost"
        | "white"
        | "orange";
    }[];
  };
};
export function Component({ fieldValues }: ImageCardModuleProps) {
  console.log("Cunt", fieldValues);

  const { image, title, message, buttons } = fieldValues;

  /*   const buttons = [
    { buttonLabel: "Click Me", buttonPage: 23, buttonVariant: "orange" },
  ]; */

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
          <CardTitle className="text-[30px] font-black ">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-[15px]">
          <SanitizeHtml content={message} />
        </CardContent>
        <CardFooter className="mt-5">
          {buttons &&
            buttons.map((button) => {
              return (
                <Button
                  key={button.buttonLabel}
                  variant={
                    button.buttonVariant as
                      | "link"
                      | "default"
                      | "secondary"
                      | "outline"
                      | "destructive"
                      | "ghost"
                      | "white"
                      | "orange"
                  }
                  asChild={true}
                >
                  <a href={(button.buttonPage || 0).toString()}>
                    {" "}
                    {button.buttonLabel}
                  </a>
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
          buttonLabel: "Click Me",
          buttonPage: 23,
          buttonVariant: "secondary",
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
        name="buttonPage"
        label="Page"
        helpText="Pulls data from the selected page."
        required={true}
        locked={false}
        placeholder="0"
        default={23} // Default to a specific page ID
      />
      <ChoiceField
        name="buttonVariant"
        label="Button Variant"
        required={true}
        locked={false}
        multiple={false}
        display="select"
        choices={[
          ["primary", "Primary"],
          ["secondary", "Secondary"],
          ["outline", "Outline"],
          ["destructive", "Destructive"],
          ["ghost", "Ghost"],
          ["link", "Link"],
          ["white", "White"],
          ["orange", "Orange"],
        ]}
        default="primary"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);
