// import { dummyTranslations } from '../../LanguageSwitcherComponent/dummyData.js';
import { ModuleMeta } from "../../types/modules.js";

import SiteHeaderSVG from "./assets/Header.svg";
import "../../../styles/localdev.module.css";
import {
  Island,
  SharedIslandState,
  useLanguageVariants,
} from "@hubspot/cms-components";
/*
import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from "../../utils/content-fields.js"; */
import { MenuModulePropTypes, MainNavProps } from "./types.js";

// @ts-expect-error -- ?island not typed
import MainMenu from "../../Navigation/mainMenu.js?island";
import { Section } from "../../section/index.js";
//import { PlaceholderEmptyContent } from '../../PlaceholderComponent/PlaceholderEmptyContent.js';

///import LanguageSwitcherIsland from '../../LanguageSwitcherComponent/index.js?island';

export const Component = (props: MenuModulePropTypes) => {
  const {
    hublData: {
      navigation: { children: navDataArray = [] },
      megaMenu: { children: megaMenuDataArray = [] },
      companyName,
      defaultLogo,
      logoLink,
      isInEditor,
    },
    groupLogo: { logo: logoField },
    defaultContent: {
      logoLinkAriaText,
      languageSwitcherSelectText,
      placeholderTitle,
      placeholderDescription,
    },
    groupButton,
    styles,
  } = props;

  //console.log("Nav Arrays:", navDataArray);
  //const isEditorMode = isInEditor ?? false;

  const {
    showButton,
    buttonContentText: buttonText,
    buttonContentLink: buttonLink,
    buttonContentShowIcon: showIcon,
    buttonContentIconPosition: iconPosition,
  } = groupButton;

  // Temporary until logoField is fixed
  defaultLogo.suppress_company_name = logoField.suppress_company_name;
  const logoToUse = logoField.override_inherited_src ? logoField : defaultLogo;

  console.log("hubl", props.hublData);

  return (
    <section className="bg-none">
      <p>poo</p>
      <Island
        module={MainMenu}
        navItems={navDataArray}
        megaMenuItems={megaMenuDataArray}
        logo={logoToUse}
        clientOnly={true}
      />
    </section>
  );
};

export { fields } from "./fields.js";

export const hublDataTemplate = `
  {% set hublData = {
      "navigation": menu(module.groupNavigation.menu, "site_root"),
      "megaMenu": menu(module.groupNavigation.megaMenu, "site_root"),
      "companyName": branding_company_name,
      "logoLink": brand_settings.logo.link,
      "defaultLogo": {
        "src": brand_settings.logo.src,
        "alt": brand_settings.logo.alt,
        "width": brand_settings.logo.width,
        "height": brand_settings.logo.height
      },
      "isInEditor": is_in_editor
    }
  %}
`;

// NOTE: Source an Icon for this module
export const meta: ModuleMeta = {
  label: "Site header",
  content_types: ["BLOG_LISTING", "BLOG_POST", "SITE_PAGE", "LANDING_PAGE"],
  icon: SiteHeaderSVG,
  categories: ["design"],
};

export const defaultModuleConfig = {
  moduleName: "elevate/components/modules/site_header",
  version: 0,
  themeModule: true,
};
