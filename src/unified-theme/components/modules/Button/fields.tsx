import {
  ModuleFields,
  RepeatedFieldGroup,
  TextField,
  FieldGroup,
  AlignmentField,
} from '@hubspot/cms-components/fields';
import ButtonContent from './ButtonContent/index.js';
import ButtonStyle from './ButtonStyle/index.js';

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      label="Buttons"
      name="groupButtons"
      occurrence={{
        min: 1,
        max: 2,
        default: 1,
      }}
      default={[
        {
          buttonContentText: 'Learn more',
          buttonContentLink: {
            open_in_new_tab: true,
          },
          buttonStyleVariant: 'default',
          buttonStyleSize: 'medium',
          buttonContentShowIcon: false,
          buttonContentIcon: {
            name: 'arrow-right',
          },
          buttonContentIconPosition: 'right',
        },
      ]}
    >
      <ButtonContent
        textDefault="Learn more"
        linkDefault={{
          open_in_new_tab: true,
        }}
        styleDefault={'default'}
        iconPositionDefault="left"
      />
    </RepeatedFieldGroup>
    <AlignmentField
      name="buttonAlignment"
      label="Position Buttons"
      helpText="Position the buttons within their container."
      required={false}
      default={{
        horizontal_align: 'CENTER',
        vertical_align: 'MIDDLE',
      }}
    />
    <FieldGroup label="Accessibility" name="groupAriaLabels" locked={true}>
      <TextField
        label="Aria label for external link"
        name="ariaLabel_external"
        default="Open external link"
      />
      <TextField
        label="Aria label for content link"
        name="ariaLabel_content"
        default="Open content link"
      />
      <TextField
        label="Aria label for file link"
        name="ariaLabel_file"
        default="Open file link"
      />
      <TextField
        label="Aria label for email link"
        name="ariaLabel_email"
        default="Open email link"
      />
      <TextField
        label="Aria label for blog link"
        name="ariaLabel_blog"
        default="Open blog link"
      />
      <TextField
        label="Aria label for payment link"
        name="ariaLabel_payment"
        default="Open payment link"
      />
      <TextField
        label="Default aria label"
        name="ariaLabel_default"
        default="Link not set, button inactive"
      />
    </FieldGroup>
  </ModuleFields>
);
