import {
  TextFieldType,
  LinkFieldType,
  BooleanFieldType,
  IconFieldType,
} from '@hubspot/cms-components/fields';
import { ButtonStyleType } from '../field-types.js';

export type ButtonContentType = {
  buttonContentText: TextFieldType['default'];
  buttonContentLink: LinkFieldType['default'];
  buttonContentShowIcon: BooleanFieldType['default'];
  buttonStyleVariant: ButtonStyleType;
  buttonContentIcon?: IconFieldType['default'];
  buttonContentIconPosition?: 'left' | 'right';
};
