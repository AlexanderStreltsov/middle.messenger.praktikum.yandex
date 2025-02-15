import type { ButtonTypes, InputNames, InputTypes } from '../constants';

export interface ButtonProps {
  label: string;
  type: ButtonTypes;
}

export interface InputProps {
  label: string;
  type: InputTypes;
  name: InputNames;
}
