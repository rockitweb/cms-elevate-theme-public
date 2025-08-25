import {
  AlignmentFieldType,
  TextFieldType,
} from "@hubspot/cms-components/fields";
import { ModuleMeta } from "../../types/modules.js";
import buttonIconSvg from "./assets/button.svg";
import { ButtonContentType } from "./ButtonContent/types.js";
import { ButtonStyleFieldLibraryType } from "./ButtonStyle/types.js";
import { StandardSizeType } from "../../types/fields.js";
import { Button } from "../../ui/button.js";
import {
  getLinkFieldHref,
  getLinkFieldTarget,
} from "../../utils/content-fields.js";

type ButtonProps = {
  groupButtons: ButtonContentType[];
  buttonAlignment: AlignmentFieldType["default"];
  groupAriaLabels: GroupAriaLabels;
};

type GroupAriaLabels = {
  ariaLabel_external: TextFieldType["default"];
  ariaLabel_content: TextFieldType["default"];
  ariaLabel_file: TextFieldType["default"];
  ariaLabel_email: TextFieldType["default"];
  ariaLabel_blog: TextFieldType["default"];
  ariaLabel_payment: TextFieldType["default"];
  ariaLabel_default: TextFieldType["default"];
};

export function Component(props: ButtonProps) {
  const { groupButtons, buttonAlignment } = props;
  //console.log('Button component loaded', props);

  //we will quickly map the  props.groupStyle.alignment.horizontal_align to tailwind classes for flex layout

  //this is a simple example, you can expand it to include more complex styles

  const horizontalAlign = {
    LEFT: "justify-start",
    CENTER: "justify-center",
    RIGHT: "justify-end",
  };
  const horizontalAlignClass =
    horizontalAlign[buttonAlignment.horizontal_align] || "justify-center";
  const verticalAlign = {
    TOP: "items-start",
    MIDDLE: "items-center",
    BOTTOM: "items-end",
  };
  const verticalAlignClass =
    verticalAlign[buttonAlignment.vertical_align] || "items-center";
  return (
    <div className={`flex gap-3 ${horizontalAlignClass} ${verticalAlignClass}`}>
      {groupButtons.map((button, index) => {
        //console.log('Rendering button', button);

        return (
          <Button
            key={index}
            asChild={true}
            variant={button.buttonStyleVariant}
          >
            <a
              href={getLinkFieldHref(button.buttonContentLink)}
              target={getLinkFieldTarget(button.buttonContentLink)}
            >
              {button.buttonContentText}
            </a>
          </Button>
        );
      })}
    </div>
  );
}

export { fields } from "./fields.js";

export const meta: ModuleMeta = {
  label: "Button",
  content_types: [
    "BLOG_LISTING",
    "BLOG_POST",
    "SITE_PAGE",
    "LANDING_PAGE",
    "CASE_STUDY",
  ],
  icon: buttonIconSvg,
  categories: ["forms_and_buttons"],
};

export const defaultModuleConfig = {
  label: "Button NIBA",
};
