import {
  ModuleFields,
  MenuField,
  FieldGroup,
  AlignmentField,
  ColorField,
  LogoField,
  TextField,
  BooleanField,
  AdvancedVisibility,
  IconField,
  RepeatedFieldGroup,
  ImageField,
} from "@hubspot/cms-components/fields";
import { ButtonContent, ButtonStyle } from "../../fieldLibrary/index.js";
import { limitedColorDefaults } from "../../utils/theme-color-sets.js";

const showButton = {
  controlling_field_path: "groupButton.showButton",
  controlling_value_regex: "true",
  operator: "EQUAL",
} as const;

const advancedShowButton: AdvancedVisibility = {
  boolean_operator: "OR",
  criteria: [showButton],
} as const;

const limitedOptionsColorsSet = [
  ...limitedColorDefaults.themeSectionTextColors,
  ...limitedColorDefaults.themeColors,
];

export const fields = (
  <ModuleFields>
    <FieldGroup label="Logo" name="groupLogo" display="inline">
      <LogoField label="Logo" name="logo" showLoading={false} />
    </FieldGroup>
    <FieldGroup label="Navigation" name="groupNavigation" display="inline">
      <MenuField label="Menu" name="menu" default="Primary Menu" />
      <MenuField label="Mega Menu" name="megaMenu" default="Mega Menu" />
      <MenuField
        label="Top Bar Menu"
        name="topBarMenu"
        default="Top Bar Menu"
      />
    </FieldGroup>
    <FieldGroup label="Button" name="groupButton" display="inline">
      <BooleanField
        label="Show button"
        name="showButton"
        display="toggle"
        default={true}
      />
      <ButtonContent
        textDefault="Get started"
        linkDefault={{
          open_in_new_tab: false,
        }}
        iconPositionDefault="right"
        textVisibility={advancedShowButton}
        linkVisibility={advancedShowButton}
      />
    </FieldGroup>
    <FieldGroup label="Default content" name="defaultContent" locked={true}>
      <TextField
        label="Logo link aria text"
        name="logoLinkAriaText"
        default="Homepage"
        locked={true}
      />
      <TextField
        label="Lang switcher select text"
        name="languageSwitcherSelectText"
        default="Select a language"
        locked={true}
      />
      <TextField
        label="Placeholder title"
        name="placeholderTitle"
        default="No menu selected"
      />
      <TextField
        label="Placeholder description"
        name="placeholderDescription"
        default="Select an existing menu from the sidebar, or create a new one by navigating to the Navigation Menus tool"
      />
    </FieldGroup>
    <IconField
      label="Language switcher icon"
      name="globe_icon"
      iconSet="fontawesome-6.4.2"
      default={{
        name: "earth-americas",
      }}
      required={true}
      locked={true}
    />
    <RepeatedFieldGroup
      name="topBarImages"
      label="Top Bar Images"
      occurrence={{
        min: 1,
        max: 2,
        default: 2,
      }}
      default={[
        {
          logoImage: {
            src: "https://441977205.fs1.hubspotusercontent-ap1.net/hubfs/441977205/need%20a%20broker%20logo.svg",
          },
        },
        {
          logoImage: {
            src: "https://441977205.fs1.hubspotusercontent-ap1.net/hubfs/441977205/insure%20your%20future%20logo.svg",
          },
        },
      ]}
    >
      <ImageField label="Logo Image" name="logoImage" required={true} />
    </RepeatedFieldGroup>

    <FieldGroup label="Styles" name="styles" tab="STYLE">
      <FieldGroup label="Menu" name="groupMenu" display="inline">
        <ColorField
          label="Text color (default)"
          name="menuTextColor"
          helpText="Controls the color of text in the navigation bar. Also controls the color of the hamburger menu."
          visibility={{
            hidden_subfields: {
              opacity: true,
            },
          }}
          limitedOptions={limitedOptionsColorsSet}
          default={{ color: "#09152B" }}
        />
        <ColorField
          label="Text color (hover)"
          name="menuTextHoverColor"
          visibility={{
            hidden_subfields: {
              opacity: true,
            },
          }}
          limitedOptions={limitedOptionsColorsSet}
          inheritedValuePropertyValuePaths={{
            color: "module.styles.groupMenu.menuTextColor.color",
          }}
        />
        <ColorField
          label="Accent color"
          name="menuAccentColor"
          helpText="Controls the color of menu item hover states and the border color of flyout menus."
          visibility={{
            hidden_subfields: {
              opacity: true,
            },
          }}
          limitedOptions={limitedOptionsColorsSet}
          default={{ color: "#F7F9FC" }}
        />
        <ColorField
          label="Background color"
          name="menuBackgroundColor"
          visibility={{
            hidden_subfields: {
              opacity: true,
            },
          }}
          limitedOptions={limitedColorDefaults.themeSectionBackgroundColors}
          default={{ color: "#ffffff" }}
        />
        <AlignmentField
          label="Horizontal alignment"
          name="menuAlignment"
          required={true}
          alignmentDirection="HORIZONTAL"
          default={{ horizontal_align: "CENTER" }}
        />
      </FieldGroup>
      <FieldGroup label="Button" name="groupButton" display="inline">
        <ButtonStyle
          buttonStyleDefault="primary"
          buttonSizeDefault="medium"
          buttonSizeVisibility={advancedShowButton}
          buttonStyleVisibility={advancedShowButton}
        />
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);
