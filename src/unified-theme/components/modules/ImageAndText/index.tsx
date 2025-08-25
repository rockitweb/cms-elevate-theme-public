import { ModuleMeta } from '../../types/modules.js';
import { RichText } from '@hubspot/cms-components';
import HeadingComponent from '../../HeadingComponent/index.js';
import { Button } from '../../ButtonComponent/index.js';
import { ImageFieldType, BooleanFieldType, AlignmentFieldType } from '@hubspot/cms-components/fields';
import { ElementPositionType, SectionVariantType } from '../../types/fields.js';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.js';
import { getAlignmentFieldCss } from '../../utils/style-fields.js';
import styles from './image-and-text.module.css';
import imageAndTextIconSvg from './assets/image.svg';
import { ButtonContentType } from '../../fieldLibrary/ButtonContent/types.js';
import { ButtonStyleFieldLibraryType } from '../../fieldLibrary/ButtonStyle/types.js';
import { SectionStyleFieldLibraryType } from '../../fieldLibrary/SectionStyle/types.js';
import { RichTextContentFieldLibraryType } from '../../fieldLibrary/RichTextContent/types.js';
import { HeadingStyleFieldLibraryType } from '../../fieldLibrary/HeadingStyle/types.js';
import { HeadingAndTextFieldLibraryType } from '../../fieldLibrary/HeadingAndText/types.js';
import { sectionColorsMap } from '../../utils/section-color-map.js';
import cx from '../../utils/classnames.js';
import { createComponent } from '../../utils/create-component.js';

// Types

interface GroupButton extends ButtonContentType {
  showButton: BooleanFieldType['default'];
}

type GroupButtonStyle = ButtonStyleFieldLibraryType;

type GroupContentStyle = SectionStyleFieldLibraryType &
  HeadingStyleFieldLibraryType & {
    verticalAlignment: AlignmentFieldType['default'];
  };

type GroupStyle = {
  groupContent: GroupContentStyle;
  groupButton: GroupButtonStyle;
};

type GroupContent = RichTextContentFieldLibraryType & HeadingAndTextFieldLibraryType;

type ImageAndTextProps = {
  groupImage: {
    image?: ImageFieldType['default'];
    imagePosition: ElementPositionType;
  };
  groupContent: GroupContent;
  groupButton: GroupButton;
  groupStyle: GroupStyle;
};

// Image and text component

// Functions to pull in corresponding CSS variables on component based on field values

type CSSPropertiesMap = { [key: string]: string };

function generateColorCssVars(sectionVariantField: SectionVariantType): CSSPropertiesMap {
  return {
    '--hsElevate--imageAndText__textColor': sectionColorsMap[sectionVariantField].textColor,
    '--hsElevate--imageAndText__accentColor': sectionColorsMap[sectionVariantField].accentColor,
    '--hsElevate--blockquote__textColor': sectionColorsMap[sectionVariantField].blockquoteTextColor,
    '--hsElevate--blockquote__backgroundColor': sectionColorsMap[sectionVariantField].blockquoteBackgroundColor,
    '--hsElevate--blockquote__accentColor': sectionColorsMap[sectionVariantField].blockquoteAccentColor,
  };
}

function generateImagePositionCssVars(imagePositionField: ElementPositionType): CSSPropertiesMap {
  const imagePositionMap = {
    left: '0',
    right: '1',
  };

  return {
    '--hsElevate--imageAndText__order': imagePositionMap[imagePositionField],
  };
}

function generateAlignmentCssVars(alignmentField: AlignmentFieldType['default']): CSSPropertiesMap {
  const alignmentCss = getAlignmentFieldCss(alignmentField);

  return {
    '--hsElevate--imageAndText__alignItems': alignmentCss.alignItems || 'center',
  };
}

// Components

const ImageAndText = createComponent('div');
const ImageContainer = createComponent('div');
const Image = createComponent('img');
const ContentContainer = createComponent('div');

export const Component = (props: ImageAndTextProps) => {
  const {
    groupImage: { imagePosition, image },
    groupContent: { headingAndTextHeadingLevel, headingAndTextHeading, richTextContentHTML },
    groupButton: { showButton, buttonContentText: text, buttonContentLink: link, buttonContentShowIcon: showIcon, buttonContentIconPosition: iconPosition },
    groupStyle: {
      groupContent: { sectionStyleVariant, headingStyleVariant, verticalAlignment },
      groupButton: { buttonStyleSize, buttonStyleVariant },
    },
  } = props;

  const buttonHref = getLinkFieldHref(link);
  const buttonRel = getLinkFieldRel(link);
  const buttonTarget = getLinkFieldTarget(link);
  const hasContent = headingAndTextHeading || richTextContentHTML || showButton;

  const cssVarsMap = {
    ...generateImagePositionCssVars(imagePosition),
    ...generateColorCssVars(sectionStyleVariant),
    ...generateAlignmentCssVars(verticalAlignment),
  };

  return (
    <ImageAndText className={cx('hs-elevate-image-and-text', styles['hs-elevate-image-and-text'])} style={cssVarsMap}>
      {image.src && (
        <ImageContainer className={cx('hs-elevate-image-and-text__image-container', styles['hs-elevate-image-and-text__image-container'])}>
          <Image
            className={cx('hs-elevate-image-and-text__image', styles['hs-elevate-image-and-text__image'])}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={image.loading !== 'disabled' ? image.loading : 'eager'}
          />
        </ImageContainer>
      )}
      {hasContent && (
        <ContentContainer className={cx('hs-elevate-image-and-text__content-container', styles['hs-elevate-image-and-text__content-container'])}>
          {headingAndTextHeading && (
            <HeadingComponent
              additionalClassArray={['hs-elevate-image-and-text__title']}
              headingLevel={headingAndTextHeadingLevel}
              headingStyleVariant={headingStyleVariant}
              heading={headingAndTextHeading}
            />
          )}
          {richTextContentHTML && <RichText className="hs-elevate-image-and-text__body" fieldPath="groupContent.richTextContentHTML" />}
          {showButton && (
            <Button
              additionalClassArray={['hs-elevate-image-and-text__button']}
              buttonSize={buttonStyleSize}
              buttonStyle={buttonStyleVariant}
              href={buttonHref}
              rel={buttonRel}
              target={buttonTarget}
              showIcon={showIcon}
              iconFieldPath="groupButton.buttonContentIcon"
              iconPosition={iconPosition}
            >
              {text}
            </Button>
          )}
        </ContentContainer>
      )}
    </ImageAndText>
  );
};

export { fields } from './fields.js';

export const meta: ModuleMeta = {
  label: 'Image and text',
  content_types: ['SITE_PAGE', 'LANDING_PAGE'],
  icon: imageAndTextIconSvg,
  categories: ['design'],
};

export const defaultModuleConfig = {
  moduleName: 'elevate/components/modules/image_and_text',
  version: 0,
  themeModule: true,
};
