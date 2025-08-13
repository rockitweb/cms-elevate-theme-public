// import { dummyTranslations } from '../../LanguageSwitcherComponent/dummyData.js';

import "../../../styles/localdev.module.css";
import { ModuleMeta } from "../../types/modules.js";

import SiteHeaderSVG from "./assets/Header.svg";

import { Island } from "@hubspot/cms-components";
import { MenuModulePropTypes } from "./types.js";

// @ts-expect-error -- ?island not typed
import MainMenu from "../../Navigation/mainMenu.js?island";
import { Button } from "../../../components/ui/button.js";
//import { PlaceholderEmptyContent } from '../../PlaceholderComponent/PlaceholderEmptyContent.js';

///import LanguageSwitcherIsland from '../../LanguageSwitcherComponent/index.js?island';

export const Component = (props: MenuModulePropTypes) => {
  const {
    hublData: {
      navigation: { children: navDataArray = [] },
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

  const isEditorMode = isInEditor ?? false;

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

  return (
    <div>
      <div className="flex justify-between items-center">
        <img src={logoToUse.src} alt={logoToUse.alt} className="h-[55px]" />
        <Island module={MainMenu} navItems={navDataArray} clientOnly={true} />
        {showButton && (
          <Button asChild>
            <a href={buttonLink.url.href} aria-label={logoLinkAriaText}>
              {buttonText}
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export { fields } from "./fields.js";

export const hublDataTemplate = `
  {% set hublData = {
      "navigation": menu(module.groupNavigation.menu, "site_root"),
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
